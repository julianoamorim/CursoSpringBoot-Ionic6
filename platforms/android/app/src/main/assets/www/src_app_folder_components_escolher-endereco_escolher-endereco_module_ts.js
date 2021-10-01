(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["src_app_folder_components_escolher-endereco_escolher-endereco_module_ts"],{

/***/ 2730:
/*!*****************************************************************************************!*\
  !*** ./src/app/folder/components/escolher-endereco/escolher-endereco-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscolherEnderecoPageRoutingModule": () => (/* binding */ EscolherEnderecoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _escolher_endereco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escolher-endereco.page */ 3972);




const routes = [
    {
        path: '',
        component: _escolher_endereco_page__WEBPACK_IMPORTED_MODULE_0__.EscolherEnderecoPage
    }
];
let EscolherEnderecoPageRoutingModule = class EscolherEnderecoPageRoutingModule {
};
EscolherEnderecoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EscolherEnderecoPageRoutingModule);



/***/ }),

/***/ 4281:
/*!*********************************************************************************!*\
  !*** ./src/app/folder/components/escolher-endereco/escolher-endereco.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscolherEnderecoPageModule": () => (/* binding */ EscolherEnderecoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _escolher_endereco_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escolher-endereco-routing.module */ 2730);
/* harmony import */ var _escolher_endereco_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escolher-endereco.page */ 3972);







let EscolherEnderecoPageModule = class EscolherEnderecoPageModule {
};
EscolherEnderecoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _escolher_endereco_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscolherEnderecoPageRoutingModule
        ],
        declarations: [_escolher_endereco_page__WEBPACK_IMPORTED_MODULE_1__.EscolherEnderecoPage]
    })
], EscolherEnderecoPageModule);



/***/ }),

/***/ 3972:
/*!*******************************************************************************!*\
  !*** ./src/app/folder/components/escolher-endereco/escolher-endereco.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscolherEnderecoPage": () => (/* binding */ EscolherEnderecoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_escolher_endereco_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./escolher-endereco.page.html */ 8441);
/* harmony import */ var _escolher_endereco_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escolher-endereco.page.scss */ 6577);
/* harmony import */ var src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/domain/cart.service */ 9264);
/* harmony import */ var src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/domain/cliente.service */ 928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/storage.service */ 7850);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);









let EscolherEnderecoPage = class EscolherEnderecoPage {
    constructor(navCtrl, navParams, storage, clienteService, cartService, router, route) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.clienteService = clienteService;
        this.cartService = cartService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        let localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.clienteService.encontrarPorEmail(localUser.email)
                .subscribe(response => {
                this.items = response['enderecos']; //entre [] evita o erro do compilador na busca do backend
                let cart = this.cartService.getCart();
                this.pedido = {
                    cliente: { id: response['id'] },
                    enderecoEntrega: null,
                    pagamento: null,
                    itens: cart.itens.map(x => { return { quantidade: x.quantidade, produto: { id: x.produto.id } }; }) // percorre as classes cart.ts e cart-item.ts pegando os produtos e convertendo p/ PedidoDTO
                };
            }, (error) => {
                console.log(error);
                if (error.status == 403) {
                    console.log('voltando');
                    this.navCtrl.navigateRoot('folder/components/home');
                }
            });
        }
        else {
            this.navCtrl.navigateRoot('folder/components/home');
        }
    }
    proximaPagina(item) {
        this.pedido.enderecoEntrega = { id: item.id }; //retorna o id do cliente, endereco, em vez o objeto completo
        let data = JSON.stringify(this.pedido);
        this.router.navigate(['../pagamento', { data }], { relativeTo: this.route });
    }
};
EscolherEnderecoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_3__.ClienteService },
    { type: src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
EscolherEnderecoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-escolher-endereco',
        template: _raw_loader_escolher_endereco_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_escolher_endereco_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EscolherEnderecoPage);



/***/ }),

/***/ 6577:
/*!*********************************************************************************!*\
  !*** ./src/app/folder/components/escolher-endereco/escolher-endereco.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc2NvbGhlci1lbmRlcmVjby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 8441:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/escolher-endereco/escolher-endereco.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Barra superiro do Menu -->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"carrinho\"></ion-back-button> <!-- botao de voltar, colocar a referencia da pagina --> \n    </ion-buttons>\n    <ion-title>Fechamento de Pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n      <ion-list-header>\n        <h2>Selecione um endereço</h2>  \n      </ion-list-header>\n      <ion-item button *ngFor=\"let item of items\" (click)=\"proximaPagina(item)\">\n          <ion-label>\n            <h2>{{item.logradouro}}, {{item.numero}}</h2>\n            <p>{{item.complemento}} {{item.bairro}} CEP {{item.cep}}</p>\n            <p>{{item.cidade.nome}}, {{item.cidade.estado.nome}}</p>\n          </ion-label>\n      </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_components_escolher-endereco_escolher-endereco_module_ts.js.map