(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{213:function(e,t,o){"use strict";o.r(t);o(8);var n=o(4),l=o(25),i=o(31),d=o(49),s=o(84),a=o(61),r=o(182),c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product-card";e.buyText&&(window.productCardBuyText=e.buyText),e.buy&&(window.productCardBuyHtml=e.buy),e.footer&&(window.productCardFooterHtml=e.footer);const o=window.storefront&&window.storefront.getScopedSlots,n=document.querySelectorAll(`.${t}`),l=[];for(let e=0;e<n.length;e++)if(n[e]){const{productId:t,toRender:o}=n[e].dataset;o&&-1===l.indexOf(t)&&l.push(t)}let c;if(l.length>=4&&l.length<=70&&!e.skipSearchApi){const e=new a.a;c=e.setPageSize(l.length).setProductIds(l).fetch(!0,{timeout:5e3}).then((()=>{const t=e.getItems();for(let e=0;e<2;e++)u(n[e]);return t})).catch((e=>{console.error(e)}))}else c=Promise.resolve();const u=n=>{if(n){const{productId:l,sku:d,toRender:a}=n.dataset;if(a){let a;c.then((e=>{Array.isArray(e)&&(a=e.find((e=>{let{_id:t}=e;return t===l})))})).finally((()=>{let c;if(a){if(c=!0,!a.available||!a.visible||!Object(s.a)(a)){const e=n.parentNode&&n.parentNode.parentNode;e&&"LI"===e.tagName&&e.parentNode.appendChild(e)}}else{const e=n.parentNode;if(e&&(a=e.dataset.product,"string"==typeof a))try{a=JSON.parse(a)}catch(e){a=void 0}}((n,l,d,s,a)=>{new i.a({render:i=>i(r.a,{class:"product-card"!==t?t:null,attrs:{"data-product-id":l,"data-sku":d},props:{...e.props,productId:l,product:s,isLoaded:a,transitionClass:null},scopedSlots:"function"==typeof o?o(n,i):void 0})}).$mount(n)})(n,l,d,a,c)}))}}};Object(d.a)(n,{rootMargin:"350px 0px",threshold:0,load:u}).observe()};const u=window.location.pathname.startsWith("/app/"),p=[],m="localhost"===window.location.hostname?50:1,w=(e,t)=>{const o=new Promise((o=>{setTimeout((()=>{const i=window._widgets&&window._widgets[e];if(i&&i.active&&(!i.desktopOnly||!n.isMobile)&&(u?i.enableCheckout:!i.disablePages))return t().then((t=>{"function"==typeof t.default&&t.default({...i.options,$emit(e,t){l.a.emit(e,t)}}),l.a.emit(`widget:${e}`),console.log(`Widget loaded: ${e}`)})).catch(console.error).finally(o);o()}),m)}));p.push(o)},{resource:h}=document.body.dataset;u||"products"!==h||w("@ecomplus/widget-product",(()=>Promise.all([o.e(0),o.e(2),o.e(3),o.e(19)]).then(o.bind(null,439)))),Promise.all(p).then((()=>{w("@ecomplus/widget-product-card",(()=>Promise.resolve({default:c}))),("/search"===window.location.pathname||"categories"===h||"brands"===h||!h&&document.getElementById("search-engine"))&&w("@ecomplus/widget-search-engine",(()=>Promise.all([o.e(5),o.e(30)]).then(o.bind(null,440))));const e=e=>{"function"==typeof window.requestIdleCallback?setTimeout((()=>window.requestIdleCallback(e)),200):setTimeout(e,800)};e((()=>{l.a.emit("load:lcp"),u||(w("@ecomplus/widget-search",(()=>Promise.all([o.e(5),o.e(22)]).then(o.bind(null,452)))),w("@ecomplus/widget-minicart",(()=>Promise.all([o.e(0),o.e(17)]).then(o.bind(null,453)))),w("@ecomplus/widget-user",(()=>o.e(21).then(o.bind(null,454))))),Promise.all(p).then((()=>{e((()=>l.a.emit("load:components"))),w("@ecomplus/widget-tag-manager",(()=>o.e(24).then(o.bind(null,463)))),w("@ecomplus/widget-analytics",(()=>o.e(23).then(o.bind(null,464)))),w("@ecomplus/widget-fb-pixel",(()=>o.e(35).then(o.bind(null,456)))),w("@ecomplus/widget-tiktok-pixel",(()=>o.e(37).then(o.bind(null,455)))),w("@ecomplus/widget-gmc-ratings",(()=>o.e(36).then(o.bind(null,441)))),w("@ecomplus/widget-ebit",(()=>o.e(34).then(o.bind(null,442)))),w("@ecomplus/widget-compre-confie",(()=>o.e(33).then(o.bind(null,443)))),w("@ecomplus/widget-martan",(()=>Promise.all([o.e(3),o.e(16)]).then(o.bind(null,446))))}))}))}))}},0,[0,2,3,19,5,30]]);