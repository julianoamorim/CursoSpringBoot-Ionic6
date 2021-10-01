(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _folder_components_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder/components/inbox/inbox.component */ 4457);




const routes = [
    {
        path: '',
        redirectTo: 'folder/components/home',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'folder/components/inbox',
        component: _folder_components_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/auth.service */ 2567);






let AppComponent = class AppComponent {
    //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    constructor(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.appPages = [
            { title: 'Perfil', url: '/folder/components/profile', icon: 'paper-plane' },
            { title: 'Logout', url: '/folder/components/home', icon: 'log-out' },
            { title: 'Categorias', url: '/folder/components/categorias', icon: 'archive' },
            { title: 'Carrinho', url: '/folder/components/carrinho', icon: "cart" },
            { title: 'Sobre', url: '/folder/Sobre', icon: 'warning' },
        ];
    }
    openPage(page) {
        switch (page.title) {
            case 'Logout':
                this.auth.logout();
                console.log('fazendo logout');
                //this.navCtrl.navigateRoot('/folder/components/home');
                break;
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _services_domain_categoria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/domain/categoria.service */ 4190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _folder_components_inbox_inbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder/components/inbox/inbox.module */ 9610);
/* harmony import */ var src_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/interceptors/error-interceptor */ 1665);
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/auth.service */ 2567);
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/storage.service */ 7850);
/* harmony import */ var src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/domain/cliente.service */ 928);
/* harmony import */ var src_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/interceptors/auth-interceptor */ 4044);
/* harmony import */ var src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/domain/produto.service */ 8076);
/* harmony import */ var src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/domain/cart.service */ 9264);
/* harmony import */ var src_services_image_util_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/image-util.service */ 2253);






 //nao importou automaticamente











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _folder_components_inbox_inbox_module__WEBPACK_IMPORTED_MODULE_3__.InboxModule
        ],
        //servicos que sao declarados globalmente  
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy },
            _services_domain_categoria_service__WEBPACK_IMPORTED_MODULE_0__.CategoriaService,
            src_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavParams,
            src_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__.AuthInterceptorProvider,
            src_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptorProvider,
            src_services_image_util_service__WEBPACK_IMPORTED_MODULE_11__.ImageUtilService,
            src_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService,
            src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_7__.ClienteService,
            src_services_domain_produto_service__WEBPACK_IMPORTED_MODULE_9__.ProdutoService,
            src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_10__.CartService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4457:
/*!************************************************************!*\
  !*** ./src/app/folder/components/inbox/inbox.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxComponent": () => (/* binding */ InboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_inbox_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inbox.component.html */ 5515);
/* harmony import */ var _inbox_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.component.scss */ 3515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let InboxComponent = class InboxComponent {
    constructor() {
    }
    ngOnInit() { }
};
InboxComponent.ctorParameters = () => [];
InboxComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inbox',
        template: _raw_loader_inbox_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inbox_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InboxComponent);



/***/ }),

/***/ 9610:
/*!*********************************************************!*\
  !*** ./src/app/folder/components/inbox/inbox.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxModule": () => (/* binding */ InboxModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.component */ 4457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../folder-routing.module */ 9771);







let InboxModule = class InboxModule {
};
InboxModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_1__.FolderPageRoutingModule
        ],
        declarations: [
            _inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent
        ]
    })
], InboxModule);



/***/ }),

/***/ 9771:
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPageRoutingModule": () => (/* binding */ FolderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.page */ 8470);




//nao consigo acessar as rotas por aqui(Fazer o LazyLoading). Por que?
const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_0__.FolderPage
    },
    {
        path: 'categorias',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_components_categorias_categorias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/categorias/categorias.module */ 2122)).then(m => m.CategoriasPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_folder_components_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/home/home.module */ 2748)).then(m => m.HomePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_components_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/profile/profile.module */ 2080)).then(m => m.ProfilePageModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_folder_components_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/signup/signup.module */ 8257)).then(m => m.SignupPageModule)
    },
    {
        path: 'produtos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_components_produtos_produtos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/produtos/produtos.module */ 1256)).then(m => m.ProdutosPageModule)
    },
    {
        path: 'produto-detalhado',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_components_produto-detalhado_produto-detalhado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/produto-detalhado/produto-detalhado.module */ 2738)).then(m => m.ProdutoDetalhadoPageModule)
    },
    {
        path: 'carrinho',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_components_carrinho_carrinho_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/carrinho/carrinho.module */ 9729)).then(m => m.CarrinhoPageModule)
    },
    {
        path: 'escolher-endereco',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_components_escolher-endereco_escolher-endereco_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/escolher-endereco/escolher-endereco.module */ 4281)).then(m => m.EscolherEnderecoPageModule)
    },
    {
        path: 'pagamento',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_components_pagamento_pagamento_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/pagamento/pagamento.module */ 3632)).then(m => m.PagamentoPageModule)
    },
    {
        path: 'confirmacao-pedido',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_components_confirmacao-pedido_confirmacao-pedido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/confirmacao-pedido/confirmacao-pedido.module */ 6236)).then(m => m.ConfirmacaoPedidoPageModule)
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ 8470:
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPage": () => (/* binding */ FolderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./folder.page.html */ 7154);
/* harmony import */ var _folder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder.page.scss */ 7065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let FolderPage = class FolderPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
FolderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-folder',
        template: _raw_loader_folder_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_folder_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FolderPage);



/***/ }),

/***/ 9038:
/*!**********************************!*\
  !*** ./src/config/api.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_CONFIG": () => (/* binding */ API_CONFIG)
/* harmony export */ });
const API_CONFIG = {
    baseUrl: "https://curso-spring-ionic15.herokuapp.com",
    bucketAWSUrl: "https://curso-spring-ionic15.s3.sa-east-1.amazonaws.com" //URL para acesso as imagens no AWS
};


/***/ }),

/***/ 2825:
/*!*******************************************!*\
  !*** ./src/config/storage_keys.config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORAGE_KEYS": () => (/* binding */ STORAGE_KEYS)
/* harmony export */ });
//salva o token das credenciais localmente para nao precisar colocar toda vez q entrar no app
const STORAGE_KEYS = {
    localUser: "localUser",
    cart: "cursoSpringIonicCart"
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4044:
/*!**********************************************!*\
  !*** ./src/interceptors/auth-interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor),
/* harmony export */   "AuthInterceptorProvider": () => (/* binding */ AuthInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/storage.service */ 7850);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/config/api.config */ 9038);





//Classe interceptor para interceptar o token de autenticacao, copiado do GitHub, nao foi explicado
let AuthInterceptor = class AuthInterceptor {
    constructor(storage) {
        this.storage = storage;
    }
    intercept(req, next) {
        let localUser = this.storage.getLocalUser();
        let N = src_config_api_config__WEBPACK_IMPORTED_MODULE_1__.API_CONFIG.baseUrl.length; //pega o numero de caracteres da url base 
        let requestToAPI = req.url.substring(0, N) == src_config_api_config__WEBPACK_IMPORTED_MODULE_1__.API_CONFIG.baseUrl; //recorta a parte inicial da url requisitada e compara com a ur do API_CONFIG
        if (localUser && requestToAPI) {
            const authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) }); //clona a requisicao
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: src_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], AuthInterceptor);

const AuthInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};


/***/ }),

/***/ 1665:
/*!***********************************************!*\
  !*** ./src/interceptors/error-interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor),
/* harmony export */   "ErrorInterceptorProvider": () => (/* binding */ ErrorInterceptorProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/storage.service */ 7850);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);

//Classe interceptor para tratamento de erro, copiado do GitHub, nao foi explicado






let ErrorInterceptor = class ErrorInterceptor {
    constructor(storage, alertCtrl, navCtrl) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
            let errorObj = error;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!error.status) {
                error = JSON.parse(error);
            }
            //alert("erro inteceptor");
            console.log(error.status);
            switch (error.status) {
                case 401:
                    console.log("erro 401");
                    this.handle401();
                    break;
                case 403: //erro de requisicao do usuario
                    console.log("erro 403");
                    this.handle403();
                    break;
                case 422: //erro de validacao de token
                    this.handle422(error);
                    break;
                default:
                    this.handleDefaultError(error);
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable.throw(errorObj);
        }));
    }
    handle403() {
        this.storage.setLocalUser(null); //avisa que o usuario armazenado e invalido e o remove
        this.navCtrl.setDirection('root');
    }
    handle401() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Erro 401, falha de autenticação',
                message: 'Email ou senha incorretos',
                backdropDismiss: false,
                buttons: ['Ok']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('Acesso negado', role);
            this.navCtrl.setDirection('root');
        });
    }
    handle422(erroObj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let novoErro = JSON.parse(erroObj.error); //o campo error no objeto error e uma string, necessario transf. em objeto
            console.log(novoErro);
            const alert = yield this.alertCtrl.create({
                header: 'Erro 422: Validação',
                message: this.listaErros(novoErro.errors),
                backdropDismiss: false,
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    handleDefaultError(erroObj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Erro ' + erroObj.status + ': ' + erroObj.error,
                message: erroObj.message,
                backdropDismiss: false,
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
    listaErros(messages = []) {
        let s = '';
        for (var i = 0; i < messages.length; i++) {
            s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].message + '</p>';
        }
        return s;
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: src_services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], ErrorInterceptor);

const ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 2567:
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/domain/cart.service */ 9264);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/api.config */ 9038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ 7850);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);







//Funcao de Autenticacao das credenciais fornecidas no Frontend para o Backend
let AuthService = class AuthService {
    constructor(http, storage, cartService) {
        this.http = http;
        this.storage = storage;
        this.cartService = cartService;
        this.requestObject = null;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService(); //biblioteca que obtem o email atravez do token no frontend -> necessario instalar npm
    }
    autenticado(creds) {
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_1__.API_CONFIG.baseUrl}/login`, creds, {
            observe: 'response',
            responseType: 'text',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Access-Control-Allow-Origin': '*'
            })
        });
    }
    recarrecarToken() {
        return this.http.post(`${_config_api_config__WEBPACK_IMPORTED_MODULE_1__.API_CONFIG.baseUrl}/auth/refresh_token`, {}, {
            observe: 'response',
            responseType: 'text',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
                'Access-Control-Allow-Origin': '*'
            })
        });
    }
    sucessoLogin(autorizacaoValor) {
        let toke = autorizacaoValor.substring(7); //Retirar o "Barrier " do token
        let user = {
            token: toke,
            email: this.jwtHelper.decodeToken(toke).sub
        };
        this.storage.setLocalUser(user); //salva o usuario no localStorage do brownser
        this.cartService.criarOuLimparCarrinho(); //limpa o carrinho em um novo Login
    }
    logout() {
        this.storage.setLocalUser(null); //remove as credencias salvas automaticas
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_services_domain_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], AuthService);



/***/ }),

/***/ 9264:
/*!*********************************************!*\
  !*** ./src/services/domain/cart.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.service */ 7850);



let CartService = class CartService {
    constructor(storage) {
        this.storage = storage;
    }
    criarOuLimparCarrinho() {
        let cart = { itens: [] };
        this.storage.setCart(cart);
        return cart;
    }
    getCart() {
        let cart = this.storage.getCart(); //pega o objeto carrinho se existir
        if (cart === null) {
            cart = this.criarOuLimparCarrinho(); //cria um carrinho se nao existir
        }
        return cart;
    }
    addProduto(meuProduto) {
        console.log(meuProduto);
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if (position == -1) { // -1: nao foi encontrado o produto
            cart.itens.push({ quantidade: 1, produto: meuProduto });
        }
        this.storage.setCart(cart);
        return cart;
    }
    removeProduto(meuProduto) {
        console.log(meuProduto);
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if (position != -1) { // diferente de -1: foi encontrado o produto
            cart.itens.splice(position, 1);
        }
        this.storage.setCart(cart);
        console.log(cart);
        return cart;
    }
    increaseQuantity(meuProduto) {
        console.log(meuProduto);
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if (position != -1) { // diferente de -1: foi encontrado o produto
            cart.itens[position].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }
    decreaseQuantity(meuProduto) {
        console.log(meuProduto);
        let cart = this.getCart(); //pega o carrinho existente
        let position = cart.itens.findIndex(x => x.produto.id == meuProduto.id); //procura no carrinho a posicao do produto passado
        if (position != -1) { // diferente de -1: foi encontrado o produto
            cart.itens[position].quantidade--;
            if (cart.itens[position].quantidade < 1) { //caso a qtd selecionada seja < 1
                cart = this.removeProduto(meuProduto); //remove o produto
            }
        }
        this.storage.setCart(cart);
        return cart;
    }
    total() {
        let cart = this.getCart();
        let soma = 0;
        for (var i = 0; i < cart.itens.length; i++) {
            soma += cart.itens[i].produto.preco * cart.itens[i].quantidade;
        }
        return soma;
    }
};
CartService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], CartService);



/***/ }),

/***/ 4190:
/*!**************************************************!*\
  !*** ./src/services/domain/categoria.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaService": () => (/* binding */ CategoriaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/api.config */ 9038);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);





let CategoriaService = class CategoriaService {
    constructor(http) {
        this.http = http;
    }
    read() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/categorias`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((obj) => obj), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(e => this.erroTratamento(e)));
    }
    //Requisicao Assincrona -> Observable
    encontrarTodos() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/categorias`); //acesso ao BackEnd do SpringBoot
    }
    erroTratamento(e) {
        console.log('Ocorreu um erro!', true);
        return e;
    }
};
CategoriaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
CategoriaService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], CategoriaService);



/***/ }),

/***/ 928:
/*!************************************************!*\
  !*** ./src/services/domain/cliente.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteService": () => (/* binding */ ClienteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api.config */ 9038);
/* harmony import */ var _image_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image-util.service */ 2253);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ 7850);






let ClienteService = class ClienteService {
    constructor(http, storage, imageUtilService) {
        this.http = http;
        this.storage = storage;
        this.imageUtilService = imageUtilService;
    }
    encontrarPorEmail(email) {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/clientes/email?value=${email}`); //pega a url do backend para acessar o login -> Classe ClienteResource.java
    }
    encontrarPorId(id) {
        return this.http.get(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/clientes/${id}`); //pega a url do backend para acessar o login -> Classe ClienteResource.java
    }
    buscarImagemBucket(id) {
        let url = `${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bucketAWSUrl}/cp${id}.jpg`;
        return this.http.get(url, { responseType: 'blob' }); //busca a imagem do cliente no Amazon Web Service
    }
    inserir(obj) {
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/clientes`, obj, {
            observe: 'response',
            responseType: 'text'
        });
    }
    uploadFoto(foto) {
        let fotoBlob = this.imageUtilService.dataUriToBlob(foto); //coverte img base64 p blob
        let formData = new FormData();
        formData.set('file', fotoBlob, 'file.png');
        return this.http.post(`${src_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/clientes/picture`, formData, {
            observe: 'response',
            responseType: 'text'
        });
    }
};
ClienteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _image_util_service__WEBPACK_IMPORTED_MODULE_1__.ImageUtilService }
];
ClienteService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], ClienteService);



/***/ }),

/***/ 8076:
/*!************************************************!*\
  !*** ./src/services/domain/produto.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoService": () => (/* binding */ ProdutoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/api.config */ 9038);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ProdutoService = class ProdutoService {
    constructor(http) {
        this.http = http;
    }
    encontrarPorId(produto_id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/produtos/${produto_id}`);
    }
    //Requisicao Assincrona -> Observable
    encontrarPorCategoria(categoria_id, page = 0, linesPerPage = 24) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`); //acesso ao BackEnd do SpringBoot
    }
    //Pega a imagem do produto no AWS
    getImagemPequenaBucked(id) {
        let url = `${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bucketAWSUrl}/prod${id}-small.jpg`; //padrao de nome das imagens
        return this.http.get(url, { responseType: 'blob' });
    }
    getImagemBucked(id) {
        let url = `${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bucketAWSUrl}/prod${id}.jpg`; //padrao de nome das imagens
        return this.http.get(url, { responseType: 'blob' });
    }
};
ProdutoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ProdutoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], ProdutoService);



/***/ }),

/***/ 2253:
/*!********************************************!*\
  !*** ./src/services/image-util.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUtilService": () => (/* binding */ ImageUtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);

//Transforma a imagem do tipo base64 para png

let ImageUtilService = class ImageUtilService {
    dataUriToBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }
};
ImageUtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], ImageUtilService);



/***/ }),

/***/ 7850:
/*!*****************************************!*\
  !*** ./src/services/storage.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/storage_keys.config */ 2825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



//Pega o usuario q esta salvo localmente no app/browser
let StorageService = class StorageService {
    //localStorage: armazenamento local do brownser/app
    getLocalUser() {
        let user = localStorage.getItem(_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        }
        else {
            return JSON.parse(user);
        }
    }
    setLocalUser(obj) {
        if (obj == null) {
            localStorage.removeItem(_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser); //caso o usuario nao existe remove do localStorage
        }
        else {
            localStorage.setItem(_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
    //Por que é assim? Volter depois para entender
    getCart() {
        let str = localStorage.getItem(_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.cart);
        if (str != null) {
            return JSON.parse(str);
        }
        else {
            return null;
        }
    }
    setCart(obj) {
        if (obj != null) {
            localStorage.setItem(_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.cart, JSON.stringify(obj));
        }
        else {
            localStorage.removeItem(_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.cart);
        }
    }
};
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], StorageService);



/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ 3515:
/*!**************************************************************!*\
  !*** ./src/app/folder/components/inbox/inbox.component.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h3 {\n  text-align: center;\n}\n\nimg {\n  width: 100px;\n  align-self: center;\n  margin: auto;\n  display: block;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6ImluYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 7065:
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- HTML da barra lateral de navegacao -->\r\n<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header>Navegação</ion-list-header>\r\n          <ion-note>Sistema Spring Boot / Ionic 6</ion-note>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\" (click)=\"openPage(p)\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n        <!-- <ion-list id=\"labels-list\">\r\n          <ion-list-header>Labels</ion-list-header>\r\n\r\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\r\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\r\n            <ion-label>{{ label }}</ion-label>\r\n          </ion-item>\r\n        </ion-list> -->\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ 5515:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/inbox/inbox.component.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <h3>Sistema de Pedidos</h3>\n  <img src=\"assets/icon/favicon.png\" alt=\"logo\">\n\n  <form>\n    <ion-item>\n      <ion-label staked>Email</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label staked>Senha</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-button expand=\"full\">Entrar</ion-button>\n  </form>\n  <ion-button expand=\"full\">Registrar</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ 7154:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Barra superiro do Menu -->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ folder }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <strong class=\"capitalize\">Criado por Juliano Amorim</strong>\n    <p>Link <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/julianoamorim\">Github</a></p>\n  </div>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map