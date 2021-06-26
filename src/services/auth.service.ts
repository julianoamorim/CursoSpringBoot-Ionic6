import { CartService } from 'src/services/domain/cart.service';
import { LocalUser } from 'src/models/local_user';
import { API_CONFIG } from './../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

//Funcao de Autenticacao das credenciais fornecidas no Frontend para o Backend
@Injectable()
export class AuthService{

    jwtHelper : JwtHelperService = new JwtHelperService(); //biblioteca que obtem o email atravez do token no frontend -> necessario instalar npm

    constructor(
        public http: HttpClient,
        public storage: StorageService,
        public cartService: CartService){ }

    autenticado(creds: CredenciaisDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`,
        creds,
        {
            observe: 'response', //obtem acesso ao header
            responseType: 'text' //evitar q exporte como JSON para o Spring
        });
    }

    recarrecarToken(){ 
        return this.http.post(`${API_CONFIG.baseUrl}/auth/refresh_token`,
        {},
        {
            observe: 'response', //obtem acesso ao header
            responseType: 'text' //evitar q exporte como JSON para o Spring
        });
    }

    sucessoLogin(autorizacaoValor: string){
        let toke = autorizacaoValor.substring(7) //Retirar o "Barrier " do token
        let user : LocalUser = {
            token: toke,
            email: this.jwtHelper.decodeToken(toke).sub
        }
        this.storage.setLocalUser(user) //salva o usuario no localStorage do brownser
        this.cartService.criarOuLimparCarrinho(); //limpa o carrinho em um novo Login
    }

    logout(){
        this.storage.setLocalUser(null); //remove as credencias salvas automaticas
    }
}