import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class CidadeService{

    constructor(public http: HttpClient){

    }

    //Requisicao Assincrona -> Observable
    encontrarTodos(estado_id: string): Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`) //acesso ao BackEnd do SpringBoot
    }

    erroTratamento(e: any): Observable<any>{
        console.log('Ocorreu um erro!', true)
        return e;
      }

      

}