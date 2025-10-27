import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_slug__Co9dqulP.mjs';

const assinstructors = [
  {
    id: 1,
    name: "Claire Smith",
    rank: "E Dan",
    dannumber: "",
    region: "Kenilworth TSD",
    title: "",
    img: "assets/img/instructors/new/claire-smith.jpg",
    pageUrl: "/claire-smith",
    slug: "claire-smith"
  },
  {
    id: 2,
    name: "Ellie Claxton",
    rank: "E Dan",
    dannumber: "",
    region: "Sawtry TSD",
    title: "",
    img: "assets/img/instructors/new/ellie-claxton.jpg",
    pageUrl: "/ellie-claxton",
    slug: "ellie-claxton"
  },
  {
    id: 3,
    name: "Jamie King",
    rank: "E Dan",
    dannumber: "",
    region: "Swavesey TSD",
    title: "",
    img: "assets/img/instructors/new/jamie-king.jpg",
    pageUrl: "/jamie-king",
    slug: "jamie-king"
  },
  {
    id: 4,
    name: "Joe Morton",
    rank: "E Dan",
    dannumber: "041733",
    region: "Swavesey TSD",
    title: "",
    img: "assets/img/instructors/new/joe-morton.jpg",
    pageUrl: "/joe-morton",
    slug: "joe-morton"
  },
  {
    id: 5,
    name: "Lucy Tyler",
    rank: "Cho Dan",
    dannumber: "051700",
    region: "Market Deeping TSD",
    title: "",
    img: "assets/img/instructors/new/lucy-tyler.jpg",
    pageUrl: "/lucy-tyler",
    slug: "lucy-tyler"
  },
  {
    id: 6,
    name: "Dymtro Stratiyschuk-Dear",
    rank: "Cho Dan",
    dannumber: "",
    region: "Teeside TSD",
    title: "",
    img: "assets/img/instructors/new/dymtro-stratiyschuk-dear.jpg",
    pageUrl: "/dymtro-stratiyschuk-dear",
    slug: "dymtro-stratiyschuk-dear"
  },
  {
    id: 7,
    name: "Kristina Blinova",
    rank: "Cho Dan",
    dannumber: "",
    region: "Teeside TSD",
    title: "",
    img: "assets/img/instructors/new/kristina-blinova.jpg",
    pageUrl: "/kristina-blinova",
    slug: "kristina-blinova"
  },
  {
    id: 8,
    name: "Kayla Dudley",
    rank: "Cho Dan",
    dannumber: "",
    region: "Foxton & Fowlmere TSD",
    title: "",
    img: "assets/img/instructors/new/kayla-dudley.jpg",
    pageUrl: "/kayla-dudley",
    slug: "kayla-dudley"
  },
  {
    id: 9,
    name: "Thomas Badman",
    rank: "Cho Dan",
    dannumber: "055048",
    region: "Yate TSD",
    title: "",
    img: "assets/img/instructors/new/thomas-badman.jpg",
    pageUrl: "/thomas-badman",
    slug: "thomas-badman"
  },
  {
    id: 10,
    name: "Gail Henderson",
    rank: "Cho Dan",
    dannumber: "",
    region: "Huntingdon & St Ives TSD",
    title: "",
    img: "assets/img/instructors/new/gail-henderson.jpg",
    pageUrl: "/gail-henderson",
    slug: "gail-henderson"
  },
  {
    id: 11,
    name: "Katie Henderson",
    rank: "Cho Dan",
    dannumber: "",
    region: "Huntingdon & St Ives TSD",
    title: "",
    img: "assets/img/instructors/new/katie-henderson.jpg",
    pageUrl: "/katie-henderson",
    slug: "katie-henderson"
  }
];

const $$Astro = createAstro();
const $$AssistantInstructors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AssistantInstructors;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page team"> <div class="page-heading"> <h1>Assistant Instructors</h1> <p>
Meet our Assistant Instructors of Great Britain Tang Soo Do
</p> </div> <div class="container"> <div class="row"> ${assinstructors.map((assinstructorsItem) => renderTemplate`<div class="col-6 col-lg-2 col-md-4 col-sm-4 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(assinstructorsItem.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${assinstructorsItem.name}</h4> <span>${assinstructorsItem.rank ? assinstructorsItem.rank : ""}</span> <span>${assinstructorsItem.dannumber ? `#${assinstructorsItem.dannumber}` : ""}</span> <span>${assinstructorsItem.region ? assinstructorsItem.region : ""}</span> <span>${assinstructorsItem.title ? assinstructorsItem.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/assistant-instructors.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/assistant-instructors.astro";
const $$url = "/assistant-instructors";

export { $$AssistantInstructors as default, $$file as file, $$url as url };
