function _defineProperties(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,a,n){return a&&_defineProperties(e.prototype,a),n&&_defineProperties(e,n),e}function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{yPrK:function(e,a,n){"use strict";n.r(a);var t,i=n("vTDv"),r=n("tyNb"),o=n("fXoL"),l=((t=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["settings"]],decls:1,vars:0,template:function(e,a){1&e&&o["\u0275\u0275element"](0,"router-outlet")},directives:[r.h],encapsulation:2}),t);n("HxAg");var c=n("CdOr"),s=n("QNOW"),m=function e(){_classCallCheck(this,e)},A=n("rs9U"),d=n("aceb"),u=n("3Pt+"),p=n("ofXK"),E=n("sYmb");function S(e,a){if(1&e&&(o["\u0275\u0275elementStart"](0,"nb-option",18),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){var n=a.$implicit;o["\u0275\u0275property"]("value",n),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](n)}}function g(e,a){if(1&e&&(o["\u0275\u0275elementStart"](0,"nb-option",18),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){var n=a.$implicit;o["\u0275\u0275property"]("value",n),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](n)}}function I(e,a){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275elementStart"](1,"div",3),o["\u0275\u0275elementStart"](2,"label"),o["\u0275\u0275text"](3),o["\u0275\u0275pipe"](4,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"input",19),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.MAILGUN_DOMAIN=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",3),o["\u0275\u0275elementStart"](7,"label"),o["\u0275\u0275text"](8),o["\u0275\u0275pipe"](9,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"input",20),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.MAILGUN_SECRET=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var t=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](4,4,"SETTINGS.EMAIL_SETTINGS.MAILGUN_DOMAIN.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.MAILGUN_DOMAIN),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](9,6,"SETTINGS.EMAIL_SETTINGS.MAILGUN_SECRET.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.MAILGUN_SECRET)}}function v(e,a){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275elementStart"](1,"div",3),o["\u0275\u0275elementStart"](2,"label"),o["\u0275\u0275text"](3),o["\u0275\u0275pipe"](4,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"input",21),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.SES_KEY=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",3),o["\u0275\u0275elementStart"](7,"label"),o["\u0275\u0275text"](8),o["\u0275\u0275pipe"](9,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"input",22),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.SES_SECRET=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var t=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](4,4,"SETTINGS.EMAIL_SETTINGS.SES_KEY.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.SES_KEY),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](9,6,"SETTINGS.EMAIL_SETTINGS.SES_SECRET.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.SES_SECRET)}}function f(e,a){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275elementStart"](1,"div",3),o["\u0275\u0275elementStart"](2,"label"),o["\u0275\u0275text"](3),o["\u0275\u0275pipe"](4,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"input",23),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.MAIL_HOST=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"div",3),o["\u0275\u0275elementStart"](7,"label"),o["\u0275\u0275text"](8),o["\u0275\u0275pipe"](9,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"input",24),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.MAIL_PORT=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"div",3),o["\u0275\u0275elementStart"](12,"label"),o["\u0275\u0275text"](13),o["\u0275\u0275pipe"](14,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"input",25),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.MAIL_USERNAME=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"div",3),o["\u0275\u0275elementStart"](17,"label"),o["\u0275\u0275text"](18),o["\u0275\u0275pipe"](19,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"input",26),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.MAIL_PASSWORD=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"div",3),o["\u0275\u0275elementStart"](22,"label"),o["\u0275\u0275text"](23),o["\u0275\u0275pipe"](24,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"input",27),o["\u0275\u0275listener"]("ngModelChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().env.MAIL_ENCRYPTION=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var t=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](4,10,"SETTINGS.EMAIL_SETTINGS.HOST.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.MAIL_HOST),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](9,12,"SETTINGS.EMAIL_SETTINGS.PORT.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.MAIL_PORT),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](14,14,"SETTINGS.EMAIL_SETTINGS.USERNAME.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.MAIL_USERNAME),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](19,16,"SETTINGS.EMAIL_SETTINGS.PASSWORD.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.MAIL_PASSWORD),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](24,18,"SETTINGS.EMAIL_SETTINGS.ENCRYPTION.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",t.env.MAIL_ENCRYPTION)}}function _(e,a){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",5),o["\u0275\u0275elementStart"](1,"label",6),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"textarea",7),o["\u0275\u0275listener"]("ngModelChange",(function(e){o["\u0275\u0275restoreView"](n);var t=a.$implicit;return o["\u0275\u0275nextContext"]().updatedSettings[t.key]=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var t=a.$implicit,i=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275propertyInterpolate"]("for",t.key),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](i.formatKey(t.key)),o["\u0275\u0275advance"](1),o["\u0275\u0275propertyInterpolate"]("id",t.key),o["\u0275\u0275propertyInterpolate"]("placeholder",t.key),o["\u0275\u0275propertyInterpolate"]("name",t.key),o["\u0275\u0275property"]("ngModel",i.updatedSettings[t.key])}}var M,h,b,T=[{path:"",component:l,children:[{path:"system",component:(h=function(){function e(a,n,t){_classCallCheck(this,e),this.client=a,this.coreService=n,this.route=t,this.env=new m,this.timezoneList=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC"],this.mailDriverList=["mailgun","smtp","ses"],this.showProgress=!1,this.showProgressButton=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.getEnv()}},{key:"getEnv",value:function(){var e=this;this.client.envList().subscribe((function(a){e.env=a,console.log(e.env)}))}},{key:"updateEnv",value:function(){var e=this;this.showProgressButton=!0;for(var a=new FormData,n=0,t=Object.keys(this.env);n<t.length;n++){var i=t[n];a.append(i,this.env[i])}this.client.updateEnv(a).subscribe((function(a){e.showProgressButton=!1,e.coreService.toastService.showToast(s.b.SUCCESS,"Saved","Saved successfully!")}),(function(a){e.showProgressButton=!1,e.coreService.toastService.showToast(s.b.DANGER,"Failed",a.error.message)}))}}]),e}(),h.\u0275fac=function(e){return new(e||h)(o["\u0275\u0275directiveInject"](A.a),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](r.a))},h.\u0275cmp=o["\u0275\u0275defineComponent"]({type:h,selectors:[["system"]],decls:89,vars:61,consts:[[1,"row"],[1,"col-md-12"],[3,"ngSubmit"],[1,"form-group"],["fullWidth","","name","app_timezone","id","app_timezone","name","app_timezone",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-6"],["nbInput","","fullWidth","","name","MAIL_FROM_ADDRESS",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","MAIL_FROM_NAME",3,"ngModel","ngModelChange"],["fullWidth","","name","status","id","status","name","mail_driver",3,"ngModel","ngModelChange"],[4,"ngIf"],["nbInput","","fullWidth","","name","ONESIGNAL_APP_ID_CUSTOMER",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","ONESIGNAL_REST_API_CUSTOMER",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","ONESIGNAL_APP_ID_VENDOR",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","ONESIGNAL_REST_API_VENDOR",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","ONESIGNAL_APP_ID_DRIVER",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","ONESIGNAL_REST_API_DRIVER",3,"ngModel","ngModelChange"],["type","submit","nbButton","","status","success","size","medium","nbSpinnerStatus","primary","nbSpinnerSize","success",3,"nbSpinner"],[3,"value"],["nbInput","","fullWidth","","name","mailgun_domain",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","mailgun_secret",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","SES_KEY",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","SES_SECRET",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","mail_host",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","mail_port",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","mail_username",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","mail_password",3,"ngModel","ngModelChange"],["nbInput","","fullWidth","","name","mail_encryption",3,"ngModel","ngModelChange"]],template:function(e,a){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"nb-card"),o["\u0275\u0275elementStart"](3,"nb-card-header"),o["\u0275\u0275text"](4),o["\u0275\u0275pipe"](5,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"nb-card-body"),o["\u0275\u0275elementStart"](7,"form",2),o["\u0275\u0275listener"]("ngSubmit",(function(){return a.updateEnv()})),o["\u0275\u0275elementStart"](8,"div",0),o["\u0275\u0275elementStart"](9,"div",1),o["\u0275\u0275elementStart"](10,"nb-card"),o["\u0275\u0275elementStart"](11,"nb-card-header"),o["\u0275\u0275text"](12),o["\u0275\u0275pipe"](13,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"nb-card-body"),o["\u0275\u0275elementStart"](15,"div",3),o["\u0275\u0275elementStart"](16,"label"),o["\u0275\u0275text"](17),o["\u0275\u0275pipe"](18,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"nb-select",4),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.APP_TIMEZONE=e})),o["\u0275\u0275template"](20,S,2,2,"nb-option",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"div",0),o["\u0275\u0275elementStart"](22,"div",1),o["\u0275\u0275elementStart"](23,"nb-card"),o["\u0275\u0275elementStart"](24,"nb-card-header"),o["\u0275\u0275text"](25),o["\u0275\u0275pipe"](26,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"nb-card-body"),o["\u0275\u0275elementStart"](28,"div",0),o["\u0275\u0275elementStart"](29,"div",6),o["\u0275\u0275elementStart"](30,"div",3),o["\u0275\u0275elementStart"](31,"label"),o["\u0275\u0275text"](32),o["\u0275\u0275pipe"](33,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](34,"input",7),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.MAIL_FROM_ADDRESS=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](35,"div",6),o["\u0275\u0275elementStart"](36,"div",3),o["\u0275\u0275elementStart"](37,"label"),o["\u0275\u0275text"](38),o["\u0275\u0275pipe"](39,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](40,"input",8),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.MAIL_FROM_NAME=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](41,"div",3),o["\u0275\u0275elementStart"](42,"label"),o["\u0275\u0275text"](43),o["\u0275\u0275pipe"](44,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](45,"nb-select",9),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.MAIL_DRIVER=e})),o["\u0275\u0275template"](46,g,2,2,"nb-option",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](47,I,11,8,"div",10),o["\u0275\u0275template"](48,v,11,8,"div",10),o["\u0275\u0275template"](49,f,26,20,"div",10),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](50,"div",1),o["\u0275\u0275elementStart"](51,"nb-card"),o["\u0275\u0275elementStart"](52,"nb-card-header"),o["\u0275\u0275text"](53),o["\u0275\u0275pipe"](54,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](55,"nb-card-body"),o["\u0275\u0275elementStart"](56,"div",3),o["\u0275\u0275elementStart"](57,"label"),o["\u0275\u0275text"](58),o["\u0275\u0275pipe"](59,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](60,"input",11),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.ONESIGNAL_APP_ID_CUSTOMER=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](61,"div",3),o["\u0275\u0275elementStart"](62,"label"),o["\u0275\u0275text"](63),o["\u0275\u0275pipe"](64,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](65,"input",12),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.ONESIGNAL_REST_API_CUSTOMER=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](66,"div",3),o["\u0275\u0275elementStart"](67,"label"),o["\u0275\u0275text"](68),o["\u0275\u0275pipe"](69,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](70,"input",13),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.ONESIGNAL_APP_ID_VENDOR=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](71,"div",3),o["\u0275\u0275elementStart"](72,"label"),o["\u0275\u0275text"](73),o["\u0275\u0275pipe"](74,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](75,"input",14),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.ONESIGNAL_REST_API_VENDOR=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](76,"div",3),o["\u0275\u0275elementStart"](77,"label"),o["\u0275\u0275text"](78),o["\u0275\u0275pipe"](79,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](80,"input",15),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.ONESIGNAL_APP_ID_DRIVER=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](81,"div",3),o["\u0275\u0275elementStart"](82,"label"),o["\u0275\u0275text"](83),o["\u0275\u0275pipe"](84,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](85,"input",16),o["\u0275\u0275listener"]("ngModelChange",(function(e){return a.env.ONESIGNAL_REST_API_DRIVER=e})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](86,"button",17),o["\u0275\u0275text"](87),o["\u0275\u0275pipe"](88,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](5,31,"SETTINGS.LABELS.ENV")),o["\u0275\u0275advance"](8),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](13,33,"SETTINGS.APP_CONFIG.LABEL")),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](18,35,"SETTINGS.APP_CONFIG.TIMEZONE.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.APP_TIMEZONE),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",a.timezoneList),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](26,37,"SETTINGS.EMAIL_SETTINGS.LABEL")),o["\u0275\u0275advance"](7),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](33,39,"SETTINGS.EMAIL_SETTINGS.MAIL_FROM_ADDRESS.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.MAIL_FROM_ADDRESS),o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](39,41,"SETTINGS.EMAIL_SETTINGS.MAIL_FROM_NAME.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.MAIL_FROM_NAME),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](44,43,"SETTINGS.EMAIL_SETTINGS.MAIL_DRIVER.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.MAIL_DRIVER),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",a.mailDriverList),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf","mailgun"==a.env.MAIL_DRIVER),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf","ses"==a.env.MAIL_DRIVER),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf","smtp"==a.env.MAIL_DRIVER),o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](54,45,"SETTINGS.PUSH_NOTIFICATIONS.LABEL")),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](59,47,"SETTINGS.EMAIL_SETTINGS.ONESIGNAL_APP_ID_CUSTOMER.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.ONESIGNAL_APP_ID_CUSTOMER),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](64,49,"SETTINGS.EMAIL_SETTINGS.ONESIGNAL_REST_API_CUSTOMER.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.ONESIGNAL_REST_API_CUSTOMER),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](69,51,"SETTINGS.EMAIL_SETTINGS.ONESIGNAL_APP_ID_VENDOR.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.ONESIGNAL_APP_ID_VENDOR),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](74,53,"SETTINGS.EMAIL_SETTINGS.ONESIGNAL_REST_API_VENDOR.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.ONESIGNAL_REST_API_VENDOR),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](79,55,"SETTINGS.EMAIL_SETTINGS.ONESIGNAL_APP_ID_DRIVER.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.ONESIGNAL_APP_ID_DRIVER),o["\u0275\u0275advance"](3),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](84,57,"SETTINGS.EMAIL_SETTINGS.ONESIGNAL_REST_API_DRIVER.LABEL")),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngModel",a.env.ONESIGNAL_REST_API_DRIVER),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("nbSpinner",a.showProgressButton),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](88,59,"COMMON.SAVE")," "))},directives:[d.o,d.q,d.n,u.B,u.q,u.r,d.W,u.p,u.s,p.l,d.D,u.b,p.m,d.l,d.bb,d.S],pipes:[E.c],encapsulation:2}),h)},{path:"edit",component:(M=function(){function e(a,n){_classCallCheck(this,e),this.client=a,this.coreService=n,this.updatedSettings={},this.settings=[],this.showProgress=!1,this.showProgressButton=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.getSettings()}},{key:"getSettings",value:function(){var e=this;this.client.list().subscribe((function(a){e.settings=a;for(var n=0;n<e.settings.length;n++)e.updatedSettings[e.settings[n].key]=e.settings[n].value}))}},{key:"updateSetting",value:function(){var e=this;this.showProgressButton=!0;var a=new FormData;for(var n in this.updatedSettings)a.append(n,this.updatedSettings[n]);this.client.store(a).subscribe((function(a){e.showProgressButton=!1,e.coreService.toastService.showToast(s.b.SUCCESS,"Saved","Saved successfully!")}),(function(a){e.showProgressButton=!1,e.coreService.toastService.showToast(s.b.SUCCESS,"Failed",a.error.message)}))}},{key:"formatKey",value:function(e){return e.replace(/\_/g," ")}}]),e}(),M.\u0275fac=function(e){return new(e||M)(o["\u0275\u0275directiveInject"](A.a),o["\u0275\u0275directiveInject"](c.a))},M.\u0275cmp=o["\u0275\u0275defineComponent"]({type:M,selectors:[["edit-setting"]],decls:12,vars:8,consts:[[1,"row"],[1,"col-md-12"],[3,"ngSubmit"],["class","form-group",4,"ngFor","ngForOf"],["type","submit","nbButton","","status","success","size","medium","nbSpinnerStatus","success","nbSpinnerSize","small",3,"nbSpinner"],[1,"form-group"],[2,"text-transform","capitalize",3,"for"],["nbInput","","fullWidth","",3,"id","ngModel","placeholder","name","ngModelChange"]],template:function(e,a){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"nb-card"),o["\u0275\u0275elementStart"](3,"nb-card-header"),o["\u0275\u0275text"](4),o["\u0275\u0275pipe"](5,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"nb-card-body"),o["\u0275\u0275elementStart"](7,"form",2),o["\u0275\u0275listener"]("ngSubmit",(function(){return a.updateSetting()})),o["\u0275\u0275template"](8,_,4,6,"div",3),o["\u0275\u0275elementStart"](9,"button",4),o["\u0275\u0275text"](10),o["\u0275\u0275pipe"](11,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](5,4,"SETTINGS.LABELS.EDIT")),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngForOf",a.settings),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("nbSpinner",a.showProgressButton),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",o["\u0275\u0275pipeBind1"](11,6,"COMMON.SAVE")," "))},directives:[d.o,d.q,d.n,u.B,u.q,u.r,p.l,d.l,d.bb,d.D,u.b,u.p,u.s],pipes:[E.c],encapsulation:2}),M)}]}],N=((b=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},imports:[[r.g.forChild(T)],r.g]}),b);n.d(a,"SettingsModule",(function(){return L}));var C,L=((C=function e(){_classCallCheck(this,e)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[i.a,N]]}),C)}}]);