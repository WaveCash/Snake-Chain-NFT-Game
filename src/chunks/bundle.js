System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/_rollupPluginModLoBabelHelpers.js",[],(function(e){"use strict";return{execute:function(){function i(e,i,r,t,n,o,u){try{var a=e[o](u),l=a.value}catch(e){return void r(e)}a.done?i(l):Promise.resolve(l).then(t,n)}function r(i,t){return(r=e("setPrototypeOf",Object.setPrototypeOf||function(e,i){return e.__proto__=i,e}))(i,t)}e({applyDecoratedDescriptor:function(e,i,r,t,n){var o={};Object.keys(t).forEach((function(e){o[e]=t[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=r.slice().reverse().reduce((function(r,t){return t(e,i,r)||r}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,i,o),o=null);return o},assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},asyncToGenerator:function(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var u=e.apply(r,t);function a(e){i(u,n,o,a,l,"next",e)}function l(e){i(u,n,o,a,l,"throw",e)}a(void 0)}))}},defineProperty:function(e,i,r){i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r;return e},inheritsLoose:function(e,i){e.prototype=Object.create(i.prototype),e.prototype.constructor=e,r(e,i)},initializerDefineProperty:function(e,i,r,t){if(!r)return;Object.defineProperty(e,i,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(t):void 0})},setPrototypeOf:r})}}}));

System.register("chunks:///_virtual/web3.min.mjs_cjs=&original=.js",["./cjs-loader.mjs","./web3.min.js"],(function(e,t){"use strict";var r,s;return{setters:[function(e){r=e.default},function(t){s=t.__cjsMetaURL;var r={};r.__cjsMetaURL=t.__cjsMetaURL,r.default=t.default,e(r)}],execute:function(){s||r.throwInvalidWrapper("./web3.min.js",t.meta.url),r.require(s)}}}));

System.register("chunks:///_virtual/cjs-loader.mjs",[],(function(r){"use strict";return{execute:function(){r("default",new(function(){function r(){this._namedWrappers={},this._resolveCache={},this._moduleCache={}}var e=r.prototype;return e.define=function(r,e){this._namedWrappers[r]=e},e.require=function(r){return this._require(r)},e.createRequireWithReqMap=function(r,e){return function(t){var n=r[t];if(n)return e(n);throw new Error("Unresolved specifier "+t)}},e.throwInvalidWrapper=function(r,e){throw new Error("Module '"+r+"' imported from '"+e+"' is expected be an ESM-wrapped CommonJS module but it doesn't.")},e._require=function(r,e){var t=this._moduleCache[r];if(t)return t.exports;var n={id:r,exports:{}};return this._moduleCache[r]=n,this._tryModuleLoad(n,r),n.exports},e._resolve=function(r,e){return this._resolveFromInfos(r,e)||this._throwUnresolved(r,e)},e._resolveFromInfos=function(r,e){var t,n;return r in cjsInfos?r:e&&null!==(t=null===(n=cjsInfos[e])||void 0===n?void 0:n.resolveCache[r])&&void 0!==t?t:void 0},e._tryModuleLoad=function(r,e){var t=!0;try{this._load(r,e),t=!1}finally{t&&delete this._moduleCache[e]}},e._load=function(r,e){var t=this._loadWrapper(e),n=this._createRequire(r);t(r.exports,n,r)},e._loadWrapper=function(r){return r in this._namedWrappers?this._namedWrappers[r]:this._loadExternalWrapper(r)},e._loadExternalWrapper=function(r){return function(e){var t;try{t=URL.fileURLToPath(r)}catch(e){throw new Error(r+" is not a valid file URL")}var n=require(t);Object.assign(e,n)}},e._createRequire=function(r){var e=this;return function(t){return e._require(t,r)}},e._throwUnresolved=function(r,e){throw new Error("Unable to resolve "+r+" from "+parent+".")},r}()))}}}));

System.register("chunks:///_virtual/moralis.mjs_cjs=&original=.js",["./cjs-loader.mjs","./moralis.js"],(function(e,t){"use strict";var r,s;return{setters:[function(e){r=e.default},function(t){s=t.__cjsMetaURL;var r={};r.__cjsMetaURL=t.__cjsMetaURL,r.default=t.default,e(r)}],execute:function(){s||r.throwInvalidWrapper("./moralis.js",t.meta.url),r.require(s)}}}));

} }; });
//# sourceMappingURL=bundle.js.map