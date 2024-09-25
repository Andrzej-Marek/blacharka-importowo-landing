import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CgxU8Nez.mjs';
import { manifest } from './manifest_BLoq_yPR.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/favicon.ico.astro.mjs');
const _page4 = () => import('./pages/gallery.astro.mjs');
const _page5 = () => import('./pages/manifest.json.astro.mjs');
const _page6 = () => import('./pages/robots.txt.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const _page8 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/favicon.ico.ts", _page3],
    ["src/pages/gallery.astro", _page4],
    ["src/pages/manifest.json.ts", _page5],
    ["src/pages/robots.txt.ts", _page6],
    ["src/pages/index.astro", _page7],
    ["node_modules/@astrojs/starlight/index.astro", _page8]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "38a90283-04d9-4d28-ae08-3499718e30ff",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
