(self.webpackChunkcursosprinonic=self.webpackChunkcursosprinonic||[]).push([[8592],{8232:(t,e,n)=>{"use strict";n.d(e,{c:()=>r});var i=n(2322),s=n(3320),o=n(8520);const r=(t,e)=>{let n,r;const a=(t,i,s)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(l(),c(o,s)):l()},c=(t,e)=>{n=t,r||(r=n);const s=n;(0,i.c)(()=>s.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,i.c)(()=>e.classList.remove("ion-activated")),t&&r!==n&&n.click(),n=void 0};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,s.a),onMove:t=>a(t.currentX,t.currentY,s.b),onEnd:()=>{l(!0),(0,s.h)(),r=void 0}})}},4068:(t,e,n)=>{"use strict";n.d(e,{g:()=>i});const i=(t,e,n,i,r)=>o(t[1],e[1],n[1],i[1],r).map(o=>s(t[0],e[0],n[0],i[0],o)),s=(t,e,n,i,s)=>s*(3*e*Math.pow(s-1,2)+s*(-3*n*s+3*n+i*s))-t*Math.pow(s-1,3),o=(t,e,n,i,s)=>r((i-=s)-3*(n-=s)+3*(e-=s)-(t-=s),3*n-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),r=(t,e,n,i)=>{if(0===t)return((t,e,n)=>{const i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]})(e,n,i);const s=(3*(n/=t)-(e/=t)*e)/3,o=(2*e*e*e-9*e*n+27*(i/=t))/27;if(0===s)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-s),-Math.sqrt(-s)];const r=Math.pow(o/2,2)+Math.pow(s/3,3);if(0===r)return[Math.pow(o/2,.5)-e/3];if(r>0)return[Math.pow(-o/2+Math.sqrt(r),1/3)-Math.pow(o/2+Math.sqrt(r),1/3)-e/3];const a=Math.sqrt(Math.pow(-s/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-s/3,3)))),l=2*Math.pow(a,1/3);return[l*Math.cos(c/3)-e/3,l*Math.cos((c+2*Math.PI)/3)-e/3,l*Math.cos((c+4*Math.PI)/3)-e/3]}},9498:(t,e,n)=>{"use strict";n.d(e,{a:()=>s,d:()=>o});var i=n(1843);const s=async(t,e,n,s,o)=>{if(t)return t.attachViewToDom(e,n,o,s);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return s&&s.forEach(t=>r.classList.add(t)),o&&Object.assign(r,o),e.appendChild(r),await new Promise(t=>(0,i.c)(r,t)),r},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},3320:(t,e,n)=>{"use strict";n.d(e,{a:()=>o,b:()=>r,c:()=>s,d:()=>c,h:()=>a});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{i.selection()},o=()=>{i.selectionStart()},r=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},7942:(t,e,n)=>{"use strict";n.d(e,{s:()=>i});const i=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!r()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(t=>{const n=e.querySelectorAll(t);for(let i=n.length-1;i>=0;i--){const t=n[i];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const r=o(t);for(let e=0;e<r.length;e++)s(r[e])}});const i=o(e);for(let t=0;t<i.length;t++)s(i[t]);const a=document.createElement("div");a.appendChild(e);const l=a.querySelector("div");return null!==l?l.innerHTML:a.innerHTML}catch(e){return console.error(e),""}},s=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),i=e.name;if(!a.includes(i.toLowerCase())){t.removeAttribute(i);continue}const s=e.value;null!=s&&s.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=o(t);for(let n=0;n<e.length;n++)s(e[n])},o=t=>null!=t.children?t.children:t.childNodes,r=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},9926:(t,e,n)=>{"use strict";n.d(e,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",s=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,s=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},4843:(t,e,n)=>{"use strict";n.d(e,{c:()=>s,g:()=>o,h:()=>i,o:()=>a});const i=(t,e)=>null!==e.closest(t),s=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n,i)}return!1}},5311:(t,e,n)=>{"use strict";n.d(e,{a:()=>u});var i=n(2782),s=n(4762),o=n(8619),r=n(8809),a=n(2663),c=n(1462);const l=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.navCtrl=t,this.menu=e,this.auth=n,this.loadingCtrl=i,this.creds={email:"",senha:""},this.isLoading=!1}ionViewWillEnter(){this.menu.enable(!1)}ionViewDidLeave(){this.menu.enable(!0)}ionViewDidEnter(){this.auth.recarrecarToken().subscribe(t=>{this.auth.sucessoLogin(t.headers.get("Authorization")),this.navCtrl.navigateRoot("folder/components/categorias")},t=>{})}login(){this.showLoader(),this.auth.autenticado(this.creds).subscribe(t=>{this.auth.sucessoLogin(t.headers.get("Authorization")),this.navCtrl.navigateRoot("folder/components/categorias")},t=>{}),this.isLoading=!1}signup(){this.navCtrl.navigateRoot("folder/components/signup")}showLoader(){return(0,s.mG)(this,void 0,void 0,function*(){this.isLoading=!0;const t=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Aguarde...",duration:2e4});yield t.present().then(()=>{console.log("carregando"),this.isLoading||t.dismiss().then(()=>console.log("Dismiss"))})})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(r.SH),o.Y36(r._q),o.Y36(a.e),o.Y36(r.HT))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],decls:23,vars:3,consts:[[3,"translucent"],["slot","start"],["padding",""],["src","assets/icon/favicon.png","alt","logo"],["staked",""],["name","email","type","text",3,"ngModel","ngModelChange"],["name","senha","type","password",3,"ngModel","ngModelChange"],["expand","full",3,"click"],["expand","full","color","medium",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar"),o.TgZ(2,"ion-buttons",1),o._UZ(3,"ion-menu-button"),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"Home"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(6,"ion-content",2),o.TgZ(7,"h3"),o._uU(8,"Sistema de Pedidos"),o.qZA(),o._UZ(9,"img",3),o.TgZ(10,"form"),o.TgZ(11,"ion-item"),o.TgZ(12,"ion-label",4),o._uU(13,"Email: "),o.qZA(),o.TgZ(14,"ion-input",5),o.NdJ("ngModelChange",function(t){return e.creds.email=t}),o.qZA(),o.qZA(),o.TgZ(15,"ion-item"),o.TgZ(16,"ion-label",4),o._uU(17,"Senha: "),o.qZA(),o.TgZ(18,"ion-input",6),o.NdJ("ngModelChange",function(t){return e.creds.senha=t}),o.qZA(),o.qZA(),o.TgZ(19,"ion-button",7),o.NdJ("click",function(){return e.login()}),o._uU(20,"Entrar"),o.qZA(),o.qZA(),o.TgZ(21,"ion-button",8),o.NdJ("click",function(){return e.signup()}),o._uU(22,"Registrar"),o.qZA(),o.qZA()),2&t&&(o.Q6J("translucent",!0),o.xp6(14),o.Q6J("ngModel",e.creds.email),o.xp6(4),o.Q6J("ngModel",e.creds.senha))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.W2,c._Y,c.JL,c.F,r.Ie,r.Q$,r.pK,r.j9,c.JJ,c.On,r.YG],styles:["h3[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{width:100px;align-self:center;margin:auto;display:block;padding:10px}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.Bz.forChild(l)],i.Bz]}),t})()}}]);