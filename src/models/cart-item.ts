import { ProdutoDTO } from "./produto.dto";

//Classe do Carrinho de Compras
export interface CartItem{
    quantidade: number;
    produto: ProdutoDTO
}