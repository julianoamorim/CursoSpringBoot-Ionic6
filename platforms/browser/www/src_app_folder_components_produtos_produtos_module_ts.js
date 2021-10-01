(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["src_app_folder_components_produtos_produtos_module_ts"],{

/***/ 7342:
/*!***********************************************************************!*\
  !*** ./src/app/folder/components/produtos/produtos-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutosPageRoutingModule": () => (/* binding */ ProdutosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produtos.page */ 1394);




const routes = [
    {
        path: '',
        component: _produtos_page__WEBPACK_IMPORTED_MODULE_0__.ProdutosPage
    }
];
let ProdutosPageRoutingModule = class ProdutosPageRoutingModule {
};
ProdutosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProdutosPageRoutingModule);



/***/ }),

/***/ 1256:
/*!***************************************************************!*\
  !*** ./src/app/folder/components/produtos/produtos.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutosPageModule": () => (/* binding */ ProdutosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produtos-routing.module */ 7342);
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos.page */ 1394);







let ProdutosPageModule = class ProdutosPageModule {
};
ProdutosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _produtos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProdutosPageRoutingModule
        ],
        declarations: [_produtos_page__WEBPACK_IMPORTED_MODULE_1__.ProdutosPage]
    })
], ProdutosPageModule);



/***/ }),

/***/ 1394:
/*!*************************************************************!*\
  !*** ./src/app/folder/components/produtos/produtos.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutosPage": () => (/* binding */ ProdutosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_produtos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./produtos.page.html */ 7317);
/* harmony import */ var _produtos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos.page.scss */ 395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/api.config */ 9038);
/* harmony import */ var src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/domain/produto.service */ 8076);









let ProdutosPage = class ProdutosPage {
    constructor(navCtrl, navParams, produtoService, activateRoute, router, route, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoService = produtoService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.route = route;
        this.loadingCtrl = loadingCtrl;
        this.page = 0;
        this.items = [];
    }
    ngOnInit() {
        this.carregarDados();
    }
    carregarDados() {
        //Recebe os parametros de categoria.page para mostrar os produtos
        let categoria_id = this.activateRoute.snapshot.paramMap.get('data');
        this.showLoader();
        this.produtoService.encontrarPorCategoria(categoria_id, this.page, 10) // busca os produtos de 10 em 10
            .subscribe(response => {
            let inicio = this.items.length;
            this.items = this.items.concat(response['content']); //carrega os dados da pagina anterior
            this.stopLoader(); //retira a tela de loading apos carregar os dados da pagina anterior
            let fim = this.items.length - 1; //posicao final da lista
            this.carregarImagemUrls(inicio, fim);
            console.log(this.page);
            console.log(this.items);
        }, error => { });
    }
    carregarImagemUrls(inicio, fim) {
        for (var i = inicio; i < fim; i++) {
            let item = this.items[i];
            this.produtoService.getImagemPequenaBucked(item.id) //pega o id do produto e procura uma small-image com msm id
                .subscribe(response => {
                item.imageUrl = `${src_config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bucketAWSUrl}/prod${item.id}-small.jpg`;
            }, error => { });
        }
    }
    mostrarDetalhe(produto_id) {
        let data = JSON.stringify(produto_id);
        this.router.navigate(['../produto-detalhado', { data }], { relativeTo: this.route });
    }
    showLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Aguarde...',
                duration: 500
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    stopLoader() {
        //nao esta funcionando perfeitamente no IONIC 5
    }
    doRefresh(event) {
        this.page = 0;
        this.items = [];
        this.carregarDados();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    loadData(event) {
        this.page++;
        this.carregarDados();
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
        }, 500);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
};
ProdutosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_3__.ProdutoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
ProdutosPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll,] }]
};
ProdutosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-produtos',
        template: _raw_loader_produtos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams] //tem q colocar para carregar a pagina
        ,
        styles: [_produtos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProdutosPage);



/***/ }),

/***/ 395:
/*!***************************************************************!*\
  !*** ./src/app/folder/components/produtos/produtos.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  font-size: 300%;\n  margin-left: 15px;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1dG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJwcm9kdXRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMzAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn0iXX0= */");

/***/ }),

/***/ 7317:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/produtos/produtos.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Barra superiro do Menu -->\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"categorias\"></ion-back-button> <!-- botao de voltar, colocar a referencia da pagina --> \r\n    </ion-buttons>\r\n    <ion-title>Produtos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  \r\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon routerLink=\"/folder/components/carrinho\" name=\"cart\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-item *ngFor=\"let item of items\" (click)=\"mostrarDetalhe(item.id)\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <img [src]=\"item.imageUrl || 'assets/imgs/prod.jpg'\">\r\n    </ion-thumbnail>\r\n    <ion-label>{{item.nome}}</ion-label>\r\n    <ion-label>{{item.preco | currency}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-content padding>\r\n  <ion-list>\r\n    <button ion-item *ngFor=\"let item of items\">\r\n      <ion-thumbnail item-start>\r\n        <img [src]=\"item.imageUrl || 'assets/imgs/prod.jpg'\">\r\n      </ion-thumbnail>\r\n      <h2>{{item.nome}}</h2>\r\n      <p>{{item.preco | currency}}</p>\r\n    </button>\r\n  </ion-list>\r\n</ion-content> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_components_produtos_produtos_module_ts.js.map