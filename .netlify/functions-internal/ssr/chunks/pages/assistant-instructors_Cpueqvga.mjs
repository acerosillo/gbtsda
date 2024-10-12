import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, h as renderHead } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                          */
import 'clsx';

const naviData = [
  // {
  //   id: 1,
  //   name: "Home",
  //   slug: "/",
  //   subnav: null,
  // },
  {
    id: 1,
    name: "Grandmasters",
    slug: "/#grandmasters",
    subnav: null
  },
  {
    id: 2,
    name: "Masters",
    slug: "/#masters",
    subnav: null
  },
  {
    id: 3,
    name: "Instructors",
    slug: "/club-instructors",
    subnav: [
      {
        id: 1,
        name: "Club Instructors",
        slug: "/club-instructors"
      },
      {
        id: 2,
        name: "Instructors",
        slug: "/instructors"
      },
      {
        id: 3,
        name: "Assistant Instructors",
        slug: "/assistant-instructors"
      },
      {
        id: 4,
        name: "Retired Instructors",
        slug: "/retired-instructors"
      }
    ]
  },
  {
    id: 4,
    name: "Memorium",
    slug: "/memorium",
    subnav: null
  },
  {
    id: 5,
    name: "Clubs",
    slug: "clubs",
    subnav: null
  },
  {
    id: 6,
    name: "News",
    slug: "news",
    subnav: null
  },
  {
    id: 7,
    name: "History",
    slug: "/#history",
    subnav: null
  },
  {
    id: 8,
    name: "Gallery",
    slug: "gallery",
    subnav: null
  },
  {
    id: 9,
    name: "Information",
    slug: "",
    subnav: [
      {
        id: 1,
        name: "Events",
        slug: "/events"
      },
      {
        id: 2,
        name: "Results",
        slug: "/results"
      },
      {
        id: 3,
        name: "Schedule",
        slug: "/schedule"
      },
      {
        id: 4,
        name: "Clinics",
        slug: "/clinics"
      },
      {
        id: 5,
        name: "Testing",
        slug: "/testing"
      },
      {
        id: 6,
        name: "Information",
        slug: "/information"
      },
      {
        id: 7,
        name: "Safeguarding",
        slug: "/safeguarding"
      }
    ]
  }
];

const $$Astro$5 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { navigation } = Astro2.props;
  const subnav = navigation.subnav;
  const hasSubnav = subnav && subnav.length > 0;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(hasSubnav ? "dropdown" : "", "class")}${addAttribute(navigation.id, "key")}> <a class="nav-link scrollto"${addAttribute(`${navigation.slug}`, "href")}${addAttribute(navigation.name, "aria-label")}><span>${navigation.name}</span> ${subnav && subnav.length > 0 && renderTemplate`<i class="bi bi-chevron-down"></i>`} </a> ${subnav && subnav.length > 0 && renderTemplate`<ul> ${subnav.map((subnavItem) => renderTemplate`<li><a${addAttribute(`${subnavItem.slug}`, "href")}>${subnavItem.name}</a></li>`)} </ul>`} </li>`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed-top"> <div class="container d-flex align-items-center justify-content-between"> <h1 class="logo"><a href="/">Great Britain Tang Soo Do</a></h1> <nav id="navbar" class="navbar"> <ul role="navigation" aria-label="Main Navigation"> ${naviData.sort((a, b) => a.id - b.id).map((navigation) => renderTemplate`${renderComponent($$result, "Navigation", $$Navigation, { "navigation": navigation })}`)} </ul> <i class="bi bi-list mobile-nav-toggle"></i> </nav> <ul class="socials"> <li><a href="https://www.facebook.com/gbtsda/" target="_blank"><i class="bx bxl-facebook-square"></i></a></li> <li><a href="https://www.instagram.com/gb_tang_soo_do/" target="_blank"><i class="bx bxl-instagram"></i></a></li> </ul> </div> </header>`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/layouts/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="footer"> <div class="footer-top"> <div class="container"> <div class="row"> <div class="col-lg-2 col-md-6 footer-links order-md-3"> <h4>Quick Links</h4> <ul> <li> <i class="bx bx-chevron-right"></i> <a href="/">Home</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="/news">News</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="/clubs">Clubs</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#history">History</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="/gallery">Gallery</a> </li> </ul> </div> <div class="col-lg-1 col-md-1 order-md-2"></div> <div class="col-lg-2 col-md-6 footer-links order-md-4"> <h4>Information</h4> <ul> <li> <i class="bx bx-chevron-right"></i> <a href="/events">Events</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="/results">Results</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="/schedule">Schedule 2025</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="/clinics">Clinics</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="/safeguarding">Safeguarding</a> </li> </ul> </div> <div class="col-lg-6 col-md-5 footer-newsletter order-md-1"> <h4>Get in touch</h4> <small>
2024 © The information/content within the pages of the GBTSD Martial Arts web site is the sole property of GBTSD and the World Tang Soo Do Association. The images and information contained herein may not be reproduced without the express written permission of GBTSD and the World Tang Soo Do Association.
</small> <p><a title="Mail the Webmaster" href="mailto:webmaster@gbtsda.com?subject=Website%20Enquiry" class="C-2"><span class="icon-envelope"></span> GBTSDA Webmaster</a></p> </div> <div class="col-lg-1 col-md-1 order-md-5"> <ul class="socials-footer"> <li><a href="https://www.facebook.com/gbtsda/" target="_blank"><i class="bx bxl-facebook-square"></i></a></li> <li><a href="https://www.instagram.com/gb_tang_soo_do/" target="_blank"><i class="bx bxl-instagram"></i></a></li> </ul> </div> </div> </div> </div> </footer> <small class="text-center">developed by <a href="http://www.acerosillo.com" target="_blank">acerosillo.com</a></small> <span class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></span>`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/layouts/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    image = "/assets/img/og-image.jpg",
    description = ""
  } = Astro2.props;
  const imageUrl = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.PUBLIC_URL ? new URL(image, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.PUBLIC_URL) : image;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta property="og:title"', '><meta property="og:type" content="product"><meta property="og:image"', '><meta property="og:description"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="img/favicon/favicon-48x48.png" sizes="48x48"><link rel="icon" type="image/svg+xml" href="img/favicon/favicon.svg"><link rel="shortcut icon" href="img/favicon/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="img/favicon//apple-touch-icon.png"><link rel="manifest" href="img/favicon/site.webmanifest"><meta name="generator"', "><title>", " - GBTSDA.com</title>", "", "</head> <body> ", ' <main id="main"> ', " </main> ", '  <script type="module" src="https://cdn.jsdelivr.net/npm/locomotive-scroll@beta/bundled/locomotive-scroll.min.js"></script> <script type="module" src="../../assets/js/main.js"></script> </body></html>'])), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(imageUrl, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/layouts/Layout.astro", void 0);

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

const assistantInstructors = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AssistantInstructors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, assistantInstructors as a };
