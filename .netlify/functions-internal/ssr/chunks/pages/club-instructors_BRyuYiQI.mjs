import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_slug__D80zuhMt.mjs';

const clubinstructors = [
  {
    id: 1,
    name: "Katie Alexander",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/KatieAlexander.jpg",
    pageUrl: "/katie-alexander",
    slug: "katie-alexander"
  },
  {
    id: 2,
    name: "Paul Jones",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/PaulJones.jpg",
    pageUrl: "/paul-jones",
    slug: "paul-jones"
  },
  {
    id: 3,
    name: "Geoff Annis",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/GeoffAnnis.jpg",
    pageUrl: "/geoff-annis",
    slug: "geoff-annis"
  },
  {
    id: 4,
    name: "Harvey Walker",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/HarveyWalker.jpg",
    pageUrl: "/harvey-walker",
    slug: "harvey-walker"
  },
  {
    id: 5,
    name: "Bradley Dearnley",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/BradleyDearnley.jpg",
    pageUrl: "/bradley-dearnley",
    slug: "bradley-dearnley"
  },
  {
    id: 6,
    name: "Ian Williams",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/IanWilliams.jpg",
    pageUrl: "/ian-williams",
    slug: "ian-williams"
  },
  {
    id: 7,
    name: "Carol Wyatt",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/CarolWyatt.jpg",
    pageUrl: "/carol-wyatt",
    slug: "carol-wyatt"
  },
  {
    id: 8,
    name: "Ryan Bernarte",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/RyanBernarte.jpg",
    pageUrl: "/ryan-bernarte",
    slug: "ryan-bernarte"
  },
  {
    id: 9,
    name: "Greg Enriques",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/GregEnriques.jpg",
    pageUrl: "/greg-enriques",
    slug: "greg-enriques"
  },
  {
    id: 10,
    name: "Charlie Boreland",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/CharlieBoreland.jpg",
    pageUrl: "/charlie-boreland",
    slug: "charlie-boreland"
  },
  {
    id: 11,
    name: "Gary Jarvis",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/GaryJarvis.jpg",
    pageUrl: "/gary-jarvis",
    slug: "gary-jarvis"
  },
  {
    id: 12,
    name: "Richard Seager",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/RichardSeager.jpg",
    pageUrl: "/richard-seager",
    slug: "richard-seager"
  },
  {
    id: 13,
    name: "Bernadette Seager",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/BernadetteSeager.jpg",
    pageUrl: "/bernadette-seager",
    slug: "bernadette-seager"
  },
  {
    id: 14,
    name: "Nick Payne",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/NickPayne.jpg",
    pageUrl: "/nick-payne",
    slug: "nick-payne"
  },
  {
    id: 15,
    name: "Ian Crook",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/IanCrook.jpg",
    pageUrl: "/ian-crook",
    slug: "ian-crook"
  },
  {
    id: 16,
    name: "Lauren Crook",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/LaurenCrook.jpg",
    pageUrl: "/lauren-crook",
    slug: "lauren-crook"
  },
  {
    id: 17,
    name: "Leisha Zamparelli",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/LeishaZamparelli.jpg",
    pageUrl: "/leisha-zamparelli",
    slug: "leisha-zamparelli"
  },
  {
    id: 18,
    name: "Shaunna Edwards",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/ShaunnaEdwards.jpg",
    pageUrl: "/shaunna-edwards",
    slug: "shaunna-edwards"
  },
  {
    id: 19,
    name: "Bonita Andre",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/BonitaAndre.jpg",
    pageUrl: "/bonita-andre",
    slug: "bonita-andre"
  },
  {
    id: 20,
    name: "Katherine Bernarte",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/KatherineBernarte.jpg",
    pageUrl: "/katherine-bernarte",
    slug: "katherine-bernarte"
  },
  {
    id: 21,
    name: "Taylor Hennah",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/TaylorHennah.jpg",
    pageUrl: "/taylor-hennah",
    slug: "taylor-hennah"
  },
  {
    id: 22,
    name: "Edward Coulstock",
    rank: "",
    region: "",
    title: "",
    img: "assets/img/instructors/new/EdwardCoulstock.jpg",
    pageUrl: "/edward-coulstock",
    slug: "edward-coulstock"
  }
];

const $$Astro = createAstro();
const $$ClubInstructors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClubInstructors;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page team"> <div class="container"> <br><br><br><br> <h1>Club Instructors</h1> <p>
Meet our Club Instructors of Great Britain Tang Soo Do
</p> <div class="row"> ${clubinstructors.map((ci) => renderTemplate`<div class="col-6 col-lg-2 col-md-4 col-sm-4 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(ci.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${ci.name}</h4> <span>${ci.region ? ci.region : ""}</span> <span>${ci.title ? ci.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/club-instructors.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/club-instructors.astro";
const $$url = "/club-instructors";

export { $$ClubInstructors as default, $$file as file, $$url as url };
