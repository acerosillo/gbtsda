import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D9m_xqHK.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DrCpJ0lZ.mjs');
const _page1 = () => import('./chunks/assistant-instructors_DzgtdU7z.mjs');
const _page2 = () => import('./chunks/clinics_7ECpSXWf.mjs');
const _page3 = () => import('./chunks/club-instructors_CmY694qD.mjs');
const _page4 = () => import('./chunks/clubs_B4sQLdHH.mjs');
const _page5 = () => import('./chunks/events_C7FqqPUa.mjs');
const _page6 = () => import('./chunks/gallery_CfvyCnKY.mjs');
const _page7 = () => import('./chunks/information_B6Q5cvVn.mjs');
const _page8 = () => import('./chunks/instructors_BmABsonX.mjs');
const _page9 = () => import('./chunks/links_DSDdziRe.mjs');
const _page10 = () => import('./chunks/memorium_uQ_kX4Sc.mjs');
const _page11 = () => import('./chunks/news_C-eAiAs_.mjs');
const _page12 = () => import('./chunks/results_DbGnbAQL.mjs');
const _page13 = () => import('./chunks/retired-instructors_S7Irvkd7.mjs');
const _page14 = () => import('./chunks/safeguarding_B6tzkAKH.mjs');
const _page15 = () => import('./chunks/schedule_r5kg-dnb.mjs');
const _page16 = () => import('./chunks/testing_CWkSZYA8.mjs');
const _page17 = () => import('./chunks/index_DAd68lbB.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/assistant-instructors.astro", _page1],
    ["src/pages/clinics.astro", _page2],
    ["src/pages/club-instructors.astro", _page3],
    ["src/pages/clubs.astro", _page4],
    ["src/pages/events.astro", _page5],
    ["src/pages/gallery.astro", _page6],
    ["src/pages/information.astro", _page7],
    ["src/pages/instructors.astro", _page8],
    ["src/pages/links.astro", _page9],
    ["src/pages/memorium.astro", _page10],
    ["src/pages/news.astro", _page11],
    ["src/pages/results.astro", _page12],
    ["src/pages/retired-instructors.astro", _page13],
    ["src/pages/safeguarding.astro", _page14],
    ["src/pages/schedule.astro", _page15],
    ["src/pages/testing.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "7894810b-d2d5-46b6-95e4-cdffad36ba44"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
