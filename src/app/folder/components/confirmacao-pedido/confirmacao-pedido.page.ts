import { PedidoService } from './../../../../services/domain/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/services/domain/cliente.service';
import { EnderecoDTO } from './../../../../models/endereco.dto';
import { ClienteDTO } from './../../../../models/cliente.dto';
import { CartService } from './../../../../services/domain/cart.service';
import { PedidoDTO } from './../../../../models/pedido.dto';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { CartItem } from 'src/models/cart-item';

@Component({
  selector: 'app-confirmacao-pedido',
  templateUrl: './confirmacao-pedido.page.html',
  styleUrls: ['./confirmacao-pedido.page.scss'],
})
export class ConfirmacaoPedidoPage implements OnInit {

  pedido: PedidoDTO;
  cartItems: CartItem[];
  cliente: ClienteDTO;
  endereco: EnderecoDTO;
  codPedido: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public clienteService: ClienteService,
    public activateRoute: ActivatedRoute,
    public pedidoService: PedidoService
  ) { 
    this.pedido = JSON.parse(activateRoute.snapshot.paramMap.get('pedido')) //pega o pedido vindo da pagina anterior de pagamento
  }

  ngOnInit() {
    console.log(this.pedido)
    this.cartItems = this.cartService.getCart().itens; //pega os itens de um carrinho ja existente
    this.clienteService.encontrarPorId(this.pedido.cliente.id) //busca o cliente
    .subscribe(resposta => {
      this.cliente = resposta as ClienteDTO;
      this.endereco = this.encontrarEndereco(this.pedido.enderecoEntrega.id, resposta['enderecos'])
    },
    error => {
      this.navCtrl.navigateRoot('/folder/components/home');
    })

  }

  private encontrarEndereco(idd: string, list: EnderecoDTO[]) : EnderecoDTO{
    let posicao = list.findIndex(x => x.id == idd);
    return list[posicao];
  }

  total(){
    return this.cartService.total();
  }

  voltar(){
    this.navCtrl.navigateRoot('/folder/components/carrinho');
  }

  home(){
    this.navCtrl.navigateRoot('/folder/components/categorias');
  }

  finalizarCompra(){ //checkout
    this.pedidoService.inserir(this.pedido)
    .subscribe(resposta => {
      this.cartService.criarOuLimparCarrinho() //limpa o carrinho, pois a compra foi fechada
      this.codPedido = this.encontrarId(resposta.headers.get('location')) //armazena o numero do Id da url do novo pedido salvo 
    },
    error => {
      console.log(error)
      if(error.status == 403){
        this.navCtrl.navigateRoot('/folder/components/home');
      }
    })
  }

  private encontrarId(location: string): string{ //armazena o numero do Id da url do novo pedido salvo
    let posicao = location.lastIndexOf('/'); //encontra a posicao da ultima barra
    return location.substring(posicao + 1, location.length) //encontra a posicao depois da ultima barra
  }



}
