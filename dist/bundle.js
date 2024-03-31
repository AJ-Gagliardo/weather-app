(()=>{"use strict";var n={621:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,":root{\n    background-color: rgb(112, 111, 111);\n}\n\n\n.card{\n    height:90%;\n    max-width: 480px;\n    background:linear-gradient(150deg, #00febac2, #5b548ab9);\n    margin:100 px auto 0;\n    padding: 40px 20px;\n    border-radius:20px;\n    text-align: center;\n\n}\n\n\n.searchBox{\n    width:100%;\n    display:flex;\n    align-items:center;\n    justify-content: space-between;\n}\n\n.searchBox input{\n    border:0;\n    outline: 0;\n    background: #ebfffb;\n    padding: 5px 22px;\n    height:50px;\n    border-radius: 25px;\n    flex:1;\n    margin-right:12px;\n    font-size: 18px;\n}\n\n.searchBox button{\n    border: 0;\n    outline: 0;\n    background: #ebfffc;\n    border-radius: 50%;\n    width:60px;\n    height:60px;\n    cursor:pointer;\n    width:60px;\n    height: 60px;\n    cursor: pointer;\n}\n\n.searchBox svg{\n    width:16px;\n}\n\n\n\n.weather-icon{\n    width: 100px;\n    margin-top:15px;\n}\n\n.weather h1{\n    font-size: 80px;\n    font-weight: 500;\n}\n\n.weather h2{\n    font-size: 45px;\n    font-weight: 400;\n    margin-top: -10px;\n}\n\n.details{\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    margin-top: 50px;\n}\n\n.col{\n    display:flex;\n    align-items: center;\n    text-align: left;\n}\n\n.col img{\n    width: 40px;\n    margin-right: 10px;\n}\n\n.smallImg {\n    width: 40px;\n}",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],p=i[u]||0,d="".concat(u," ").concat(p);i[u]=p+1;var l=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),u=0;u<i.length;u++){var p=t(i[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),u=t(540),p=t.n(u),d=t(113),l=t.n(d),f=t(621),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;const m=t.p+"5c27a83f11060854e761.png",g=t.p+"e0fa8828a9d9145d6b6b.png";!async function(n){const e=await fetch("https://api.weatherapi.com/v1/current.json?key=2bb56963b22d402aaab180509242803&q=vancouver");var t=await e.json();console.log(t),console.log(t.location.name),document.querySelector(".city").textContent=t.location.name,document.querySelector(".temp").textContent=`${t.current.temp_c}° C`,document.querySelector(".weather-icon").src=t.current.condition.icon,document.querySelector(".condition").textContent=t.current.condition.text,console.log(t.current.humidity),document.querySelector(".humidity").textContent=`${t.current.humidity} %`,document.querySelector(".wind").textContent=`${t.current.wind_kph} km/h`,document.querySelector(".humidityImg").src=m,document.querySelector(".windImg").src=g}();const v=document.getElementById("citySearch");console.log(v)})()})();