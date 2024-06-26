import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BSiTW4v7.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9HCc-z0.js"}],"styles":[{"type":"external","src":"/_astro/clubs.D0SgX5B-.css"}],"routeData":{"route":"/clubs","isIndex":false,"type":"page","pattern":"^\\/clubs\\/?$","segments":[[{"content":"clubs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/clubs.astro","pathname":"/clubs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9HCc-z0.js"}],"styles":[{"type":"external","src":"/_astro/clubs.D0SgX5B-.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9HCc-z0.js"}],"styles":[{"type":"external","src":"/_astro/clubs.D0SgX5B-.css"}],"routeData":{"route":"/news","isIndex":false,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D9HCc-z0.js"}],"styles":[{"type":"external","src":"/_astro/clubs.D0SgX5B-.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/acerosillo/Documents/acerosillo/tsd.com/src/pages/clubs.astro",{"propagation":"none","containsHead":true}],["/Users/acerosillo/Documents/acerosillo/tsd.com/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["/Users/acerosillo/Documents/acerosillo/tsd.com/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/acerosillo/Documents/acerosillo/tsd.com/src/pages/news.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/gallery.astro":"chunks/pages/gallery_BBEeXYwW.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_MM-2ybkR.mjs","/src/pages/index.astro":"chunks/pages/index_CmVtXFJ3.mjs","/src/pages/news.astro":"chunks/pages/news_pN6rAjnZ.mjs","\u0000@astrojs-manifest":"manifest_DkqzTrY9.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DmXYXebh.mjs","\u0000@astro-page:src/pages/clubs@_@astro":"chunks/clubs_B2mf2UgP.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"chunks/gallery_BrNkKPKP.mjs","\u0000@astro-page:src/pages/news@_@astro":"chunks/news_BW9AE0LF.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_28TNqwJw.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D9HCc-z0.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/clubs.D0SgX5B-.css","/favicon-16x16.png","/favicon-32x32.png","/favicon.svg","/_astro/hoisted.D9HCc-z0.js","/img/apple-touch-icon.png","/img/bg.png","/img/cta-bg.jpg","/img/favicon-16x16.png","/img/favicon-32x32.png","/img/favicon.png","/img/header-1.jpg","/img/header-2.jpg","/img/hero-bg.jpg","/img/shin-2.png","/img/shin-chuck.png","/img/shin-kick.png","/img/shin-monks.png","/img/shin.png","/products/faith-yarn-Wr0TpKqf26s-unsplash.webp","/products/haryo-setyadi-acn5ERAeSb4-unsplash.webp","/products/ryan-hoffman-6Nub980bI3I-unsplash.webp","/products/ryan-hoffman-A7f7XRKgUWc-unsplash.webp","/assets/css/style.css","/assets/img/apple-touch-icon.png","/assets/img/bg.png","/assets/img/cta-bg.jpg","/assets/img/favicon-16x16.png","/assets/img/favicon-32x32.png","/assets/img/favicon.png","/assets/img/header-1.jpg","/assets/img/header-2.jpg","/assets/img/hero-bg.jpg","/assets/img/shin-2.png","/assets/img/shin-chuck.png","/assets/img/shin-kick.png","/assets/img/shin-monks.png","/assets/img/shin.png","/assets/js/locomotive-scroll.min.js","/assets/js/main.js","/assets/scss/Readme.txt","/img/blog/blog-1.jpg","/img/blog/blog-2.jpg","/img/blog/blog-3.jpg","/img/blog/blog-4.jpg","/img/blog/blog-author.jpg","/img/blog/blog-inside-post.jpg","/img/blog/blog-recent-1.jpg","/img/blog/blog-recent-2.jpg","/img/blog/blog-recent-3.jpg","/img/blog/blog-recent-4.jpg","/img/blog/blog-recent-5.jpg","/img/blog/comments-1.jpg","/img/blog/comments-2.jpg","/img/blog/comments-3.jpg","/img/blog/comments-4.jpg","/img/blog/comments-5.jpg","/img/blog/comments-6.jpg","/img/gmaster/bob.png","/img/gmaster/grandmaster-beaudoin.jpg","/img/gmaster/grandmaster-khan.jpg","/img/gmaster/grandmaster-shin.jpg","/img/gmaster/grandmaster-strong.jpg","/img/gmaster/shin.png","/img/gmaster/strong.jpg","/img/masters/1.jpg","/img/masters/10.jpg","/img/masters/11.jpg","/img/masters/12.jpg","/img/masters/13.jpg","/img/masters/14.jpg","/img/masters/15.jpg","/img/masters/16.jpg","/img/masters/17.jpg","/img/masters/18.jpg","/img/masters/19.jpg","/img/masters/2.jpg","/img/masters/20.jpg","/img/masters/21.jpg","/img/masters/22.jpg","/img/masters/23.jpg","/img/masters/24.jpg","/img/masters/25.jpg","/img/masters/26.jpg","/img/masters/27.jpg","/img/masters/28.jpg","/img/masters/29.jpg","/img/masters/3.jpg","/img/masters/30.jpg","/img/masters/31.jpg","/img/masters/32.jpg","/img/masters/33.jpg","/img/masters/34.jpg","/img/masters/35.jpg","/img/masters/36.jpg","/img/masters/37.jpg","/img/masters/38.jpg","/img/masters/39.jpg","/img/masters/4.jpg","/img/masters/40.jpg","/img/masters/41.jpg","/img/masters/42.jpg","/img/masters/43.jpg","/img/masters/5.jpg","/img/masters/6.jpg","/img/masters/7.jpg","/img/masters/8.jpg","/img/masters/9.jpg","/img/portfolio/portfolio-1.jpg","/img/portfolio/portfolio-2.jpg","/img/portfolio/portfolio-3.jpg","/img/portfolio/portfolio-4.jpg","/img/portfolio/portfolio-5.jpg","/img/portfolio/portfolio-6.jpg","/img/portfolio/portfolio-7.jpg","/img/portfolio/portfolio-8.jpg","/img/portfolio/portfolio-9.jpg","/img/portfolio/portfolio-details-1.jpg","/img/portfolio/portfolio-details-2.jpg","/img/portfolio/portfolio-details-3.jpg","/img/team/team-1.jpg","/img/team/team-2.jpg","/img/team/team-3.jpg","/img/team/team-4.jpg","/assets/img/blog/blog-1.jpg","/assets/img/blog/blog-2.jpg","/assets/img/blog/blog-3.jpg","/assets/img/blog/blog-4.jpg","/assets/img/blog/blog-author.jpg","/assets/img/blog/blog-inside-post.jpg","/assets/img/blog/blog-recent-1.jpg","/assets/img/blog/blog-recent-2.jpg","/assets/img/blog/blog-recent-3.jpg","/assets/img/blog/blog-recent-4.jpg","/assets/img/blog/blog-recent-5.jpg","/assets/img/blog/comments-1.jpg","/assets/img/blog/comments-2.jpg","/assets/img/blog/comments-3.jpg","/assets/img/blog/comments-4.jpg","/assets/img/blog/comments-5.jpg","/assets/img/blog/comments-6.jpg","/assets/img/gmaster/bob.png","/assets/img/gmaster/grandmaster-beaudoin.jpg","/assets/img/gmaster/grandmaster-khan.jpg","/assets/img/gmaster/grandmaster-shin.jpg","/assets/img/gmaster/grandmaster-strong.jpg","/assets/img/gmaster/shin.png","/assets/img/gmaster/strong.jpg","/assets/img/masters/1.jpg","/assets/img/masters/10.jpg","/assets/img/masters/11.jpg","/assets/img/masters/12.jpg","/assets/img/masters/13.jpg","/assets/img/masters/14.jpg","/assets/img/masters/15.jpg","/assets/img/masters/16.jpg","/assets/img/masters/17.jpg","/assets/img/masters/18.jpg","/assets/img/masters/19.jpg","/assets/img/masters/2.jpg","/assets/img/masters/20.jpg","/assets/img/masters/21.jpg","/assets/img/masters/22.jpg","/assets/img/masters/23.jpg","/assets/img/masters/24.jpg","/assets/img/masters/25.jpg","/assets/img/masters/26.jpg","/assets/img/masters/27.jpg","/assets/img/masters/28.jpg","/assets/img/masters/29.jpg","/assets/img/masters/3.jpg","/assets/img/masters/30.jpg","/assets/img/masters/31.jpg","/assets/img/masters/32.jpg","/assets/img/masters/33.jpg","/assets/img/masters/34.jpg","/assets/img/masters/35.jpg","/assets/img/masters/36.jpg","/assets/img/masters/37.jpg","/assets/img/masters/38.jpg","/assets/img/masters/39.jpg","/assets/img/masters/4.jpg","/assets/img/masters/40.jpg","/assets/img/masters/41.jpg","/assets/img/masters/42.jpg","/assets/img/masters/43.jpg","/assets/img/masters/5.jpg","/assets/img/masters/6.jpg","/assets/img/masters/7.jpg","/assets/img/masters/8.jpg","/assets/img/masters/9.jpg","/assets/img/portfolio/portfolio-1.jpg","/assets/img/portfolio/portfolio-2.jpg","/assets/img/portfolio/portfolio-3.jpg","/assets/img/portfolio/portfolio-4.jpg","/assets/img/portfolio/portfolio-5.jpg","/assets/img/portfolio/portfolio-6.jpg","/assets/img/portfolio/portfolio-7.jpg","/assets/img/portfolio/portfolio-8.jpg","/assets/img/portfolio/portfolio-9.jpg","/assets/img/portfolio/portfolio-details-1.jpg","/assets/img/portfolio/portfolio-details-2.jpg","/assets/img/portfolio/portfolio-details-3.jpg","/assets/img/team/team-1.jpg","/assets/img/team/team-2.jpg","/assets/img/team/team-3.jpg","/assets/img/team/team-4.jpg","/assets/vendor/bootstrap-icons/bootstrap-icons.css","/assets/vendor/bootstrap-icons/bootstrap-icons.json","/assets/vendor/bootstrap-icons/index.html","/assets/vendor/isotope-layout/isotope.pkgd.js","/assets/vendor/isotope-layout/isotope.pkgd.min.js","/assets/vendor/php-email-form/validate.js","/assets/vendor/remixicon/remixicon.css","/assets/vendor/remixicon/remixicon.eot","/assets/vendor/remixicon/remixicon.less","/assets/vendor/remixicon/remixicon.svg","/assets/vendor/remixicon/remixicon.symbol.svg","/assets/vendor/remixicon/remixicon.ttf","/assets/vendor/remixicon/remixicon.woff","/assets/vendor/remixicon/remixicon.woff2","/assets/vendor/swiper/swiper-bundle.min.css","/assets/vendor/swiper/swiper-bundle.min.js","/assets/vendor/swiper/swiper-bundle.min.js.map","/assets/vendor/bootstrap/js/bootstrap.bundle.js","/assets/vendor/bootstrap/js/bootstrap.bundle.js.map","/assets/vendor/bootstrap/js/bootstrap.bundle.min.js","/assets/vendor/bootstrap/js/bootstrap.bundle.min.js.map","/assets/vendor/bootstrap/js/bootstrap.esm.js","/assets/vendor/bootstrap/js/bootstrap.esm.js.map","/assets/vendor/bootstrap/js/bootstrap.esm.min.js","/assets/vendor/bootstrap/js/bootstrap.esm.min.js.map","/assets/vendor/bootstrap/js/bootstrap.js","/assets/vendor/bootstrap/js/bootstrap.js.map","/assets/vendor/bootstrap/js/bootstrap.min.js","/assets/vendor/bootstrap/js/bootstrap.min.js.map","/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff","/assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2","/assets/vendor/bootstrap/css/bootstrap-grid.css","/assets/vendor/bootstrap/css/bootstrap-grid.css.map","/assets/vendor/bootstrap/css/bootstrap-grid.min.css","/assets/vendor/bootstrap/css/bootstrap-grid.min.css.map","/assets/vendor/bootstrap/css/bootstrap-grid.rtl.css","/assets/vendor/bootstrap/css/bootstrap-grid.rtl.css.map","/assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css","/assets/vendor/bootstrap/css/bootstrap-grid.rtl.min.css.map","/assets/vendor/bootstrap/css/bootstrap-reboot.css","/assets/vendor/bootstrap/css/bootstrap-reboot.css.map","/assets/vendor/bootstrap/css/bootstrap-reboot.min.css","/assets/vendor/bootstrap/css/bootstrap-reboot.min.css.map","/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css","/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.css.map","/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css","/assets/vendor/bootstrap/css/bootstrap-reboot.rtl.min.css.map","/assets/vendor/bootstrap/css/bootstrap-utilities.css","/assets/vendor/bootstrap/css/bootstrap-utilities.css.map","/assets/vendor/bootstrap/css/bootstrap-utilities.min.css","/assets/vendor/bootstrap/css/bootstrap-utilities.min.css.map","/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css","/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.css.map","/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css","/assets/vendor/bootstrap/css/bootstrap-utilities.rtl.min.css.map","/assets/vendor/bootstrap/css/bootstrap.css","/assets/vendor/bootstrap/css/bootstrap.css.map","/assets/vendor/bootstrap/css/bootstrap.min.css","/assets/vendor/bootstrap/css/bootstrap.min.css.map","/assets/vendor/bootstrap/css/bootstrap.rtl.css","/assets/vendor/bootstrap/css/bootstrap.rtl.css.map","/assets/vendor/bootstrap/css/bootstrap.rtl.min.css","/assets/vendor/bootstrap/css/bootstrap.rtl.min.css.map","/assets/vendor/boxicons/css/animations.css","/assets/vendor/boxicons/css/boxicons.css","/assets/vendor/boxicons/css/boxicons.min.css","/assets/vendor/boxicons/css/transformations.css","/assets/vendor/boxicons/fonts/boxicons.eot","/assets/vendor/boxicons/fonts/boxicons.svg","/assets/vendor/boxicons/fonts/boxicons.ttf","/assets/vendor/boxicons/fonts/boxicons.woff","/assets/vendor/boxicons/fonts/boxicons.woff2","/assets/vendor/glightbox/css/glightbox.css","/assets/vendor/glightbox/css/glightbox.min.css","/assets/vendor/glightbox/css/plyr.css","/assets/vendor/glightbox/css/plyr.min.css","/assets/vendor/glightbox/js/glightbox.js","/assets/vendor/glightbox/js/glightbox.min.js"],"buildFormat":"directory"});

export { manifest };
