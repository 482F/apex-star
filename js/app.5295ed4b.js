(function(t){function e(e){for(var n,s,o=e[0],i=e[1],u=e[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(p.length)p.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(l.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},l=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/apex-star/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=i;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0dbd":function(t,e,a){},1478:function(t,e,a){"use strict";a("abf0")},"3ab1":function(t,e,a){"use strict";a("69f8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("main-page")],1)},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-page"},[a("div",{staticClass:"row"},[a("input-form",{attrs:{label:"シーズン開始日",type:"date","option-key":"startDate"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),a("input-form",{attrs:{label:"シーズン終了日",type:"date","option-key":"endDate"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"row"},[a("input-form",{attrs:{label:"デイリー☆数",type:"number","option-key":"dailyStars","default-value":8},model:{value:t.dailyStars,callback:function(e){t.dailyStars=e},expression:"dailyStars"}}),a("input-form",{attrs:{label:"ウィークリー☆数",type:"number","option-key":"weeklyStars","default-value":63},model:{value:t.weeklyStars,callback:function(e){t.weeklyStars=e},expression:"weeklyStars"}})],1),a("div",{staticClass:"row"},[a("input-form",{attrs:{label:"現在☆数",type:"number","option-key":"currentStars"},model:{value:t.currentStars,callback:function(e){t.currentStars=e},expression:"currentStars"}}),a("input-form",{attrs:{label:"目標☆数",type:"number","option-key":"goalStars","default-value":1100},model:{value:t.goalStars,callback:function(e){t.goalStars=e},expression:"goalStars"}})],1),a("div",{staticClass:"row"},[a("display-label",{attrs:{label:"残日数",value:t.fl(t.restDays)}})],1),a("div",{staticClass:"row"},[a("display-label",{attrs:{label:"残デイリー☆数",value:t.fl(t.restDailyStars)}}),a("display-label",{attrs:{label:"残ウィークリー☆数",value:t.fl(t.restWeeklyStars)}})],1),a("div",{staticClass:"row"},[a("display-label",{attrs:{label:"残ミッション☆数",value:t.fl(t.restStars)}}),a("display-label",{attrs:{label:"ミッション☆数猶予",value:t.fl(t.graceStars)}})],1),a("div",{staticClass:"row"},[a("display-label",{attrs:{label:"予測目標達成日付",value:t.formatDate(t.estDate)}}),a("display-label",{attrs:{label:"日数猶予",value:t.fl(t.graceDays)}})],1)])},o=[],i=(a("4d90"),a("d3b7"),a("25f0"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-form"},[a("span",{staticClass:"label"},[t._v(t._s(t.label))]),a(t.component,{tag:"component",staticClass:"form",attrs:{value:t.value},on:{change:t.change}})],1)}),u=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("text-field",t._g({attrs:{value:t.value,readonly:""}},n))]}}]),model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[a("v-date-picker",{attrs:{value:t.value,locale:"ja"},on:{change:t.change}})],1)],1)},f=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-text-field",t._b({staticClass:"text-field",attrs:{outlined:"",dense:""},on:{click:function(e){return t.$emit("click",e)},change:function(e){return t.$emit("change",e)}}},"v-text-field",t.$props,!1))},d=[],v={name:"text-field",props:{value:{type:String},readonly:{type:Boolean},label:{type:String},error:{type:Boolean}}},h=v,b=(a("1478"),a("2877")),y=a("6544"),m=a.n(y),g=a("8654"),S=Object(b["a"])(h,p,d,!1,null,"fcc96cd0",null),D=S.exports;m()(S,{VTextField:g["a"]});var w={name:"date-form",components:{TextField:D},data:function(){return{showMenu:!1}},props:{value:{type:String}},methods:{convert:function(t){return new Date(t)},change:function(t){this.showMenu=!1,this.$emit("change",t,this.convert(t))}}},k=w,x=a("2e4b"),_=a("e449"),O=Object(b["a"])(k,c,f,!1,null,null,null),j=O.exports;m()(O,{VDatePicker:x["a"],VMenu:_["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("text-field",{attrs:{value:t.value,label:t.error?"数値を入力してください":void 0,error:t.error},on:{change:t.change}})],1)},C=[],$=(a("a9e3"),{name:"number-form",components:{TextField:D},data:function(){return{error:!1}},props:{value:{type:String}},methods:{convert:function(t){return Number(t)},change:function(t){var e=this.convert(t);e?(this.$emit("change",e),this.error=!1):this.error=!0}}}),P=$,V=Object(b["a"])(P,M,C,!1,null,null,null),E=V.exports,T={date:j,number:E},q={name:"input-form",data:function(){return{value:null}},model:{prop:"modelValue",event:"change"},props:{modelValue:{},label:{type:String,required:!0},optionKey:{type:String,required:!0},type:{type:String,required:!0},defaultValue:{}},computed:{component:function(){return T[this.type]}},mounted:function(){var t;this.value=null!==(t=localStorage.getItem(this.optionKey))&&void 0!==t?t:this.defaultValue,this.change(this.value,this.component.methods.convert(this.value))},methods:{change:function(t,e){t&&(this.$emit("change",null!==e&&void 0!==e?e:t),localStorage.setItem(this.optionKey,t),this.value=t)}}},F=q,I=(a("83d9"),Object(b["a"])(F,i,u,!1,null,"c978fc26",null)),K=I.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-label"},[a("span",{staticClass:"label"},[t._v(t._s(t.label))]),a("br"),a("span",{staticClass:"value"},[t._v(t._s(t.value))])])},A=[],B={name:"display-label",props:{label:{type:String,required:!0},value:{required:!0}}},J=B,H=(a("3ab1"),Object(b["a"])(J,W,A,!1,null,"2fb3df55",null)),L=H.exports,N={name:"main-page",components:{InputForm:K,DisplayLabel:L},data:function(){return{currentDate:new Date,startDate:void 0,endDate:void 0,dailyStars:void 0,weeklyStars:void 0,currentStars:void 0,goalStars:void 0}},computed:{restDays:function(){return(this.endDate-this.currentDate)/864e5},restDailyStars:function(){return Math.floor(this.restDays-1)*this.dailyStars},restWeeklyStars:function(){return Math.floor(this.restDays/7-1)*this.weeklyStars},restStars:function(){return this.restDailyStars+this.restWeeklyStars},graceStars:function(){return this.restStars-(this.goalStars-this.currentStars)},estDate:function(){return(this.goalStars-this.currentStars)/(this.currentStars/(this.currentDate-this.startDate))+this.currentDate.getTime()},graceDays:function(){return(this.endDate-this.estDate)/864e5}},mounted:function(){var t=this;setInterval((function(){return t.currentDate=new Date}),1e3)},methods:{fl:function(t){return t?Math.floor(t):""},formatDate:function(t){if(console.log(t),!t)return"";var e=new Date(t),a=function(t){return t.toString().padStart(2,"0")},n=e.getFullYear(),r=a(e.getMonth()+1),l=a(e.getDate()),s=a(e.getHours()),o=a(e.getMinutes()),i=a(e.getSeconds());return"".concat(n,"-").concat(r,"-").concat(l," ").concat(s,":").concat(o,":").concat(i)}}},Y=N,z=(a("57ae"),Object(b["a"])(Y,s,o,!1,null,"f403eba8",null)),G=z.exports,Q={name:"App",components:{MainPage:G}},R=Q,U=a("7496"),X=Object(b["a"])(R,r,l,!1,null,null,null),Z=X.exports;m()(X,{VApp:U["a"]});var tt=a("f309");n["a"].use(tt["a"]);var et=new tt["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:et,render:function(t){return t(Z)}}).$mount("#app")},"57ae":function(t,e,a){"use strict";a("fbac")},"69f8":function(t,e,a){},"83d9":function(t,e,a){"use strict";a("0dbd")},abf0:function(t,e,a){},fbac:function(t,e,a){}});
//# sourceMappingURL=app.5295ed4b.js.map