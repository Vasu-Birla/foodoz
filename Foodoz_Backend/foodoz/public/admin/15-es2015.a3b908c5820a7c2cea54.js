(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{a1ig:function(e,t,n){"use strict";n.r(t);var r=n("vTDv"),o=n("tyNb"),a=n("fXoL");let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["products"]],decls:1,vars:0,template:function(e,t){1&e&&a["\u0275\u0275element"](0,"router-outlet")},directives:[o.h],encapsulation:2}),e})();var l=n("YPVp"),d=n("CdOr"),s=n("X7vD"),c=n("aceb"),p=n("RS3s"),u=n("sYmb");let m=(()=>{class e extends l.a{constructor(e,t,n){super(t),this.client=e,this.coreService=t,this.route=n,this.columns=[{key:"title",translation_key:"PRODUCT.FIELDS.TITLE.LABEL",column:{title:"",type:"string"}},{key:"vendor_products",translation_key:"VENDOR.FIELDS.NAME.LABEL",column:{title:"",type:"string",valuePrepareFunction:e=>e.length>0&&e[0].vendor.name?e[0].vendor.name:this.coreService.translateService.instant("COMMON.NOT_AVAILABLE")}}],this.editPageUrl="pages/products/edit"}ngOnInit(){let e=this.route.snapshot.queryParamMap.get("vendor"),t=e?this.client.getBaseEndpoint()+"?vendor="+e:this.client.getBaseEndpoint();super.ngOnInit(t)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["list"]],features:[a["\u0275\u0275InheritDefinitionFeature"]],decls:6,vars:6,consts:[["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"settings","source","delete","edit"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275text"](2),a["\u0275\u0275pipe"](3,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"nb-card-body",0),a["\u0275\u0275elementStart"](5,"ng2-smart-table",1),a["\u0275\u0275listener"]("delete",(function(e){return t.onDeleteConfirm(e)}))("edit",(function(e){return t.edit(e)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](3,4,"PRODUCT.LABELS.LIST")," "),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("nbSpinner",t.loading),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[c.o,c.q,c.n,c.bb,p.b],pipes:[u.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),e})();var v=n("lJxs");n("HxAg");class g{}class h{constructor(){this.meta={food_type:"veg"},this.images=[],this.categories=[]}}class E{}var S=n("QNOW"),f=n("cp0P"),I=n("gnPH"),b=n("93Zq"),x=n("8C9V"),C=n("3Pt+"),y=n("ofXK"),O=n("c4y/");function _(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",9),a["\u0275\u0275elementStart"](1,"label"),a["\u0275\u0275text"](2),a["\u0275\u0275pipe"](3,"translate"),a["\u0275\u0275elementStart"](4,"span",27),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"languageTitle"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](7,"input",28),a["\u0275\u0275elementEnd"]()),2&e){const e=t.index,n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"]("",a["\u0275\u0275pipeBind1"](3,3,"PRODUCT.FIELDS.TITLE.LABEL")," "),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](6,5,n.languages[e])),a["\u0275\u0275advance"](2),a["\u0275\u0275propertyInterpolate"]("formControlName",e)}}function D(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"label",29),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e)}}function F(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",9),a["\u0275\u0275elementStart"](1,"label"),a["\u0275\u0275text"](2),a["\u0275\u0275pipe"](3,"translate"),a["\u0275\u0275elementStart"](4,"span",27),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"languageTitle"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](7,"textarea",30),a["\u0275\u0275elementEnd"]()),2&e){const e=t.index,n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"]("",a["\u0275\u0275pipeBind1"](3,3,"PRODUCT.FIELDS.DETAIL.LABEL")," "),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](6,5,n.languages[e])),a["\u0275\u0275advance"](2),a["\u0275\u0275propertyInterpolate"]("formControlName",e)}}function L(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"label",29),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e)}}function B(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"nb-option",31),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275property"]("value",e.id),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"]("",e.title," ")}}function R(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"label",29),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e)}}function P(e,t){if(1&e&&a["\u0275\u0275element"](0,"input",32),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("value",null==e.product?null:null==e.product.vendor_products[0]?null:null==e.product.vendor_products[0].vendor?null:e.product.vendor_products[0].vendor.name)}}function A(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"nb-option",31),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275property"]("value",e.id),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"]("",e.name," ")}}function T(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"label",29),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e)}}function q(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"nb-select",33,34),a["\u0275\u0275listener"]("ngModelChange",(function(t){return a["\u0275\u0275restoreView"](e),a["\u0275\u0275nextContext"]().productRequest.vendor_id=t})),a["\u0275\u0275template"](2,A,2,2,"nb-option",12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](3,T,2,1,"label",8)}if(2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("ngModel",e.productRequest.vendor_id),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",e.vendors),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",e.productError.categories)}}function M(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"label",29),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e)}}function N(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"label",29),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e)}}function G(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"a",35),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("href",null==e.product?null:null==e.product.mediaurls?null:null==e.product.mediaurls.images[0]?null:e.product.mediaurls.images[0].default,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](null==e.product?null:null==e.product.mediaurls?null:null==e.product.mediaurls.images[0]?null:e.product.mediaurls.images[0].default)}}function w(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"label",29),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e)}}function U(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",9),a["\u0275\u0275elementStart"](1,"label",44),a["\u0275\u0275text"](2),a["\u0275\u0275pipe"](3,"translate"),a["\u0275\u0275elementStart"](4,"span",27),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"languageTitle"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](7,"input",28),a["\u0275\u0275elementEnd"]()),2&e){const e=t.index,n=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"]("",a["\u0275\u0275pipeBind1"](3,3,"PRODUCT.FIELDS.TITLE.LABEL"),"* "),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](6,5,n.languages[e])),a["\u0275\u0275advance"](2),a["\u0275\u0275propertyInterpolate"]("formControlName",e)}}function k(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",9),a["\u0275\u0275elementStart"](1,"label",44),a["\u0275\u0275text"](2),a["\u0275\u0275pipe"](3,"translate"),a["\u0275\u0275elementStart"](4,"span",27),a["\u0275\u0275text"](5),a["\u0275\u0275pipe"](6,"languageTitle"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](7,"input",28),a["\u0275\u0275elementEnd"]()),2&e){const e=t.index,n=a["\u0275\u0275nextContext"](3);a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"]("",a["\u0275\u0275pipeBind1"](3,3,"PRODUCT.FIELDS.TITLE.LABEL"),"* "),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](6,5,n.languages[e])),a["\u0275\u0275advance"](2),a["\u0275\u0275propertyInterpolate"]("formControlName",e)}}function V(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275elementStart"](1,"div",37),a["\u0275\u0275elementStart"](2,"div",0),a["\u0275\u0275elementStart"](3,"div",38),a["\u0275\u0275elementStart"](4,"div",6),a["\u0275\u0275template"](5,k,8,7,"div",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"div",1),a["\u0275\u0275elementStart"](7,"div",9),a["\u0275\u0275elementStart"](8,"label"),a["\u0275\u0275text"](9),a["\u0275\u0275pipe"](10,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](11,"input",45),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"div",46),a["\u0275\u0275elementStart"](13,"div",9),a["\u0275\u0275elementStart"](14,"label"),a["\u0275\u0275text"](15),a["\u0275\u0275pipe"](16,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"button",47),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.index,r=a["\u0275\u0275nextContext"]().index;return a["\u0275\u0275nextContext"]().deleteChoice(r,n)})),a["\u0275\u0275element"](18,"nb-icon",48),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.index;var n=null,r=null;const o=null==(n=t.$implicit.get("title"))?null:null==(r=n.get("items"))?null:r.controls;a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("formGroupName",e),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",o),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](10,4,"PRODUCT.FIELDS.PRICE.LABEL")),a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate1"]("",a["\u0275\u0275pipeBind1"](16,6,"COMMON.DELETE"),"?")}}function j(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",6),a["\u0275\u0275elementStart"](1,"nb-card"),a["\u0275\u0275elementStart"](2,"nb-card-header"),a["\u0275\u0275text"](3),a["\u0275\u0275pipe"](4,"translate"),a["\u0275\u0275elementStart"](5,"button",36),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.index;return a["\u0275\u0275nextContext"]().deleteGroup(n)})),a["\u0275\u0275text"](6),a["\u0275\u0275pipe"](7,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"nb-card-body"),a["\u0275\u0275elementStart"](9,"div",37),a["\u0275\u0275elementStart"](10,"div",0),a["\u0275\u0275elementStart"](11,"div",38),a["\u0275\u0275elementStart"](12,"div",6),a["\u0275\u0275template"](13,U,8,7,"div",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"div",0),a["\u0275\u0275elementStart"](15,"div",39),a["\u0275\u0275elementStart"](16,"div",9),a["\u0275\u0275elementStart"](17,"label"),a["\u0275\u0275text"](18),a["\u0275\u0275pipe"](19,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](20,"input",40),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"div",39),a["\u0275\u0275elementStart"](22,"div",9),a["\u0275\u0275elementStart"](23,"label"),a["\u0275\u0275text"](24),a["\u0275\u0275pipe"](25,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](26,"input",41),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](27,"div",42),a["\u0275\u0275elementStart"](28,"nb-card"),a["\u0275\u0275elementStart"](29,"nb-card-header"),a["\u0275\u0275text"](30),a["\u0275\u0275pipe"](31,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"nb-card-body"),a["\u0275\u0275template"](33,V,19,8,"div",43),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](34,"button",23),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.index;return a["\u0275\u0275nextContext"]().addNewChoice(n)})),a["\u0275\u0275text"](35),a["\u0275\u0275pipe"](36,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,o=t.index;var n=null,r=null;const i=null==(n=e.get("title"))?null:null==(r=n.get("items"))?null:r.controls;a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate2"](" ",a["\u0275\u0275pipeBind1"](4,10,"PRODUCT.FIELDS.ADDON_GROUP.LABEL")," ",o+1," "),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](7,12,"PRODUCT.FIELDS.ADDON_GROUP.DELETE.LABEL")," "),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("formGroupName",o),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngForOf",i),a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](19,14,"PRODUCT.FIELDS.ADDON_GROUP.MIN_CHOICE.LABEL")),a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](25,16,"PRODUCT.FIELDS.ADDON_GROUP.MAX_CHOICE.LABEL")),a["\u0275\u0275advance"](6),a["\u0275\u0275textInterpolate1"]("",a["\u0275\u0275pipeBind1"](31,18,"PRODUCT.FIELDS.ADDON_GROUP.CHOICE.LABEL")," "),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",e.get("choiceItems").controls),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](36,20,"PRODUCT.FIELDS.ADDON_GROUP.ADD_CHOICE.LABEL")," ")}}let W=(()=>{class e{constructor(e,t,n,r,o,a){this.client=e,this.coreService=t,this.route=n,this.categoryClient=r,this.vendorClient=o,this.formBuilder=a,this.product=new g,this.productRequest=new h,this.productError=new E,this.showProgress=!1,this.showProgressButton=!1,this.categories=[],this.vendors=[],this.editId=null,this.vendorId=null,this.languages=[],this.languages=t.translationService.languages}ngOnInit(){this.titleGroupForm=this.coreService.translationService.buildFormGroup(null),this.detailGroupForm=this.coreService.translationService.buildFormGroup(null),this.groupForm=this.formBuilder.group({items:this.formBuilder.array([])}),this.editId||(this.groupFormItems=this.groupForm.get("items")),Object(f.a)([this.getCategories(),this.getVendors()]).subscribe(),this.getEditData(),this.vendorId=this.route.snapshot.queryParamMap.get("vendor"),this.productRequest.vendor_id=this.vendorId}ngAfterViewInit(){}getCategories(){return this.categoryClient.all(this.coreService.appConfigService.getConfig().defaultCategoryScope).pipe(Object(v.a)(e=>(this.categories=e,e)))}getVendors(){return this.vendorClient.all().pipe(Object(v.a)(e=>(this.vendors=e,e)))}getEditData(){let e=this.route.snapshot.paramMap.get("id");e&&(this.editId=e,this.getDataById(e).subscribe())}getDataById(e){return this.showProgress=!0,this.client.show(e).pipe(Object(v.a)(e=>{this.showProgress=!1,this.product=e,this.titleGroupForm=this.coreService.translationService.buildFormGroup(this.product.title_translations),this.detailGroupForm=this.coreService.translationService.buildFormGroup(this.product.detail_translations),this.productRequest.price=this.product.vendor_products[0].price,this.productRequest.stock_quantity=this.product.vendor_products[0].price,this.productRequest.vendor_id=this.product.vendor_products[0].vendor_id;let t=[];for(let n=0;n<this.product.categories.length;n++)t.push(this.product.categories[n].id);this.productRequest.categories=t,this.groupFormItems=this.groupForm.get("items");for(let n=0;n<this.product.addon_groups.length;n++)this.groupFormItems.push(this.createGroupItem(this.product.addon_groups[n]));return this.productRequest.meta=this.product.meta,e}))}saveProduct(){this.metaeditorComponent.updatedMetaProperty(),this.showProgressButton=!0;const e=new FormData;e.append("title_translations",this.coreService.translationService.buildRequestParam(this.titleGroupForm)),e.append("detail_translations",this.coreService.translationService.buildRequestParam(this.detailGroupForm)),e.append("price",this.productRequest.price),e.append("stock_quantity",this.productRequest.stock_quantity),e.append("vendor_id",this.productRequest.vendor_id),e.append("meta",JSON.stringify(this.productRequest.meta));for(let n=0;n<this.productRequest.categories.length;n++)e.append("categories[]",this.productRequest.categories[n]);const t=this.groupForm.controls.items;for(let n=0;n<t.controls.length;n++){const r=t.controls[n];e.append("addon_groups["+n+"][title_translations]",this.coreService.translationService.buildRequestParam(r.controls.title)),e.append("addon_groups["+n+"][min_choices]",r.controls.min_choice.value),e.append("addon_groups["+n+"][max_choices]",r.controls.max_choice.value);const o=r.controls.choiceItems;for(let t=0;t<o.controls.length;t++){const r=o.controls[t];e.append("addon_groups["+n+"][choices]["+t+"][title_translations]",this.coreService.translationService.buildRequestParam(r.controls.title)),e.append("addon_groups["+n+"][choices]["+t+"][price]",r.controls.price.value)}}for(let n=0;n<this.productRequest.images.length;n++)e.append("images[]",this.productRequest.images[n]);(this.editId?this.client.update(this.editId,e):this.client.store(e)).subscribe(e=>{this.showProgressButton=!1,this.coreService.toastService.showToast(S.b.SUCCESS,"Saved","Saved successfully!"),this.back()},e=>{var t,n,r,o,a,i,l;if(this.showProgressButton=!1,this.coreService.toastService.showToast(S.b.DANGER,"Failed",e.error.message),e.error.errors){let d=e.error.errors;this.productError.title_translations=null===(t=d)||void 0===t?void 0:t.title_translations,this.productError.detail_translations=null===(n=d)||void 0===n?void 0:n.detail_translations,this.productError.price=null===(r=d)||void 0===r?void 0:r.price,this.productError.stock_quantity=null===(o=d)||void 0===o?void 0:o.stock_quantity,this.productError.vendor_id=null===(a=d)||void 0===a?void 0:a.vendor_id,this.productError.categories=null===(i=d)||void 0===i?void 0:i.categories,this.productError.images=null===(l=d)||void 0===l?void 0:l.images}})}back(){this.coreService.location.back()}getTitleItems(){return this.titleGroupForm.get("items")}getDetailItems(){return this.detailGroupForm.get("items")}onImageChanged(e,t){this.productRequest.images[t]=e.target.files[0]}createGroupItem(e){return this.formBuilder.group({title:this.coreService.translationService.buildFormGroup(e.title_translations),min_choice:e.min_choices,max_choice:e.max_choices,choiceItems:this.formBuilder.array(this.createChoiceItem(e))})}createChoiceItem(e){const t=[];for(let n=0;n<e.addon_choices.length;n++)t.push(this.formBuilder.group({title:this.coreService.translationService.buildFormGroup(e.addon_choices[n].title_translations),price:e.addon_choices[n].price}));return t}addNewGroup(){this.groupFormItems.push(this.formBuilder.group({title:this.coreService.translationService.buildFormGroup(null),min_choice:"",max_choice:"",choiceItems:this.formBuilder.array([])}))}addNewChoice(e){this.groupFormItems.at(e).controls.choiceItems.push(this.formBuilder.group({title:this.coreService.translationService.buildFormGroup(null),price:0}))}deleteChoice(e,t){this.groupFormItems.at(e).controls.choiceItems.removeAt(t)}deleteGroup(e){this.groupFormItems.removeAt(e)}getFormGroupItems(){return this.groupForm.get("items")}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](I.a),a["\u0275\u0275directiveInject"](b.a),a["\u0275\u0275directiveInject"](C.d))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["save"]],viewQuery:function(e,t){var n;1&e&&a["\u0275\u0275viewQuery"](x.a,!0),2&e&&a["\u0275\u0275queryRefresh"](n=a["\u0275\u0275loadQuery"]())&&(t.metaeditorComponent=n.first)},decls:89,vars:64,consts:[[1,"row"],[1,"col-md-12"],["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"ngSubmit"],["form","ngForm"],[3,"formGroup"],["formArrayName","items"],["class","form-group",4,"ngFor","ngForOf"],["class","error text-danger",4,"ngFor","ngForOf"],[1,"form-group"],["fullWidth","","name","categories","multiple","",2,"text-transform","capitalize",3,"ngModel","ngModelChange"],["roles","ngModel"],[3,"value",4,"ngFor","ngForOf"],["readonly","","nbInput","","fullWidth","",3,"value",4,"ngIf","ngIfElse"],["selectVendor",""],["type","number","nbInput","","fullWidth","","placeholder","Price","name","price","required","",3,"ngModel","ngModelChange"],["price","ngModel"],[1,"error","text-danger",3,"hidden"],["type","number","nbInput","","fullWidth","","placeholder","Stock Quantity","name","stock_quantity","required","",3,"ngModel","ngModelChange"],["stock_quantity","ngModel"],["type","file","nbInput","","fullWidth","",3,"change"],["target","_blank",3,"href",4,"ngIf"],["formArrayName","items",4,"ngFor","ngForOf"],["type","button","nbButton","","status","info","size","medium",1,"float-lg-right",3,"click"],[3,"meta","metaChange"],["type","submit","nbButton","","status","success","size","medium","nbSpinnerStatus","success","nbSpinnerSize","small",3,"disabled","nbSpinner"],["type","button","nbButton","","status","danger","size","medium",3,"click"],[1,"language-label"],["type","text","nbInput","","fullWidth","","required","",3,"formControlName"],[1,"error","text-danger"],["nbInput","","fullWidth","","required","",3,"formControlName"],[3,"value"],["readonly","","nbInput","","fullWidth","",3,"value"],["fullWidth","","name","vendor_id",2,"text-transform","capitalize",3,"ngModel","ngModelChange"],["vendor_id","ngModel"],["target","_blank",3,"href"],["type","button","nbButton","","status","danger","size","small",1,"float-lg-right",3,"click"],[3,"formGroupName"],["formGroupName","title",1,"col-md-12"],[1,"col-md-6"],["type","text","nbInput","","fullWidth","","formControlName","min_choice"],["type","text","nbInput","","fullWidth","","formControlName","max_choice"],["formArrayName","choiceItems"],[4,"ngFor","ngForOf"],["for","title"],["type","text","nbInput","","fullWidth","","formControlName","price"],[1,"col-md-2"],["nbInput","","fullWidth","","type","button","nbButton","","status","danger","size","small",3,"click"],["icon","trash-2-outline"]],template:function(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"nb-card"),a["\u0275\u0275elementStart"](3,"nb-card-body",2),a["\u0275\u0275elementStart"](4,"form",3,4),a["\u0275\u0275listener"]("ngSubmit",(function(){return t.saveProduct()})),a["\u0275\u0275elementStart"](6,"div",0),a["\u0275\u0275elementStart"](7,"div",1),a["\u0275\u0275elementStart"](8,"nb-card"),a["\u0275\u0275elementStart"](9,"nb-card-header"),a["\u0275\u0275text"](10),a["\u0275\u0275pipe"](11,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"nb-card-body"),a["\u0275\u0275elementStart"](13,"div",5),a["\u0275\u0275elementStart"](14,"div",6),a["\u0275\u0275template"](15,_,8,7,"div",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](16,D,2,1,"label",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"div",0),a["\u0275\u0275elementStart"](18,"div",1),a["\u0275\u0275elementStart"](19,"nb-card"),a["\u0275\u0275elementStart"](20,"nb-card-header"),a["\u0275\u0275text"](21),a["\u0275\u0275pipe"](22,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](23,"nb-card-body"),a["\u0275\u0275elementStart"](24,"div",5),a["\u0275\u0275elementStart"](25,"div",6),a["\u0275\u0275template"](26,F,8,7,"div",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](27,L,2,1,"label",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](28,"div",9),a["\u0275\u0275elementStart"](29,"label"),a["\u0275\u0275text"](30),a["\u0275\u0275pipe"](31,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](32,"nb-select",10,11),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.productRequest.categories=e})),a["\u0275\u0275template"](34,B,2,2,"nb-option",12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](35,R,2,1,"label",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](36,"div",9),a["\u0275\u0275elementStart"](37,"label"),a["\u0275\u0275text"](38),a["\u0275\u0275pipe"](39,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](40,P,1,1,"input",13),a["\u0275\u0275template"](41,q,4,3,"ng-template",null,14,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](43,"div",9),a["\u0275\u0275elementStart"](44,"label"),a["\u0275\u0275text"](45),a["\u0275\u0275pipe"](46,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](47,"input",15,16),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.productRequest.price=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](49,"label",17),a["\u0275\u0275text"](50),a["\u0275\u0275pipe"](51,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](52,M,2,1,"label",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](53,"div",9),a["\u0275\u0275elementStart"](54,"label"),a["\u0275\u0275text"](55),a["\u0275\u0275pipe"](56,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](57,"input",18,19),a["\u0275\u0275listener"]("ngModelChange",(function(e){return t.productRequest.stock_quantity=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](59,"label",17),a["\u0275\u0275text"](60),a["\u0275\u0275pipe"](61,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](62,N,2,1,"label",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](63,"div",9),a["\u0275\u0275elementStart"](64,"label"),a["\u0275\u0275text"](65),a["\u0275\u0275pipe"](66,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](67,"input",20),a["\u0275\u0275listener"]("change",(function(e){return t.onImageChanged(e,0)})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](68,G,2,2,"a",21),a["\u0275\u0275template"](69,w,2,1,"label",8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](70,"div",0),a["\u0275\u0275elementStart"](71,"div",1),a["\u0275\u0275elementStart"](72,"nb-card",5),a["\u0275\u0275elementStart"](73,"nb-card-header"),a["\u0275\u0275text"](74),a["\u0275\u0275pipe"](75,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](76,"nb-card-body"),a["\u0275\u0275template"](77,j,37,22,"div",22),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](78,"button",23),a["\u0275\u0275listener"]("click",(function(){return t.addNewGroup()})),a["\u0275\u0275text"](79),a["\u0275\u0275pipe"](80,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](81,"ngx-metaeditor",24),a["\u0275\u0275listener"]("metaChange",(function(e){return t.productRequest.meta=e})),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](82,"button",25),a["\u0275\u0275text"](83),a["\u0275\u0275pipe"](84,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](85," \xa0 "),a["\u0275\u0275elementStart"](86,"button",26),a["\u0275\u0275listener"]("click",(function(){return t.back()})),a["\u0275\u0275text"](87),a["\u0275\u0275pipe"](88,"translate"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275reference"](5),n=a["\u0275\u0275reference"](42),r=a["\u0275\u0275reference"](48),o=a["\u0275\u0275reference"](58);a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("nbSpinner",t.showProgress),a["\u0275\u0275advance"](7),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](11,38,"PRODUCT.FIELDS.TITLE.HEADER")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("formGroup",t.titleGroupForm),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.getTitleItems().controls),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",t.productError.title_translations),a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](22,40,"PRODUCT.FIELDS.DETAIL.HEADER")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("formGroup",t.detailGroupForm),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.getDetailItems().controls),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",t.productError.detail_translations),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](31,42,"PRODUCT.FIELDS.CATEGORY.LABEL")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.productRequest.categories),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.categories),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",t.productError.categories),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](39,44,"PRODUCT.FIELDS.VENDOR.LABEL")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",(null==t.product?null:null==t.product.vendor_products?null:t.product.vendor_products.length)>0&&(null==t.product?null:null==t.product.vendor_products[0]?null:null==t.product.vendor_products[0].vendor?null:t.product.vendor_products[0].vendor.name))("ngIfElse",n),a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](46,46,"PRODUCT.FIELDS.PRICE.LABEL")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.productRequest.price),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("hidden",r.valid||r.pristine),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](51,48,"PRODUCT.FIELDS.PRICE.VALIDATION")," "),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.productError.price),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](56,50,"PRODUCT.FIELDS.STOCK_QUANTITY.LABEL")),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngModel",t.productRequest.stock_quantity),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("hidden",o.valid||o.pristine),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](61,52,"PRODUCT.FIELDS.STOCK_QUANTITY.VALIDATION")," "),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngForOf",t.productError.stock_quantity),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](66,54,"PRODUCT.FIELDS.IMAGE.LABEL")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",(null==t.product?null:null==t.product.mediaurls?null:null==t.product.mediaurls.images?null:t.product.mediaurls.images.length)>0),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",t.productError.images),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("formGroup",t.groupForm),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](a["\u0275\u0275pipeBind1"](75,56,"PRODUCT.FIELDS.ADDON_GROUP.HEADER")),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",t.getFormGroupItems().controls),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](80,58,"PRODUCT.FIELDS.ADDON_GROUP.ADD_GROUP.LABEL")," "),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("meta",t.productRequest.meta),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("disabled",!e.form.valid||t.showProgressButton)("nbSpinner",t.showProgressButton),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](84,60,"COMMON.SAVE")," "),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind1"](88,62,"COMMON.BACK")," ")}},directives:[c.o,c.n,c.bb,C.B,C.q,C.r,c.q,C.h,C.c,y.l,c.W,C.p,C.s,y.m,C.u,c.D,C.b,C.x,c.l,x.a,C.g,c.S,C.i,c.A],pipes:[u.c,O.a],encapsulation:2}),e})();const $=[{path:"",component:i,children:[{path:"add",component:W},{path:"list",component:m},{path:"edit/:id",component:W}]}];let z=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild($)],o.g]}),e})();n.d(t,"ProductsModule",(function(){return H}));let H=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.a,z]]}),e})()}}]);