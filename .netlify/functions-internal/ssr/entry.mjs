import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DabgyF9H.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_3Kiepayl.mjs');
const _page1 = () => import('./chunks/assistant-instructors_D0Jz0wvf.mjs');
const _page2 = () => import('./chunks/clinics_CDC8MXei.mjs');
const _page3 = () => import('./chunks/club-instructors_DRFnrhMR.mjs');
const _page4 = () => import('./chunks/clubs_D-WwrmMI.mjs');
const _page5 = () => import('./chunks/events_CwkoQrRQ.mjs');
const _page6 = () => import('./chunks/gallery_BoESE-Bq.mjs');
const _page7 = () => import('./chunks/information_B6CbB0f4.mjs');
const _page8 = () => import('./chunks/instructors_B5PhmpLI.mjs');
const _page9 = () => import('./chunks/links_CzEsFFNd.mjs');
const _page10 = () => import('./chunks/memorium_CDybJI1v.mjs');
const _page11 = () => import('./chunks/_slug__DUxaZCxr.mjs');
const _page12 = () => import('./chunks/index_CBnVbWrI.mjs');
const _page13 = () => import('./chunks/results_CKEiHFwo.mjs');
const _page14 = () => import('./chunks/retired-instructors_Bs1g28Eh.mjs');
const _page15 = () => import('./chunks/safeguarding_d3CiWPH5.mjs');
const _page16 = () => import('./chunks/schedule_BrFIz9fN.mjs');
const _page17 = () => import('./chunks/testing_C1LgMHaR.mjs');
const _page18 = () => import('./chunks/index_BDoujLEn.mjs');

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
    ["src/pages/news/[slug].astro", _page11],
    ["src/pages/news/index.astro", _page12],
    ["src/pages/results.astro", _page13],
    ["src/pages/retired-instructors.astro", _page14],
    ["src/pages/safeguarding.astro", _page15],
    ["src/pages/schedule.astro", _page16],
    ["src/pages/testing.astro", _page17],
    ["src/pages/index.astro", _page18]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "f154cb58-74ff-423a-af6d-4bd1c9525119"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
