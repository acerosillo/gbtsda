import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, h as renderHead } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                          */
import 'clsx';

const naviData = [
  {
    id: 1,
    name: "Home",
    slug: "/",
    subnav: null
  },
  {
    id: 2,
    name: "News",
    slug: "news",
    subnav: null
  },
  {
    id: 3,
    name: "History",
    slug: "/#history",
    subnav: null
  },
  {
    id: 4,
    name: "Gallery",
    slug: "gallery",
    subnav: null
  },
  {
    id: 5,
    name: "Grandmasters",
    slug: "/#grandmasters",
    subnav: null
  },
  {
    id: 6,
    name: "Masters",
    slug: "/#masters",
    subnav: null
  },
  {
    id: 7,
    name: "Clubs",
    slug: "clubs",
    subnav: null
  },
  {
    id: 8,
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
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(hasSubnav ? "dropdown" : "", "class")}> <a class="nav-link scrollto"${addAttribute(`${navigation.slug}`, "href")}><span>${navigation.name}</span> <i class="bi bi-chevron-down"></i></a> ${subnav && subnav.length > 0 && renderTemplate`<ul> ${subnav.map((subnavItem) => renderTemplate`<li><a${addAttribute(`${subnavItem.slug}`, "href")}>${subnavItem.name}</a></li>`)} </ul>`} </li>`;
}, "/Users/acerosillo/Documents/acerosillo/tsd.com/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed-top header-inner-pages"> <div class="container d-flex align-items-center justify-content-between"> <h1 class="logo"><a href="/">Great Britain Tang Soo Do</a></h1> <nav id="navbar" class="navbar"> <ul> ${naviData.map((navigation) => renderTemplate`${renderComponent($$result, "Navigation", $$Navigation, { "navigation": navigation })}`)} </ul> <i class="bi bi-list mobile-nav-toggle"></i> </nav> </div> </header>`;
}, "/Users/acerosillo/Documents/acerosillo/tsd.com/src/layouts/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="footer"> <div class="footer-top"> <div class="container"> <div class="row"> <div class="col-lg-3 col-md-6 footer-contact"></div> <div class="col-lg-2 col-md-6 footer-links"> <h4>Useful Links</h4> <ul> <li> <i class="bx bx-chevron-right"></i> <a href="#">Home</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#">About us</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#">Services</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a> </li> </ul> </div> <div class="col-lg-3 col-md-6 footer-links"> <h4>Our Services</h4> <ul> <li> <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#">Web Development</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#">Product Management</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a> </li> <li> <i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a> </li> </ul> </div> <div class="col-lg-4 col-md-6 footer-newsletter"> <h4>Join Our Newsletter</h4> <p>
Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
</p> <form action="" method="post"> <input type="email" name="email"><input type="submit" value="Subscribe"> </form> </div> </div> </div> </div> <div class="container d-md-flex py-4"> <div class="me-md-auto text-center text-md-start"> <div class="copyright">
&copy; Copyright <strong><span>Tempo</span></strong>. All Rights Reserved
</div> </div> <div class="social-links text-center text-md-right pt-3 pt-md-0"> <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a> <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> </div> </div> </footer>`;
}, "/Users/acerosillo/Documents/acerosillo/tsd.com/src/layouts/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/acerosillo/Documents/acerosillo/tsd.com/node_modules/astro/components/ViewTransitions.astro", void 0);

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
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta property="og:title"', '><meta property="og:type" content="product"><meta property="og:image"', '><meta property="og:description"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:card" content="summary_large_image"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", " - GBTSDA.com</title>", "", "</head> <body> ", ' <main id="main"> ', ' </main> <script type="module" src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> <script type="module" src="assets/vendor/glightbox/js/glightbox.min.js"></script> <script type="module" src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script> <script type="module" src="assets/vendor/swiper/swiper-bundle.min.js"></script> <script type="module" src="assets/vendor/php-email-form/validate.js"></script> <script type="module" src="/assets/js/main.js"></script>  ', ' <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> </body></html>'])), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(imageUrl, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/acerosillo/Documents/acerosillo/tsd.com/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Clubs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clubs;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "homepage" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container"> <br><br> <h1>Clubs</h1> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> </div> <div class="container"> <h1>Clubs</h1> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> </div> </section> ` })}`;
}, "/Users/acerosillo/Documents/acerosillo/tsd.com/src/pages/clubs.astro", void 0);

const $$file = "/Users/acerosillo/Documents/acerosillo/tsd.com/src/pages/clubs.astro";
const $$url = "/clubs";

const clubs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Clubs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, clubs as c };
