webpackJsonp([64994538077878],{687:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(1),s=l(i),n=a(22),r=l(n),c=a(133),u=l(c);a(1070);var o=function(e){var t=e.list,a=e.title,l=e.productsTitle,i=e.products;return s.default.createElement("div",{className:"applications"},s.default.createElement("h5",{className:"applications__title"},a),s.default.createElement("div",{className:"applications__list"},t.map(function(e){return s.default.createElement("div",{className:"applications__item",key:"application_"+e.Name},s.default.createElement("span",{className:"applications__img",style:{backgroundImage:"url("+e.Photo[0].url+")"}},s.default.createElement("span",null,e.Name),s.default.createElement(r.default,{to:"/application/"+e.Name.replace(/ /g,"_").replace(/\//g,"_"),className:"applications__link"},"(View all)")))})),s.default.createElement("h5",{className:"applications__product-title"},l),s.default.createElement(u.default,{products:i,shown:!0,limit:12}))},p=function(e){var t=e.applications,a=void 0===t?[]:t,l=e.initialProducts,i=a.filter(function(e){return!e.is_parent&&"Home"===e.Category}),n=a.filter(function(e){return!e.is_parent&&"Business"===e.Category});return s.default.createElement("div",{className:"application"},s.default.createElement(o,{list:i,title:"Home Owners - Product Categories",productsTitle:"Home - Best Sellers",products:l}),s.default.createElement(o,{list:n,title:"Business Owners",productsTitle:"Business - Best sellers",products:l}))};t.default=p,e.exports=t.default},1070:function(e,t){}});
//# sourceMappingURL=component---src-pages-applications-js-baff58c2d5a4f9d7be07.js.map