(() => {
  "use strict";

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
    select("#header").classList.toggle("header-scrolled", window.scrollY > 100);
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

  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  on("load", window, () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });
})();
