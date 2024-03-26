import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BfSStmGR.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_CrKOKfzk.mjs');
const _page1 = () => import('./chunks/clubs_DfNbjabg.mjs');
const _page2 = () => import('./chunks/gallery_Dcuo6H_7.mjs');
const _page3 = () => import('./chunks/news_niCOHQ9L.mjs');
const _page4 = () => import('./chunks/index_uaCGECyD.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/clubs.astro", _page1],
    ["src/pages/gallery.astro", _page2],
    ["src/pages/news.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "67a137fd-423f-4f9f-b896-78af348db4a3"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
