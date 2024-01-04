function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{a1ig:function(e,t,n){"use strict";n.r(t);var r,a,o=n("vTDv"),i=n("tyNb"),l=n("fXoL"),d=((r=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l["\u0275\u0275defineComponent"]({type:r,selectors:[["products"]],decls:1,vars:0,template:function(e,t){1&e&&l["\u0275\u0275element"](0,"router-outlet")},directives:[i.h],encapsulation:2}),r),c=n("YPVp"),p=n("CdOr"),u=n("X7vD"),s=n("aceb"),m=n("RS3s"),v=n("sYmb"),f=((a=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,a){var o;return _classCallCheck(this,n),(o=t.call(this,r)).client=e,o.coreService=r,o.route=a,o.columns=[{key:"title",translation_key:"PRODUCT.FIELDS.TITLE.LABEL",column:{title:"",type:"string"}},{key:"vendor_products",translation_key:"VENDOR.FIELDS.NAME.LABEL",column:{title:"",type:"string",valuePrepareFunction:function(e){return e.length>0&&e[0].vendor.name?e[0].vendor.name:o.coreService.translateService.instant("COMMON.NOT_AVAILABLE")}}}],o.editPageUrl="pages/products/edit",o}return _createClass(n,[{key:"ngOnInit",value:function(){var e=this.route.snapshot.queryParamMap.get("vendor"),t=e?this.client.getBaseEndpoint()+"?vendor="+e:this.client.getBaseEndpoint();_get(_getPrototypeOf(n.prototype),"ngOnInit",this).call(this,t)}}]),n}(c.a)).\u0275fac=function(e){return new(e||a)(l["\u0275\u0275directiveInject"](u.a),l["\u0275\u0275directiveInject"](p.a),l["\u0275\u0275directiveInject"](i.a))},a.\u0275cmp=l["\u0275\u0275defineComponent"]({type:a,selectors:[["list"]],features:[l["\u0275\u0275InheritDefinitionFeature"]],decls:6,vars:6,consts:[["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"settings","source","delete","edit"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"nb-card-body",0),l["\u0275\u0275elementStart"](5,"ng2-smart-table",1),l["\u0275\u0275listener"]("delete",(function(e){return t.onDeleteConfirm(e)}))("edit",(function(e){return t.edit(e)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](3,4,"PRODUCT.LABELS.LIST")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("nbSpinner",t.loading),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[s.o,s.q,s.n,s.bb,m.b],pipes:[v.c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}"]}),a),g=n("lJxs");n("HxAg");var h=function e(){_classCallCheck(this,e)},E=function e(){_classCallCheck(this,e),this.meta={food_type:"veg"},this.images=[],this.categories=[]},S=function e(){_classCallCheck(this,e)},b=n("QNOW"),y=n("cp0P"),I=n("gnPH"),_=n("93Zq"),C=n("8C9V"),x=n("3Pt+"),O=n("ofXK"),D=n("c4y/");function P(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275elementStart"](1,"label"),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementStart"](4,"span",27),l["\u0275\u0275text"](5),l["\u0275\u0275pipe"](6,"languageTitle"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](7,"input",28),l["\u0275\u0275elementEnd"]()),2&e){var n=t.index,r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",l["\u0275\u0275pipeBind1"](3,3,"PRODUCT.FIELDS.TITLE.LABEL")," "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](6,5,r.languages[n])),l["\u0275\u0275advance"](2),l["\u0275\u0275propertyInterpolate"]("formControlName",n)}}function R(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",29),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function F(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275elementStart"](1,"label"),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementStart"](4,"span",27),l["\u0275\u0275text"](5),l["\u0275\u0275pipe"](6,"languageTitle"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](7,"textarea",30),l["\u0275\u0275elementEnd"]()),2&e){var n=t.index,r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",l["\u0275\u0275pipeBind1"](3,3,"PRODUCT.FIELDS.DETAIL.LABEL")," "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](6,5,r.languages[n])),l["\u0275\u0275advance"](2),l["\u0275\u0275propertyInterpolate"]("formControlName",n)}}function B(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",29),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function L(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",31),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n.id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"]("",n.title," ")}}function k(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",29),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function T(e,t){if(1&e&&l["\u0275\u0275element"](0,"input",32),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("value",null==n.product?null:null==n.product.vendor_products[0]?null:null==n.product.vendor_products[0].vendor?null:n.product.vendor_products[0].vendor.name)}}function A(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",31),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n.id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"]("",n.name," ")}}function w(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",29),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function q(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"nb-select",33,34),l["\u0275\u0275listener"]("ngModelChange",(function(e){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().productRequest.vendor_id=e})),l["\u0275\u0275template"](2,A,2,2,"nb-option",12),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](3,w,2,1,"label",8)}if(2&e){var r=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("ngModel",r.productRequest.vendor_id),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",r.vendors),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",r.productError.categories)}}function N(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",29),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function M(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",29),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function G(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"a",35),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("href",null==n.product?null:null==n.product.mediaurls?null:null==n.product.mediaurls.images[0]?null:n.product.mediaurls.images[0].default,l["\u0275\u0275sanitizeUrl"]),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](null==n.product?null:null==n.product.mediaurls?null:null==n.product.mediaurls.images[0]?null:n.product.mediaurls.images[0].default)}}function U(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"label",29),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n)}}function j(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275elementStart"](1,"label",44),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementStart"](4,"span",27),l["\u0275\u0275text"](5),l["\u0275\u0275pipe"](6,"languageTitle"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](7,"input",28),l["\u0275\u0275elementEnd"]()),2&e){var n=t.index,r=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",l["\u0275\u0275pipeBind1"](3,3,"PRODUCT.FIELDS.TITLE.LABEL"),"* "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](6,5,r.languages[n])),l["\u0275\u0275advance"](2),l["\u0275\u0275propertyInterpolate"]("formControlName",n)}}function V(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",9),l["\u0275\u0275elementStart"](1,"label",44),l["\u0275\u0275text"](2),l["\u0275\u0275pipe"](3,"translate"),l["\u0275\u0275elementStart"](4,"span",27),l["\u0275\u0275text"](5),l["\u0275\u0275pipe"](6,"languageTitle"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](7,"input",28),l["\u0275\u0275elementEnd"]()),2&e){var n=t.index,r=l["\u0275\u0275nextContext"](3);l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("",l["\u0275\u0275pipeBind1"](3,3,"PRODUCT.FIELDS.TITLE.LABEL"),"* "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](6,5,r.languages[n])),l["\u0275\u0275advance"](2),l["\u0275\u0275propertyInterpolate"]("formControlName",n)}}function W(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275elementStart"](1,"div",37),l["\u0275\u0275elementStart"](2,"div",0),l["\u0275\u0275elementStart"](3,"div",38),l["\u0275\u0275elementStart"](4,"div",6),l["\u0275\u0275template"](5,V,8,7,"div",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",1),l["\u0275\u0275elementStart"](7,"div",9),l["\u0275\u0275elementStart"](8,"label"),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](11,"input",45),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"div",46),l["\u0275\u0275elementStart"](13,"div",9),l["\u0275\u0275elementStart"](14,"label"),l["\u0275\u0275text"](15),l["\u0275\u0275pipe"](16,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"button",47),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.index,r=l["\u0275\u0275nextContext"]().index;return l["\u0275\u0275nextContext"]().deleteChoice(r,e)})),l["\u0275\u0275element"](18,"nb-icon",48),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var r=t.index,a=null,o=null,i=null==(a=t.$implicit.get("title"))?null:null==(o=a.get("items"))?null:o.controls;l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroupName",r),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngForOf",i),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](10,4,"PRODUCT.FIELDS.PRICE.LABEL")),l["\u0275\u0275advance"](6),l["\u0275\u0275textInterpolate1"]("",l["\u0275\u0275pipeBind1"](16,6,"COMMON.DELETE"),"?")}}function z(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",6),l["\u0275\u0275elementStart"](1,"nb-card"),l["\u0275\u0275elementStart"](2,"nb-card-header"),l["\u0275\u0275text"](3),l["\u0275\u0275pipe"](4,"translate"),l["\u0275\u0275elementStart"](5,"button",36),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.index;return l["\u0275\u0275nextContext"]().deleteGroup(e)})),l["\u0275\u0275text"](6),l["\u0275\u0275pipe"](7,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"nb-card-body"),l["\u0275\u0275elementStart"](9,"div",37),l["\u0275\u0275elementStart"](10,"div",0),l["\u0275\u0275elementStart"](11,"div",38),l["\u0275\u0275elementStart"](12,"div",6),l["\u0275\u0275template"](13,j,8,7,"div",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"div",0),l["\u0275\u0275elementStart"](15,"div",39),l["\u0275\u0275elementStart"](16,"div",9),l["\u0275\u0275elementStart"](17,"label"),l["\u0275\u0275text"](18),l["\u0275\u0275pipe"](19,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](20,"input",40),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](21,"div",39),l["\u0275\u0275elementStart"](22,"div",9),l["\u0275\u0275elementStart"](23,"label"),l["\u0275\u0275text"](24),l["\u0275\u0275pipe"](25,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](26,"input",41),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](27,"div",42),l["\u0275\u0275elementStart"](28,"nb-card"),l["\u0275\u0275elementStart"](29,"nb-card-header"),l["\u0275\u0275text"](30),l["\u0275\u0275pipe"](31,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](32,"nb-card-body"),l["\u0275\u0275template"](33,W,19,8,"div",43),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](34,"button",23),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.index;return l["\u0275\u0275nextContext"]().addNewChoice(e)})),l["\u0275\u0275text"](35),l["\u0275\u0275pipe"](36,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,a=t.index,o=null,i=null,d=null==(o=r.get("title"))?null:null==(i=o.get("items"))?null:i.controls;l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate2"](" ",l["\u0275\u0275pipeBind1"](4,10,"PRODUCT.FIELDS.ADDON_GROUP.LABEL")," ",a+1," "),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](7,12,"PRODUCT.FIELDS.ADDON_GROUP.DELETE.LABEL")," "),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("formGroupName",a),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngForOf",d),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](19,14,"PRODUCT.FIELDS.ADDON_GROUP.MIN_CHOICE.LABEL")),l["\u0275\u0275advance"](6),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](25,16,"PRODUCT.FIELDS.ADDON_GROUP.MAX_CHOICE.LABEL")),l["\u0275\u0275advance"](6),l["\u0275\u0275textInterpolate1"]("",l["\u0275\u0275pipeBind1"](31,18,"PRODUCT.FIELDS.ADDON_GROUP.CHOICE.LABEL")," "),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",r.get("choiceItems").controls),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](36,20,"PRODUCT.FIELDS.ADDON_GROUP.ADD_CHOICE.LABEL")," ")}}var $,H,Q=(($=function(){function e(t,n,r,a,o,i){_classCallCheck(this,e),this.client=t,this.coreService=n,this.route=r,this.categoryClient=a,this.vendorClient=o,this.formBuilder=i,this.product=new h,this.productRequest=new E,this.productError=new S,this.showProgress=!1,this.showProgressButton=!1,this.categories=[],this.vendors=[],this.editId=null,this.vendorId=null,this.languages=[],this.languages=n.translationService.languages}return _createClass(e,[{key:"ngOnInit",value:function(){this.titleGroupForm=this.coreService.translationService.buildFormGroup(null),this.detailGroupForm=this.coreService.translationService.buildFormGroup(null),this.groupForm=this.formBuilder.group({items:this.formBuilder.array([])}),this.editId||(this.groupFormItems=this.groupForm.get("items")),Object(y.a)([this.getCategories(),this.getVendors()]).subscribe(),this.getEditData(),this.vendorId=this.route.snapshot.queryParamMap.get("vendor"),this.productRequest.vendor_id=this.vendorId}},{key:"ngAfterViewInit",value:function(){}},{key:"getCategories",value:function(){var e=this;return this.categoryClient.all(this.coreService.appConfigService.getConfig().defaultCategoryScope).pipe(Object(g.a)((function(t){return e.categories=t,t})))}},{key:"getVendors",value:function(){var e=this;return this.vendorClient.all().pipe(Object(g.a)((function(t){return e.vendors=t,t})))}},{key:"getEditData",value:function(){var e=this.route.snapshot.paramMap.get("id");e&&(this.editId=e,this.getDataById(e).subscribe())}},{key:"getDataById",value:function(e){var t=this;return this.showProgress=!0,this.client.show(e).pipe(Object(g.a)((function(e){t.showProgress=!1,t.product=e,t.titleGroupForm=t.coreService.translationService.buildFormGroup(t.product.title_translations),t.detailGroupForm=t.coreService.translationService.buildFormGroup(t.product.detail_translations),t.productRequest.price=t.product.vendor_products[0].price,t.productRequest.stock_quantity=t.product.vendor_products[0].price,t.productRequest.vendor_id=t.product.vendor_products[0].vendor_id;for(var n=[],r=0;r<t.product.categories.length;r++)n.push(t.product.categories[r].id);t.productRequest.categories=n,t.groupFormItems=t.groupForm.get("items");for(var a=0;a<t.product.addon_groups.length;a++)t.groupFormItems.push(t.createGroupItem(t.product.addon_groups[a]));return t.productRequest.meta=t.product.meta,e})))}},{key:"saveProduct",value:function(){var e=this;this.metaeditorComponent.updatedMetaProperty(),this.showProgressButton=!0;var t=new FormData;t.append("title_translations",this.coreService.translationService.buildRequestParam(this.titleGroupForm)),t.append("detail_translations",this.coreService.translationService.buildRequestParam(this.detailGroupForm)),t.append("price",this.productRequest.price),t.append("stock_quantity",this.productRequest.stock_quantity),t.append("vendor_id",this.productRequest.vendor_id),t.append("meta",JSON.stringify(this.productRequest.meta));for(var n=0;n<this.productRequest.categories.length;n++)t.append("categories[]",this.productRequest.categories[n]);for(var r=this.groupForm.controls.items,a=0;a<r.controls.length;a++){var o=r.controls[a];t.append("addon_groups["+a+"][title_translations]",this.coreService.translationService.buildRequestParam(o.controls.title)),t.append("addon_groups["+a+"][min_choices]",o.controls.min_choice.value),t.append("addon_groups["+a+"][max_choices]",o.controls.max_choice.value);for(var i=o.controls.choiceItems,l=0;l<i.controls.length;l++){var d=i.controls[l];t.append("addon_groups["+a+"][choices]["+l+"][title_translations]",this.coreService.translationService.buildRequestParam(d.controls.title)),t.append("addon_groups["+a+"][choices]["+l+"][price]",d.controls.price.value)}}for(var c=0;c<this.productRequest.images.length;c++)t.append("images[]",this.productRequest.images[c]);(this.editId?this.client.update(this.editId,t):this.client.store(t)).subscribe((function(t){e.showProgressButton=!1,e.coreService.toastService.showToast(b.b.SUCCESS,"Saved","Saved successfully!"),e.back()}),(function(t){var n,r,a,o,i,l,d;if(e.showProgressButton=!1,e.coreService.toastService.showToast(b.b.DANGER,"Failed",t.error.message),t.error.errors){var c=t.error.errors;e.productError.title_translations=null===(n=c)||void 0===n?void 0:n.title_translations,e.productError.detail_translations=null===(r=c)||void 0===r?void 0:r.detail_translations,e.productError.price=null===(a=c)||void 0===a?void 0:a.price,e.productError.stock_quantity=null===(o=c)||void 0===o?void 0:o.stock_quantity,e.productError.vendor_id=null===(i=c)||void 0===i?void 0:i.vendor_id,e.productError.categories=null===(l=c)||void 0===l?void 0:l.categories,e.productError.images=null===(d=c)||void 0===d?void 0:d.images}}))}},{key:"back",value:function(){this.coreService.location.back()}},{key:"getTitleItems",value:function(){return this.titleGroupForm.get("items")}},{key:"getDetailItems",value:function(){return this.detailGroupForm.get("items")}},{key:"onImageChanged",value:function(e,t){this.productRequest.images[t]=e.target.files[0]}},{key:"createGroupItem",value:function(e){return this.formBuilder.group({title:this.coreService.translationService.buildFormGroup(e.title_translations),min_choice:e.min_choices,max_choice:e.max_choices,choiceItems:this.formBuilder.array(this.createChoiceItem(e))})}},{key:"createChoiceItem",value:function(e){for(var t=[],n=0;n<e.addon_choices.length;n++)t.push(this.formBuilder.group({title:this.coreService.translationService.buildFormGroup(e.addon_choices[n].title_translations),price:e.addon_choices[n].price}));return t}},{key:"addNewGroup",value:function(){this.groupFormItems.push(this.formBuilder.group({title:this.coreService.translationService.buildFormGroup(null),min_choice:"",max_choice:"",choiceItems:this.formBuilder.array([])}))}},{key:"addNewChoice",value:function(e){this.groupFormItems.at(e).controls.choiceItems.push(this.formBuilder.group({title:this.coreService.translationService.buildFormGroup(null),price:0}))}},{key:"deleteChoice",value:function(e,t){this.groupFormItems.at(e).controls.choiceItems.removeAt(t)}},{key:"deleteGroup",value:function(e){this.groupFormItems.removeAt(e)}},{key:"getFormGroupItems",value:function(){return this.groupForm.get("items")}}]),e}()).\u0275fac=function(e){return new(e||$)(l["\u0275\u0275directiveInject"](u.a),l["\u0275\u0275directiveInject"](p.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](I.a),l["\u0275\u0275directiveInject"](_.a),l["\u0275\u0275directiveInject"](x.d))},$.\u0275cmp=l["\u0275\u0275defineComponent"]({type:$,selectors:[["save"]],viewQuery:function(e,t){var n;1&e&&l["\u0275\u0275viewQuery"](C.a,!0),2&e&&l["\u0275\u0275queryRefresh"](n=l["\u0275\u0275loadQuery"]())&&(t.metaeditorComponent=n.first)},decls:89,vars:64,consts:[[1,"row"],[1,"col-md-12"],["nbSpinnerStatus","danger",3,"nbSpinner"],[3,"ngSubmit"],["form","ngForm"],[3,"formGroup"],["formArrayName","items"],["class","form-group",4,"ngFor","ngForOf"],["class","error text-danger",4,"ngFor","ngForOf"],[1,"form-group"],["fullWidth","","name","categories","multiple","",2,"text-transform","capitalize",3,"ngModel","ngModelChange"],["roles","ngModel"],[3,"value",4,"ngFor","ngForOf"],["readonly","","nbInput","","fullWidth","",3,"value",4,"ngIf","ngIfElse"],["selectVendor",""],["type","number","nbInput","","fullWidth","","placeholder","Price","name","price","required","",3,"ngModel","ngModelChange"],["price","ngModel"],[1,"error","text-danger",3,"hidden"],["type","number","nbInput","","fullWidth","","placeholder","Stock Quantity","name","stock_quantity","required","",3,"ngModel","ngModelChange"],["stock_quantity","ngModel"],["type","file","nbInput","","fullWidth","",3,"change"],["target","_blank",3,"href",4,"ngIf"],["formArrayName","items",4,"ngFor","ngForOf"],["type","button","nbButton","","status","info","size","medium",1,"float-lg-right",3,"click"],[3,"meta","metaChange"],["type","submit","nbButton","","status","success","size","medium","nbSpinnerStatus","success","nbSpinnerSize","small",3,"disabled","nbSpinner"],["type","button","nbButton","","status","danger","size","medium",3,"click"],[1,"language-label"],["type","text","nbInput","","fullWidth","","required","",3,"formControlName"],[1,"error","text-danger"],["nbInput","","fullWidth","","required","",3,"formControlName"],[3,"value"],["readonly","","nbInput","","fullWidth","",3,"value"],["fullWidth","","name","vendor_id",2,"text-transform","capitalize",3,"ngModel","ngModelChange"],["vendor_id","ngModel"],["target","_blank",3,"href"],["type","button","nbButton","","status","danger","size","small",1,"float-lg-right",3,"click"],[3,"formGroupName"],["formGroupName","title",1,"col-md-12"],[1,"col-md-6"],["type","text","nbInput","","fullWidth","","formControlName","min_choice"],["type","text","nbInput","","fullWidth","","formControlName","max_choice"],["formArrayName","choiceItems"],[4,"ngFor","ngForOf"],["for","title"],["type","text","nbInput","","fullWidth","","formControlName","price"],[1,"col-md-2"],["nbInput","","fullWidth","","type","button","nbButton","","status","danger","size","small",3,"click"],["icon","trash-2-outline"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"nb-card"),l["\u0275\u0275elementStart"](3,"nb-card-body",2),l["\u0275\u0275elementStart"](4,"form",3,4),l["\u0275\u0275listener"]("ngSubmit",(function(){return t.saveProduct()})),l["\u0275\u0275elementStart"](6,"div",0),l["\u0275\u0275elementStart"](7,"div",1),l["\u0275\u0275elementStart"](8,"nb-card"),l["\u0275\u0275elementStart"](9,"nb-card-header"),l["\u0275\u0275text"](10),l["\u0275\u0275pipe"](11,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"nb-card-body"),l["\u0275\u0275elementStart"](13,"div",5),l["\u0275\u0275elementStart"](14,"div",6),l["\u0275\u0275template"](15,P,8,7,"div",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](16,R,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",0),l["\u0275\u0275elementStart"](18,"div",1),l["\u0275\u0275elementStart"](19,"nb-card"),l["\u0275\u0275elementStart"](20,"nb-card-header"),l["\u0275\u0275text"](21),l["\u0275\u0275pipe"](22,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](23,"nb-card-body"),l["\u0275\u0275elementStart"](24,"div",5),l["\u0275\u0275elementStart"](25,"div",6),l["\u0275\u0275template"](26,F,8,7,"div",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](27,B,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](28,"div",9),l["\u0275\u0275elementStart"](29,"label"),l["\u0275\u0275text"](30),l["\u0275\u0275pipe"](31,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](32,"nb-select",10,11),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.productRequest.categories=e})),l["\u0275\u0275template"](34,L,2,2,"nb-option",12),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](35,k,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](36,"div",9),l["\u0275\u0275elementStart"](37,"label"),l["\u0275\u0275text"](38),l["\u0275\u0275pipe"](39,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](40,T,1,1,"input",13),l["\u0275\u0275template"](41,q,4,3,"ng-template",null,14,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](43,"div",9),l["\u0275\u0275elementStart"](44,"label"),l["\u0275\u0275text"](45),l["\u0275\u0275pipe"](46,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](47,"input",15,16),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.productRequest.price=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](49,"label",17),l["\u0275\u0275text"](50),l["\u0275\u0275pipe"](51,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](52,N,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](53,"div",9),l["\u0275\u0275elementStart"](54,"label"),l["\u0275\u0275text"](55),l["\u0275\u0275pipe"](56,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](57,"input",18,19),l["\u0275\u0275listener"]("ngModelChange",(function(e){return t.productRequest.stock_quantity=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](59,"label",17),l["\u0275\u0275text"](60),l["\u0275\u0275pipe"](61,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](62,M,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](63,"div",9),l["\u0275\u0275elementStart"](64,"label"),l["\u0275\u0275text"](65),l["\u0275\u0275pipe"](66,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](67,"input",20),l["\u0275\u0275listener"]("change",(function(e){return t.onImageChanged(e,0)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](68,G,2,2,"a",21),l["\u0275\u0275template"](69,U,2,1,"label",8),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](70,"div",0),l["\u0275\u0275elementStart"](71,"div",1),l["\u0275\u0275elementStart"](72,"nb-card",5),l["\u0275\u0275elementStart"](73,"nb-card-header"),l["\u0275\u0275text"](74),l["\u0275\u0275pipe"](75,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](76,"nb-card-body"),l["\u0275\u0275template"](77,z,37,22,"div",22),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](78,"button",23),l["\u0275\u0275listener"]("click",(function(){return t.addNewGroup()})),l["\u0275\u0275text"](79),l["\u0275\u0275pipe"](80,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](81,"ngx-metaeditor",24),l["\u0275\u0275listener"]("metaChange",(function(e){return t.productRequest.meta=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](82,"button",25),l["\u0275\u0275text"](83),l["\u0275\u0275pipe"](84,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](85," \xa0 "),l["\u0275\u0275elementStart"](86,"button",26),l["\u0275\u0275listener"]("click",(function(){return t.back()})),l["\u0275\u0275text"](87),l["\u0275\u0275pipe"](88,"translate"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275reference"](5),r=l["\u0275\u0275reference"](42),a=l["\u0275\u0275reference"](48),o=l["\u0275\u0275reference"](58);l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("nbSpinner",t.showProgress),l["\u0275\u0275advance"](7),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](11,38,"PRODUCT.FIELDS.TITLE.HEADER")),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("formGroup",t.titleGroupForm),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.getTitleItems().controls),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",t.productError.title_translations),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](22,40,"PRODUCT.FIELDS.DETAIL.HEADER")),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("formGroup",t.detailGroupForm),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.getDetailItems().controls),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",t.productError.detail_translations),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](31,42,"PRODUCT.FIELDS.CATEGORY.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.productRequest.categories),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.categories),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",t.productError.categories),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](39,44,"PRODUCT.FIELDS.VENDOR.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",(null==t.product?null:null==t.product.vendor_products?null:t.product.vendor_products.length)>0&&(null==t.product?null:null==t.product.vendor_products[0]?null:null==t.product.vendor_products[0].vendor?null:t.product.vendor_products[0].vendor.name))("ngIfElse",r),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](46,46,"PRODUCT.FIELDS.PRICE.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.productRequest.price),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",a.valid||a.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](51,48,"PRODUCT.FIELDS.PRICE.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.productError.price),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](56,50,"PRODUCT.FIELDS.STOCK_QUANTITY.LABEL")),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngModel",t.productRequest.stock_quantity),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("hidden",o.valid||o.pristine),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](61,52,"PRODUCT.FIELDS.STOCK_QUANTITY.VALIDATION")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngForOf",t.productError.stock_quantity),l["\u0275\u0275advance"](3),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](66,54,"PRODUCT.FIELDS.IMAGE.LABEL")),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngIf",(null==t.product?null:null==t.product.mediaurls?null:null==t.product.mediaurls.images?null:t.product.mediaurls.images.length)>0),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngForOf",t.productError.images),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("formGroup",t.groupForm),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](l["\u0275\u0275pipeBind1"](75,56,"PRODUCT.FIELDS.ADDON_GROUP.HEADER")),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.getFormGroupItems().controls),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](80,58,"PRODUCT.FIELDS.ADDON_GROUP.ADD_GROUP.LABEL")," "),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("meta",t.productRequest.meta),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("disabled",!n.form.valid||t.showProgressButton)("nbSpinner",t.showProgressButton),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](84,60,"COMMON.SAVE")," "),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind1"](88,62,"COMMON.BACK")," ")}},directives:[s.o,s.n,s.bb,x.B,x.q,x.r,s.q,x.h,x.c,O.l,s.W,x.p,x.s,O.m,x.u,s.D,x.b,x.x,s.l,C.a,x.g,s.S,x.i,s.A],pipes:[v.c,D.a],encapsulation:2}),$),Y=[{path:"",component:d,children:[{path:"add",component:Q},{path:"list",component:f},{path:"edit/:id",component:Q}]}],J=((H=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:H}),H.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||H)},imports:[[i.g.forChild(Y)],i.g]}),H);n.d(t,"ProductsModule",(function(){return X}));var K,X=((K=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:K}),K.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||K)},imports:[[o.a,J]]}),K)}}]);