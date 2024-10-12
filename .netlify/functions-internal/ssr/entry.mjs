import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BWMJCh5P.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DrCpJ0lZ.mjs');
const _page1 = () => import('./chunks/assistant-instructors_CiLTThr1.mjs');
const _page2 = () => import('./chunks/clinics_BaBuga8g.mjs');
const _page3 = () => import('./chunks/club-instructors_9l3fzxQ3.mjs');
const _page4 = () => import('./chunks/clubs_Cd9Qsm9J.mjs');
const _page5 = () => import('./chunks/events_CoeB7gKC.mjs');
const _page6 = () => import('./chunks/gallery_D5c6SgvD.mjs');
const _page7 = () => import('./chunks/information_Bfa9zjna.mjs');
const _page8 = () => import('./chunks/instructors_TdYrCsm1.mjs');
const _page9 = () => import('./chunks/links_CZFIBxrF.mjs');
const _page10 = () => import('./chunks/memorium_DiuDYBz7.mjs');
const _page11 = () => import('./chunks/news_Ayq42JoS.mjs');
const _page12 = () => import('./chunks/results_DBQ8EwYY.mjs');
const _page13 = () => import('./chunks/retired-instructors_DoIapeQo.mjs');
const _page14 = () => import('./chunks/safeguarding_DcLj4L3M.mjs');
const _page15 = () => import('./chunks/schedule_Big_fgLH.mjs');
const _page16 = () => import('./chunks/testing_CEeIW0zq.mjs');
const _page17 = () => import('./chunks/index_CHPAntKU.mjs');

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
    "middlewareSecret": "93c088d0-0146-4db3-a04a-c616809c1038"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
