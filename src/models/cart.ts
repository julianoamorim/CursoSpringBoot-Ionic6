import { CartItem } from "./cart-item";

//Classe que possui uma lista de Itens do Carrinho
export interface Cart {
    itens: CartItem[]
}