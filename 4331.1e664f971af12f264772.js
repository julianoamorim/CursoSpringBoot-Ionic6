(self.webpackChunkcursosprinonic=self.webpackChunkcursosprinonic||[]).push([[4331],{4331:(t,o,n)=>{"use strict";n.r(o),n.d(o,{CategoriasPageModule:()=>m});var i=n(1116),r=n(1462),e=n(8809),s=n(2782),c=n(8486),a=n(8619),u=n(2925);function l(t,o){if(1&t){const t=a.EpF();a.TgZ(0,"ion-item",5),a.NdJ("click",function(){const o=a.CHM(t).$implicit;return a.oxw().mostrarProdutos(o.id)}),a.TgZ(1,"ion-thumbnail",1),a._UZ(2,"img",6),a.qZA(),a.TgZ(3,"ion-label"),a._uU(4),a.qZA(),a.qZA()}if(2&t){const t=o.$implicit,n=a.oxw();a.xp6(2),a.hYB("src","",n.bucketUrl,"/cat",t.id,".jpg",a.LSH),a.xp6(2),a.Oqu(t.nome)}}const g=[{path:"",component:(()=>{class t{constructor(t,o,n,i,r){this.navCtrl=t,this.navParam=o,this.categoriaService=n,this.router=i,this.route=r,this.bucketUrl=c.H.bucketAWSUrl}ngOnInit(){this.categoriaService.read().subscribe(t=>{this.items=t,console.log(t)})}mostrarProdutos(t){let o=JSON.stringify(t);this.router.navigate(["../produtos",{data:o}],{relativeTo:this.route})}}return t.\u0275fac=function(o){return new(o||t)(a.Y36(e.SH),a.Y36(e.X1),a.Y36(u.n),a.Y36(s.F0),a.Y36(s.gz))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-categorias"]],decls:11,vars:2,consts:[[3,"translucent"],["slot","start"],["vertical","top","horizontal","end","edge","","slot","fixed"],["routerLink","/folder/components/carrinho","name","cart"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"src"]],template:function(t,o){1&t&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",1),a._UZ(3,"ion-menu-button"),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5,"Categorias"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content"),a.TgZ(7,"ion-fab",2),a.TgZ(8,"ion-fab-button"),a._UZ(9,"ion-icon",3),a.qZA(),a.qZA(),a.YNc(10,l,5,3,"ion-item",4),a.qZA()),2&t&&(a.Q6J("translucent",!0),a.xp6(10),a.Q6J("ngForOf",o.items))},directives:[e.Gu,e.sr,e.Sm,e.fG,e.wd,e.W2,e.IJ,e.W4,e.gu,e.YI,s.rH,i.sg,e.Ie,e.Bs,e.Q$],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,r.u5,e.Pc,p]]}),t})()}}]);