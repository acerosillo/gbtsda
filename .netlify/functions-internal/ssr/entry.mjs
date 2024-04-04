import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BEx2RptZ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DmXYXebh.mjs');
const _page1 = () => import('./chunks/index_B9hLC_LK.mjs');
const _page2 = () => import('./chunks/clubs_Bu3VYtqM.mjs');
const _page3 = () => import('./chunks/gallery_BQ1kY7vu.mjs');
const _page4 = () => import('./chunks/news_Ds8lZY4_.mjs');
const _page5 = () => import('./chunks/index_B0lPYZhe.mjs');

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
    "middlewareSecret": "39ec57d4-4b96-450f-b492-c32e9773e6c9"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
