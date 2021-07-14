import { CartService } from 'src/services/domain/cart.service';
import { PedidoDTO } from './../../../../models/pedido.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { EnderecoDTO } from './../../../../models/endereco.dto';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { StorageService } from 'src/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-escolher-endereco',
  templateUrl: './escolher-endereco.page.html',
  styleUrls: ['./escolher-endereco.page.scss'],
})
export class EscolherEnderecoPage implements OnInit {

  items : EnderecoDTO[];
  pedido: PedidoDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService,
    public cartService: CartService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {

    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.encontrarPorEmail(localUser.email)
      .subscribe(response => {
        this.items = response['enderecos']; //entre [] evita o erro do compilador na busca do backend

        let cart = this.cartService.getCart();

        this.pedido = {
          cliente: {id: response['id']},
          enderecoEntrega: null,
          pagamento: null,
          itens: cart.itens.map(x => {return {quantidade: x.quantidade, produto: {id: x.produto.id}}}) // percorre as classes cart.ts e cart-item.ts pegando os produtos e convertendo p/ PedidoDTO
        }
      },
      (error) => { //Nao esta funcionando, o Observable error foi descontinuado na versao atual do modulo rxjs
        console.log(error)
        if (error.status == 403) {
          console.log('voltando')
          this.navCtrl.navigateRoot('folder/components/home')
        }
      });
    }
    else {
      this.navCtrl.navigateRoot('folder/components/home')
    }    

  }

  proximaPagina(item: EnderecoDTO){
    this.pedido.enderecoEntrega = {id: item.id}; //retorna o id do cliente, endereco, em vez o objeto completo
    let data = JSON.stringify(this.pedido);
    this.router.navigate(['../pagamento',{data}], {relativeTo: this.route});

  }

}
