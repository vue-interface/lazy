(function(r,s){typeof exports=="object"&&typeof module<"u"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(r=typeof globalThis<"u"?globalThis:r||self,s(r.Lazy={}))})(this,function(r){"use strict";function s(t,o){if(t.getAttribute("src")&&t.getAttribute("src")===t.getAttribute("data-src"))return;let n=t.getAttribute("data-src");if(n!=null&&n.match(/data\:/))t.setAttribute("src",n),t.removeAttribute("data-src");else if(n){t.dispatchEvent(new Event("loading"));const e=document.createElement("img");e.setAttribute("src",n),e.addEventListener("load",i=>{t.setAttribute("src",e.src),o.value instanceof Function&&o.value(e),t.tagName!=="IMG"&&t.dispatchEvent(new Event(i.type,i))}),t.tagName!=="IMG"&&e.addEventListener("error",i=>{t.dispatchEvent(new Event(i.type,i))})}}const a={beforeMount(t,o,n){const e=new IntersectionObserver(i=>{i.forEach(({isIntersecting:c})=>{c&&(s(t,o),e.disconnect())})});e.observe(t)}};r.Lazy=a,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=lazy.umd.cjs.map