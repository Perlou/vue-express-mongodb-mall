webpackJsonp([1],{364:function(e,t,n){function r(e){return n(i(e))}function i(e){var t=u[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var u={"./detail/index.ts":413,"./list/index.ts":418};r.keys=function(){return Object.keys(u)},r.resolve=i,e.exports=r,r.id=364},413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(62).__exportStar(n(414),t)},414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),i=n(130),u=n(131),o=n(415),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t=r.__decorate([u.Component({name:"view-product-detail",mixins:[o.default]})],t)}(i.default);t.default=a},415:function(e,t,n){"use strict";function r(e){n(416)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Product "+e._s(e.$route.params.id))])])},u=[],o={render:i,staticRenderFns:u},a=o,s=n(132),c=r,l=s(null,a,c,"data-v-50cfbec4",null);t.default=l.exports},416:function(e,t,n){var r=n(417);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(361)("58e4cff3",r,!0)},417:function(e,t,n){t=e.exports=n(360)(!1),t.push([e.i,"div[data-v-50cfbec4]{overflow:hidden}h1[data-v-50cfbec4]{text-align:center;margin:100px 0}",""])},418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(62).__exportStar(n(419),t)},419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62),i=n(130),u=n(131),o=n(420),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t=r.__decorate([u.Component({name:"view-product-list",mixins:[o.default]})],t)}(i.default);t.default=a},420:function(e,t,n){"use strict";function r(e){n(421)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("ul",e._l([1,2,3,4,5],function(t){return n("router-link",{key:t,attrs:{tag:"li",to:"/product/"+t}},[n("a",[e._v("Product "+e._s(t))])])}))])},u=[],o={render:i,staticRenderFns:u},a=o,s=n(132),c=r,l=s(null,a,c,"data-v-0927b3be",null);t.default=l.exports},421:function(e,t,n){var r=n(422);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(361)("b11cd7a0",r,!0)},422:function(e,t,n){t=e.exports=n(360)(!1),t.push([e.i,".list[data-v-0927b3be]{overflow:hidden}ul[data-v-0927b3be]{display:block;width:300px;margin:100px auto}",""])}});