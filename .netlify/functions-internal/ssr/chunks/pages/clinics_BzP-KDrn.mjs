import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './assistant-instructors_BMypExnc.mjs';

const $$Astro = createAstro();
const $$Clinics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clinics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "clinic" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page"> <div class="container"> <br><br><br><br> <h1>Clinics 2024/25</h1> <section class="container"></section> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/clinics.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/clinics.astro";
const $$url = "/clinics";

export { $$Clinics as default, $$file as file, $$url as url };
