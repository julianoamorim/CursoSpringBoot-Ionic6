import { LocalUser } from 'src/models/local_user';
import { API_CONFIG } from './../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { StorageService } from './storage.service';

//Funcao de Autenticacao das credenciais fornecidas no Frontend para o Backend
@Injectable()
export class AuthService{

    constructor(public http: HttpClient, public storage: StorageService){

    }

    autenticado(creds: CredenciaisDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`,
        creds,
        {
            observe: 'response', //obtem acesso ao header
            responseType: 'text' //evitar q exporte como JSON para o Spring
        });
    }

    sucessoLogin(autorizacaoValor: string){
        let token1 = autorizacaoValor.substring(7) //Retirar o "Barrier " do token
        let user : LocalUser = {
            token: token1
        }
        this.storage.setLocalUser(user) //salva o usuario no localStorage do brownser
    }

    logout(){
        this.storage.setLocalUser(null); //remove as credencias salvas automaticas
    }
}