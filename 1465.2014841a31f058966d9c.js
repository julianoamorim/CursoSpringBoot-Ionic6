(self.webpackChunkcursosprinonic=self.webpackChunkcursosprinonic||[]).push([[1465],{1465:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ProdutosPageModule:()=>p});var o=i(1116),n=i(1462),r=i(8809),s=i(2782),a=i(4762),c=i(8486),l=i(8619),u=i(9153);function g(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"ion-item",9),l.NdJ("click",function(){const e=l.CHM(t).$implicit;return l.oxw().mostrarDetalhe(e.id)}),l.TgZ(1,"ion-thumbnail",1),l._UZ(2,"img",10),l.qZA(),l.TgZ(3,"ion-label"),l._uU(4),l.qZA(),l.TgZ(5,"ion-label"),l._uU(6),l.ALo(7,"currency"),l.qZA(),l.qZA()}if(2&t){const t=e.$implicit;l.xp6(2),l.Q6J("src",t.imageUrl||"assets/imgs/prod.jpg",l.LSH),l.xp6(2),l.Oqu(t.nome),l.xp6(2),l.Oqu(l.lcZ(7,3,t.preco))}}const d=[{path:"",component:(()=>{class t{constructor(t,e,i,o,n,r,s){this.navCtrl=t,this.navParams=e,this.produtoService=i,this.activateRoute=o,this.router=n,this.route=r,this.loadingCtrl=s,this.page=0,this.items=[]}ngOnInit(){this.carregarDados()}carregarDados(){let t=this.activateRoute.snapshot.paramMap.get("data");this.showLoader(),this.produtoService.encontrarPorCategoria(t,this.page,10).subscribe(t=>{let e=this.items.length;this.items=this.items.concat(t.content),this.stopLoader(),this.carregarImagemUrls(e,this.items.length-1),console.log(this.page),console.log(this.items)},t=>{})}carregarImagemUrls(t,e){for(var i=t;i<e;i++){let t=this.items[i];this.produtoService.getImagemPequenaBucked(t.id).subscribe(e=>{t.imageUrl=`${c.H.bucketAWSUrl}/prod${t.id}-small.jpg`},t=>{})}}mostrarDetalhe(t){let e=JSON.stringify(t);this.router.navigate(["../produto-detalhado",{data:e}],{relativeTo:this.route})}showLoader(){return(0,a.mG)(this,void 0,void 0,function*(){const t=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Aguarde...",duration:500});yield t.present(),yield t.onDidDismiss()})}stopLoader(){}doRefresh(t){this.page=0,this.items=[],this.carregarDados(),setTimeout(()=>{t.target.complete()},1e3)}loadData(t){this.page++,this.carregarDados(),setTimeout(()=>{console.log("Done"),t.target.complete()},500)}toggleInfiniteScroll(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(r.SH),l.Y36(r.X1),l.Y36(u.m),l.Y36(s.gz),l.Y36(s.F0),l.Y36(s.gz),l.Y36(r.HT))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-produtos"]],viewQuery:function(t,e){if(1&t&&l.Gf(r.ju,5),2&t){let t;l.iGM(t=l.CRH())&&(e.infiniteScroll=t.first)}},features:[l._Bn([r.X1])],decls:15,vars:2,consts:[[3,"translucent"],["slot","start"],["defaultHref","categorias"],["slot","fixed",3,"ionRefresh"],["vertical","top","horizontal","end","edge","","slot","fixed"],["routerLink","/folder/components/carrinho","name","cart"],[3,"click",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."],[3,"click"],[3,"src"]],template:function(t,e){1&t&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-buttons",1),l._UZ(3,"ion-back-button",2),l.qZA(),l.TgZ(4,"ion-title"),l._uU(5,"Produtos"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"ion-content"),l.TgZ(7,"ion-refresher",3),l.NdJ("ionRefresh",function(t){return e.doRefresh(t)}),l._UZ(8,"ion-refresher-content"),l.qZA(),l.TgZ(9,"ion-fab",4),l.TgZ(10,"ion-fab-button"),l._UZ(11,"ion-icon",5),l.qZA(),l.qZA(),l.YNc(12,g,8,5,"ion-item",6),l.TgZ(13,"ion-infinite-scroll",7),l.NdJ("ionInfinite",function(t){return e.loadData(t)}),l._UZ(14,"ion-infinite-scroll-content",8),l.qZA(),l.qZA()),2&t&&(l.Q6J("translucent",!0),l.xp6(12),l.Q6J("ngForOf",e.items))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.W2,r.nJ,r.Wo,r.IJ,r.W4,r.gu,r.YI,s.rH,o.sg,r.ju,r.MB,r.Ie,r.Bs,r.Q$],pipes:[o.H9],styles:["ion-icon[_ngcontent-%COMP%]{font-size:300%;margin-left:15px;color:blue}"]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.Bz.forChild(d)],s.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,n.u5,r.Pc,h]]}),t})()}}]);