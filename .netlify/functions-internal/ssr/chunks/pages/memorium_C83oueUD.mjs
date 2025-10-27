import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_slug__Co9dqulP.mjs';

const memorium = [
  {
    id: 1,
    name: "Grandmaster Jae Chul Shin",
    rank: "xxth Dan",
    region: "USA Region 1",
    title: "Founder",
    img: "assets/img/grandmasters/grandmaster-shin.jpg",
    biography: "In Loving Memory of [Instructor's Name], a dedicated mentor, karate instructor, and founder of [Dojo/Organization's Name]. Sensei [Instructor's Name] shaped countless students with lessons of discipline, respect, and perseverance. Their passion for karate and commitment to teaching left a lasting impact that extended far beyond the dojo. As a visionary leader, Sensei’s legacy continues through the students and instructors who carry on their teachings. We mourn the loss of a great teacher and friend but celebrate a life lived with honor and purpose. Rest in peace, Sensei [Instructor's Name], your wisdom and legacy will never be forgotten.",
    pageUrl: "",
    slug: ""
  },
  {
    id: 2,
    name: "Grandmaster Beaudoin",
    rank: "xxth Dan",
    region: "USA Region 1",
    title: "",
    img: "assets/img/grandmasters/grandmaster-beaudoin.jpg",
    biography: "In Loving Memory of [Instructor's Name], a dedicated mentor, karate instructor, and founder of [Dojo/Organization's Name]. Sensei [Instructor's Name] shaped countless students with lessons of discipline, respect, and perseverance. Their passion for karate and commitment to teaching left a lasting impact that extended far beyond the dojo. As a visionary leader, Sensei’s legacy continues through the students and instructors who carry on their teachings. We mourn the loss of a great teacher and friend but celebrate a life lived with honor and purpose. Rest in peace, Sensei [Instructor's Name], your wisdom and legacy will never be forgotten.",
    pageUrl: "",
    slug: ""
  },
  {
    id: 3,
    name: "Master Bernarte",
    rank: "xth Dan",
    region: "East London",
    title: "",
    biography: "In Loving Memory of [Instructor's Name], a dedicated mentor, karate instructor, and founder of [Dojo/Organization's Name]. Sensei [Instructor's Name] shaped countless students with lessons of discipline, respect, and perseverance. Their passion for karate and commitment to teaching left a lasting impact that extended far beyond the dojo. As a visionary leader, Sensei’s legacy continues through the students and instructors who carry on their teachings. We mourn the loss of a great teacher and friend but celebrate a life lived with honor and purpose. Rest in peace, Sensei [Instructor's Name], your wisdom and legacy will never be forgotten.",
    img: "assets/img/masters/7.jpg",
    pageUrl: "/geoff-annis",
    slug: "geoff-annis"
  }
];

const $$Astro = createAstro();
const $$Memorium = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Memorium;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page team"> <div class="page-heading"> <h1>Memorium</h1> <p>
Honoring the legacy of our fallen masters, their wisdom lives on in every lesson and memory they left behind.
</p> </div> <div class="container"> <div class="row memorium-page"> ${memorium.map((memoriumItem) => renderTemplate`<div class="col-12 col-md-6 col-lg-4 align-items-stretch"> <article class="member"> <div class="member-img"> <img${addAttribute(memoriumItem.img, "src")} class="img-fluid"${addAttribute(`Portrait of ${memoriumItem.name}`, "alt")}> </div> <div class="member-info"> <h4 class="member-name">${memoriumItem.name}</h4> ${memoriumItem.region && renderTemplate`<p class="member-region">${memoriumItem.region}</p>`} ${memoriumItem.title && renderTemplate`<p class="member-title">${memoriumItem.title}</p>`}  ${memoriumItem.biography && renderTemplate`<div class="member-bio"> <h5 class="bio-heading">In Memory</h5> <p class="bio-text">${memoriumItem.biography}</p> </div>`} </div> </article> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/memorium.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/memorium.astro";
const $$url = "/memorium";

export { $$Memorium as default, $$file as file, $$url as url };
