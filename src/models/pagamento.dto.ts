// Classe que serve como referencia ao objeto PagamentoComCartao dentro do objeto Pagamento no FrontEnd
export interface PagamentoDTO{
    numeroParcelas: number;
    "@type": string;
}