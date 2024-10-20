import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DsfSQ9Lc.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_3Kiepayl.mjs');
const _page1 = () => import('./chunks/assistant-instructors_-PY1LIry.mjs');
const _page2 = () => import('./chunks/clinics_By7Lf5O6.mjs');
const _page3 = () => import('./chunks/club-instructors_ga3nNK-T.mjs');
const _page4 = () => import('./chunks/clubs_C3qMp7X5.mjs');
const _page5 = () => import('./chunks/events_BHj-u0fw.mjs');
const _page6 = () => import('./chunks/gallery_CjT8DLq1.mjs');
const _page7 = () => import('./chunks/information_jQ1u6CxB.mjs');
const _page8 = () => import('./chunks/instructors_CfSOQ1xu.mjs');
const _page9 = () => import('./chunks/links_CPyIpSwi.mjs');
const _page10 = () => import('./chunks/memorium_BV86tcu6.mjs');
const _page11 = () => import('./chunks/_slug__Be72r4rc.mjs');
const _page12 = () => import('./chunks/index_vsVn4tIl.mjs');
const _page13 = () => import('./chunks/results_DMNN6VfK.mjs');
const _page14 = () => import('./chunks/retired-instructors_Cy-Ch2He.mjs');
const _page15 = () => import('./chunks/safeguarding_CjF7vs-p.mjs');
const _page16 = () => import('./chunks/schedule_7KBXZtzR.mjs');
const _page17 = () => import('./chunks/testing_B375Du3k.mjs');
const _page18 = () => import('./chunks/index__mxP7aMx.mjs');

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
    "middlewareSecret": "2a5f2775-8dcb-4bce-a6b5-bbebfcaff8fc"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
