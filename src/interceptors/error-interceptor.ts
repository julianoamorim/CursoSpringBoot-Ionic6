//Classe interceptor para tratamento de erro, copiado do GitHub, nao foi explicado
import { Component, Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable} from "rxjs";
import { catchError } from 'rxjs/operators';
import { StorageService } from "src/services/storage.service";
import { AlertController, NavController } from "@ionic/angular";
import { ProfilePage } from "src/app/folder/components/profile/profile.page";
import { FieldMessage } from "src/models/fieldmessage";
 

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    constructor(
        public storage: StorageService,
        public alertCtrl: AlertController,
        public navCtrl: NavController
        ){}
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(req)
                .pipe(
                    catchError(error => {
                        let errorObj = error;
                        if(errorObj.error ){
 
                           errorObj = errorObj.error;
                        }
                        if(!error.status){
                            error = JSON.parse(error);
                        }
                        //alert("erro inteceptor");
                        console.log(error.status);

                        switch(error.status){
                            case 401:
                                console.log("erro 401")
                                this.handle401();
                                break;

                            case 403: //erro de requisicao do usuario
                                console.log("erro 403")
                                this.handle403();
                                break;
                            
                            case 422: //erro de validacao de token
                                this.handle422(error);
                                break;

                            default:
                                this.handleDefaultError(error);
                        }
                       
                        return Observable.throw(errorObj);
                    })) as any;
    }

    handle403(){
        this.storage.setLocalUser(null) //avisa que o usuario armazenado e invalido e o remove
        this.navCtrl.setDirection('root')
    }

    async handle401(){
        const alert = await this.alertCtrl.create({
            header: 'Erro 401, falha de autenticação',
            message: 'Email ou senha incorretos',
            backdropDismiss: false, // p fechar e necessario clicar na msg
            buttons: ['Ok']
        });
        await alert.present();

        const {role} = await alert.onDidDismiss();
        console.log('Acesso negado',role);
        this.navCtrl.setDirection('root')
    }

    async handle422(erroObj){
        let novoErro = JSON.parse(erroObj.error); //o campo error no objeto error e uma string, necessario transf. em objeto
        console.log(novoErro)
        const alert = await this.alertCtrl.create({
            header: 'Erro 422: Validação',
            message: this.listaErros(novoErro.errors), //pega o  param errors criado em ValidationError.java no BackEnd
            backdropDismiss: false, // p fechar e necessario clicar na msg
            buttons: ['Ok']
        });
        await alert.present();
    }

    async handleDefaultError(erroObj){ //filtra todos os erros HTTP do frontend e exibe um alerta na tela
        const alert = await this.alertCtrl.create({
            header: 'Erro ' +erroObj.status+ ': ' +erroObj.error,
            message: erroObj.message,
            backdropDismiss: false, // p fechar e necessario clicar na msg
            buttons: ['Ok']
        });
        await alert.present();

    }

    private listaErros(messages : FieldMessage[]=[]) : string {
        let s : string = '';
        for (var i=0; i<messages.length; i++) {
            s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message + '</p>';
        }
        return s;
    }
  
} 
 
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};