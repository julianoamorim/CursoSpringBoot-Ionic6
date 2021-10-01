(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["src_app_folder_components_categorias_categorias_module_ts"],{

/***/ 6117:
/*!***************************************************************************!*\
  !*** ./src/app/folder/components/categorias/categorias-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPageRoutingModule": () => (/* binding */ CategoriasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias.page */ 6536);




const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_0__.CategoriasPage
    }
];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {
};
CategoriasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoriasPageRoutingModule);



/***/ }),

/***/ 2122:
/*!*******************************************************************!*\
  !*** ./src/app/folder/components/categorias/categorias.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPageModule": () => (/* binding */ CategoriasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias-routing.module */ 6117);
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias.page */ 6536);







let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriasPageRoutingModule
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_1__.CategoriasPage]
    })
], CategoriasPageModule);



/***/ }),

/***/ 6536:
/*!*****************************************************************!*\
  !*** ./src/app/folder/components/categorias/categorias.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasPage": () => (/* binding */ CategoriasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_categorias_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./categorias.page.html */ 8181);
/* harmony import */ var _categorias_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias.page.scss */ 4089);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../config/api.config */ 9038);
/* harmony import */ var _services_domain_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/domain/categoria.service */ 4190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);








let CategoriasPage = class CategoriasPage {
    constructor(navCtrl, navParam, categoriaService, router, route) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.categoriaService = categoriaService;
        this.router = router;
        this.route = route;
        this.bucketUrl = _config_api_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bucketAWSUrl;
    }
    ngOnInit() {
        this.categoriaService.read().subscribe(items => {
            this.items = items;
            console.log(items);
        });
    }
    //Nao foi facil: passa o id da categoria p a pagina de produto, curso nao funciona
    mostrarProdutos(categoria_id) {
        let data = JSON.stringify(categoria_id);
        this.router.navigate(['../produtos', { data }], { relativeTo: this.route }); //Funcão que passa parametros de categorias.page para parametros.page
    }
};
CategoriasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _services_domain_categoria_service__WEBPACK_IMPORTED_MODULE_3__.CategoriaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
CategoriasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-categorias',
        template: _raw_loader_categorias_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_categorias_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoriasPage);



/***/ }),

/***/ 4089:
/*!*******************************************************************!*\
  !*** ./src/app/folder/components/categorias/categorias.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWFzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8181:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/categorias/categorias.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Barra superiro do Menu -->\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Categorias</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" edge slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon routerLink=\"/folder/components/carrinho\" name=\"cart\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-item *ngFor=\"let item of items\" (click)=\"mostrarProdutos(item.id)\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"{{bucketUrl}}/cat{{item.id}}.jpg\">\r\n    </ion-thumbnail>\r\n    <ion-label>{{item.nome}}</ion-label>\r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_components_categorias_categorias_module_ts.js.map