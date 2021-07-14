import { API_CONFIG } from 'src/config/api.config';
import { PedidoDTO } from './../../models/pedido.dto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PedidoService{

    constructor(public http: HttpClient){

    } 

    inserir(obj: PedidoDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/pedidos`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

}