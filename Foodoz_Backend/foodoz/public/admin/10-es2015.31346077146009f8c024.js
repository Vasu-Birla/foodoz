(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{mxCH:function(e,t,n){"use strict";n.r(t);var r=n("vTDv"),i=n("tyNb"),l=n("fXoL");let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["deliveries"]],decls:1,vars:0,template:function(e,t){1&e&&l["\u0275\u0275element"](0,"router-outlet")},directives:[i.h],encapsulation:2}),e})();var d=n("YPVp"),s=n("CdOr"),o=n("VGB5"),p=n("aceb"),c=n("RS3s"),u=n("sYmb");let m=(()=>{class e extends d.a{constructor(e,t,n){super(t),this.client=e,this.coreService=t,this.route=n,this.columns=[{key:"user",translation_key:"DELIVERY.FIELDS.USER.LABEL",column:{title:"",type:"string",valuePrepareFunction:e=>{var t;return null===(t=e)||void 0===t?void 0:t.mobile_number}}},{key:"is_online",translation_key:"DELIVERY.FIELDS.IS_ONLINE.LABEL",column:{title:"",type:"string",filter:!1}},{key:"assigned",translation_key:"DELIVERY.FIELDS.ASSIGNED.LABEL",column:{title:"",type:"string",filter:!1}}],this.editPageUrl="pages/deliveries/edit"}ngOnInit(){super.ngOnInit(this.client.getBaseEndpoint())}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["list"]],features:[l["\u0275\u0275InheritDefinitionFeature"]],decls:6,vars:6,consts:[["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"settings","source","delete","edit"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"nb-card-body",0),l["\u0275\u0275elementStart"](5,"ng2-smart-table",1),l["\u0275\u0275listener"]("delete",(function(e){return t.onDeleteConfirm(e)}))("edit",(function(e){return t.edit(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](3,4,"DELIVERY.LABELS.LIST")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("nbSpinner",t.loading),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[p.o,p.q,p.n,p.bb,c.b],pipes:[u.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),e})();var v=n("lJxs");n("HxAg");class E{}var h=n("uotl");class g extends h.a{constructor(){super(...arguments),this.assigned=0,this.is_online=0,this.is_verified=0}}class b extends class{}{}var S=n("QNOW"),y=n("3Pt+"),I=n("ofXK");function f(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",24),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function x(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",24),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function L(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",24),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function R(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"nb-card"),l["\u0275\u0275elementStart"](3,"nb-card-header"),l["\u0275\u0275text"](4),l["\u0275\u0275pipe"](5,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"nb-card-body"),l["\u0275\u0275elementStart"](7,"div",6),l["\u0275\u0275elementStart"](8,"label"),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"input",18,19),l["\u0275\u0275listener"]("ngModelChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().deliveryRequest.email=t})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"label",13),l["\u0275\u0275text"](14),l["\u0275\u0275pipe"](15,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](16,f,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",6),l["\u0275\u0275elementStart"](18,"label"),l["\u0275\u0275text"](19),l["\u0275\u0275pipe"](20,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"input",20,21),l["\u0275\u0275listener"]("ngModelChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().deliveryRequest.mobile_number=t})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"label",13),l["\u0275\u0275text"](24),l["\u0275\u0275pipe"](25,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](26,x,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](27,"div",6),l["\u0275\u0275elementStart"](28,"label"),l["\u0275\u0275text"](29),l["\u0275\u0275pipe"](30,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](31,"input",22,23),l["\u0275\u0275listener"]("ngModelChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().deliveryRequest.password=t})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](33,"label",13),l["\u0275\u0275text"](34),l["\u0275\u0275pipe"](35,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](36,L,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275reference"](12),t=l["\u0275\u0275reference"](22),n=l["\u0275\u0275reference"](32),r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](5,17,"DELIVERY.FIELDS.USER.HEADER")),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](10,19,"USER.EMAIL.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",r.deliveryRequest.email),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",e.valid||e.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](15,21,"USER.EMAIL.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",r.deliveryError.email),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](20,23,"USER.MOBILE_NUMBER.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",r.deliveryRequest.mobile_number),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",t.valid||t.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](25,25,"USER.MOBILE_NUMBER.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",r.deliveryError.mobile_number),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](30,27,"USER.PASSWORD.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",r.deliveryRequest.password)("required",!r.isEdit),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",n.valid||n.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](35,29,"USER.PASSWORD.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",r.deliveryError.password)}}function D(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",24),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function _(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",24),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function M(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",24),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function B(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",24),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}function w(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",24),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](e)}}let O=(()=>{class e{constructor(e,t,n){this.client=e,this.coreService=t,this.route=n,this.delivery=new E,this.deliveryRequest=new g,this.deliveryError=new b,this.showProgress=!1,this.showProgressButton=!1,this.categories=[],this.editId=null}ngOnInit(){this.getEditData()}getEditData(){let e=this.route.snapshot.paramMap.get("id");e&&(this.editId=e,this.getDataById(e).subscribe())}getDataById(e){return this.showProgress=!0,this.client.show(e).pipe(Object(v.a)(e=>(this.showProgress=!1,this.delivery=e,this.deliveryRequest.assigned=this.delivery.assigned,this.deliveryRequest.is_online=this.delivery.is_online,this.deliveryRequest.is_verified=this.delivery.is_verified,this.deliveryRequest.latitude=this.delivery.latitude,this.deliveryRequest.longitude=this.delivery.longitude,e)))}saveDelivery(){this.showProgressButton=!0;const e=new FormData;e.append("assigned",String(this.deliveryRequest.assigned)),e.append("is_online",String(this.deliveryRequest.is_online)),e.append("is_verified",String(this.deliveryRequest.is_verified)),e.append("latitude",this.deliveryRequest.latitude),e.append("longitude",this.deliveryRequest.longitude),this.editId||(e.append("email",this.deliveryRequest.email),e.append("mobile_number",this.deliveryRequest.mobile_number),e.append("password",this.deliveryRequest.password)),(this.editId?this.client.update(this.editId,e):this.client.store(e)).subscribe(e=>{this.showProgressButton=!1,this.coreService.toastService.showToast(S.b.SUCCESS,"Saved","Saved successfully!"),this.back()},e=>{var t,n,r,i,l,a,d,s;if(this.showProgressButton=!1,this.coreService.toastService.showToast(S.b.DANGER,"Failed",e.error.message),e.error.errors){let o=e.error.errors;this.deliveryError.longitude=null===(t=o)||void 0===t?void 0:t.longitude,this.deliveryError.latitude=null===(n=o)||void 0===n?void 0:n.latitude,this.deliveryError.assigned=null===(r=o)||void 0===r?void 0:r.assigned,this.deliveryError.is_online=null===(i=o)||void 0===i?void 0:i.is_online,this.deliveryError.is_verified=null===(l=o)||void 0===l?void 0:l.is_verified,this.deliveryError.email=null===(a=o)||void 0===a?void 0:a.email,this.deliveryError.mobile_number=null===(d=o)||void 0===d?void 0:d.mobile_number,this.deliveryError.password=null===(s=o)||void 0===s?void 0:s.password}})}back(){this.coreService.location.back()}onIsOnlineChange(e){this.deliveryRequest.is_online=e?1:0}onIsVerifiedChange(e){this.deliveryRequest.is_verified=e?1:0}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["save"]],decls:55,vars:43,consts:[[1,"row"],[1,"col-md-12"],["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"ngSubmit"],["form","ngForm"],["class","row",4,"ngIf"],[1,"form-group"],["name","assigned","nbInput","","fullWidth","","disabled","",1,"form-control",3,"checked"],["class","error text-danger",4,"ngFor","ngForOf"],["name","is_online","nbInput","","fullWidth","",1,"form-control",3,"checked","change"],["name","is_verified","nbInput","","fullWidth","",1,"form-control",3,"checked","change"],["type","number","nbInput","","fullWidth","","placeholder","Latitude","name","latitude","required","",3,"ngModel","ngModelChange"],["latitude","ngModel"],[1,"error","text-danger",3,"hidden"],["type","number","nbInput","","fullWidth","","placeholder","Longitude","name","longitude","required","",3,"ngModel","ngModelChange"],["longitude","ngModel"],["type","submit","nbButton","","status","success","size","medium","nbSpinnerStatus","success","nbSpinnerSize","small",3,"disabled","nbSpinner"],["type","button","nbButton","","status","danger","size","medium",3,"click"],["type","email","nbInput","","fullWidth","","placeholder","Email","name","email","required","",3,"ngModel","ngModelChange"],["email","ngModel"],["type","mobile_number","nbInput","","fullWidth","","placeholder","Mobile Number","name","mobile_number","required","",3,"ngModel","ngModelChange"],["mobile_number","ngModel"],["type","password","nbInput","","fullWidth","","id","password","placeholder","Password","name","password",3,"ngModel","required","ngModelChange"],["password","ngModel"],[1,"error","text-danger"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"nb-card"),l["\u0275\u0275elementStart"](3,"nb-card-body",2),l["\u0275\u0275elementStart"](4,"form",3,4),l["\u0275\u0275listener"]("ngSubmit",(function(){return t.saveDelivery()})),l["\u0275\u0275template"](6,R,37,31,"div",5),l["\u0275\u0275elementStart"](7,"div",6),l["\u0275\u0275elementStart"](8,"label"),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"nb-checkbox",7),l["\u0275\u0275text"](12," Assigned?"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](13,D,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",6),l["\u0275\u0275elementStart"](15,"label"),l["\u0275\u0275text"](16),l["\u0275\u0275pipe"](17,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](18,"nb-checkbox",9),l["\u0275\u0275listener"]("change",(function(e){return t.onIsOnlineChange(e.target.checked)})),l["\u0275\u0275text"](19,"Is Online?"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](20,_,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"div",6),l["\u0275\u0275elementStart"](22,"label"),l["\u0275\u0275text"](23),l["\u0275\u0275pipe"](24,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](25,"nb-checkbox",10),l["\u0275\u0275listener"]("change",(function(e){return t.onIsVerifiedChange(e.target.checked)})),l["\u0275\u0275text"](26,"Is Verified?"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](27,M,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](28,"div",6),l["\u0275\u0275elementStart"](29,"label"),l["\u0275\u0275text"](30),l["\u0275\u0275pipe"](31,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](32,"input",11,12),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.deliveryRequest.latitude=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](34,"label",13),l["\u0275\u0275text"](35),l["\u0275\u0275pipe"](36,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](37,B,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](38,"div",6),l["\u0275\u0275elementStart"](39,"label"),l["\u0275\u0275text"](40),l["\u0275\u0275pipe"](41,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](42,"input",14,15),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.deliveryRequest.longitude=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](44,"label",13),l["\u0275\u0275text"](45),l["\u0275\u0275pipe"](46,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](47,w,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](48,"button",16),l["\u0275\u0275text"](49),l["\u0275\u0275pipe"](50,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](51," \xa0 "),l["\u0275\u0275elementStart"](52,"button",17),l["\u0275\u0275listener"]("click",(function(){return t.back()})),l["\u0275\u0275text"](53),l["\u0275\u0275pipe"](54,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275reference"](5),n=l["\u0275\u0275reference"](33),r=l["\u0275\u0275reference"](43);l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("nbSpinner",t.showProgress),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",!t.editId),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](10,25,"DELIVERY.FIELDS.ASSIGNED.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("checked",t.deliveryRequest.assigned),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.deliveryError.assigned),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](17,27,"DELIVERY.FIELDS.IS_ONLINE.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("checked",t.deliveryRequest.is_online),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.deliveryError.is_online),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](24,29,"DELIVERY.FIELDS.IS_VERIFIED.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("checked",t.deliveryRequest.is_verified),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.deliveryError.is_verified),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](31,31,"DELIVERY.FIELDS.LATITUDE.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.deliveryRequest.latitude),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",n.valid||n.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](36,33,"DELIVERY.FIELDS.LATITUDE.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.deliveryError.latitude),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](41,35,"DELIVERY.FIELDS.LONGITUDE.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.deliveryRequest.longitude),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",r.valid||r.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](46,37,"DELIVERY.FIELDS.LONGITUDE.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.deliveryError.longitude),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("disabled",!e.form.valid||t.showProgressButton)("nbSpinner",t.showProgressButton),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](50,39,"COMMON.SAVE")," "),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](54,41,"COMMON.BACK")," ")}},directives:[p.o,p.n,p.bb,y.B,y.q,y.r,I.m,p.t,I.l,y.u,p.D,y.b,y.x,y.p,y.s,p.l,p.q],pipes:[u.c],encapsulation:2}),e})();const C=[{path:"",component:a,children:[{path:"add",component:O},{path:"list",component:m},{path:"edit/:id",component:O}]}];let q=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(C)],i.g]}),e})();n.d(t,"DeliveriesModule",(function(){return A}));let A=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.a,q]]}),e})()}}]);