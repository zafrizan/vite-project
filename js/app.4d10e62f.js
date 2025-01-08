(function(){"use strict";var t={9790:function(t,n,e){var r=e(3751),o=e(641);const a={id:"app"};function u(t,n,e,r,u,s){const c=(0,o.g2)("AssetTable");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(c)])}var s=e(33);const c={border:"1"};function i(t,n,e,r,a,u){return(0,o.uX)(),(0,o.CE)("div",null,[n[2]||(n[2]=(0,o.Lk)("h1",null,"Asset Tracker",-1)),(0,o.Lk)("table",c,[n[1]||(n[1]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Asset Name"),(0,o.Lk)("th",null,"Department")])],-1)),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.assets,((t,n)=>((0,o.uX)(),(0,o.CE)("tr",{key:n},[(0,o.Lk)("td",null,(0,s.v_)(t.name),1),(0,o.Lk)("td",null,(0,s.v_)(t.department),1)])))),128))])]),(0,o.Lk)("button",{onClick:n[0]||(n[0]=(...t)=>u.downloadCSV&&u.downloadCSV(...t))},"Download CSV")])}e(1454);var l={data(){return{assets:[{name:"Printer",department:"HR"},{name:"Monitor",department:"IT"},{name:"Barcode Scanner",department:"ACCOUNT"}]}},methods:{downloadCSV(){const t="data:text/csv;charset=utf-8,"+["Asset Name,Department",...this.assets.map((t=>`${t.name},${t.department}`))].join("\n"),n=encodeURI(t),e=document.createElement("a");e.setAttribute("href",n),e.setAttribute("download","assets.csv"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}}},d=e(6262);const f=(0,d.A)(l,[["render",i]]);var p=f,v={components:{AssetTable:p}};const m=(0,d.A)(v,[["render",u]]);var h=m;(0,r.Ef)(h).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return t[r].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,a){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||u>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(s=!1,a<u&&(u=a));if(s){t.splice(l--,1);var i=o();void 0!==i&&(n=i)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,a,u=r[0],s=r[1],c=r[2],i=0;if(u.some((function(n){return 0!==t[n]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(c)var l=c(e)}for(n&&n(r);i<u.length;i++)a=u[i],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(l)},r=self["webpackChunkasset_tracker"]=self["webpackChunkasset_tracker"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(9790)}));r=e.O(r)})();
//# sourceMappingURL=app.4d10e62f.js.map