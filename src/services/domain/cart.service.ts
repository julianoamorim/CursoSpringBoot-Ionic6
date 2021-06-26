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
        if(cart === null){ 
            cart = this.criarOuLimparCarrinho(); //cria um carrinho se nao existir
        }
        return cart;
    }

    addProduto(meuProduto: ProdutoDTO): Cart {
        console.log(meuProduto)
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if(position == -1){ // -1: nao foi encontrado o produto
            cart.itens.push({quantidade: 1, produto: meuProduto});
        }
        this.storage.setCart(cart);
        return cart;
    }

    removeProduto(meuProduto: ProdutoDTO): Cart {
        console.log(meuProduto)
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if(position != -1){ // diferente de -1: foi encontrado o produto
            cart.itens.splice(position,1);
        }
        this.storage.setCart(cart);
        console.log(cart)
        return cart;
    }

    increaseQuantity(meuProduto: ProdutoDTO): Cart {
        console.log(meuProduto)
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if(position != -1){ // diferente de -1: foi encontrado o produto
            cart.itens[position].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }

    decreaseQuantity(meuProduto: ProdutoDTO): Cart {
        console.log(meuProduto)
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if(position != -1){ // diferente de -1: foi encontrado o produto
            cart.itens[position].quantidade--;
            if(cart.itens[position].quantidade < 1){ //caso a qtd selecionada seja < 1
                cart = this.removeProduto(meuProduto); //remove o produto
            }
        }
        this.storage.setCart(cart);
        return cart;
    }

    total() : number{
        let cart = this.getCart();
        let soma = 0;
        for( var i=0; i<cart.itens.length; i++){
            soma += cart.itens[i].produto.preco * cart.itens[i].quantidade;
        }
        return soma;
    }

}