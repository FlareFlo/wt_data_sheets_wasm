!function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=0,l=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(a&&a(t);l.length;)l.shift()()}var n={},r={1:0};var o={};var i={3:function(){return{"./index_bg.js":{__wbg_getElementById_f3e94458ce77f0d0:function(e,t,r){return n[2].exports.e(e,t,r)},__wbg_setinnerHTML_e5b817d6227a431c:function(e,t,r){return n[2].exports.n(e,t,r)},__wbindgen_object_drop_ref:function(e){return n[2].exports.t(e)},__wbg_settextContent_799ebbf96e16265d:function(e,t,r){return n[2].exports.o(e,t,r)},__wbindgen_object_clone_ref:function(e){return n[2].exports.s(e)},__wbg_instanceof_Window_c4b70662a0d2c5ec:function(e){return n[2].exports.h(e)},__wbg_document_1c64944725c0d81d:function(e){return n[2].exports.d(e)},__wbindgen_string_new:function(e,t){return n[2].exports.u(e,t)},__wbg_log_3445347661d4505e:function(e){return n[2].exports.i(e)},__wbg_self_c6fbdfc2918d5e58:function(){return n[2].exports.l()},__wbg_window_baec038b5ab35c54:function(){return n[2].exports.p()},__wbg_globalThis_3f735a5746d41fbd:function(){return n[2].exports.f()},__wbg_global_1bc0b39582740e95:function(){return n[2].exports.g()},__wbindgen_is_undefined:function(e){return n[2].exports.r(e)},__wbg_newnoargs_be86524d73f67598:function(e,t){return n[2].exports.j(e,t)},__wbg_call_888d259a5fefc347:function(e,t){return n[2].exports.b(e,t)},__wbindgen_debug_string:function(e,t){return n[2].exports.q(e,t)},__wbindgen_throw:function(e,t){return n[2].exports.v(e,t)},__wbg_createElement_86c152812a141a62:function(e,t,r){return n[2].exports.c(e,t,r)},__wbg_querySelector_b92a6c73bcfe671b:function(e,t,r){return n[2].exports.k(e,t,r)},__wbg_setAttribute_1b533bf07966de55:function(e,t,r,o,i){return n[2].exports.m(e,t,r,o,i)},__wbg_appendChild_d318db34c4559916:function(e,t){return n[2].exports.a(e,t)}}}}};function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=function(e){return c.p+""+({}[e]||e)+".js"}(e);var a=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return({0:[3]}[e]||[]).forEach((function(e){var n=o[e];if(n)t.push(n);else{var r,u=i[e](),l=fetch(c.p+""+{3:"762955ef4cfc62ecacbe"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(l),u]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(l,u);else{r=l.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,u)}))}t.push(o[e]=r.then((function(t){return c.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e},c.w={};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var a=l;c(c.s=1)}([,function(e,t,n){!async function(){let e,t=window.location.href.split("/").at(-1);if(""==t){function r(){let t=parseInt(document.getElementById("alt").value),n=parseInt(document.getElementById("vel").value);e.update_tables(t,n)}e=await n.e(0).then(n.bind(null,0)).catch(console.error),e.generate_main_tables(),document.getElementById("vel").addEventListener("input",r),document.getElementById("alt").addEventListener("input",r),document.getElementById("run_calc").addEventListener("input",r),document.getElementById("reset_values").addEventListener("click",t=>{document.getElementById("alt").value="0",document.getElementById("vel").value="343",e.update_tables(0,343)})}if("live_calc.html"==t)for(await fetch("missile_select.html").then(e=>e.text()).then(e=>{let t=document.querySelector("script#add_missile_select"),n=document.createElement("div");n.innerHTML=e,t.replaceWith(n,t)}),document.getElementById("dropdown").addEventListener("submit",i),e=await n.e(0).then(n.bind(null,0)).catch(console.error),e.make_comparison(),c();;)await fetch("http://localhost:8111/state").then((function(e){return e.json()})).then((function(t){let n=document.getElementById("ul_input").getAttribute("selected");if(!0===t.valid&&""!==n){let r=t["IAS, km/h"],o=t["H, m"];e.initiate_calc(r,o,parseInt(n))}})).catch((function(e){console.log("error: "+e)})),await o(16);function o(e){return new Promise(t=>setTimeout(t,e))}function i(){document.getElementById("ul_input").setAttribute("class","value-list");let e=document.getElementById("ul_input").getElementsByClassName("select_0");for(var t=0;t<e.length;++t)if(!e[t].className.includes("closed")){document.getElementById("ul_input").setAttribute("selected",t.toString()),document.getElementById("ul_input").setAttribute("target_name",e[t].innerHTML),document.getElementById("input_select").value=e[t].innerHTML;break}}function c(){const e=document.querySelector(".chosen-value"),t=document.querySelector(".value-list"),n=[...document.querySelectorAll("li")];t.classList.add("open");let r=[];n.forEach(e=>{r.push(e.textContent)}),e.addEventListener("input",()=>{t.classList.add("open");let o=e.value.toLowerCase();if(o.length>0)for(let e=0;e<r.length;e++){o.toLowerCase().substring(0,o.length)!==r[e].replace(r[e].split("_")[0],"").replaceAll("_","").substring(0,o.length).toLowerCase()?n[e].classList.add("closed"):n[e].classList.remove("closed")}else for(let e=0;e<n.length;e++)n[e].classList.remove("closed")}),n.forEach(t=>{t.addEventListener("click",r=>{document.getElementById("ul_input").setAttribute("selected",r.target.value),document.getElementById("ul_input").setAttribute("target_name",r.target.innerHTML),e.value=t.textContent,n.forEach(e=>{e.classList.add("closed")})})}),e.addEventListener("focus",()=>{document.getElementById("input_select").value="",document.getElementById("ul_input").setAttribute("target_name",""),document.getElementById("ul_input").setAttribute("selected",""),document.getElementById("range").innerHTML="-",document.getElementById("splash_at").innerHTML="-",e.placeholder="Type to filter",t.classList.add("open"),n.forEach(e=>{e.classList.remove("closed")})}),e.addEventListener("blur",()=>{e.placeholder="Select Missile",t.classList.remove("open")}),document.addEventListener("click",n=>{const r=t.contains(n.target),o=e.contains(n.target);r||o||t.classList.remove("open")})}t.includes("compare.html")&&(e=await n.e(0).then(n.bind(null,0)).catch(console.error),e.make_comparison(),o(100),document.getElementById("dropdown").addEventListener("submit",i),c())}()}]);