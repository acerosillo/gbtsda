import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_slug__Co9dqulP.mjs';

const retiredinstructors = [
  { id: 1, name: "Master Muhammed Shahid", rank: "", region: "", title: "Peterborough TSD", img: "assets/img/masters/muhammedshahid.jpg", pageUrl: "/muhammedshahid", slug: "muhammedshahid" },
  { id: 2, name: "Master Catherine Smith", rank: "", region: "", title: "No Club at present", img: "assets/img/masters/catherinesmith.jpg", pageUrl: "/catherinesmith", slug: "catherinesmith" }
];

const $$Astro = createAstro();
const $$RetiredInstructors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RetiredInstructors;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page team"> <div class="page-heading"> <h1>Retired Instructors</h1> </div> <div class="container"> <div class="row"> ${retiredinstructors.map((retiredinstructorsItem) => renderTemplate`<div class="col-6 col-lg-2 col-md-4 col-sm-4 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(retiredinstructorsItem.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${retiredinstructorsItem.name}</h4> <span>${retiredinstructorsItem.region ? retiredinstructorsItem.region : ""}</span> <span>${retiredinstructorsItem.title ? retiredinstructorsItem.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/retired-instructors.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/retired-instructors.astro";
const $$url = "/retired-instructors";

export { $$RetiredInstructors as default, $$file as file, $$url as url };
