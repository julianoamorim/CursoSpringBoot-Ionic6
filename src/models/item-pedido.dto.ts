import { RefDTO } from './ref.dto';

// Classe que serve como referencia ao objeto ItemPedido.java dentro do objeto Pagamento no FrontEnd
export interface ItemPedidoDTO{
    quantidade: number;
    produto: RefDTO;
}
