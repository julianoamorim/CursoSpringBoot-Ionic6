(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["src_app_folder_components_carrinho_carrinho_module_ts"],{

/***/ 2713:
/*!***********************************************************************!*\
  !*** ./src/app/folder/components/carrinho/carrinho-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarrinhoPageRoutingModule": () => (/* binding */ CarrinhoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrinho.page */ 6732);




const routes = [
    {
        path: '',
        component: _carrinho_page__WEBPACK_IMPORTED_MODULE_0__.CarrinhoPage
    }
];
let CarrinhoPageRoutingModule = class CarrinhoPageRoutingModule {
};
CarrinhoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarrinhoPageRoutingModule);



/***/ }),

/***/ 9729:
/*!***************************************************************!*\
  !*** ./src/app/folder/components/carrinho/carrinho.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarrinhoPageModule": () => (/* binding */ CarrinhoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrinho-routing.module */ 2713);
/* harmony import */ var _carrinho_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrinho.page */ 6732);







let CarrinhoPageModule = class CarrinhoPageModule {
};
CarrinhoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _carrinho_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarrinhoPageRoutingModule
        ],
        declarations: [_carrinho_page__WEBPACK_IMPORTED_MODULE_1__.CarrinhoPage]
    })
], CarrinhoPageModule);



/***/ }),

/***/ 6732:
/*!*************************************************************!*\
  !*** ./src/app/folder/components/carrinho/carrinho.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarrinhoPage": () => (/* binding */ CarrinhoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_carrinho_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./carrinho.page.html */ 8645);
/* harmony import */ var _carrinho_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carrinho.page.scss */ 9911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/api.config */ 9038);
/* harmony import */ var src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/domain/cart.service */ 9264);
/* harmony import */ var src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/domain/produto.service */ 8076);








let CarrinhoPage = class CarrinhoPage {
    constructor(navCtrl, navParam, cartService, produtoService) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.cartService = cartService;
        this.produtoService = produtoService;
        this.items = [];
    }
    ngOnInit() {
        let cart = this.cartService.getCart(); //pega o carrinho de compras ou cria um novo
        this.items = cart.itens;
        this.carregarImagemUrls();
    }
    carregarImagemUrls() {
        for (var i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            this.produtoService.getImagemPequenaBucked(item.produto.id) //pega o id do produto e procura uma small-image com msm id
                .subscribe(response => {
                item.produto.imageUrl = `${src_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bucketAWSUrl}/prod${item.produto.id}-small.jpg`;
            }, error => { });
        }
    }
    //Metodos que repassam a chamada para o cart.servise.ts
    removerItem(produto) {
        this.items = this.cartService.removeProduto(produto).itens;
    }
    aumentarQuantidade(produto) {
        this.items = this.cartService.increaseQuantity(produto).itens;
    }
    diminuirQuantidade(produto) {
        this.items = this.cartService.decreaseQuantity(produto).itens;
    }
    total() {
        return this.cartService.total();
    }
    continuarComprando() {
        this.navCtrl.navigateRoot('/folder/components/categorias');
    }
    finalizarCompra() {
        this.navCtrl.navigateRoot('/folder/components/escolher-endereco');
    }
};
CarrinhoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_4__.ProdutoService }
];
CarrinhoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-carrinho',
        template: _raw_loader_carrinho_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_carrinho_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CarrinhoPage);



/***/ }),

/***/ 9911:
/*!***************************************************************!*\
  !*** ./src/app/folder/components/carrinho/carrinho.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".nolinebreak {\n  float: left;\n  padding-right: 5px;\n}\n\nion-icon {\n  font-size: 25px;\n}\n\nh2 {\n  font-size: 20px;\n}\n\np {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnJpbmhvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImNhcnJpbmhvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub2xpbmVicmVha3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 8645:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/carrinho/carrinho.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Barra superiro do Menu -->\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Carrinho</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\">\r\n      <ion-thumbnail item-start>\r\n        <img [src]=\"item.produto.imageUrl || 'assets/imgs/prod.jpg'\" >\r\n      </ion-thumbnail>\r\n      <ion-label style=\"margin-left: 10px;\">\r\n        <h2>{{item.produto.nome}}</h2>\r\n        <p>{{item.produto.preco | currency}}</p>\r\n        <ion-icon class=\"nolinebreak\" name=\"remove-circle\" color=\"primary\" (click)=\"diminuirQuantidade(item.produto)\"></ion-icon>\r\n        <p class=\"nolinebreak\">{{item.quantidade}}</p>\r\n        <ion-icon name=\"add-circle\" color=\"primary\" (click)=\"aumentarQuantidade(item.produto)\"></ion-icon>\r\n        <ion-icon name=\"trash\" style=\"float: right;\" color=\"danger\" (click)=\"removerItem(item.produto)\"></ion-icon>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"total() > 0\">\r\n      <h1>Total</h1>\r\n      <h1 slot=\"end\">{{total()}}</h1>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"total() <= 0\"> <!-- caso o carrinho esteja vazio -->\r\n      <h1>Seu carrinho está vazio</h1>\r\n    </ion-item>\r\n  </ion-list>   \r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"continuarComprando()\">Continuar Comprando</ion-button>\r\n  <ion-button *ngIf=\"total() > 0\" expand=\"full\" color=\"secondary\" (click)=\"finalizarCompra()\">Finalizar Compra</ion-button>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_components_carrinho_carrinho_module_ts.js.map