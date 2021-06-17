import { API_CONFIG } from './../../../../config/api.config';
import { CategoriaDTO } from './../../../../models/categoria.dto';
import { CategoriaService } from './../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  providers: [NavParams] //tem q colocar pra funcionar
})
export class CategoriasPage implements OnInit {


  bucketUrl: string = API_CONFIG.bucketAWSUrl;
  categorias: CategoriaDTO[]

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.categoriaService.read().subscribe(categorias => { //metodo pega os produtos do banco de dados
      this.categorias = categorias 
      console.log(categorias)
    })
  }

}
