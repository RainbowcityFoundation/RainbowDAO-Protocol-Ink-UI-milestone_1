(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-768ff8f1"],{"159b":function(t,e,n){var r=n("da84"),c=n("fdbc"),o=n("17c2"),i=n("9112");for(var a in c){var s=r[a],f=s&&s.prototype;if(f&&f.forEach!==o)try{i(f,"forEach",o)}catch(u){f.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,c=n("a640"),o=c("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,o=n("1dde"),i=o("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"6ad2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"token-panel"},[n("multi-sign-nav"),n("div",{staticClass:"token-panel-content"},[n("div",{staticClass:"title"},[t._v(" Token Panel ")]),n("div",{staticClass:"search-box"},[n("div",{staticClass:"token-list"},[n("div",{staticClass:"sub-title"},[t._v(" My Tokens ")]),t._l(t.tokenList,(function(e,r){return n("div",{key:r,staticClass:"item"},[t._v(" "+t._s(e)+" ")])}))],2)])]),n("page-footer")],1)},c=[],o=n("5530"),i=n("2f62"),a={name:"tokenPanel",data:function(){return{routerName:void 0,result:"",tokenList:[]}},computed:Object(o["a"])({},Object(i["b"])(["account","isConnected"])),watch:{isConnected:function(){this.getData()}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.isConnected&&this.$store.dispatch("tokenFactory/listToken").then((function(e){console.log(e),e&&e.length>0&&(t.tokenList=e)}))}}},s=a,f=(n("f111"),n("2877")),u=Object(f["a"])(s,r,c,!1,null,"37b4ce48",null);e["default"]=u.exports},"7ae5":function(t,e,n){},b64b:function(t,e,n){var r=n("23e7"),c=n("7b0b"),o=n("df75"),i=n("d039"),a=i((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return o(c(t))}})},dbb4:function(t,e,n){var r=n("23e7"),c=n("83ab"),o=n("56ef"),i=n("fc6a"),a=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),c=a.f,f=o(r),u={},b=0;while(f.length>b)n=c(r,e=f[b++]),void 0!==n&&s(u,e,n);return u}})},e439:function(t,e,n){var r=n("23e7"),c=n("d039"),o=n("fc6a"),i=n("06cf").f,a=n("83ab"),s=c((function(){i(1)})),f=!a||s;r({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},f111:function(t,e,n){"use strict";n("7ae5")}}]);
//# sourceMappingURL=chunk-768ff8f1.a40e6069.js.map