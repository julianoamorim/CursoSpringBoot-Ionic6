(self["webpackChunkcursosprinonic"] = self["webpackChunkcursosprinonic"] || []).push([["src_app_folder_components_signup_signup_module_ts"],{

/***/ 5675:
/*!*******************************************************************!*\
  !*** ./src/app/folder/components/signup/signup-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 8912);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 8257:
/*!***********************************************************!*\
  !*** ./src/app/folder/components/signup/signup.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 5675);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 8912);
/* harmony import */ var _home_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home-routing.module */ 279);
/* harmony import */ var src_services_domain_cidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/domain/cidade.service */ 9774);
/* harmony import */ var src_services_domain_estado_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/domain/estado.service */ 131);










let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _home_home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage],
        providers: [
            src_services_domain_cidade_service__WEBPACK_IMPORTED_MODULE_3__.CidadeService,
            src_services_domain_estado_service__WEBPACK_IMPORTED_MODULE_4__.EstadoService
        ]
    })
], SignupPageModule);



/***/ }),

/***/ 8912:
/*!*********************************************************!*\
  !*** ./src/app/folder/components/signup/signup.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 3757);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 2361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_services_domain_cidade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/domain/cidade.service */ 9774);
/* harmony import */ var src_services_domain_estado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/domain/estado.service */ 131);
/* harmony import */ var src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/domain/cliente.service */ 928);









let SignupPage = class SignupPage {
    constructor(navParam, navCtrl, formBuilder, cidadeService, estadoService, clienteService, alertCtrl, loadingCtrl, menu) {
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.cidadeService = cidadeService;
        this.estadoService = estadoService;
        this.clienteService = clienteService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.isLoading = false; //variavel para verificar se a pagina esta carregando ou nao
        //Esta tendo erro ao acessar os "estados" no backend, necessario habilitar o HTTPS no Spring Boot, trabalhoso
        this.grupoFormulario = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(120)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            tipo: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            cpfOuCnpj: ['06134596280', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(14)]],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            logradouro: ['Rua Via', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            numero: ['25', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            complemento: ['Apto 3', []],
            bairro: ['Copacabana', []],
            cep: ['10828333', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            telefone1: ['977261827', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            telefone2: ['', []],
            telefone3: ['', []],
            estadoId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            cidadeId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
        });
    }
    ionViewWillEnter() {
        this.menu.swipeGesture(false);
    }
    ionViewDidLeave() {
        this.menu.swipeGesture(true);
    }
    ngOnInit() {
        this.estadoService.encontrarTodos()
            .subscribe(resposta => {
            this.estados = resposta;
            this.grupoFormulario.controls.estadoId.setValue(this.estados[0].id); //pega o primeiro estado da lista
            this.updateCidades(); //busca as cidades do estado selecionado
        }, error => { });
    }
    updateCidades() {
        let estado_id = this.grupoFormulario.value.estadoId;
        if (estado_id != null) { //corrige o alerta na tela de estado null
            this.cidadeService.encontrarTodos(estado_id)
                .subscribe(response => {
                this.cidades = response;
                this.grupoFormulario.controls.cidadeId.setValue(null); //tira a seleçao da caixa da cidade selecionada
            }, error => { });
        }
    }
    cadastrarUsuario() {
        this.showLoader();
        this.clienteService.inserir(this.grupoFormulario.value)
            .subscribe(response => {
            this.showInsertOk();
        }, error => { });
    }
    showInsertOk() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Sucesso!',
                message: 'Cadastro efetuado com sucesso!\n Verifique seu email!',
                backdropDismiss: false,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.navCtrl.navigateRoot('folder/components/home'); //desimpilhar a pagina e volta para o login
                        }
                    }]
            });
            yield alert.present();
        });
    }
    showLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Enviando Email!   Aguarde...',
                duration: 2000
            });
            yield loading.present().then(() => {
                console.log('carregando');
                if (!this.isLoading)
                    loading.dismiss().then(() => console.log('Dismiss'));
            });
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_services_domain_cidade_service__WEBPACK_IMPORTED_MODULE_2__.CidadeService },
    { type: src_services_domain_estado_service__WEBPACK_IMPORTED_MODULE_3__.EstadoService },
    { type: src_services_domain_cliente_service__WEBPACK_IMPORTED_MODULE_4__.ClienteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 9774:
/*!***********************************************!*\
  !*** ./src/services/domain/cidade.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CidadeService": () => (/* binding */ CidadeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/api.config */ 9038);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CidadeService = class CidadeService {
    constructor(http) {
        this.http = http;
    }
    //Requisicao Assincrona -> Observable
    encontrarTodos(estado_id) {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/estados/${estado_id}/cidades`); //acesso ao BackEnd do SpringBoot
    }
    erroTratamento(e) {
        console.log('Ocorreu um erro!', true);
        return e;
    }
};
CidadeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CidadeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], CidadeService);



/***/ }),

/***/ 131:
/*!***********************************************!*\
  !*** ./src/services/domain/estado.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadoService": () => (/* binding */ EstadoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/api.config */ 9038);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EstadoService = class EstadoService {
    constructor(http) {
        this.http = http;
    }
    //Requisicao Assincrona -> Observable
    encontrarTodos() {
        return this.http.get(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/estados`); //acesso ao BackEnd do SpringBoot
    }
    erroTratamento(e) {
        console.log('Ocorreu um erro!', true);
        return e;
    }
};
EstadoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
EstadoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], EstadoService);



/***/ }),

/***/ 2361:
/*!***********************************************************!*\
  !*** ./src/app/folder/components/signup/signup.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".danger {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0FBQUoiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZGFuZ2Vye1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 3757:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/components/signup/signup.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Barra superiro do Menu -->\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button> <!-- botao de voltar, colocar o nome da pagina, n e necessario criar funcao --> \r\n    </ion-buttons>\r\n    <ion-title>Cadastrar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- tirado diretamente do GitHub do curso, n foi explicado -->\r\n<ion-content padding>\r\n  <form [formGroup]=\"grupoFormulario\" (ngSubmit)=\"cadastrarUsuario(); $event.preventDefault()\">\r\n    <ion-item>\r\n      <ion-label stacked>Nome*</ion-label>\r\n      <ion-input formControlName=\"nome\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <p class=\"danger\" *ngIf=\"grupoFormulario.controls.nome.dirty && grupoFormulario.controls.nome.errors\" margin-left>Valor inválido</p> <!-- em caso de erro de validacao -->\r\n    <ion-item>\r\n      <ion-label stacked>Email*</ion-label>\r\n      <ion-input formControlName=\"email\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <p class=\"danger\" *ngIf=\"grupoFormulario.controls.email.dirty && grupoFormulario.controls.email.errors\" margin-left>Valor inválido</p>\r\n    <ion-radio-group formControlName=\"tipo\">\r\n      <ion-list-header>\r\n        <h3>Tipo de cliente:</h3>\r\n      </ion-list-header>\r\n      <ion-item>\r\n        <ion-label>Pessoa física</ion-label>\r\n        <ion-radio checked=\"true\" value=\"1\"></ion-radio>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Pessoa jurídica</ion-label>\r\n        <ion-radio value=\"2\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n\r\n    <ion-item>\r\n      <ion-label stacked>CPF ou CNPJ</ion-label>\r\n      <ion-input formControlName=\"cpfOuCnpj\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <p class=\"danger\" *ngIf=\"grupoFormulario.controls.cpfOuCnpj.dirty && grupoFormulario.controls.cpfOuCnpj.errors\" margin-left>Valor inválido</p>\r\n    <ion-item>\r\n      <ion-label stacked>Senha*</ion-label>\r\n      <ion-input formControlName=\"senha\" type=\"password\"></ion-input>\r\n    </ion-item> \r\n    <p class=\"danger\" *ngIf=\"grupoFormulario.controls.senha.dirty && grupoFormulario.controls.senha.errors\" margin-left>Valor inválido</p>\r\n    <ion-item>\r\n      <ion-label stacked>Logradouro*</ion-label>\r\n      <ion-input formControlName=\"logradouro\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <p class=\"danger\" *ngIf=\"grupoFormulario.controls.logradouro.dirty && grupoFormulario.controls.logradouro.errors\" margin-left>Valor inválido</p>\r\n    <ion-item>\r\n      <ion-label stacked>Número*</ion-label>\r\n      <ion-input formControlName=\"numero\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <p class=\"danger\" *ngIf=\"grupoFormulario.controls.numero.dirty && grupoFormulario.controls.numero.errors\" margin-left>Valor inválido</p>\r\n    <ion-item>\r\n      <ion-label stacked>Complemento</ion-label>\r\n      <ion-input formControlName=\"complemento\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label stacked>Bairro</ion-label>\r\n      <ion-input formControlName=\"bairro\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label stacked>CEP*</ion-label>\r\n      <ion-input formControlName=\"cep\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <p class=\"danger\" *ngIf=\"grupoFormulario.controls.cep.dirty && grupoFormulario.controls.cep.errors\" margin-left>Valor inválido</p>\r\n    <ion-item>\r\n      <ion-label stacked>Telefone 1*</ion-label>\r\n      <ion-input formControlName=\"telefone1\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <p class=\"danger\" *ngIf=\"grupoFormulario.controls.telefone1.dirty && grupoFormulario.controls.telefone1.errors\" margin-left>Valor inválido</p>\r\n    <ion-item>\r\n      <ion-label stacked>Telefone 2</ion-label>\r\n      <ion-input formControlName=\"telefone2\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label stacked>Telefone 3</ion-label>\r\n      <ion-input formControlName=\"telefone3\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label stacked>Estado*</ion-label>\r\n      <ion-select formControlName=\"estadoId\" (ionChange)=\"updateCidades()\"> <!-- ionChange: metodo q muda as ciadades qdo muda o estado -->\r\n        <ion-select-option *ngFor=\"let estado of estados\" [value]=\"estado.id\" >{{estado.nome}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label stacked>Cidade*</ion-label>\r\n      <ion-select formControlName=\"cidadeId\">\r\n        <ion-select-option *ngFor=\"let cidade of cidades\" [value]=\"cidade.id\">{{cidade.nome}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"grupoFormulario.invalid\">Criar conta</ion-button>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_folder_components_signup_signup_module_ts.js.map