import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './assistant-instructors_Cpueqvga.mjs';

const memorium = [
  {
    id: 1,
    name: "Grandmaster Jae Chul Shin",
    rank: "xxth Dan",
    region: "Region 1",
    title: "Founder",
    img: "assets/img/grandmasters/grandmaster-shin.jpg",
    pageUrl: "",
    slug: ""
  },
  {
    id: 2,
    name: "Grandmaster Beaudoin",
    rank: "xxth Dan",
    region: "Region 1",
    title: "",
    img: "assets/img/grandmasters/grandmaster-beaudoin.jpg",
    pageUrl: "",
    slug: ""
  },
  {
    id: 3,
    name: "Master Bernarte",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/masters/7.jpg",
    pageUrl: "/geoff-annis",
    slug: "geoff-annis"
  }
];

const $$Astro = createAstro();
const $$Memorium = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Memorium;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page team"> <div class="container"> <br><br><br><br> <h1>Memorium</h1> <p>
Honoring the legacy of our fallen masters, their wisdom lives on in every lesson and memory they left behind.
</p> <div class="row"> ${memorium.map((memoriumItem) => renderTemplate`<div class="col-12 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(memoriumItem.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${memoriumItem.name}</h4> <span>${memoriumItem.region ? memoriumItem.region : ""}</span> <span>${memoriumItem.title ? memoriumItem.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/memorium.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/memorium.astro";
const $$url = "/memorium";

export { $$Memorium as default, $$file as file, $$url as url };
