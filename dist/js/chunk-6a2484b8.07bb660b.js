(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a2484b8"],{"159b":function(e,t,i){var s=i("da84"),a=i("fdbc"),r=i("17c2"),n=i("9112");for(var o in a){var c=s[o],l=c&&c.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(u){l.forEach=r}}},"17c2":function(e,t,i){"use strict";var s=i("b727").forEach,a=i("a640"),r=a("forEach");e.exports=r?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},"4de4":function(e,t,i){"use strict";var s=i("23e7"),a=i("b727").filter,r=i("1dde"),n=r("filter");s({target:"Array",proto:!0,forced:!n},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));i("b64b"),i("a4d3"),i("4de4"),i("e439"),i("159b"),i("dbb4");function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}},"7d69":function(e,t,i){},b64b:function(e,t,i){var s=i("23e7"),a=i("7b0b"),r=i("df75"),n=i("d039"),o=n((function(){r(1)}));s({target:"Object",stat:!0,forced:o},{keys:function(e){return r(a(e))}})},cec9:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"management"},[i("rainbow-nav-new"),i("div",{staticClass:"rainbow-panel"},[i("div",{staticClass:"rainbow-nav-box"},[i("div",{staticClass:"nav-item ",class:{active:0==e.activeIndex},on:{click:function(t){e.activeIndex=0}}},[e._v(" Role management ")]),i("div",{staticClass:"nav-item",class:{active:1==e.activeIndex},on:{click:function(t){e.activeIndex=1}}},[e._v(" Authority management ")]),i("div",{staticClass:"nav-item",class:{active:2==e.activeIndex},on:{click:function(t){e.activeIndex=2}}},[e._v(" Route management ")])]),i("div",{staticClass:"content"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0==e.activeIndex,expression:"activeIndex==0"}],staticClass:"role"},[i("div",{staticClass:"title"},[e._v(" Role management ")]),i("div",{staticClass:"role-list"},[i("div",{staticClass:"sub-title"},[e._v(" All Roles: ")]),e._l(e.listRoles,(function(t){return i("div",{staticClass:"role-item"},[i("div",{staticClass:"name"},[e._v(" "+e._s(t)+" ")])])})),i("div",{staticClass:"role-item"},[i("strong",[e._v("Add Role:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.roleInfo,expression:"roleInfo"}],staticClass:"add-input",attrs:{type:"text",placeholder:"Add role name"},domProps:{value:e.roleInfo},on:{input:function(t){t.target.composing||(e.roleInfo=t.target.value)}}})])],2),i("div",{staticClass:"confirm-btn rainbow-btn",on:{click:e.addRole}},[e._v(" confirm ")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.activeIndex,expression:"activeIndex==1"}],staticClass:"authority"},[i("div",{staticClass:"title"},[e._v(" Authority management ")]),i("div",{staticClass:"manager-list"},e._l(e.authList,(function(t,s){return i("div",{key:s,staticClass:"manager-item"},[e._m(0,!0),i("div",{staticClass:"name"},[e._v(" "+e._s(t.name)+" ")]),e._v(": "),i("div",{staticClass:"privileges"},e._l(t.privileges,(function(t,s){return i("div",{key:s,staticClass:"item"},[e._v(" "+e._s(t)+" ")])})),0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newprivilege,expression:"item.newprivilege"}],attrs:{type:"text",placeholder:"new privilege"},domProps:{value:t.newprivilege},on:{input:function(i){i.target.composing||e.$set(t,"newprivilege",i.target.value)}}}),i("div",{staticClass:"confirm-btn ",on:{click:function(i){return e.roleInsertPrivilege(t)}}},[e._v(" Add ")])])})),0)]),i("div",{directives:[{name:"show",rawName:"v-show",value:2==e.activeIndex,expression:"activeIndex==2"}],staticClass:"route"},[i("div",{staticClass:"title"},[e._v(" Route management ")]),i("div",{staticClass:"route-list"},e._l(e.routerList,(function(t,s){return i("div",{key:s,staticClass:"route-item"},[e._m(1,!0),i("div",{staticClass:"name"},[i("strong",[e._v("name")]),e._v(":"+e._s(s)+" ")]),i("div",{staticClass:"address"},[i("strong",[e._v("address")]),e._v(":"+e._s(t)+" ")])])})),0),i("div",{staticClass:"add-item"},[i("strong",[e._v("add router:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.routerName,expression:"routerName"}],staticClass:"add-input",attrs:{type:"text",placeholder:"Add route name"},domProps:{value:e.routerName},on:{input:function(t){t.target.composing||(e.routerName=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.routerValue,expression:"routerValue"}],staticClass:"add-input",attrs:{type:"text",placeholder:"Add route address"},domProps:{value:e.routerValue},on:{input:function(t){t.target.composing||(e.routerValue=t.target.value)}}})]),i("div",{staticClass:"confirm-btn rainbow-btn",on:{click:e.addRoute}},[e._v(" confirm ")])])])]),i("pageFooter")],1)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"icon"},[i("img",{attrs:{src:"",alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"icon"},[i("img",{attrs:{src:"",alt:""}})])}],r=i("2909"),n=i("5530"),o=(i("159b"),i("b0c0"),i("2f62")),c={name:"management",data:function(){return{activeIndex:0,roleInfo:void 0,listRoles:[],authList:[],routerName:void 0,routerValue:void 0,privilege:void 0,routerList:[],roleAddress:"",routerAddress:"",authAddress:""}},mounted:function(){var e=this;this.getData(),this.$eventBus.$on("message",(function(){e.getData()}))},beforeDestroy:function(){this.$eventBus.$on("message",(function(){}))},computed:Object(n["a"])({},Object(o["b"])(["account","isConnected"])),watch:{isConnected:function(){this.getData()}},methods:{getData:function(){var e=this;this.isConnected&&(this.$store.dispatch("core/getRoleAddr").then((function(t){e.roleAddress=t,e.$store.dispatch("roleManage/listRoles",e.roleAddress).then((function(t){e.authList=[],t&&(t.forEach((function(t){var i=[];e.$store.dispatch("roleManage/listRolePrivileges",{name:t,address:e.roleAddress}).then((function(e){e&&i.push.apply(i,Object(r["a"])(e))})),e.authList.push({privileges:i,name:t})})),e.listRoles=t)}))})),this.$store.dispatch("core/getAuthAddr").then((function(t){e.authAddress=t})),this.$store.dispatch("core/getRouteAddr").then((function(t){console.log(t),e.routerAddress=t,e.$store.dispatch("routerMap/listRoute",t).then((function(t){console.log(t),e.routerList=t}))})))},roleInsertPrivilege:function(e){e.newprivilege?this.$store.dispatch("core/roleInsertPrivilege",{name:e.name,privilege:e.newprivilege}):this.$eventBus.$emit("message",{type:"error",message:"input Privilege please"})},addRoute:function(){var e=this;this.routerName?this.$store.dispatch("core/addRoute",{name:this.routerName,routeValue:this.routerValue}).then((function(){e.getData()})):this.$eventBus.$emit("message",{type:"error",message:"input routerName please"})},addRole:function(){var e=this;this.roleInfo?this.$store.dispatch("core/addRole",this.roleInfo).then((function(t){setTimeout((function(){e.getData()}),1e3)})):this.$eventBus.$emit("message",{type:"error",message:"input roleInfo please"})}}},l=c,u=(i("f25b"),i("2877")),d=Object(u["a"])(l,s,a,!1,null,"78114ff8",null);t["default"]=d.exports},dbb4:function(e,t,i){var s=i("23e7"),a=i("83ab"),r=i("56ef"),n=i("fc6a"),o=i("06cf"),c=i("8418");s({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,i,s=n(e),a=o.f,l=r(s),u={},d=0;while(l.length>d)i=a(s,t=l[d++]),void 0!==i&&c(u,t,i);return u}})},e439:function(e,t,i){var s=i("23e7"),a=i("d039"),r=i("fc6a"),n=i("06cf").f,o=i("83ab"),c=a((function(){n(1)})),l=!o||c;s({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(e,t){return n(r(e),t)}})},f25b:function(e,t,i){"use strict";i("7d69")}}]);
//# sourceMappingURL=chunk-6a2484b8.07bb660b.js.map