import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs"; //Esse modulo nao consegue pegar o error http da requisicao
import { API_CONFIG } from "src/config/api.config";
import { ClienteDTO } from "src/models/cliente.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class ClienteService{

    constructor(public http: HttpClient, public storage: StorageService){

    }

    encontrarPorEmail(email: string): Observable<ClienteDTO>{

        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`); //pega a url do backend para acessar o login -> Classe ClienteResource.java
    }

    buscarImagemBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketAWSUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'}); //busca a imagem do cliente no Amazon Web Service
    }

    inserir(obj: ClienteDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

}