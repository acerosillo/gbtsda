import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_slug__D80zuhMt.mjs';

const assinstructors = [
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
const $$AssistantInstructors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AssistantInstructors;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page team"> <div class="container"> <br><br><br><br> <h1>Assistant Instructors</h1> <p>
Meet our Assistant Instructors of Great Britain Tang Soo Do
</p> <div class="row"> ${assinstructors.map((assinstructorsItem) => renderTemplate`<div class="col-6 col-lg-2 col-md-4 col-sm-4 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(assinstructorsItem.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${assinstructorsItem.name}</h4> <span>${assinstructorsItem.region ? assinstructorsItem.region : ""}</span> <span>${assinstructorsItem.title ? assinstructorsItem.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/assistant-instructors.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/assistant-instructors.astro";
const $$url = "/assistant-instructors";

export { $$AssistantInstructors as default, $$file as file, $$url as url };
