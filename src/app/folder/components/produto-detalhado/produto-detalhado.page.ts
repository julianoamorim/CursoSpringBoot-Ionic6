import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { API_CONFIG } from 'src/config/api.config';
import { ProdutoDTO } from 'src/models/produto.dto';
import { CartService } from 'src/services/domain/cart.service';
import { ProdutoService } from 'src/services/domain/produto.service';

@Component({
  selector: 'app-produto-detalhado',
  templateUrl: './produto-detalhado.page.html',
  styleUrls: ['./produto-detalhado.page.scss']
})
export class ProdutoDetalhadoPage implements OnInit {

  item: ProdutoDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public produtoService: ProdutoService,
    public activateRoute: ActivatedRoute,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {

    //Recebe os parametros de produtos.page para mostrar o produto detalhado
    let categoria_id = this.activateRoute.snapshot.paramMap.get('data');
    console.log(this.produtoService.encontrarPorId(categoria_id))
    this.produtoService.encontrarPorId(categoria_id)
    .subscribe(response => {
      this.item = response;
      this.carregarImagemUrlSeExistir();
    },
    error => {});

  }

  carregarImagemUrlSeExistir() {
    this.produtoService.getImagemBucked(this.item.id) //pega o id do produto e procura uma imagem com msm id
    .subscribe(response => {
      this.item.imageUrl = `${API_CONFIG.bucketAWSUrl}/prod${this.item.id}.jpg`;
    },
    error => {});
  }

  adicionarAoCarrinho(produto: ProdutoDTO){
    this.cartService.addProduto(produto);
    this.navCtrl.navigateRoot('folder/components/carrinho');
  }



}
