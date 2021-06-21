
import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable} from "rxjs";
import { StorageService } from "src/services/storage.service";
import { API_CONFIG } from "src/config/api.config";
 

//Classe interceptor para interceptar o token de autenticacao, copiado do GitHub, nao foi explicado
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(public storage: StorageService){

    }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{ //pega o token de autenticacao do backend p/ acessar os dados

        let localUser = this.storage.getLocalUser();
        let N = API_CONFIG.baseUrl.length; //pega o numero de caracteres da url base 
        let requestToAPI = req.url.substring(0,N) == API_CONFIG.baseUrl //recorta a parte inicial da url requisitada e compara com a ur do API_CONFIG


        if(localUser && requestToAPI){
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)}); //clona a requisicao
            return next.handle(authReq)
        }
        else{
            return next.handle(req)
        }  
    }
  
} 
 
export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};