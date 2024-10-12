import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './assistant-instructors_BMypExnc.mjs';

const $$Astro = createAstro();
const $$Links = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Links;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "homepage" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page"> <div class="container"> <br><br><br><br> <h1>Links</h1> <section class="container"> <h2>World Tang Soo Do Association</h2> <p>The OFFICIAL World Tang Soo Do Association <a href="http://www.worldtangsoodo.com/" target="_blank">Website</a></p> <p>Containing Association News, Regional Directory, Sanctioned Events, and other information about the World Tang Soo Do Association.</p> <h3>W.T.S.D.A. Region 11 Web Sites</h3> <p>Germany Tang Soo Do <a href="http://www.dtsdv.de/" target="_blank">Website</a></p> <p>Greece Tang Soo Do <a href="http://www.hellastangsoodo.ge/" target="_blank">Website</a></p> <p>Netherlands Tang Soo Do <a href="http://www.ntsda.nl/" target="_blank">Website</a></p> <p>Sweden Tang Soo Do <a href="http://www.tangsoodo.nu/" target="_blank">Website</a></p> <p>Switzerland Tang Soo Do <a href="http://www.tangsoodo.ch/" target="_blank">Website</a></p> <p>Wales Tang Soo Do <a href="http://www.walestangsoodo.co.uk/" target="_blank">Website</a></p> </section> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/links.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/links.astro";
const $$url = "/links";

export { $$Links as default, $$file as file, $$url as url };
