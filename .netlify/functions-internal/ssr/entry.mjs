import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CzBAdQUf.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DmXYXebh.mjs');
const _page1 = () => import('./chunks/clubs_D09oOxEL.mjs');
const _page2 = () => import('./chunks/gallery_DQpvOyMH.mjs');
const _page3 = () => import('./chunks/news_DgmpIZKK.mjs');
const _page4 = () => import('./chunks/index_BjSxAXxU.mjs');

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
    "middlewareSecret": "cb3198ac-5edd-4301-a64d-f03a61451c9c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
