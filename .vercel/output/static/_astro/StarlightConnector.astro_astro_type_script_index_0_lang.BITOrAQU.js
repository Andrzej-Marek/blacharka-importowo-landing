import{a as M,T as R}from"./router.D37drDj1.js";const m="div.main-frame",N=`${m} main`,_="data-mobile-menu-expanded",q="starlight-menu-button",l="nav.sidebar",i=`${l} .sidebar-content`,E="starlight-lang-select",y=`${i} .__collapse`;function v(e){const t=f(e.href),n=t.split(""),r=document.querySelectorAll(`${i} a`);if(r.length===0)return null;const o=[...r],s=o.map(a=>f(new URL(a.href,location.href).href));return o[s.map(a=>a.split("").findIndex((c,d)=>c!==n[d])).map((a,c)=>a!==-1?a:Math.min(t.length,s[c].length)+(t.length===s[c].length?1:0)).reduce((a,c,d,w)=>c>w[a]?d:a,0)];function f(a){return a.replace(/\/#/,"#").replace(/\/$/,"")}}function C(){document.querySelectorAll(`${i} [aria-current="page"]`)?.forEach(e=>e.removeAttribute("aria-current"))}function I(e){C(),v(e)?.setAttribute("aria-current","page")}function A(e,t=!0){const n=document.querySelector(`${i} [aria-current="page"]`);let r=n?.closest("details");for(;r;)r.open=!0,r=r.parentElement?.closest("details");t&&n?.scrollIntoView({block:"center",behavior:"instant"})}const $="vtbot-starlight-replace-sidebar-content",k="vtbot-starlight-retain-current-page-marker",h=()=>({replaceSidebarContent:document.querySelector(`head meta[name="${$}"]`),retainCurrentPageMarker:document.querySelector(`head meta[name="${k}"]`),mainTransitionScope:document.querySelector('head meta[name="vtbot-main-transition-scope"]')?.content});let{replaceSidebarContent:p,retainCurrentPageMarker:S,mainTransitionScope:u}=h();A();g(window.document);T(window.document);function L(e){b(document),b(e.newDocument),O(),g(e.newDocument),T(e.newDocument),P(e),!p&&!S&&I(e.to)}function D(e){B(e),!S&&A()}function O(){document.body.hasAttribute(_)&&document.body.querySelector(q)?.closest("nav")?.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape",code:"Escape",charCode:27,keyCode:27,shiftKey:!1,ctrlKey:!1,altKey:!1,metaKey:!1}))}function b(e){e.body.querySelector(m)?.setAttribute("data-vtbot-replace","main")}function P(e){if(!u)return;t(document,u),t(e.newDocument,u);function t(n,r){const o=n.querySelector(N);o&&(o.dataset.astroTransitionScope=r)}}function B(e){const t=e.newDocument.querySelector(l);if(!t)document.querySelector(l)?.remove();else{const n=document.querySelector(l);if(!n)document.querySelector(m)?.insertAdjacentElement("beforebegin",t);else if(p){const r=n.querySelector(i),o=t.querySelector(i);r&&o?r.replaceWith(o):n.replaceWith(t)}}}function g(e){e.querySelectorAll(E).forEach((t,n)=>t.setAttribute("data-vtbot-replace",`vtbot-${E}-${n}`))}function T(e){e.querySelectorAll(`${y} input`).forEach((t,n)=>t.setAttribute("data-vtbot-replace",`vtbot-${y.replaceAll(" ","-")}-${n}`))}document.addEventListener(M,e=>{({replaceSidebarContent:p,retainCurrentPageMarker:S,mainTransitionScope:u}=h());const t=e.loader;e.loader=async()=>{await t(),L(e)}});document.addEventListener(R,e=>{const t=e.swap;e.swap=()=>{t(),D(e)}});export{$ as REPLACE_SIDEBAR_CONTENT,k as RETAIN_CURRENT_PAGE_MARKER};