import { Injectable } from "@angular/core";
import { Cart } from "src/models/cart";
import { ProdutoDTO } from "src/models/produto.dto";
import { StorageService } from "../storage.service";


@Injectable()
export class CartService{

    constructor(public storage: StorageService){}

    criarOuLimparCarrinho(): Cart {
        let cart: Cart = {itens: []};
        this.storage.setCart(cart);
        return cart;
    }

    getCart(): Cart{
        let cart: Cart = this.storage.getCart(); //pega o objeto carrinho se existir
        if(cart == null){
            cart = this.criarOuLimparCarrinho(); //cria um carrinho se nao existir
        }
        return cart;
    }

    addProduto(meuProduto: ProdutoDTO): Cart {
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if(position == -1){ // -1: nao foi encontrado o produto
            cart.itens.push({quantidade: 1, produto: meuProduto});
        }
        this.storage.setCart(cart);
        return cart;
    }

}