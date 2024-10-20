import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_slug__D80zuhMt.mjs';

const $$Astro = createAstro();
const $$Information = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Information;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "information" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page"> <div class="container"> <br><br><br><br> <h1>Information</h1> <section class="container"></section> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/information.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/information.astro";
const $$url = "/information";

export { $$Information as default, $$file as file, $$url as url };