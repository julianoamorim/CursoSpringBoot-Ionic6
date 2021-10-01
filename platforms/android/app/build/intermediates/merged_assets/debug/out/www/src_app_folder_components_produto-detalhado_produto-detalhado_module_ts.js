(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["src_app_folder_components_produto-detalhado_produto-detalhado_module_ts"],{

/***/ 5785:
/*!*****************************************************************************************!*\
  !*** ./src/app/folder/components/produto-detalhado/produto-detalhado-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoDetalhadoPageRoutingModule": () => (/* binding */ ProdutoDetalhadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _produto_detalhado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produto-detalhado.page */ 8339);




const routes = [
    {
        path: '',
        component: _produto_detalhado_page__WEBPACK_IMPORTED_MODULE_0__.ProdutoDetalhadoPage
    }
];
let ProdutoDetalhadoPageRoutingModule = class ProdutoDetalhadoPageRoutingModule {
};
ProdutoDetalhadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProdutoDetalhadoPageRoutingModule);



/***/ }),

/***/ 2738:
/*!*********************************************************************************!*\
  !*** ./src/app/folder/components/produto-detalhado/produto-detalhado.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoDetalhadoPageModule": () => (/* binding */ ProdutoDetalhadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _produto_detalhado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produto-detalhado-routing.module */ 5785);
/* harmony import */ var _produto_detalhado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produto-detalhado.page */ 8339);







let ProdutoDetalhadoPageModule = class ProdutoDetalhadoPageModule {
};
ProdutoDetalhadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _produto_detalhado_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProdutoDetalhadoPageRoutingModule
        ],
        declarations: [_produto_detalhado_page__WEBPACK_IMPORTED_MODULE_1__.ProdutoDetalhadoPage]
    })
], ProdutoDetalhadoPageModule);



/***/ }),

/***/ 8339:
/*!*******************************************************************************!*\
  !*** ./src/app/folder/components/produto-detalhado/produto-detalhado.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoDetalhadoPage": () => (/* binding */ ProdutoDetalhadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_produto_detalhado_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./produto-detalhado.page.html */ 173);
/* harmony import */ var _produto_detalhado_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produto-detalhado.page.scss */ 6814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/api.config */ 9038);
/* harmony import */ var src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/domain/cart.service */ 9264);
/* harmony import */ var src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/domain/produto.service */ 8076);









let ProdutoDetalhadoPage = class ProdutoDetalhadoPage {
    constructor(navCtrl, navParams, cartService, produtoService, activateRoute, router, route) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.produtoService = produtoService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        //Recebe os parametros de produtos.page para mostrar o produto detalhado
        let categoria_id = this.activateRoute.snapshot.paramMap.get('data');
        console.log(this.produtoService.encontrarPorId(categoria_id));
        this.produtoService.encontrarPorId(categoria_id)
            .subscribe(response => {
            this.item = response;
            this.carregarImagemUrlSeExistir();
        }, error => { });
    }
    carregarImagemUrlSeExistir() {
        this.produtoService.getImagemBucked(this.item.id) //pega o id do produto e procura uma imagem com msm id
            .subscribe(response => {
            this.item.imageUrl = `${src_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bucketAWSUrl}/prod${this.item.id}.jpg`;
        }, error => { });
    }
    adicionarAoCarrinho(produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.navigateRoot('folder/components/carrinho');
    }
};
ProdutoDetalhadoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService },
    { type: src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_4__.ProdutoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
ProdutoDetalhadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-produto-detalhado',
        template: _raw_loader_produto_detalhado_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_produto_detalhado_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProdutoDetalhadoPage);



/***/ }),

/***/ 6814:
/*!*********************************************************************************!*\
  !*** ./src/app/folder/components/produto-detalhado/produto-detalhado.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 300%;\n  margin-left: 15px;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1dG8tZGV0YWxoYWRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJwcm9kdXRvLWRldGFsaGFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn0iXX0= */");

/***/ }),

/***/ 173:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/produto-detalhado/produto-detalhado.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Barra superiro do Menu -->\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"produtos\"></ion-back-button> <!-- botao de voltar, colocar a referencia da pagina --> \r\n    </ion-buttons>\r\n    <ion-title>Produto Detalhado</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon routerLink=\"/folder/components/carrinho\" name=\"cart\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-card >\r\n    <img [src]=\"item?.imageUrl || 'assets/imgs/prod.jpg'\"/>\r\n    <ion-card-content>\r\n      <ion-card-title>\r\n        {{item?.nome}}\r\n        </ion-card-title>\r\n      <p>\r\n        {{item?.preco | currency}}\r\n      </p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-button expand=\"full\" color=\"medium\" (click)=\"adicionarAoCarrinho(item)\">Adicionar ao Carrinho</ion-button>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_components_produto-detalhado_produto-detalhado_module_ts.js.map