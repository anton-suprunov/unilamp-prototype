webpackJsonp([0xd2a57dc1d883],{233:function(e,n){"use strict";function t(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function o(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=t,n.apiRunnerAsync=o;var a=[]},665:function(e,n,t){"use strict";n.components={"component---src-pages-404-js":t(893),"component---src-pages-application-index-js":t(894),"component---src-pages-applications-js":t(895),"component---src-pages-categories-js":t(896),"component---src-pages-category-index-js":t(897),"component---src-pages-index-js":t(898),"component---src-pages-product-index-js":t(899)},n.json={"layout-index.json":t(900),"404.json":t(901),"application.json":t(903),"applications.json":t(904),"categories.json":t(905),"category.json":t(906),"index.json":t(907),"product.json":t(908),"404-html.json":t(902)},n.layouts={"layout---index":t(892)}},666:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(1),s=o(c),l=t(5),f=o(l),p=t(350),d=o(p),h=t(176),m=o(h),g=t(233),y=t(1315),v=o(y),R=function(e){var n=e.children;return s.default.createElement("div",null,n())},x=function(e){function n(t){a(this,n);var o=r(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,v.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);x.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=x,e.exports=n.default},176:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(1059),r=o(a),u=(0,r.default)();e.exports=u},667:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(218),r=t(351),u=o(r),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,n);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),i[r])return i[r];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,a.matchPath)(r,{path:e.path})||(0,a.matchPath)(r,{path:e.matchPath}))return c=e,i[r]=e,!0}else{if((0,a.matchPath)(r,{path:e.path,exact:!0}))return c=e,i[r]=e,!0;if((0,a.matchPath)(r,{path:e.path+"index.html"}))return c=e,i[r]=e,!0}return!1}),c}}},668:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(416),r=o(a),u=t(233),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,r.default)();e.exports=s},902:function(e,n,t){t(25),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(922)})})}},901:function(e,n,t){t(25),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(923)})})}},903:function(e,n,t){t(25),e.exports=function(e){return t.e(0xd8c44f81c457,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(924)})})}},904:function(e,n,t){t(25),e.exports=function(e){return t.e(49940897643840,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(925)})})}},905:function(e,n,t){t(25),e.exports=function(e){return t.e(30875753179511,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(926)})})}},906:function(e,n,t){t(25),e.exports=function(e){return t.e(0x68a3bb584008,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(927)})})}},907:function(e,n,t){t(25),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(928)})})}},900:function(e,n,t){t(25),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(276)})})}},908:function(e,n,t){t(25),e.exports=function(e){return t.e(0xa3190db0c98d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(929)})})}},892:function(e,n,t){t(25),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(669)})})}},350:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var a=t(1),r=(o(a),t(667)),u=o(r),i=t(176),c=o(i),s=t(351),l=o(s),f=void 0,p={},d={},h={},m={},g={},y=[],v=[],R={},x="",_=[],P={},j=function(e){return e&&e.default||e},b=void 0,w=!0,C=[],N={},k={},E=5;b=t(670)({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){S(e,function(){_=_.filter(function(n){return n!==e}),b.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){b.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){b.onPostLoadPageResources(e)});var O=function(e,n){return P[e]>P[n]?1:P[e]<P[n]?-1:0},L=function(e,n){return R[e]>R[n]?1:R[e]<R[n]?-1:0},S=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[n])e.nextTick(function(){t(null,m[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){m[n]=o,C.push({resource:n,succeeded:!e}),k[n]||(k[n]=e),C=C.slice(-E),t(e,o)})}},A=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):k[n]?e.nextTick(function(){t(k[n])}):S(n,function(e,o){if(e)t(e);else{var a=j(o());g[n]=a,t(e,a)}})},D=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=C.find(function(e){return e.succeeded});return!!n},T=function(e,n){console.log(n),N[e]||(N[e]=n),D()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,U={empty:function(){v=[],R={},P={},_=[],y=[],x=""},addPagesArray:function(e){y=e,x="/unilamp-prototype",f=(0,u.default)(e,x)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return v.pop()},enqueue:function(e){var n=(0,l.default)(e,x);if(!y.some(function(e){return e.path===n}))return!1;var t=1/M;M+=1,R[n]?R[n]+=1:R[n]=1,U.has(n)||v.unshift(n),v.sort(L);var o=f(n);return o.jsonName&&(P[o.jsonName]?P[o.jsonName]+=1+t:P[o.jsonName]=1+t,_.indexOf(o.jsonName)!==-1||m[o.jsonName]||_.unshift(o.jsonName)),o.componentChunkName&&(P[o.componentChunkName]?P[o.componentChunkName]+=1+t:P[o.componentChunkName]=1+t,_.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||_.unshift(o.componentChunkName)),_.sort(O),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:P}},getPages:function(){return{pathArray:v,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return v.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var a;if(t){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),w=!1;if(N[n])return T(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return T(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,h[n])return e.nextTick(function(){t(h[n]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[n]})}),h[n];c.default.emit("onPreLoadPageResources",{path:n});var a=void 0,r=void 0,u=void 0,i=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){h[n]={component:a,json:r,layout:u,page:o};var e={component:a,json:r,layout:u,page:o};t(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return A(o.componentChunkName,function(e,n){e&&T(o.path,"Loading the component for "+o.path+" failed"),a=n,i()}),A(o.jsonName,function(e,n){e&&T(o.path,"Loading the JSON for "+o.path+" failed"),r=n,i()}),void(o.layoutComponentChunkName&&A(o.layout,function(e,n){e&&T(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(e){return v.length-v.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:U.getResourcesForPathname};n.default=U}).call(n,t(57))},930:function(e,n){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-application-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"application.json",path:"/application/",matchPath:"/application/:path"},{componentChunkName:"component---src-pages-applications-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"applications.json",path:"/applications/"},{componentChunkName:"component---src-pages-categories-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-category-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category.json",path:"/category/",matchPath:"/category/:path"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-product-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"product.json",path:"/product/",matchPath:"/product/:path"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},670:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],a=[],r=function(){var e=n();e&&(a.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(233),u=t(1),i=o(u),c=t(10),s=o(c),l=t(218),f=t(912),p=t(803),d=o(p),h=t(72),m=t(668),g=o(m),y=t(176),v=o(y),R=t(930),x=o(R),_=t(931),P=o(_),j=t(666),b=o(j),w=t(665),C=o(w),N=t(350),k=o(N);t(704),window.___history=g.default,window.___emitter=v.default,k.default.addPagesArray(x.default),k.default.addProdRequires(C.default),window.asyncRequires=C.default,window.___loader=k.default,window.matchPath=l.matchPath;var E=P.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,n){O(e.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(671);var o=function(e){function n(e){e.page.path===k.default.getPage(o).path&&(v.default.off("onPostLoadPageResources",n),clearTimeout(u),window.___history.push(t))}var t=(0,h.createLocation)(e,null,null,g.default.location),o=t.pathname,a=E[o];a&&(o=a.toPath);var r=window.location;if(r.pathname!==t.pathname||r.search!==t.search||r.hash!==t.hash){var u=setTimeout(function(){v.default.off("onPostLoadPageResources",n),v.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);k.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):v.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=!1,p=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],m=function(e){var n=e.children;return i.default.createElement(l.Router,{history:g.default},n)},y=(0,l.withRouter)(b.default);k.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:m,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return k.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,a({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0],c=(0,r.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return c(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},931:function(e,n){e.exports=[]},671:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(176),r=o(a),u="/";u="/unilamp-prototype/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},351:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},803:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,e=function(){for(t.removeEventListener(a,e),r=1;e=n.shift();)e()}),function(e){r?setTimeout(e,0):n.push(e)}})},25:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!r&&n&&n[o]?void s(!0):(a(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,r?r[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},1059:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},1315:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},893:function(e,n,t){t(25),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(685)})})}},894:function(e,n,t){t(25),e.exports=function(e){return t.e(0xc4cafcf1a6d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(686)})})}},895:function(e,n,t){t(25),e.exports=function(e){return t.e(64994538077878,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(687)})})}},896:function(e,n,t){t(25),e.exports=function(e){return t.e(0xeea0bc7c2a12,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(688)})})}},897:function(e,n,t){t(25),e.exports=function(e){return t.e(0x6b217fbf8636,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(689)})})}},898:function(e,n,t){t(25),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(690)})})}},899:function(e,n,t){t(25),e.exports=function(e){return t.e(0x94183bea4bdd,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(691)})})}}});
//# sourceMappingURL=app-85ce15b5fb82584ae8e4.js.map