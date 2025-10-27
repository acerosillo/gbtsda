import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_slug__Co9dqulP.mjs';

const $$Astro = createAstro();
const $$Testing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testing;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "testing" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page"> <div class="page-heading"> <h1>Testings</h1> </div> <div class="container"></div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/testing.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/testing.astro";
const $$url = "/testing";

export { $$Testing as default, $$file as file, $$url as url };
