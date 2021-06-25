import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { API_CONFIG } from 'src/config/api.config';
import { CartItem } from 'src/models/cart-item';
import { CartService } from 'src/services/domain/cart.service';
import { ProdutoService } from 'src/services/domain/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  items : CartItem[];

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public cartService: CartService,
    public produtoService: ProdutoService
  ) { }

  ngOnInit() {
    let cart = this.cartService.getCart(); //pega o carrinho de compras ou cria um
    this.items = cart.itens //NAO TA PEGANDO O ITEM, TA VINDO UM ARRAY VAZIO
    this.carregarImagemUrls();
    console.log(this.items)
  }

  carregarImagemUrls() {
    for (var i=0; i<this.items.length; i++) {
      let item = this.items[i];
      this.produtoService.getImagemPequenaBucked(item.produto.id) //pega o id do produto e procura uma small-image com msm id
        .subscribe(response => {
          item.produto.imageUrl = `${API_CONFIG.bucketAWSUrl}/prod${item.produto.id}-small.jpg`;
        },
        error => {});
    }
  }

}
