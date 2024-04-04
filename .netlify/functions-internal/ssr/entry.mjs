import { renderers } from './renderers.mjs';
import { manifest } from './manifest_jyYNwgwq.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DmXYXebh.mjs');
const _page1 = () => import('./chunks/index_3UJtDSvv.mjs');
const _page2 = () => import('./chunks/clubs_DUQWD81h.mjs');
const _page3 = () => import('./chunks/gallery_Dr7ZQqeI.mjs');
const _page4 = () => import('./chunks/news_VM9eVBlQ.mjs');
const _page5 = () => import('./chunks/index_4Kn7KUfv.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/bews/[slug]/index.astro", _page1],
    ["src/pages/clubs.astro", _page2],
    ["src/pages/gallery.astro", _page3],
    ["src/pages/news.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "5fa03b85-7ca7-4304-bec9-900e163f5cfb"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
