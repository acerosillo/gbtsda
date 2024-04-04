//import LocomotiveScroll from "../../node_modules/locomotive-scroll";

// import { gsap } from "../../node_modules/gsap/all";

// import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";
// import { ScrollToPlugin } from "../../node_modules/gsap/ScrollToPlugin";
// import { Observer } from "../../node_modules/gsap/Observer";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(Observer);

// gsap.registe;

function init() {
  // locomotiveScroll.init();
  headerScroll.init();
  pageCheck.init();
  // imageParallax.init();
}

var locomotiveScroll = {
  init: function () {
    setTimeout(function () {
      const locomotiveScroll = new LocomotiveScroll();
    }, 100);
  },
};
var headerScroll = {
  init: function () {
    const select = (el, all = false) => {
      if (typeof el !== "string" || el.trim() === "") {
        // Add a check to ensure that the selector is not empty
        return all ? [] : null;
      }

      el = el.trim();

      return all
        ? [...document.querySelectorAll(el)]
        : document.querySelector(el);
    };

    const on = (type, el, listener, all = false) => {
      const selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      select("#navbar .scrollto", true).forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        const section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    const scrollto = (el) => {
      let offset = select("#header").offsetHeight;
      if (!select("#header").classList.contains("header-scrolled")) {
        offset -= 16;
      }
      const elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    const headerScrolled = () => {
      select("#header").classList.toggle(
        "header-scrolled",
        window.scrollY > 100
      );
    };
    const toggleBacktotop = () => {
      select(".back-to-top").classList.toggle("active", window.scrollY > 100);
    };

    on("load", window, () => {
      navbarlinksActive();
      headerScrolled();
      toggleBacktotop();
    });

    onscroll(document, () => {
      navbarlinksActive();
      headerScrolled();
      toggleBacktotop();
    });

    on("click", ".mobile-nav-toggle", function () {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();
          const navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            select(".mobile-nav-toggle").classList.toggle("bi-list");
            select(".mobile-nav-toggle").classList.toggle("bi-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );

    on("load", window, () => {
      const portfolioContainer = select(".portfolio-container");
      if (portfolioContainer) {
        const portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: ".portfolio-item",
          layoutMode: "fitRows",
        });

        const portfolioFilters = select("#portfolio-flters li", true);

        on(
          "click",
          "#portfolio-flters li",
          function (e) {
            e.preventDefault();
            portfolioFilters.forEach((el) =>
              el.classList.remove("filter-active")
            );
            this.classList.add("filter-active");
            portfolioIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
          },
          true
        );
      }
    });

    on("load", window, () => {
      if (window.location.hash && select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    });
  },
};
var pageCheck = {
  init: function () {
    const select = (el, all = false) => {
      if (typeof el !== "string" || el.trim() === "") {
        // Add a check to ensure that the selector is not empty
        return all ? [] : null;
      }

      el = el.trim();

      return all
        ? [...document.querySelectorAll(el)]
        : document.querySelector(el);
    };

    const on = (type, el, listener, all = false) => {
      const selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const innerPageCheck = () => {
      // Check if the class 'myClass' exists on any element in the document
      setTimeout(function () {
        // alert("load function");
        var elementsWithClass = document.querySelectorAll(".inner-page");

        if (elementsWithClass.length > 0) {
          select("#header").classList.add("header-inner-pages");
        } else {
          select("#header").classList.remove("header-inner-pages");
        }
      }, 100);
    };

    const smmooooth = () => {
      const locomotiveScroll = new LocomotiveScroll();
    };

    on(
      "click",
      ".nav-link",
      function (e) {
        innerPageCheck();
      },
      true
    );

    innerPageCheck();
  },
};

var imageParallax = {
  init: function () {
    if (document.getElementsByClassName("hero-container").length > 0) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray(".hero-container").forEach(function (container) {
        let image = container.querySelector("img");

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            pin: false,
          },
        });
        tl.from(image, {
          yPercent: -30,
          ease: "none",
        }).to(image, {
          yPercent: 30,
          ease: "none",
        });
      });
    }
  },
};

// Initialize on first load
init();

// Re-initialize after swapping pages
document.addEventListener("astro:after-swap", init);
