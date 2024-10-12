import { renderers } from './renderers.mjs';
import { manifest } from './manifest_WQtNvgvE.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_DrCpJ0lZ.mjs');
const _page1 = () => import('./chunks/assistant-instructors_BiaOqAio.mjs');
const _page2 = () => import('./chunks/clinics_YXkSLDQi.mjs');
const _page3 = () => import('./chunks/club-instructors_Cj5kYJ9y.mjs');
const _page4 = () => import('./chunks/clubs_Cf4LYjLp.mjs');
const _page5 = () => import('./chunks/events_D6RAytvp.mjs');
const _page6 = () => import('./chunks/gallery_B4w3coga.mjs');
const _page7 = () => import('./chunks/information_g5HgAbh4.mjs');
const _page8 = () => import('./chunks/instructors_BjjxjOpT.mjs');
const _page9 = () => import('./chunks/links_Ct5Od8hw.mjs');
const _page10 = () => import('./chunks/memorium_jAC-T6vz.mjs');
const _page11 = () => import('./chunks/news_CaR0J2Hy.mjs');
const _page12 = () => import('./chunks/results_ByY5wQSQ.mjs');
const _page13 = () => import('./chunks/retired-instructors_i9oTHn6N.mjs');
const _page14 = () => import('./chunks/safeguarding_bIBOUPuM.mjs');
const _page15 = () => import('./chunks/schedule_BvPFCnBm.mjs');
const _page16 = () => import('./chunks/testing_S8F2XWnd.mjs');
const _page17 = () => import('./chunks/index_Dn8G4EMG.mjs');

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
    "middlewareSecret": "50fa2ab9-d646-424e-a67e-b0f226120b4c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
