import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './assistant-instructors_Cpueqvga.mjs';

const instructors = [
  {
    id: 1,
    name: "Instructor Name",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/KatieAlexander.jpg",
    pageUrl: "/katie-alexander",
    slug: "katie-alexander"
  },
  {
    id: 2,
    name: "Instructor Name",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/PaulJones.jpg",
    pageUrl: "/paul-jones",
    slug: "paul-jones"
  },
  {
    id: 3,
    name: "Instructor Name",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/GeoffAnnis.jpg",
    pageUrl: "/geoff-annis",
    slug: "geoff-annis"
  }
];

const $$Astro = createAstro();
const $$Instructors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Instructors;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page team"> <div class="container"> <br><br><br><br> <h1>Instructors</h1> <p>
Meet our Instructors of Great Britain Tang Soo Do
</p> <div class="row"> ${instructors.map((instructorItem) => renderTemplate`<div class="col-6 col-lg-2 col-md-4 col-sm-4 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(instructorItem.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${instructorItem.name}</h4> <span>${instructorItem.region ? instructorItem.region : ""}</span> <span>${instructorItem.title ? instructorItem.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/instructors.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/instructors.astro";
const $$url = "/instructors";

export { $$Instructors as default, $$file as file, $$url as url };
