// Classe que serve como referencia ao objeto PagamentoComCartao.java dentro do objeto Pagamento no FrontEnd
export interface PagamentoDTO{
    numeroParcelas: number; //variavel precisa ter mesmo nome do BackEnd senao nao funciona
    "@type": string; //Nome da classe que sera importada do BackEnd usando o @JsonTypeName
}