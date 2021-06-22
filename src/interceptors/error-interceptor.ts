//Classe interceptor para tratamento de erro, copiado do GitHub, nao foi explicado
import { Component, Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable} from "rxjs";
import { catchError } from 'rxjs/operators';
import { StorageService } from "src/services/storage.service";
import { AlertController, NavController } from "@ionic/angular";
import { ProfilePage } from "src/app/folder/components/profile/profile.page";
 

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

    async handleDefaultError(erroObj){
        const alert = await this.alertCtrl.create({
            header: 'Erro ' +erroObj.status+ ': ' +erroObj.error,
            message: erroObj.message,
            backdropDismiss: false, // p fechar e necessario clicar na msg
            buttons: ['Ok']
        });
        await alert.present();

    }
  
} 
 
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};