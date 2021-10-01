(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["src_app_folder_components_confirmacao-pedido_confirmacao-pedido_module_ts"],{

/***/ 8753:
/*!*******************************************************************************************!*\
  !*** ./src/app/folder/components/confirmacao-pedido/confirmacao-pedido-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacaoPedidoPageRoutingModule": () => (/* binding */ ConfirmacaoPedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _confirmacao_pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmacao-pedido.page */ 7858);




const routes = [
    {
        path: '',
        component: _confirmacao_pedido_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmacaoPedidoPage
    }
];
let ConfirmacaoPedidoPageRoutingModule = class ConfirmacaoPedidoPageRoutingModule {
};
ConfirmacaoPedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmacaoPedidoPageRoutingModule);



/***/ }),

/***/ 6236:
/*!***********************************************************************************!*\
  !*** ./src/app/folder/components/confirmacao-pedido/confirmacao-pedido.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacaoPedidoPageModule": () => (/* binding */ ConfirmacaoPedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _services_domain_pedido_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../services/domain/pedido.service */ 3434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _confirmacao_pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmacao-pedido-routing.module */ 8753);
/* harmony import */ var _confirmacao_pedido_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmacao-pedido.page */ 7858);








let ConfirmacaoPedidoPageModule = class ConfirmacaoPedidoPageModule {
};
ConfirmacaoPedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _confirmacao_pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__.ConfirmacaoPedidoPageRoutingModule
        ],
        declarations: [_confirmacao_pedido_page__WEBPACK_IMPORTED_MODULE_2__.ConfirmacaoPedidoPage],
        providers: [
            _services_domain_pedido_service__WEBPACK_IMPORTED_MODULE_0__.PedidoService
        ]
    })
], ConfirmacaoPedidoPageModule);



/***/ }),

/***/ 7858:
/*!*********************************************************************************!*\
  !*** ./src/app/folder/components/confirmacao-pedido/confirmacao-pedido.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacaoPedidoPage": () => (/* binding */ ConfirmacaoPedidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_confirmacao_pedido_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirmacao-pedido.page.html */ 6789);
/* harmony import */ var _confirmacao_pedido_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmacao-pedido.page.scss */ 4999);
/* harmony import */ var _services_domain_pedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/domain/pedido.service */ 3434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/domain/cliente.service */ 928);
/* harmony import */ var _services_domain_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/domain/cart.service */ 9264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);









let ConfirmacaoPedidoPage = class ConfirmacaoPedidoPage {
    constructor(navCtrl, navParams, cartService, clienteService, activateRoute, pedidoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.clienteService = clienteService;
        this.activateRoute = activateRoute;
        this.pedidoService = pedidoService;
        this.pedido = JSON.parse(activateRoute.snapshot.paramMap.get('pedido')); //pega o pedido vindo da pagina anterior de pagamento
    }
    ngOnInit() {
        console.log(this.pedido);
        this.cartItems = this.cartService.getCart().itens; //pega os itens de um carrinho ja existente
        this.clienteService.encontrarPorId(this.pedido.cliente.id) //busca o cliente
            .subscribe(resposta => {
            this.cliente = resposta;
            this.endereco = this.encontrarEndereco(this.pedido.enderecoEntrega.id, resposta['enderecos']);
        }, error => {
            this.navCtrl.navigateRoot('/folder/components/home');
        });
    }
    encontrarEndereco(idd, list) {
        let posicao = list.findIndex(x => x.id == idd);
        return list[posicao];
    }
    total() {
        return this.cartService.total();
    }
    voltar() {
        this.navCtrl.navigateRoot('/folder/components/carrinho');
    }
    home() {
        this.navCtrl.navigateRoot('/folder/components/categorias');
    }
    finalizarCompra() {
        this.pedidoService.inserir(this.pedido)
            .subscribe(resposta => {
            this.cartService.criarOuLimparCarrinho(); //limpa o carrinho, pois a compra foi fechada
            this.codPedido = this.encontrarId(resposta.headers.get('location')); //armazena o numero do Id da url do novo pedido salvo 
        }, error => {
            console.log(error);
            if (error.status == 403) {
                this.navCtrl.navigateRoot('/folder/components/home');
            }
        });
    }
    encontrarId(location) {
        let posicao = location.lastIndexOf('/'); //encontra a posicao da ultima barra
        return location.substring(posicao + 1, location.length); //encontra a posicao depois da ultima barra
    }
};
ConfirmacaoPedidoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _services_domain_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService },
    { type: src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_3__.ClienteService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_domain_pedido_service__WEBPACK_IMPORTED_MODULE_2__.PedidoService }
];
ConfirmacaoPedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-confirmacao-pedido',
        template: _raw_loader_confirmacao_pedido_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirmacao_pedido_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmacaoPedidoPage);



/***/ }),

/***/ 3434:
/*!***********************************************!*\
  !*** ./src/services/domain/pedido.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoService": () => (/* binding */ PedidoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 9038);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PedidoService = class PedidoService {
    constructor(http) {
        this.http = http;
    }
    inserir(obj) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/pedidos`, obj, {
            observe: 'response',
            responseType: 'text'
        });
    }
};
PedidoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
PedidoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], PedidoService);



/***/ }),

/***/ 4999:
/*!***********************************************************************************!*\
  !*** ./src/app/folder/components/confirmacao-pedido/confirmacao-pedido.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h2 {\n  font-size: 20px;\n}\n\np {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hY2FvLXBlZGlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiY29uZmlybWFjYW8tcGVkaWRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59Il19 */");

/***/ }),

/***/ 6789:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/confirmacao-pedido/confirmacao-pedido.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf = \"codPedido\">Pedido Registrado</ion-title>\n    <ion-title *ngIf = \"!codPedido\">Confira Seu Pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf = \"!codPedido\"> <!-- antes de confirmar a compra -->\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Itens do pedido</ion-card-title>\n      </ion-card-header>\n    \n      <ion-list>\n        <ion-item *ngFor=\"let item of cartItems\">\n          <ion-thumbnail item-start>\n            <img [src]=\"item.produto.imageUrl || 'assets/imgs/prod.jpg'\">\n          </ion-thumbnail>\n          <ion-label style=\"margin-left: 10px;\">\n            <h2>{{item.produto.nome}}</h2>\n            <p style=\"float: right;\">{{item.produto.preco * item.quantidade | currency}}</p>\n            <p>{{item.produto.preco | currency}}</p>\n            <p class=\"nolinebreak\" style=\"margin-left: 20px;\">{{item.quantidade}}</p>\n          </ion-label>\n        </ion-item> \n    \n        <ion-item>\n          <h2>Total</h2>\n          <h2 slot=\"end\">{{total() | currency}}</h2>\n        </ion-item>\n      </ion-list> \n    </ion-card>\n    \n    <ion-card>\n        <ion-card-header>\n          Cliente\n        </ion-card-header>\n        <ion-item>\n          <ion-label>\n            <h2>{{cliente?.nome}}</h2>\n            <p>{{cliente?.email}}</p>\n          </ion-label>\n        </ion-item>\n    </ion-card>\n    \n    <ion-card>\n      <ion-card-header>\n        Endereço de entrega\n      </ion-card-header>\n    \n      <ion-item>\n        <ion-label>\n          <h2>{{endereco?.logradouro}}, {{endereco?.numero}}</h2>\n          <p>{{endereco?.complemento}} {{endereco?.bairro}} CEP {{endereco?.cep}}</p>\n          <p>{{endereco?.cidade.nome}}, {{endereco?.cidade.estado.nome}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-card>\n    \n    <ion-card>\n      <ion-card-header>\n        Pagamento\n      </ion-card-header>\n    \n      <ion-item *ngIf=\"pedido.pagamento['@type']=='pagamentoComCartao'\">\n        <ion-label>\n          <h3>Pagamento com cartão</h3>\n          <p>Parcelas: {{pedido.pagamento.numeroParcelas}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"pedido.pagamento['@type']=='pagamentoComBoleto'\">\n        <h3>Pagamento com boleto</h3>\n      </ion-item>\n    </ion-card>\n    <ion-button expand=\"full\" type=\"submit\" (click)=\"finalizarCompra()\">Confirmar Pedido</ion-button>\n    <ion-button expand=\"full\" color=\"medium\" (click)=\"voltar()\">Voltar</ion-button>\n  </div>\n\n  <div *ngIf=\"codPedido\"> <!-- apos confirmar a compra -->\n    <ion-card>\n      <ion-list-header>\n        <h2>Seu pedido foi registrado !</h2>  \n      </ion-list-header>\n      <ion-item>\n        <ion-label>\n          <h2>Código do pedido: {{codPedido}}</h2>\n          <p>Verifique seu email</p>\n        </ion-label>\n      </ion-item>\n    </ion-card>\n    <ion-button expand=\"full\" color=\"medium\" (click)=\"home()\">Voltar</ion-button> <!-- volta p pagina de categorias -->\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_components_confirmacao-pedido_confirmacao-pedido_module_ts.js.map