(self.webpackChunkcursosprinonic=self.webpackChunkcursosprinonic||[]).push([[2682],{2682:(o,e,r)=>{"use strict";r.r(e),r.d(e,{SignupPageModule:()=>y});var t=r(1116),n=r(1462),i=r(8809),a=r(2782),s=r(4762),u=r(8619),l=r(8486),c=r(2693);let d=(()=>{class o{constructor(o){this.http=o}encontrarTodos(o){return this.http.get(`${l.H.baseUrl}/estados/${o}/cidades`)}erroTratamento(o){return console.log("Ocorreu um erro!",!0),o}}return o.\u0275fac=function(e){return new(e||o)(u.LFG(c.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac}),o})(),p=(()=>{class o{constructor(o){this.http=o}encontrarTodos(){return this.http.get(`${l.H.baseUrl}/estados`)}erroTratamento(o){return console.log("Ocorreu um erro!",!0),o}}return o.\u0275fac=function(e){return new(e||o)(u.LFG(c.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac}),o})();var m=r(8171);function g(o,e){1&o&&(u.TgZ(0,"p",26),u._uU(1,"Valor inv\xe1lido"),u.qZA())}function Z(o,e){1&o&&(u.TgZ(0,"p",26),u._uU(1,"Valor inv\xe1lido"),u.qZA())}function f(o,e){1&o&&(u.TgZ(0,"p",26),u._uU(1,"Valor inv\xe1lido"),u.qZA())}function h(o,e){1&o&&(u.TgZ(0,"p",26),u._uU(1,"Valor inv\xe1lido"),u.qZA())}function q(o,e){1&o&&(u.TgZ(0,"p",26),u._uU(1,"Valor inv\xe1lido"),u.qZA())}function T(o,e){1&o&&(u.TgZ(0,"p",26),u._uU(1,"Valor inv\xe1lido"),u.qZA())}function A(o,e){1&o&&(u.TgZ(0,"p",26),u._uU(1,"Valor inv\xe1lido"),u.qZA())}function U(o,e){1&o&&(u.TgZ(0,"p",26),u._uU(1,"Valor inv\xe1lido"),u.qZA())}function _(o,e){if(1&o&&(u.TgZ(0,"ion-select-option",27),u._uU(1),u.qZA()),2&o){const o=e.$implicit;u.Q6J("value",o.id),u.xp6(1),u.Oqu(o.nome)}}function C(o,e){if(1&o&&(u.TgZ(0,"ion-select-option",27),u._uU(1),u.qZA()),2&o){const o=e.$implicit;u.Q6J("value",o.id),u.xp6(1),u.Oqu(o.nome)}}const v=[{path:"",component:(()=>{class o{constructor(o,e,r,t,i,a,s,u,l){this.navParam=o,this.navCtrl=e,this.formBuilder=r,this.cidadeService=t,this.estadoService=i,this.clienteService=a,this.alertCtrl=s,this.loadingCtrl=u,this.menu=l,this.isLoading=!1,this.grupoFormulario=this.formBuilder.group({nome:["",[n.kI.required,n.kI.minLength(5),n.kI.maxLength(120)]],email:["",[n.kI.required,n.kI.email]],tipo:["1",[n.kI.required]],cpfOuCnpj:["06134596280",[n.kI.required,n.kI.minLength(11),n.kI.maxLength(14)]],senha:["",[n.kI.required]],logradouro:["Rua Via",[n.kI.required]],numero:["25",[n.kI.required]],complemento:["Apto 3",[]],bairro:["Copacabana",[]],cep:["10828333",[n.kI.required]],telefone1:["977261827",[n.kI.required]],telefone2:["",[]],telefone3:["",[]],estadoId:[null,[n.kI.required]],cidadeId:[null,[n.kI.required]]})}ionViewWillEnter(){this.menu.swipeGesture(!1)}ionViewDidLeave(){this.menu.swipeGesture(!0)}ngOnInit(){this.estadoService.encontrarTodos().subscribe(o=>{this.estados=o,this.grupoFormulario.controls.estadoId.setValue(this.estados[0].id),this.updateCidades()},o=>{})}updateCidades(){let o=this.grupoFormulario.value.estadoId;null!=o&&this.cidadeService.encontrarTodos(o).subscribe(o=>{this.cidades=o,this.grupoFormulario.controls.cidadeId.setValue(null)},o=>{})}cadastrarUsuario(){this.showLoader(),this.clienteService.inserir(this.grupoFormulario.value).subscribe(o=>{this.showInsertOk()},o=>{})}showInsertOk(){return(0,s.mG)(this,void 0,void 0,function*(){const o=yield this.alertCtrl.create({header:"Sucesso!",message:"Cadastro efetuado com sucesso!\n Verifique seu email!",backdropDismiss:!1,buttons:[{text:"Ok",handler:()=>{this.navCtrl.navigateRoot("folder/components/home")}}]});yield o.present()})}showLoader(){return(0,s.mG)(this,void 0,void 0,function*(){this.isLoading=!0;const o=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Enviando Email!   Aguarde...",duration:2e3});yield o.present().then(()=>{console.log("carregando"),this.isLoading||o.dismiss().then(()=>console.log("Dismiss"))})})}}return o.\u0275fac=function(e){return new(e||o)(u.Y36(i.X1),u.Y36(i.SH),u.Y36(n.qu),u.Y36(d),u.Y36(p),u.Y36(m.$),u.Y36(i.Br),u.Y36(i.HT),u.Y36(i._q))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-signup"]],decls:88,vars:13,consts:[[3,"translucent"],["slot","start"],["defaultHref","home"],["padding",""],[3,"formGroup","ngSubmit"],["stacked",""],["formControlName","nome","type","text"],["class","danger","margin-left","",4,"ngIf"],["formControlName","email","type","text"],["formControlName","tipo"],["checked","true","value","1"],["value","2"],["formControlName","cpfOuCnpj","type","text"],["formControlName","senha","type","password"],["formControlName","logradouro","type","text"],["formControlName","numero","type","text"],["formControlName","complemento","type","text"],["formControlName","bairro","type","text"],["formControlName","cep","type","text"],["formControlName","telefone1","type","text"],["formControlName","telefone2","type","text"],["formControlName","telefone3","type","text"],["formControlName","estadoId",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","cidadeId"],["expand","full","type","submit",3,"disabled"],["margin-left","",1,"danger"],[3,"value"]],template:function(o,e){1&o&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",1),u._UZ(3,"ion-back-button",2),u.qZA(),u.TgZ(4,"ion-title"),u._uU(5,"Cadastrar"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(6,"ion-content",3),u.TgZ(7,"form",4),u.NdJ("ngSubmit",function(o){return e.cadastrarUsuario(),o.preventDefault()}),u.TgZ(8,"ion-item"),u.TgZ(9,"ion-label",5),u._uU(10,"Nome*"),u.qZA(),u._UZ(11,"ion-input",6),u.qZA(),u.YNc(12,g,2,0,"p",7),u.TgZ(13,"ion-item"),u.TgZ(14,"ion-label",5),u._uU(15,"Email*"),u.qZA(),u._UZ(16,"ion-input",8),u.qZA(),u.YNc(17,Z,2,0,"p",7),u.TgZ(18,"ion-radio-group",9),u.TgZ(19,"ion-list-header"),u.TgZ(20,"h3"),u._uU(21,"Tipo de cliente:"),u.qZA(),u.qZA(),u.TgZ(22,"ion-item"),u.TgZ(23,"ion-label"),u._uU(24,"Pessoa f\xedsica"),u.qZA(),u._UZ(25,"ion-radio",10),u.qZA(),u.TgZ(26,"ion-item"),u.TgZ(27,"ion-label"),u._uU(28,"Pessoa jur\xeddica"),u.qZA(),u._UZ(29,"ion-radio",11),u.qZA(),u.qZA(),u.TgZ(30,"ion-item"),u.TgZ(31,"ion-label",5),u._uU(32,"CPF ou CNPJ"),u.qZA(),u._UZ(33,"ion-input",12),u.qZA(),u.YNc(34,f,2,0,"p",7),u.TgZ(35,"ion-item"),u.TgZ(36,"ion-label",5),u._uU(37,"Senha*"),u.qZA(),u._UZ(38,"ion-input",13),u.qZA(),u.YNc(39,h,2,0,"p",7),u.TgZ(40,"ion-item"),u.TgZ(41,"ion-label",5),u._uU(42,"Logradouro*"),u.qZA(),u._UZ(43,"ion-input",14),u.qZA(),u.YNc(44,q,2,0,"p",7),u.TgZ(45,"ion-item"),u.TgZ(46,"ion-label",5),u._uU(47,"N\xfamero*"),u.qZA(),u._UZ(48,"ion-input",15),u.qZA(),u.YNc(49,T,2,0,"p",7),u.TgZ(50,"ion-item"),u.TgZ(51,"ion-label",5),u._uU(52,"Complemento"),u.qZA(),u._UZ(53,"ion-input",16),u.qZA(),u.TgZ(54,"ion-item"),u.TgZ(55,"ion-label",5),u._uU(56,"Bairro"),u.qZA(),u._UZ(57,"ion-input",17),u.qZA(),u.TgZ(58,"ion-item"),u.TgZ(59,"ion-label",5),u._uU(60,"CEP*"),u.qZA(),u._UZ(61,"ion-input",18),u.qZA(),u.YNc(62,A,2,0,"p",7),u.TgZ(63,"ion-item"),u.TgZ(64,"ion-label",5),u._uU(65,"Telefone 1*"),u.qZA(),u._UZ(66,"ion-input",19),u.qZA(),u.YNc(67,U,2,0,"p",7),u.TgZ(68,"ion-item"),u.TgZ(69,"ion-label",5),u._uU(70,"Telefone 2"),u.qZA(),u._UZ(71,"ion-input",20),u.qZA(),u.TgZ(72,"ion-item"),u.TgZ(73,"ion-label",5),u._uU(74,"Telefone 3"),u.qZA(),u._UZ(75,"ion-input",21),u.qZA(),u.TgZ(76,"ion-item"),u.TgZ(77,"ion-label",5),u._uU(78,"Estado*"),u.qZA(),u.TgZ(79,"ion-select",22),u.NdJ("ionChange",function(){return e.updateCidades()}),u.YNc(80,_,2,2,"ion-select-option",23),u.qZA(),u.qZA(),u.TgZ(81,"ion-item"),u.TgZ(82,"ion-label",5),u._uU(83,"Cidade*"),u.qZA(),u.TgZ(84,"ion-select",24),u.YNc(85,C,2,2,"ion-select-option",23),u.qZA(),u.qZA(),u.TgZ(86,"ion-button",25),u._uU(87,"Criar conta"),u.qZA(),u.qZA(),u.qZA()),2&o&&(u.Q6J("translucent",!0),u.xp6(7),u.Q6J("formGroup",e.grupoFormulario),u.xp6(5),u.Q6J("ngIf",e.grupoFormulario.controls.nome.dirty&&e.grupoFormulario.controls.nome.errors),u.xp6(5),u.Q6J("ngIf",e.grupoFormulario.controls.email.dirty&&e.grupoFormulario.controls.email.errors),u.xp6(17),u.Q6J("ngIf",e.grupoFormulario.controls.cpfOuCnpj.dirty&&e.grupoFormulario.controls.cpfOuCnpj.errors),u.xp6(5),u.Q6J("ngIf",e.grupoFormulario.controls.senha.dirty&&e.grupoFormulario.controls.senha.errors),u.xp6(5),u.Q6J("ngIf",e.grupoFormulario.controls.logradouro.dirty&&e.grupoFormulario.controls.logradouro.errors),u.xp6(5),u.Q6J("ngIf",e.grupoFormulario.controls.numero.dirty&&e.grupoFormulario.controls.numero.errors),u.xp6(13),u.Q6J("ngIf",e.grupoFormulario.controls.cep.dirty&&e.grupoFormulario.controls.cep.errors),u.xp6(5),u.Q6J("ngIf",e.grupoFormulario.controls.telefone1.dirty&&e.grupoFormulario.controls.telefone1.errors),u.xp6(13),u.Q6J("ngForOf",e.estados),u.xp6(5),u.Q6J("ngForOf",e.cidades),u.xp6(1),u.Q6J("disabled",e.grupoFormulario.invalid))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.W2,n._Y,n.JL,n.sg,i.Ie,i.Q$,i.pK,i.j9,n.JJ,n.u,t.O5,i.se,i.QI,i.yh,i.B7,i.U5,i.t9,t.sg,i.YG,i.n0],styles:[".danger[_ngcontent-%COMP%]{color:red}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[a.Bz.forChild(v)],a.Bz]}),o})();var I=r(5311);let y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({providers:[d,p],imports:[[t.ez,n.u5,i.Pc,b,n.UX,I.a]]}),o})()}}]);