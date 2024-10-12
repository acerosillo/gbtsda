import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './assistant-instructors_Cpueqvga.mjs';

const $$Astro = createAstro();
const $$Safeguarding = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Safeguarding;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "homepage" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page"> <div class="container"> <br><br><br><br> <h1>Safeguarding</h1> <section class="container"> <h2>What is safeguarding?</h2> <p>Safeguarding is the action that is taken to promote the welfare of children and protect them from harm.</p> <p>Safeguarding means:</p> <ul> <li>protecting children from abuse and maltreatment</li> <li>preventing harm to children’s health or development</li> <li>ensuring children grow up with the provision of safe and effective care</li> <li>taking action to enable all children and young people to have the best outcomes.</li> <li>Safeguarding children and child protection guidance and legislation applies to all children up to the age of 18.</li> </ul> <p>All our Instructors are DBS checked by our partners <a href="http://www.personnelchecks.co.uk" target="_blank"> Personnel Checks</a>. </p> <p>Here you will find important documents regarding Safeguarding and Child Protection within the GBTSDA</p> <h3>Downloadable Documents: </h3> <dl class="dl-horizontal"> <dt><a href="assets/documents/Web Safeguarding Policy 2023.pdf" title="Safeguarding Policy Statement" target="_blank"><span class="glyphicon glyphicon-cloud-download"></span> Download</a></dt> <dd>Safeguarding Policy Statement (Updated 2023)</dd> <dt><a href="assets/documents/Web Safeguarding Incident Form.pdf" title="Safeguarding Incident Form" target="_blank"><span class="glyphicon glyphicon-cloud-download"></span> Download</a></dt> <dd>Safeguarding Incident Form (Updated 2022)</dd> <dt><a href="assets/documents/Web Safeguarding Leaflet 2022.pdf" title="Safeguarding Leaflet" target="_blank"><span class="glyphicon glyphicon-cloud-download"></span> Download</a></dt> <dd>Safeguarding Leaflet (Updated 2022)</dd> </dl> </section> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/safeguarding.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/safeguarding.astro";
const $$url = "/safeguarding";

export { $$Safeguarding as default, $$file as file, $$url as url };
