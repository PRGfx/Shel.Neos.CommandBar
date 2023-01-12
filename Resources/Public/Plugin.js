/*! For license information please see Plugin.js.LICENSE.txt */
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=20)}([function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(2));e.exports=(0,n.default)("vendor")().React},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(2));e.exports=(0,n.default)("vendor")().PropTypes},function(e,t,r){"use strict";t.__esModule=!0;var n=r(3);t.default=function readFromConsumerApi(e){return function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"]["@"+e])return(t=window["@Neos:HostPluginAPI"])["@"+e].apply(t,n.__spread(r));throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}},function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return __extends})),r.d(t,"__assign",(function(){return __assign})),r.d(t,"__rest",(function(){return __rest})),r.d(t,"__decorate",(function(){return __decorate})),r.d(t,"__param",(function(){return __param})),r.d(t,"__metadata",(function(){return __metadata})),r.d(t,"__awaiter",(function(){return __awaiter})),r.d(t,"__generator",(function(){return __generator})),r.d(t,"__createBinding",(function(){return __createBinding})),r.d(t,"__exportStar",(function(){return __exportStar})),r.d(t,"__values",(function(){return __values})),r.d(t,"__read",(function(){return __read})),r.d(t,"__spread",(function(){return __spread})),r.d(t,"__spreadArrays",(function(){return __spreadArrays})),r.d(t,"__await",(function(){return __await})),r.d(t,"__asyncGenerator",(function(){return __asyncGenerator})),r.d(t,"__asyncDelegator",(function(){return __asyncDelegator})),r.d(t,"__asyncValues",(function(){return __asyncValues})),r.d(t,"__makeTemplateObject",(function(){return __makeTemplateObject})),r.d(t,"__importStar",(function(){return __importStar})),r.d(t,"__importDefault",(function(){return __importDefault})),r.d(t,"__classPrivateFieldGet",(function(){return __classPrivateFieldGet})),r.d(t,"__classPrivateFieldSet",(function(){return __classPrivateFieldSet}));var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function __decorate(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function __param(e,t){return function(r,n){t(r,n,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,t,r,n){return new(r||(r=Promise))((function(o,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __generator(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(a){return function(c){return function step(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function __createBinding(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function __exportStar(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n;function verb(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||resume(e,t)}))})}function resume(e,t){try{!function step(e){e.value instanceof __await?Promise.resolve(e.value.v).then(fulfill,reject):settle(a[0][2],e)}(o[e](t))}catch(e){settle(a[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),a.shift(),a.length&&resume(a[0][0],a[0][1])}}function __asyncDelegator(e){var t,r;return t={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:__await(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function settle(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(2));e.exports=(0,n.default)("NeosProjectPackages")().NeosUiReduxStore},function(e,t,r){"use strict";r.r(t),r.d(t,"actionTypes",(function(){return o})),r.d(t,"actions",(function(){return a})),r.d(t,"reducer",(function(){return i})),r.d(t,"selectors",(function(){return c}));var n=r(8);const o={TOGGLE_COMMAND_BAR:"TOGGLE_COMMAND_BAR"},a={toggleCommandBar:Object(n.createAction)(o.TOGGLE_COMMAND_BAR)},i=Object(n.handleActions)({TOGGLE_COMMAND_BAR:(e,t)=>{var r,n;return{...e,plugins:{...e.plugins,commandBar:{open:void 0!==t.payload?t.payload.open:!(null===(n=null===(r=e.plugins)||void 0===r?void 0:r.commandBar)||void 0===n?void 0:n.open)}}}}},{plugins:{commandBar:{open:!1}}}),c={commandBarOpen:e=>{var t,r;return null===(r=null===(t=e.plugins)||void 0===t?void 0:t.commandBar)||void 0===r?void 0:r.open}}},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(2));e.exports=(0,n.default)("NeosProjectPackages")().ReactUiComponents},function(e,t,r){e.exports={commandBar:"CommandBar-module__commandBar___iIl8n",resultsWrap:"CommandBar-module__resultsWrap___2ZfKL",expanded:"CommandBar-module__expanded___2L-st"}},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(2));e.exports=(0,n.default)("vendor")().reduxActions},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(2));e.exports=(0,n.default)("vendor")().reactRedux},function(e,t,r){e.exports={commandBarFooter:"CommandBarFooter-module__commandBarFooter___2f1ZS",breadcrumb:"CommandBarFooter-module__breadcrumb___1X_QQ"}},function(e,t,r){e.exports={commandBarHeader:"CommandBarHeader-module__commandBarHeader___1vdLC",backButton:"CommandBarHeader-module__backButton___33Nr8"}},function(e,t,r){e.exports={results:"CommandListing-module__results___2Un0y",noResults:"CommandListing-module__noResults___3WEjn"}},function(e,t,r){e.exports={commandListItem:"CommandListItem-module__commandListItem___uArdC",highlighted:"CommandListItem-module__highlighted___2xHNL"}},function(e,t,r){e.exports={fullScreenLayer:"CommandBarUiPlugin-module__fullScreenLayer___1cUx4",open:"CommandBarUiPlugin-module__open___1Bjxj"}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(3),o=n.__importDefault(r(26)),a=n.__importDefault(r(27)),i=function(e){function SynchronousRegistry(t){var r=e.call(this,t)||this;return r._registry=[],r}return n.__extends(SynchronousRegistry,e),SynchronousRegistry.prototype.set=function(e,t,r){if(void 0===r&&(r=0),"string"!=typeof e)throw new Error("Key must be a string");if("string"!=typeof r&&"number"!=typeof r)throw new Error("Position must be a string or a number");var n={key:e,value:t};r&&(n.position=r);var o=this._registry.findIndex((function(t){return t.key===e}));return-1===o?this._registry.push(n):this._registry[o]=n,t},SynchronousRegistry.prototype.get=function(e){if("string"!=typeof e)return console.error("Key must be a string"),null;var t=this._registry.find((function(t){return t.key===e}));return t?t.value:null},SynchronousRegistry.prototype._getChildrenWrapped=function(e){var t=this._registry.filter((function(t){return 0===t.key.indexOf(e+"/")}));return a.default(t)},SynchronousRegistry.prototype.getChildrenAsObject=function(e){var t={};return this._getChildrenWrapped(e).forEach((function(e){t[e.key]=e.value})),t},SynchronousRegistry.prototype.getChildren=function(e){return this._getChildrenWrapped(e).map((function(e){return e.value}))},SynchronousRegistry.prototype.has=function(e){return"string"!=typeof e?(console.error("Key must be a string"),!1):Boolean(this._registry.find((function(t){return t.key===e})))},SynchronousRegistry.prototype._getAllWrapped=function(){return a.default(this._registry)},SynchronousRegistry.prototype.getAllAsObject=function(){var e={};return this._getAllWrapped().forEach((function(t){e[t.key]=t.value})),e},SynchronousRegistry.prototype.getAllAsList=function(){return this._getAllWrapped().map((function(e){return Object.assign({id:e.key},e.value)}))},SynchronousRegistry}(o.default);t.default=i},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(2));e.exports=(0,n.default)("NeosProjectPackages")().NeosUiDecorators},function(e,t,r){e.exports={iconWrap:"Icon-module__iconWrap___3XtPO"}},function(e,t,r){e.exports={searchBox:"SearchBox-module__searchBox___2DE6G"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchWithErrorHandling=void 0;var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(0,n.default)("NeosProjectPackages")().NeosUiBackendConnectorDefault;var o=(0,n.default)("NeosProjectPackages")().NeosUiBackendConnector.fetchWithErrorHandling;t.fetchWithErrorHandling=o},function(e,t,r){"use strict";r(21)},function(e,t,r){"use strict";var n=_interopRequireDefault(r(22)),o=r(5),a=_interopRequireDefault(r(29));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,n.default)("Shel.Neos.CommandBar:CommandBar",{},(function(e,t){var r=t.frontendConfiguration;if(r["Shel.Neos.CommandBar:CommandBar"].enabled&&(e.get("containers").set("PrimaryToolbar/Middle/CommandBar",a.default),e.get("reducers").set("Shel.Neos.CommandBar",{reducer:o.reducer}),null!==r.hotkeys&&0!==r.hotkeys.length)){var n=e.get("hotkeys");n.set("Shel.Neos.CommandBar.toggle.CMD",{description:"Toggle command bar",action:o.actions.toggleCommandBar}),n.set("Shel.Neos.CommandBar.toggle.CTRL",{description:"Toggle command bar",action:o.actions.toggleCommandBar})}}))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(3),o=n.__importDefault(r(23));t.createConsumerApi=o.default;var a=n.__importDefault(r(2));t.readFromConsumerApi=a.default;var i=r(25);t.SynchronousRegistry=i.SynchronousRegistry,t.SynchronousMetaRegistry=i.SynchronousMetaRegistry,t.default=a.default("manifest")},function(e,t,r){"use strict";t.__esModule=!0;var n=r(3).__importDefault(r(24)),o=function createReadOnlyValue(e){return{value:e,writable:!1,enumerable:!1,configurable:!0}};t.default=function createConsumerApi(e,t){var r={};Object.keys(t).forEach((function(e){Object.defineProperty(r,e,o(t[e]))})),Object.defineProperty(r,"@manifest",o(n.default(e))),Object.defineProperty(window,"@Neos:HostPluginAPI",o(r))}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return function(t,r,n){var o;e.push(((o={})[t]={options:r,bootstrap:n},o))}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(3),o=n.__importDefault(r(15));t.SynchronousRegistry=o.default;var a=n.__importDefault(r(28));t.SynchronousMetaRegistry=a.default},function(e,t,r){"use strict";t.__esModule=!0;var n=function n(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e};t.default=n},function(e,t,r){"use strict";t.__esModule=!0;var n=r(3);t.default=function positionalArraySorter(e,t,r){var o,a,i,c,s,u,l,d,f,m,_,p,h,y;void 0===t&&(t="position"),void 0===r&&(r="key");var v="string"==typeof t?function(e){return e[t]}:t,g={},b={},w={},E={},C={},S={};e.forEach((function(e,t){var n=e[r]?e[r]:String(t);g[n]=t;var o=v(e),a=String(o||t),i=!1;if(a.startsWith("start")){var c=(s=a.match(/start\s+(\d+)/))&&s[1]?Number(s[1]):0;w[c]||(w[c]=[]),w[c].push(n)}else if(a.startsWith("end")){var s;c=(s=a.match(/end\s+(\d+)/))&&s[1]?Number(s[1]):0;E[c]||(E[c]=[]),E[c].push(n)}else if(a.startsWith("before")){if(l=a.match(/before\s+(\S+)(\s+(\d+))?/)){var u=l[1];c=l[3]?Number(l[3]):0;C[u]||(C[u]={}),C[u][c]||(C[u][c]=[]),C[u][c].push(n)}else i=!0}else if(a.startsWith("after")){var l;if(l=a.match(/after\s+(\S+)(\s+(\d+))?/)){u=l[1],c=l[3]?Number(l[3]):0;S[u]||(S[u]={}),S[u][c]||(S[u][c]=[]),S[u][c].push(n)}else i=!0}else i=!0;if(i){var d=parseFloat(a);!isNaN(d)&&isFinite(d)||(d=t),b[d]||(b[d]=[]),b[d].push(n)}}));var R=[],P=[],O=[],N=[],x=function sortedWeights(e,t){var r=Object.keys(e).map((function(e){return Number(e)})).sort((function(e,t){return e-t}));return t?r:r.reverse()},k=function addToResults(e,t){e.forEach((function(e){var r,o,a,i;if(!(N.indexOf(e)>=0)){if(N.push(e),C[e]){var c=x(C[e],!0);try{for(var s=n.__values(c),u=s.next();!u.done;u=s.next()){var l=u.value;addToResults(C[e][l],t)}}catch(e){r={error:e}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}}if(t.push(e),S[e]){var d=x(S[e],!1);try{for(var f=n.__values(d),m=f.next();!m.done;m=f.next()){l=m.value;addToResults(S[e][l],t)}}catch(e){a={error:e}}finally{try{m&&!m.done&&(i=f.return)&&i.call(f)}finally{if(a)throw a.error}}}}}))};try{for(var I=n.__values(x(w,!1)),A=I.next();!A.done;A=I.next()){var j=A.value;k(w[j],R)}}catch(e){o={error:e}}finally{try{A&&!A.done&&(a=I.return)&&a.call(I)}finally{if(o)throw o.error}}try{for(var B=n.__values(x(b,!0)),M=B.next();!M.done;M=B.next()){j=M.value;k(b[j],P)}}catch(e){i={error:e}}finally{try{M&&!M.done&&(c=B.return)&&c.call(B)}finally{if(i)throw i.error}}try{for(var T=n.__values(x(E,!0)),G=T.next();!G.done;G=T.next()){j=G.value;k(E[j],O)}}catch(e){s={error:e}}finally{try{G&&!G.done&&(u=T.return)&&u.call(T)}finally{if(s)throw s.error}}try{for(var H=n.__values(Object.keys(C)),D=H.next();!D.done;D=H.next()){var L=D.value;if(!(N.indexOf(L)>=0))try{for(var W=(f=void 0,n.__values(x(C[L],!1))),q=W.next();!q.done;q=W.next()){j=q.value;k(C[L][j],R)}}catch(e){f={error:e}}finally{try{q&&!q.done&&(m=W.return)&&m.call(W)}finally{if(f)throw f.error}}}}catch(e){l={error:e}}finally{try{D&&!D.done&&(d=H.return)&&d.call(H)}finally{if(l)throw l.error}}try{for(var U=n.__values(Object.keys(S)),F=U.next();!F.done;F=U.next()){L=F.value;if(!(N.indexOf(L)>=0))try{for(var V=(h=void 0,n.__values(x(S[L],!1))),K=V.next();!K.done;K=V.next()){j=K.value;k(S[L][j],P)}}catch(e){h={error:e}}finally{try{K&&!K.done&&(y=V.return)&&y.call(V)}finally{if(h)throw h.error}}}}catch(e){_={error:e}}finally{try{F&&!F.done&&(p=U.return)&&p.call(U)}finally{if(_)throw _.error}}return n.__spread(R,P,O).map((function(e){return g[e]})).map((function(t){return e[t]}))}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(3),o=function(e){function SynchronousMetaRegistry(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(SynchronousMetaRegistry,e),SynchronousMetaRegistry.prototype.set=function(t,r){if("d8a5aa78-978e-11e6-ae22-56b6b6499611"!==r.SERIAL_VERSION_UID)throw new Error("You can only add registries to a meta registry");return e.prototype.set.call(this,t,r)},SynchronousMetaRegistry}(n.__importDefault(r(15)).default);t.default=o},function(e,t,r){"use strict";r.r(t);var n,o=r(0),a=r(9),i=r(1),c=r.n(i),s=r(6),u=r(16),l=r(4),d=r(7);function clamp(e,t,r){return Math.max(t,Math.min(r,e))}function filterAvailableCommands(e,t,r){const n=e?e.children:r;return Object.keys(n).filter(e=>{const r=n[e];return r.canHandleQueries||r.name.toLowerCase().indexOf(t)>=0})}!function(e){e[e.RESET_SEARCH=0]="RESET_SEARCH",e[e.HIGHLIGHT_NEXT_ITEM=1]="HIGHLIGHT_NEXT_ITEM",e[e.HIGHLIGHT_PREVIOUS_ITEM=2]="HIGHLIGHT_PREVIOUS_ITEM",e[e.CANCEL=3]="CANCEL",e[e.SELECT_GROUP=4]="SELECT_GROUP",e[e.GO_TO_PARENT_GROUP=5]="GO_TO_PARENT_GROUP",e[e.UPDATE_SEARCH=6]="UPDATE_SEARCH"}(n||(n={}));const commandBarReducer=(e,t)=>{switch(t.type){case n.RESET_SEARCH:return{...e,searchWord:"",highlightedItem:0,availableCommandNames:filterAvailableCommands(e.selectedGroup,"",e.commands)};case n.HIGHLIGHT_NEXT_ITEM:return{...e,expanded:!0,highlightedItem:e.expanded?clamp(e.highlightedItem+1,0,e.availableCommandNames.length-1):0};case n.HIGHLIGHT_PREVIOUS_ITEM:return{...e,highlightedItem:clamp(e.highlightedItem-1,0,e.availableCommandNames.length-1)};case n.CANCEL:return e.searchWord?{...e,searchWord:"",highlightedItem:0,availableCommandNames:filterAvailableCommands(e.selectedGroup,"",e.commands)}:{...e,selectedGroup:null,availableCommandNames:filterAvailableCommands(null,"",e.commands)};case n.GO_TO_PARENT_GROUP:return{...e,selectedGroup:null,availableCommandNames:filterAvailableCommands(null,"",e.commands)};case n.SELECT_GROUP:return{...e,searchWord:"",highlightedItem:0,selectedGroup:t.command,availableCommandNames:filterAvailableCommands(t.command,"",e.commands)};case n.UPDATE_SEARCH:return{...e,expanded:!0,searchWord:t.searchWord,highlightedItem:0,availableCommandNames:filterAvailableCommands(e.selectedGroup,t.searchWord,e.commands)};default:throw new Error("Invalid action "+t.type)}};var f=r(17);var m=o.memo(({icon:e})=>o.createElement("span",{className:f.iconWrap},o.createElement(s.Icon,{icon:e}))),_=r(10);var CommandBarFooter_CommandBarFooter=({selectedGroup:e})=>o.createElement("footer",{className:_.commandBarFooter},e?o.createElement("span",{className:_.breadcrumb},o.createElement(m,{icon:e.icon}),o.createElement("small",null,e.name)):o.createElement(m,{icon:"neos"})),p=r(18);var SearchBox_SearchBox=({searchWord:e,onChange:t,onKeyUp:r})=>o.createElement("input",{className:p.searchBox,type:"search",placeholder:"Search for commands…",autoFocus:!0,onChange:t,onKeyDown:r,value:e}),h=r(11);var CommandBarHeader_CommandBarHeader=({selectedGroup:e,searchWord:t,dispatch:r,handleKeyEntered:a,handleSearch:i})=>o.createElement("header",{className:h.commandBarHeader},e&&o.createElement("button",{type:"button",onClick:()=>r({type:n.GO_TO_PARENT_GROUP}),className:h.backButton},o.createElement(m,{icon:"arrow-left"})),o.createElement(SearchBox_SearchBox,{searchWord:t,onChange:i,onKeyUp:a})),y=r(12),v=r(13);const g=o.forwardRef(({command:e,onItemSelect:t,highlighted:r},n)=>{const{name:a,description:i,icon:c}=e;return o.createElement("li",{className:[v.commandListItem,r&&v.highlighted].join(" "),onClick:()=>t(e),ref:n},o.createElement(m,{icon:c}),o.createElement("span",null,a),o.createElement("small",null,i))});var b=o.memo(g,(e,t)=>e.command.name===t.command.name&&e.ref===t.ref);var w=o.memo(({commands:e,availableCommandNames:t,highlightedItem:r,selectedGroup:n,handleSelectItem:a})=>{const i=o.useRef(null);return Object(o.useEffect)(()=>{var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"nearest"})},[i.current]),o.createElement("nav",{className:y.results},o.createElement("h6",null,"Commands"),t.length>0?o.createElement("ul",null,t.map((t,c)=>o.createElement(b,{key:t,ref:r===c?i:null,command:(n?n.children:e)[t],onItemSelect:a,highlighted:r===c}))):o.createElement("small",{className:y.noResults},"No matching commands found"))});const E={expanded:!1,selectedGroup:null,searchWord:"",highlightedItem:0,commands:{},availableCommandNames:[]};var src_CommandBar=({commands:e,open:t,toggleOpen:r})=>{const[a,i]=Object(o.useReducer)(commandBarReducer,{...E,commands:e,availableCommandNames:Object.keys(e)}),c=Object(o.useCallback)(o=>{if(t)if("Escape"===o.key)a.selectedGroup||a.searchWord?i({type:n.CANCEL}):r(),o.preventDefault();else if("ArrowDown"===o.key)i({type:n.HIGHLIGHT_NEXT_ITEM}),o.stopPropagation();else if("ArrowUp"===o.key)i({type:n.HIGHLIGHT_PREVIOUS_ITEM}),o.stopPropagation();else if("Enter"===o.key&&a.availableCommandNames.length>0){const t=a.availableCommandNames[a.highlightedItem],r=(a.selectedGroup?a.selectedGroup.children:e)[t];u(r),o.stopPropagation()}},[a.availableCommandNames,a.selectedGroup,a.highlightedItem,a.searchWord,t]),s=Object(o.useCallback)(e=>{i({type:n.UPDATE_SEARCH,searchWord:e.target.value.toLowerCase()})},[]),u=Object(o.useCallback)(e=>{if(e.action){const{action:t,canHandleQueries:r}=e;"string"==typeof t?window.location.href=t:t(r?a.searchWord:void 0)}else i({type:n.SELECT_GROUP,command:e})},[a.searchWord]);return Object(o.useEffect)(()=>(document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}),[]),t?o.createElement("dialog",{className:d.commandBar,open:t},o.createElement(CommandBarHeader_CommandBarHeader,{selectedGroup:a.selectedGroup,searchWord:a.searchWord,dispatch:i,handleSearch:s,handleKeyEntered:c}),o.createElement("div",{className:[d.resultsWrap,a.expanded&&d.expanded].join(" ")},o.createElement(w,{commands:a.commands,availableCommandNames:a.availableCommandNames,selectedGroup:a.selectedGroup,highlightedItem:a.highlightedItem,handleSelectItem:u})),a.expanded&&o.createElement(CommandBarFooter_CommandBarFooter,{selectedGroup:a.selectedGroup})):null},C=r(5),S=r(14),R=r(19);var helpers_fetchCommands=async e=>R.fetchWithErrorHandling.withCsrfToken(t=>({url:e,method:"GET",credentials:"include",headers:{"X-Flow-Csrftoken":t}})).then(e=>e&&e.json());class CommandBarUiPlugin_CommandBarUiPlugin extends o.PureComponent{constructor(e){super(e),this.buildCommandsFromHotkeys=()=>{const{hotkeyRegistry:e,handleHotkeyAction:t,config:r}=this.props;return e.getAllAsList().reduce((e,{id:n,description:o,action:a})=>(r.hotkeys.filter.includes(n)||(e[n]={name:o,description:n,icon:this.mapHotkeyIdToIcon(n),action:()=>t(a())}),e),{})},this.buildCommandsFromEditPreviewModes=()=>{const{editPreviewMode:e,setEditPreviewMode:t,editPreviewModes:r,i18nRegistry:n}=this.props;return Object.keys(r).reduce((o,a)=>{const{title:i,isEditingMode:c}=r[a];return o[a]={name:n.translate(i),description:e===a?"Currently active":"",icon:c?"pencil":"eye",action:()=>t(a)},o},{})},this.handleAddNode=()=>{const{addNode:e,documentNode:t,focusedNodeContextPath:r,toggleCommandBar:n}=this.props;n(),e(r||t.contextPath,void 0,"after")},this.handleSearchNode=e=>{console.debug("Search for",e)},this.state={loaded:!1,commands:{debug:{name:"Debug",icon:"vial",description:"Write a debug message",action:()=>console.debug("Debug debug")},addNode:{name:"Add node",icon:"plus",description:"Add a new node",action:this.handleAddNode},searchDocument:{name:"Search document",icon:"search",description:"Search for a document",action:this.handleSearchNode,canHandleQueries:!0},quickActions:{name:"Quick actions",icon:"neos",description:"Execute configured hotkeys",children:this.buildCommandsFromHotkeys()},switchEditPreviewMode:{name:"Switch edit/preview mode",icon:"pencil",description:"Switch between edit and preview modes",children:this.buildCommandsFromEditPreviewModes()}}}}mapHotkeyIdToIcon(e){let t=e.split(".").pop();switch(t.indexOf("toggle")>=0&&(t="toggle"),t){case"toggle":return"toggle-on";case"reload":return"redo";case"cancel":case"close":return"window-close";case"apply":return"check"}return"neos"}componentDidMount(){var e;helpers_fetchCommands("service/data-source/shel-neos-commandbar").then(e=>{this.setState(t=>({loaded:!0,commands:{...t.commands,...e}})),console.debug("Loaded commands",e,this.state.commands)}).catch(e=>{console.error("Failed to load commands",e)}),window.addEventListener("keypress",e=>{console.debug("keypress on window",e)});const t=document.getElementsByName("neos-content-main")[0];null===(e=t.contentWindow)||void 0===e||e.addEventListener("keypress",e=>{console.debug("keypress in guestframe",e)}),console.debug("guestFrame",t.contentWindow)}render(){const{commandBarOpen:e,toggleCommandBar:t}=this.props,{commands:r,loaded:n}=this.state;return o.createElement("div",null,o.createElement(s.IconButton,{onClick:()=>t(),isActive:e,title:"Toggle command bar",icon:"search",disabled:!n}),n&&o.createElement("div",{className:[S.fullScreenLayer,e&&S.open].join(" ")},o.createElement(src_CommandBar,{open:e,commands:r,toggleOpen:t})))}}CommandBarUiPlugin_CommandBarUiPlugin.propTypes={config:c.a.object.isRequired,i18nRegistry:c.a.object.isRequired,siteNode:c.a.object,documentNode:c.a.object,focusedNodeContextPath:c.a.string,commandBarOpen:c.a.bool,toggleCommandBar:c.a.func.isRequired,handleHotkeyAction:c.a.func.isRequired,hotkeyRegistry:c.a.object.isRequired,addNode:c.a.func.isRequired,editPreviewMode:c.a.string.isRequired,setEditPreviewMode:c.a.func.isRequired,editPreviewModes:c.a.object.isRequired};const P=Object(u.neos)(e=>({i18nRegistry:e.get("i18n"),hotkeyRegistry:e.get("hotkeys"),config:e.get("frontendConfiguration").get("Shel.Neos.CommandBar:CommandBar"),nodeTypesRegistry:e.get("@neos-project/neos-ui-contentrepository"),editPreviewModes:e.get("frontendConfiguration").get("editPreviewModes")}));t.default=Object(a.connect)(()=>({}),{toggleCommandBar:C.actions.toggleCommandBar,addNode:l.actions.CR.Nodes.commenceCreation,setEditPreviewMode:l.actions.UI.EditPreviewMode.set})(Object(a.connect)(e=>({siteNode:l.selectors.CR.Nodes.siteNodeSelector(e),documentNode:l.selectors.CR.Nodes.documentNodeSelector(e),focusedNodeContextPath:l.selectors.CR.Nodes.focusedNodePathSelector(e),commandBarOpen:C.selectors.commandBarOpen(e),editPreviewMode:l.selectors.UI.EditPreviewMode.currentEditPreviewMode(e)}),e=>({handleHotkeyAction:e}))(P(CommandBarUiPlugin_CommandBarUiPlugin)))}]);
//# sourceMappingURL=Plugin.js.map