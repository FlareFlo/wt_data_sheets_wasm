if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let n={};const d=e=>c(e,f),l={module:{uri:f},exports:n,require:d};i[f]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(s(...e),n)))}}define(["./workbox-3e98e12a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0.js",revision:"e78eadb0d35cb73b5ee02d1367c8ccf1"},{url:"869e4dc8012fe7ff3da0.module.wasm",revision:null},{url:"compare.css",revision:"cd45e9073b3c76eb0b29dfb22b5c2165"},{url:"compare.html",revision:"3bed4f0de6d61f96a60227f3447d3326"},{url:"documentation.html",revision:"7f712a783157b3366c9b05f05d3444c8"},{url:"index.css",revision:"54af844ef7dac9043ff4e4c75c834e57"},{url:"index.html",revision:"dace2fe81f55aaaa939227c3914d4bc5"},{url:"index.js",revision:"5e2da62248b8f6cdcab8959c1cfce74f"},{url:"live_calc.html",revision:"190029255abb560d89942a20661d0f97"},{url:"manifest.json",revision:"d9445d6fc22bf549134b844fc567d28b"},{url:"metafiles/128_icon.png",revision:"9989c3c9049ba37d0a3372f54fe435e7"},{url:"metafiles/16_icon.png",revision:"1ee9e83d6df3e01082b9b2a532975e55"},{url:"metafiles/192_icon.png",revision:"2340a6662e078079127698358db0ae4b"},{url:"metafiles/256_icon.png",revision:"3ee2f28b4282d7bb8d2deea0d63233b7"},{url:"metafiles/32_icon.png",revision:"e0a567cc7bb914943ea60a99c4152239"},{url:"metafiles/512_icon.png",revision:"89871a690dff2c5a598f373fc0dea252"},{url:"metafiles/64_icon.png",revision:"5428ec9b59f812e3d9561e99b8de9a55"},{url:"metafiles/WIP.png",revision:"3798d08e55fffe862cf00f19492ddc55"},{url:"metafiles/favicon.ico",revision:"efb9775891eaec03fdbfe5a407803642"},{url:"missile_input.css",revision:"ee35ece6e2edd3540ffc590af36ed8e4"},{url:"missile_select.html",revision:"6497620300b290b6e6420dc3f1f4c63a"},{url:"navbar.css",revision:"fc04d34bb94d036290460c827a7e2eb3"},{url:"navbar.html",revision:"ba695117f1a431b473c56a8ffc248772"},{url:"styles.css",revision:"c7790796e7abadf1053c4343c8fe5e9d"},{url:"table.html",revision:"913ba090e8f5d78bff9475c4faf9f963"},{url:"thermal_index.css",revision:"84d7ee64af0e5d42ec1a81e887d08c84"},{url:"thermal_index.html",revision:"beac31733491c916add9fe436fb3dbeb"},{url:"tierlist.css",revision:"e3a1920951eb2220fa04c3d91e70b3d1"},{url:"tierlist.html",revision:"bb71ed911b5700b6d85bcc6d1d253863"}],{})}));
