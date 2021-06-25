import { API_CONFIG } from './../../../../config/api.config';
import { CategoriaDTO } from './../../../../models/categoria.dto';
import { CategoriaService } from '../../../../services/domain/categoria.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss']
})
export class CategoriasPage implements OnInit {


  bucketUrl: string = API_CONFIG.bucketAWSUrl;
  items: CategoriaDTO[]

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public categoriaService: CategoriaService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoriaService.read().subscribe(items => { //metodo pega os produtos do banco de dados
      this.items = items 
      console.log(items)
    })
  }

  //Nao foi facil: passa o id da categoria p a pagina de produto, curso nao funciona
  mostrarProdutos(categoria_id: string){  //pega o id da categoria qdo clicada no frontend
    let data = JSON.stringify(categoria_id);
    this.router.navigate(['../produtos',{data}],{relativeTo: this.route});//Funcão que passa parametros de categorias.page para parametros.page
  }

}
