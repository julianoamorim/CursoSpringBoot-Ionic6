(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["src_app_folder_components_pagamento_pagamento_module_ts"],{

/***/ 7551:
/*!*************************************************************************!*\
  !*** ./src/app/folder/components/pagamento/pagamento-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagamentoPageRoutingModule": () => (/* binding */ PagamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pagamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagamento.page */ 9609);




const routes = [
    {
        path: '',
        component: _pagamento_page__WEBPACK_IMPORTED_MODULE_0__.PagamentoPage
    }
];
let PagamentoPageRoutingModule = class PagamentoPageRoutingModule {
};
PagamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagamentoPageRoutingModule);



/***/ }),

/***/ 3632:
/*!*****************************************************************!*\
  !*** ./src/app/folder/components/pagamento/pagamento.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagamentoPageModule": () => (/* binding */ PagamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pagamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagamento-routing.module */ 7551);
/* harmony import */ var _pagamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagamento.page */ 9609);







let PagamentoPageModule = class PagamentoPageModule {
};
PagamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pagamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagamentoPageRoutingModule
        ],
        declarations: [_pagamento_page__WEBPACK_IMPORTED_MODULE_1__.PagamentoPage]
    })
], PagamentoPageModule);



/***/ }),

/***/ 9609:
/*!***************************************************************!*\
  !*** ./src/app/folder/components/pagamento/pagamento.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagamentoPage": () => (/* binding */ PagamentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pagamento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pagamento.page.html */ 3966);
/* harmony import */ var _pagamento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagamento.page.scss */ 5483);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);







let PagamentoPage = class PagamentoPage {
    constructor(navCtrl, navParams, formBuilder, activateRoute, router) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.router = router;
        this.parcelas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.pedido = JSON.parse(activateRoute.snapshot.paramMap.get('data')); //pega o objeto pedido da outra pagina
        this.grupoFormulario = this.formBuilder.group({
            numeroParcelas: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            "@type": ['pagamentoComCartao', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] //pega o objto PagamentoComCartao.java do BackEnd
        });
    }
    ngOnInit() {
    }
    proximaPagina() {
        this.pedido.pagamento = this.grupoFormulario.value;
        let pedido = JSON.stringify(this.pedido);
        this.router.navigate(['../confirmacao-pedido', { pedido }], { relativeTo: this.activateRoute });
    }
};
PagamentoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PagamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pagamento',
        template: _raw_loader_pagamento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pagamento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PagamentoPage);



/***/ }),

/***/ 5483:
/*!*****************************************************************!*\
  !*** ./src/app/folder/components/pagamento/pagamento.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdhbWVudG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 3966:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/pagamento/pagamento.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Pagamento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]=\"grupoFormulario\" (ngSubmit)=\"proximaPagina(); $event.preventDefault()\">\n    <ion-list>\n      <ion-radio-group formControlName=\"@type\">\n        <ion-list-header>\n          <h3>Tipo de pagamento</h3> \n        </ion-list-header>\n        <ion-item>\n          <ion-label>Pagamento com cartão</ion-label>\n          <ion-radio checked=\"true\" value=\"pagamentoComCartao\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Pagamento com boleto</ion-label>\n          <ion-radio value=\"pagamentoComBoleto\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-item *ngIf=\"grupoFormulario.value['@type'] == 'pagamentoComCartao'\">\n      <ion-label stacked>Parcelas no cartão</ion-label>\n      <ion-select formControlName=\"numeroParcelas\">\n        <ion-select-option *ngFor=\"let n of parcelas\" [value]=\"n\">{{n}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"grupoFormulario.invalid\">Próximo</ion-button>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_components_pagamento_pagamento_module_ts.js.map