import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { ProdutoDTO } from 'src/models/produto.dto';
import { ProdutoService } from 'src/services/domain/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  providers: [NavParams] //tem q colocar para carregar a pagina
})
export class ProdutosPage implements OnInit {

  items: ProdutoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoService: ProdutoService,
    public activateRoute: ActivatedRoute) { }

  ngOnInit() {

    //Recebe os parametros de categoria.page para mostrar os produtos
    let categoria_id = this.activateRoute.snapshot.paramMap.get('data');
    console.log(this.produtoService.encontrarPorCategoria(categoria_id))
    this.produtoService.encontrarPorCategoria(categoria_id)
    .subscribe(response => {
      this.items = response['content'];
    },
    error => {});

  }

  voltar(){
    this.navCtrl.navigateRoot('/folder/components/categorias');
  }

}
