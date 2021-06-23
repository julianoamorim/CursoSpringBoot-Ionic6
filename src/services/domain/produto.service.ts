import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProdutoDTO } from 'src/models/produto.dto';


@Injectable()
export class ProdutoService{

    constructor(public http: HttpClient){

    }

    encontrarPorId(produto_id: string){
        return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produto_id}`);
    }

    //Requisicao Assincrona -> Observable
    encontrarPorCategoria(categoria_id: string){
        return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}`); //acesso ao BackEnd do SpringBoot
    }

    //Pega a imagem do produto no AWS
    getImagemPequenaBucked(id: string): Observable<any>{
        let url = `${API_CONFIG.bucketAWSUrl}/prod${id}-small.jpg` //padrao de nome das imagens
        return this.http.get(url, {responseType: 'blob'});
    }

    getImagemBucked(id: string): Observable<any>{
        let url = `${API_CONFIG.bucketAWSUrl}/prod${id}.jpg` //padrao de nome das imagens
        return this.http.get(url, {responseType: 'blob'});
    }

}