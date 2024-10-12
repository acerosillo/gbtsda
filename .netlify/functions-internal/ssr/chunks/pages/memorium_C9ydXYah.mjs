import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { m as masters, $ as $$Layout } from './assistant-instructors_CogUMRay.mjs';

const $$Astro = createAstro();
const $$Memorium = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Memorium;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page"> <div class="container"> <br><br><br><br> <h1>Memorium</h1> <p>
Honoring the legacy of our fallen masters, their wisdom lives on in every lesson and memory they left behind.
</p> <div class="row"> ${masters.map((mastersItem) => renderTemplate`<div class="col-lg-2 col-md-4 col-sm-6 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(mastersItem.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${mastersItem.name}</h4> <span>${mastersItem.region ? mastersItem.region : ""}</span> <span>${mastersItem.title ? mastersItem.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/memorium.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/memorium.astro";
const $$url = "/memorium";

export { $$Memorium as default, $$file as file, $$url as url };