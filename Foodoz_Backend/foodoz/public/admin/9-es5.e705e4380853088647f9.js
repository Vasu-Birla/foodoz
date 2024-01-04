function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{U5Jw:function(e,t,n){"use strict";n.r(t);var r,a,o=n("vTDv"),i=n("tyNb"),l=n("fXoL"),s=((r=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l["\u0275\u0275defineComponent"]({type:r,selectors:[["categories"]],decls:1,vars:0,template:function(e,t){1&e&&l["\u0275\u0275element"](0,"router-outlet")},directives:[i.h],encapsulation:2}),r),c=n("YPVp"),u=n("CdOr"),p=n("gnPH"),d=n("aceb"),g=n("RS3s"),m=n("sYmb"),f=((a=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,a){var o;return _classCallCheck(this,n),(o=t.call(this,r)).client=e,o.coreService=r,o.route=a,o.columns=[{key:"title",translation_key:"CATEGORY.FIELDS.TITLE.LABEL",column:{title:"",type:"string"}},{key:"slug",translation_key:"CATEGORY.FIELDS.SLUG.LABEL",column:{title:"",type:"string"}}],o.editPageUrl="pages/categories/edit",o.actionSettings={actions:{columnTitle:"Action",position:"right",add:!1}},o}return _createClass(n,[{key:"ngOnInit",value:function(){_get(_getPrototypeOf(n.prototype),"ngOnInit",this).call(this,this.client.getBaseEndpoint()+"?scope="+this.coreService.appConfigService.getConfig().defaultCategoryScope)}}]),n}(c.a)).\u0275fac=function(e){return new(e||a)(l["\u0275\u0275directiveInject"](p.a),l["\u0275\u0275directiveInject"](u.a),l["\u0275\u0275directiveInject"](i.a))},a.\u0275cmp=l["\u0275\u0275defineComponent"]({type:a,selectors:[["list"]],features:[l["\u0275\u0275InheritDefinitionFeature"]],decls:6,vars:6,consts:[["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"settings","source","delete","edit"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"nb-card-body",0),l["\u0275\u0275elementStart"](5,"ng2-smart-table",1),l["\u0275\u0275listener"]("delete",(function(e){return t.onDeleteConfirm(e)}))("edit",(function(e){return t.edit(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](3,4,"CATEGORY.LABELS.LIST")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("nbSpinner",t.loading),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[d.o,d.q,d.n,d.bb,g.b],pipes:[m.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),a),y=n("lJxs");n("HxAg");var v=function e(){_classCallCheck(this,e)},h=function e(){_classCallCheck(this,e),this.meta={scope:"ecommerce"},this.sort_order="1"},b=function e(){_classCallCheck(this,e)},S=n("QNOW"),E=n("8C9V"),_=n("3Pt+"),C=n("ofXK"),I=n("c4y/");function O(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275elementStart"](1,"label"),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementStart"](4,"span",24),l["\u0275\u0275text"](5),l["\u0275\u0275pipe"](6,"languageTitle"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](7,"input",25),l["\u0275\u0275elementEnd"]()),2&e){var n=t.index,r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",l["\u0275\u0275pipeBind1"](3,3,"CATEGORY.FIELDS.TITLE.LABEL")," "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](6,5,r.languages[n])),l["\u0275\u0275advance"](2),l["\u0275\u0275propertyInterpolate"]("formControlName",n)}}function x(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",26),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function R(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",26),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function P(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",26),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function w(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",27),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n.id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",n.title,"")}}function B(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",26),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function L(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"a",28),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("href",null==n.category?null:null==n.category.mediaurls?null:null==n.category.mediaurls.images[0]?null:n.category.mediaurls.images[0].default,l["\u0275\u0275sanitizeUrl"]),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](null==n.category?null:null==n.category.mediaurls?null:null==n.category.mediaurls.images[0]?null:n.category.mediaurls.images[0].default)}}function T(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",26),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}var k,A,F=((k=function(){function e(t,n,r,a){_classCallCheck(this,e),this.client=t,this.coreService=n,this.route=r,this.formBuilder=a,this.category=new v,this.categoryRequest=new h,this.categoryError=new b,this.showProgress=!1,this.showProgressButton=!1,this.parentCategories=[],this.editId=null,this.languages=[],this.languages=n.translationService.languages}return _createClass(e,[{key:"ngOnInit",value:function(){this.titleGroupForm=this.coreService.translationService.buildFormGroup(null),this.getParentCategories().subscribe(),this.getEditData()}},{key:"ngAfterViewInit",value:function(){}},{key:"getParentCategories",value:function(){var e=this;return this.client.parent(this.coreService.appConfigService.getConfig().defaultCategoryScope).pipe(Object(y.a)((function(t){return e.parentCategories=t,t})))}},{key:"getEditData",value:function(){var e=this.route.snapshot.paramMap.get("id");e&&(this.editId=e,this.getDataById(e).subscribe())}},{key:"getDataById",value:function(e){var t=this;return this.showProgress=!0,this.client.show(e).pipe(Object(y.a)((function(e){return t.showProgress=!1,t.category=e,t.titleGroupForm=t.coreService.translationService.buildFormGroup(t.category.title_translations),t.categoryRequest.slug=t.category.slug,t.categoryRequest.parent_id=t.category.parent_id,t.categoryRequest.sort_order=t.category.sort_order,t.categoryRequest.meta=t.category.meta,e})))}},{key:"saveCategory",value:function(){var e=this;this.metaeditorComponent.updatedMetaProperty(),this.showProgressButton=!0;var t=new FormData;t.append("title_translations",this.coreService.translationService.buildRequestParam(this.titleGroupForm)),t.append("slug",this.categoryRequest.slug),t.append("sort_order",this.categoryRequest.sort_order),t.append("meta",JSON.stringify(this.categoryRequest.meta)),this.categoryRequest.parent_id&&t.append("parent_id",this.categoryRequest.parent_id),this.categoryRequest.image&&t.append("image",this.categoryRequest.image),(this.editId?this.client.update(this.editId,t):this.client.store(t)).subscribe((function(t){e.showProgressButton=!1,e.coreService.toastService.showToast(S.b.SUCCESS,"Saved","Saved successfully!"),e.back()}),(function(t){var n,r,a,o,i;if(e.showProgressButton=!1,e.coreService.toastService.showToast(S.b.DANGER,"Failed",t.error.message),t.error.errors){var l=t.error.errors;e.categoryError.title_translations=null===(n=l)||void 0===n?void 0:n.title_translations,e.categoryError.image=null===(r=l)||void 0===r?void 0:r.image,e.categoryError.sort_order=null===(a=l)||void 0===a?void 0:a.sort_order,e.categoryError.slug=null===(o=l)||void 0===o?void 0:o.slug,e.categoryError.parent_id=null===(i=l)||void 0===i?void 0:i.parent_id}}))}},{key:"back",value:function(){this.coreService.location.back()}},{key:"getTitleItems",value:function(){return this.titleGroupForm.get("items")}},{key:"onImageChanged",value:function(e){this.categoryRequest.image=e.target.files[0]}}]),e}()).\u0275fac=function(e){return new(e||k)(l["\u0275\u0275directiveInject"](p.a),l["\u0275\u0275directiveInject"](u.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](_.d))},k.\u0275cmp=l["\u0275\u0275defineComponent"]({type:k,selectors:[["save"]],viewQuery:function(e,t){var n;1&e&&l["\u0275\u0275viewQuery"](E.a,!0),2&e&&l["\u0275\u0275queryRefresh"](n=l["\u0275\u0275loadQuery"]())&&(t.metaeditorComponent=n.first)},decls:62,vars:45,consts:[[1,"row"],[1,"col-md-12"],["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"ngSubmit"],["form","ngForm"],[3,"formGroup"],["formArrayName","items"],["class","form-group",4,"ngFor","ngForOf"],["class","error text-danger",4,"ngFor","ngForOf"],[1,"form-group"],["icon","info-outline","nbTooltip","Must be unique, all small letter, no space. Example - test-category","nbTooltipStatus","info","status","info"],["type","text","nbInput","","fullWidth","","placeholder","Slug","name","slug","required","",3,"ngModel","ngModelChange"],["slug","ngModel"],[1,"error","text-danger",3,"hidden"],["type","number","nbInput","","fullWidth","","placeholder","Sort Order","name","sort_order","required","",3,"ngModel","ngModelChange"],["sort_order","ngModel"],["fullWidth","","name","parent_id",2,"text-transform","capitalize",3,"ngModel","ngModelChange"],["parent_id","ngModel"],[3,"value",4,"ngFor","ngForOf"],["type","file","nbInput","","fullWidth","",3,"change"],["target","_blank",3,"href",4,"ngIf"],[3,"meta","metaChange"],["type","submit","nbButton","","status","success","size","medium","nbSpinnerStatus","success","nbSpinnerSize","small",3,"disabled","nbSpinner"],["type","button","nbButton","","status","danger","size","medium",3,"click"],[1,"language-label"],["type","text","nbInput","","fullWidth","","required","",3,"formControlName"],[1,"error","text-danger"],[3,"value"],["target","_blank",3,"href"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"nb-card"),l["\u0275\u0275elementStart"](3,"nb-card-body",2),l["\u0275\u0275elementStart"](4,"form",3,4),l["\u0275\u0275listener"]("ngSubmit",(function(){return t.saveCategory()})),l["\u0275\u0275elementStart"](6,"div",0),l["\u0275\u0275elementStart"](7,"div",1),l["\u0275\u0275elementStart"](8,"nb-card"),l["\u0275\u0275elementStart"](9,"nb-card-header"),l["\u0275\u0275text"](10),l["\u0275\u0275pipe"](11,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"nb-card-body"),l["\u0275\u0275elementStart"](13,"div",5),l["\u0275\u0275elementStart"](14,"div",6),l["\u0275\u0275template"](15,O,8,7,"div",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](16,x,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",9),l["\u0275\u0275elementStart"](18,"label"),l["\u0275\u0275text"](19),l["\u0275\u0275pipe"](20,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](21," \xa0"),l["\u0275\u0275element"](22,"nb-icon",10),l["\u0275\u0275elementStart"](23,"input",11,12),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.categoryRequest.slug=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](25,"label",13),l["\u0275\u0275text"](26),l["\u0275\u0275pipe"](27,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](28,R,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](29,"div",9),l["\u0275\u0275elementStart"](30,"label"),l["\u0275\u0275text"](31),l["\u0275\u0275pipe"](32,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](33,"input",14,15),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.categoryRequest.sort_order=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](35,"label",13),l["\u0275\u0275text"](36),l["\u0275\u0275pipe"](37,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](38,P,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](39,"div",9),l["\u0275\u0275elementStart"](40,"label"),l["\u0275\u0275text"](41),l["\u0275\u0275pipe"](42,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](43,"nb-select",16,17),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.categoryRequest.parent_id=e})),l["\u0275\u0275template"](45,w,2,2,"nb-option",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](46,B,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](47,"div",9),l["\u0275\u0275elementStart"](48,"label"),l["\u0275\u0275text"](49),l["\u0275\u0275pipe"](50,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](51,"input",19),l["\u0275\u0275listener"]("change",(function(e){return t.onImageChanged(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](52,L,2,2,"a",20),l["\u0275\u0275template"](53,T,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](54,"ngx-metaeditor",21),l["\u0275\u0275listener"]("metaChange",(function(e){return t.categoryRequest.meta=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](55,"button",22),l["\u0275\u0275text"](56),l["\u0275\u0275pipe"](57,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](58," \xa0 "),l["\u0275\u0275elementStart"](59,"button",23),l["\u0275\u0275listener"]("click",(function(){return t.back()})),l["\u0275\u0275text"](60),l["\u0275\u0275pipe"](61,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275reference"](5),r=l["\u0275\u0275reference"](24),a=l["\u0275\u0275reference"](34);l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("nbSpinner",t.showProgress),l["\u0275\u0275advance"](7),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](11,27,"CATEGORY.FIELDS.TITLE.HEADER")),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("formGroup",t.titleGroupForm),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.getTitleItems().controls),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",t.categoryError.title_translations),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](20,29,"CATEGORY.FIELDS.SLUG.LABEL")),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngModel",t.categoryRequest.slug),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",r.valid||r.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](27,31,"CATEGORY.FIELDS.SLUG.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.categoryError.slug),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](32,33,"CATEGORY.FIELDS.SORT_ORDER.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.categoryRequest.sort_order),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",a.valid||a.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](37,35,"CATEGORY.FIELDS.SORT_ORDER.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.categoryError.sort_order),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](42,37,"CATEGORY.FIELDS.PARENT.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.categoryRequest.parent_id),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.parentCategories),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",t.categoryError.parent_id),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](50,39,"CATEGORY.FIELDS.IMAGE.LABEL")),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",(null==t.category?null:null==t.category.mediaurls?null:null==t.category.mediaurls.images?null:t.category.mediaurls.images.length)>0),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",t.categoryError.image),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("meta",t.categoryRequest.meta),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("disabled",!n.form.valid||t.showProgressButton)("nbSpinner",t.showProgressButton),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](57,41,"COMMON.SAVE")," "),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](61,43,"COMMON.BACK")," ")}},directives:[d.o,d.n,d.bb,_.B,_.q,_.r,d.q,_.h,_.c,C.l,d.A,d.lb,d.D,_.b,_.x,_.p,_.s,_.u,d.W,C.m,E.a,d.l,_.g,d.S],pipes:[m.c,I.a],encapsulation:2}),k),M=[{path:"",component:s,children:[{path:"add",component:F},{path:"list",component:f},{path:"edit/:id",component:F}]}],q=((A=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:A}),A.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||A)},imports:[[i.g.forChild(M)],i.g]}),A);n.d(t,"CategoriesModule",(function(){return G}));var D,G=((D=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},imports:[[o.a,q]]}),D)}}]);