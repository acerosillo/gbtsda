import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_slug__Co9dqulP.mjs';

const clubinstructors = [
  {
    id: 2,
    name: "Emily Wears",
    rank: "Sah Dan",
    dannumber: "041738",
    region: "Nunthorpe TSD",
    title: "",
    img: "assets/img/instructors/new/EmilyWears.jpg",
    pageUrl: "/emily-wears",
    slug: "emily-wears"
  },
  {
    id: 5,
    name: "Phillip Sutton",
    rank: "Sah Dan",
    dannumber: "042261",
    region: "Bourn TSD",
    title: "",
    img: "assets/img/instructors/new/PhillipSutton.jpg",
    pageUrl: "/phillip-sutton",
    slug: "phillip-sutton"
  },
  {
    id: 6,
    name: "Sarah Chapman",
    rank: "Sam Dan",
    dannumber: "",
    region: "Hussaini TSD",
    title: "",
    img: "assets/img/instructors/new/SarahChapman.jpg",
    pageUrl: "/sarah-chapman",
    slug: "sarah-chapman"
  },
  {
    id: 7,
    name: "Carol Wyatt",
    rank: "Sam Dan",
    dannumber: "039696",
    region: "Kenilworth TSD",
    title: "",
    img: "assets/img/instructors/new/CarolWyatt.jpg",
    pageUrl: "/carol-wyatt",
    slug: "carol-wyatt"
  },
  {
    id: 8,
    name: "Gregman Enriquez",
    rank: "Sam Dan",
    dannumber: "041275",
    region: "Barking TSD",
    title: "",
    img: "assets/img/instructors/new/GregmanEnriquez.jpg",
    pageUrl: "/gregman-enriquez",
    slug: "gregman-enriquez"
  },
  {
    id: 9,
    name: "Charlie Boreland",
    rank: "Sam Dan",
    dannumber: "043820",
    region: "Radford & Walgrave TSD",
    title: "",
    img: "assets/img/instructors/new/CharlieBoreland.jpg",
    pageUrl: "/charlie-boreland",
    slug: "charlie-boreland"
  },
  {
    id: 10,
    name: "Ryan Bernarte",
    rank: "Sam Dan",
    dannumber: "",
    region: "East London TSD",
    title: "",
    img: "assets/img/instructors/new/RyanBernarte.jpg",
    pageUrl: "/ryan-bernarte",
    slug: "ryan-bernarte"
  },
  {
    id: 11,
    name: "Gary Jarvis",
    rank: "Sam Dan",
    dannumber: "",
    region: "Thornbury TSD",
    title: "",
    img: "assets/img/instructors/new/GaryJarvis.jpg",
    pageUrl: "/gary-jarvis",
    slug: "gary-jarvis"
  },
  {
    id: 12,
    name: "Zoe Halliday",
    rank: "Sam Dan",
    dannumber: "045330",
    region: "Cherry Hinton TSD",
    title: "",
    img: "assets/img/instructors/new/ZoeHalliday.jpg",
    pageUrl: "/zoe-halliday",
    slug: "zoe-halliday"
  },
  {
    id: 13,
    name: "Nick Payne",
    rank: "Sam Dan",
    dannumber: "",
    region: "Comberton TSD",
    title: "",
    img: "assets/img/instructors/new/NickPayne.jpg",
    pageUrl: "/nick-payne",
    slug: "nick-payne"
  },
  {
    id: 14,
    name: "Bernadette Seager",
    rank: "Sam Dan",
    dannumber: "",
    region: "Trumpington TSD",
    title: "",
    img: "assets/img/instructors/new/BernadetteSeager.jpg",
    pageUrl: "/bernadette-seager",
    slug: "bernadette-seager"
  },
  {
    id: 15,
    name: "Richard Seager",
    rank: "Sam Dan",
    dannumber: "",
    region: "Marleigh TSD",
    title: "",
    img: "assets/img/instructors/new/RichardSeager.jpg",
    pageUrl: "/richard-seager",
    slug: "richard-seager"
  },
  {
    id: 16,
    name: "Alice Sheppard",
    rank: "Sam Dan",
    dannumber: "",
    region: "Staple Hill TSD",
    title: "",
    img: "assets/img/instructors/new/AliceSheppard.jpg",
    pageUrl: "/alice-sheppard",
    slug: "alice-sheppard"
  }
];

const $$Astro = createAstro();
const $$ClubInstructors = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClubInstructors;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Club Instructors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page team"> <div class="page-heading"> <h1>Club Instructors</h1> <p>
Meet our Club Instructors of Great Britain Tang Soo Do
</p> </div> <div class="container"> <div class="row"> ${clubinstructors.map((ci) => renderTemplate`<div class="col-6 col-lg-2 col-md-4 col-sm-4 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(ci.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${ci.name}</h4> <span>${ci.rank ? ci.rank : ""}</span> <span>${ci.dannumber ? `#${ci.dannumber}` : ""}</span> <span>${ci.region ? ci.region : ""}</span> <span>${ci.title ? ci.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/club-instructors.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/club-instructors.astro";
const $$url = "/club-instructors";

export { $$ClubInstructors as default, $$file as file, $$url as url };
