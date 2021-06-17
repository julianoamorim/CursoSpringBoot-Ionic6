import { CategoriaDTO } from './../models/categoria.dto';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){

    }

    read(): Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`).pipe(
          map( (obj) => obj),
          catchError(e => this.erroTratamento(e))
        );
      }

    //Requisicao Assincrona -> Observable
    encontrarTodos(): Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`) //acesso ao BackEnd do SpringBoot
    }

    erroTratamento(e: any): Observable<any>{
        console.log('Ocorreu um erro!', true)
        return e;
      }

      

}