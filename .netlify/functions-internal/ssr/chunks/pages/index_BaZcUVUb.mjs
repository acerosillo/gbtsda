import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, u as unescapeHTML } from '../astro_DdhdtOdt.mjs';
import 'kleur/colors';
import { c as contentfulClient, $ as $$Layout } from './_slug__BjZZmh0H.mjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const slugify = (text) => {
    return text.toString().toLowerCase().trim().replace(/[\s\W-]+/g, "-");
  };
  const entries = await contentfulClient.getEntries({
    content_type: "tsdNews"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "news" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page"> <div class="container"> <!-- ======= Breadcrumbs ======= --> <section id="breadcrumbs" class="breadcrumbs"> <div class="container"> <ol> <li><a href="/">Home</a></li> <li>News</li> </ol> <h2>News</h2> </div> </section> <!-- End Breadcrumbs --> <!-- ======= Blog Section ======= --> <section id="blog" class="blog"> <div class="container" data-aos="fade-up"> <div class="row"> <div class="col-lg-10 entries"> ${entries.items.map((item) => {
    const slug = slugify(item.fields.newsTitle);
    return renderTemplate`<article class="entry"> <div class="entry-img"> ${item.fields.newsImage && item.fields.newsImage.length > 0 && renderTemplate`<img${addAttribute(`https:${item.fields.newsImage[0].fields.file.url}`, "src")}${addAttribute(item.fields.newsImage[0].fields.title || "News image", "alt")}>`} </div> <div class="entry-meta"> <ul> <li class="d-flex align-items-center"> <i class="bi bi-clock"></i> <a href="{\`/news/\${slug}\`}"><date>${new Date(item.fields.newsDate).toLocaleDateString()}</date></a> </li> </ul> </div> <h2 class="entry-title"> <a${addAttribute(`/news/${slug}`, "href")}> <h2>${item.fields.newsTitle}</h2> </a> </h2> <div class="entry-content"> <article>${unescapeHTML(documentToHtmlString(item.fields.newsArticle))}</article> <div class="read-more"> <a${addAttribute(`/news/${slug}`, "href")}>Read More</a> </div> </div> </article>`;
  })} <!-- End blog entry --> </div> <!-- End blog entries list --> <!-- End blog sidebar --> </div> </div> </section> <!-- End Blog Section --> <!-- ======= Cta Section ======= --> <section id="cta" class="cta"> <div class="container"> <div class="text-center"> <h3>Find your nearest club</h3> <p>
Gain self-discipline, self-confidence, physical fitness, stress
            management and the ultimate form of self-defense techniques.
</p> <a class="cta-btn" href="/clubs">Find a club</a> </div> </div> </section> <!-- End Cta Section --> </div></section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/news/index.astro", void 0);

const $$file$1 = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/news/index.astro";
const $$url$1 = "/news";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const masters = [
  {
    id: 2,
    name: "Master C Carter",
    rank: "7th Dan",
    region: "",
    title: "Treasurer of Great Britain Tang Soo Do",
    img: "assets/img/masters/2.jpg",
    pageUrl: "/carter",
    slug: "carter"
  },
  {
    id: 3,
    name: "Master T Butcher",
    rank: "6th Dan",
    region: "",
    title: "East Bristol, Bristol Area",
    img: "assets/img/masters/3.jpg",
    pageUrl: "/butcher",
    slug: "butcher"
  },
  {
    id: 4,
    name: "Master D Khan",
    rank: "6th Dan",
    region: "",
    title: "Secretary of Great Britain Tang Soo Do",
    img: "assets/img/masters/4.jpg",
    pageUrl: "/dkhan",
    slug: "dkhan"
  },
  {
    id: 5,
    name: "Master P Wiskin",
    rank: "6th Dan",
    region: "",
    title: "Judging Coordinator",
    img: "assets/img/masters/5.jpg",
    pageUrl: "/whiskin",
    slug: "whiskin"
  },
  {
    id: 6,
    name: "Master N Khan",
    rank: "5th Dan",
    region: "",
    title: "Nottingham & Competition Organiser",
    img: "assets/img/masters/6.jpg",
    pageUrl: "/nkhan",
    slug: "nkhan"
  },
  {
    id: 7,
    name: "Master M. Allen",
    rank: "5th Dan",
    region: "",
    title: "Cambridge & General Secretary",
    img: "assets/img/masters/8.jpg",
    pageUrl: "/mallen",
    slug: "mallen"
  },
  {
    id: 8,
    name: "Master M. Silk",
    rank: "5th Dan",
    region: "",
    title: "Northern & Chairman of GB Testing Comittee",
    img: "assets/img/masters/9.jpg",
    pageUrl: "/msilk",
    slug: "msilk"
  },
  {
    id: 9,
    name: "Master B. Harper",
    rank: "5th Dan",
    region: "",
    title: "Comberton TSD, Cambs",
    img: "assets/img/masters/10.jpg",
    pageUrl: "/bharper",
    slug: "bharper"
  },
  {
    id: 10,
    name: "Master L. Hartt",
    rank: "5th Dan",
    region: "Essex",
    title: "",
    img: "assets/img/masters/11.jpg",
    pageUrl: "/hartt",
    slug: "hartt"
  },
  {
    id: 11,
    name: "Master L. Allen",
    rank: "5th Dan",
    region: "",
    title: "",
    img: "assets/img/masters/12.jpg",
    pageUrl: "/lallen",
    slug: "lallen"
  },
  {
    id: 12,
    name: "Master R. Tyler",
    rank: "5th Dan",
    region: "Market Deeping",
    title: "",
    img: "assets/img/masters/13.jpg",
    pageUrl: "/rtyler",
    slug: "rtyler"
  },
  {
    id: 13,
    name: "Master R. Woodford",
    rank: "5th Dan",
    region: "Horfield",
    title: "",
    img: "assets/img/masters/16.jpg",
    pageUrl: "/rwoodford",
    slug: "rwoodford"
  },
  {
    id: 14,
    name: "Master A. Robertson",
    rank: "4th Dan",
    region: "Hertfordshire",
    title: "",
    img: "assets/img/masters/18.jpg",
    pageUrl: "/arobertson",
    slug: "arobertson"
  }
];

const $$Astro$1 = createAstro();
const $$Masters = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Masters;
  return renderTemplate`${maybeRenderHead()}<section id="masters" class="team"> <div class="container"> <div class="section-title"> <h2>GB Masters</h2> <h3>Our Great Britain <span>Masters</span></h3> <p>
Meet our active Masters of Great Britain Tang Soo Do
</p> </div> <div class="row"> ${masters.map((mastersItem) => renderTemplate`<div class="col-6 col-lg-2 col-md-4 col-sm-4 align-items-stretch"> <div class="member"> <div class="member-img"> <img${addAttribute(mastersItem.img, "src")} class="img-fluid" alt=""> </div> <div class="member-info"> <h4>${mastersItem.name}</h4> <span>${mastersItem.region ? mastersItem.region : ""}</span> <span>${mastersItem.title ? mastersItem.title : renderTemplate`<br>`}</span> </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/components/Masters.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "homepage" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="hero"> <div class="hero-container"> <h1>Great Britain <br>Tang Soo Do</h1> <small class="d-block d-md-none text-white"><i>World Tang Soo Do is a traditional Korean martial art focused on discipline, self-defense, and personal growth, blending ancient techniques with modern practice.</i></small> </div> <video width="100%" height="100%" autoplay="autoplay" loop="loop" muted playsinline oncontextmenu="return false;" preload="auto"> <source src="https://worldtangsoodo.com/wp-content/uploads/2019/12/WTSD_Seq1_v04_compressed.mp4" type="video/mp4"> </video> </section>  <section id="services" class="services"> <div class="container"> <div class="section-title"> <h2>Services</h2> <h3>Our <span>Seven Tenets</span></h3> <p>
Tang Soo Do is one of the oldest martial art systems and as part
              of the World Tang Soo Do Association we have 7 aims:
</p> </div> <div class="row"> <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-1 mb-lg-0"> <div class="icon-box"> <div class="icon"><i class="bx bx-shield-minus"></i></div> <h4 class="title">1. Integrity</h4> <p class="description">
Honoring your principles, showing respect, and always training with honesty and discipline.
</p> </div> </div> <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-1 mb-lg-0"> <div class="icon-box"> <div class="icon"><i class="bx bx-health"></i></div> <h4 class="title">2. Concentration</h4> <p class="description">
Focused attention and mental clarity that drives precision and success
</p> </div> </div> <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-1 mb-lg-0"> <div class="icon-box"> <div class="icon"><i class="bx bx-medal"></i></div> <h4 class="title">3. Perseverance</h4> <p class="description">
Unwavering commitment to push through challenges and keep striving toward your goals
</p> </div> </div> <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-1 mb-lg-0"> <div class="icon-box"> <div class="icon"><i class="bx bx-body"></i></div> <h4 class="title">4. Respect and Obedience</h4> <p class="description">
The foundations of discipline, showing honor to others and following guidance with humility.
</p> </div> </div> <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-1 mb-lg-0"> <div class="icon-box"> <div class="icon"><i class="bx bx-group"></i></div> <h4 class="title">5. Self Control</h4> <p class="description">
Mastering your emotions and actions, maintaining discipline even in the face of challenges.
</p> </div> </div> <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-1 mb-lg-0"> <div class="icon-box"> <div class="icon"><i class="bx bx-happy"></i></div> <h4 class="title">6. Humility</h4> <p class="description">
Recognising your strengths and weaknesses, staying grounded, and valuing the growth of others as much as your own.
</p> </div> </div> <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-1 mb-lg-0"> <div class="icon-box"> <div class="icon"><i class="bx bx-like"></i></div> <h4 class="title">7. Indomitable Spirit</h4> <p class="description">
Unwavering determination to overcome obstacles and challenges, embodying resilience and unyielding courage.
</p> </div> </div> </div> </div> </section> <section id="cta" class="cta"> <div class="container"> <div class="text-center"> <h3>Find your nearest club</h3> <p>
Gain self-discipline, self-confidence, physical fitness, stress
              management and the ultimate form of self-defense techniques.
</p> <a class="cta-btn" href="/clubs">Find a club</a> </div> </div> </section>  <section id="history" class="about"> <div class="container"> <div class="section-title"> <h2>History</h2> <h3>History of <span>Tang Soo Do</span></h3> </div> <div class="row content"> <div class="col-lg-4"> <img src="assets/img/shin-monks.webp" class="img-fluid" alt=""> <small>Chief Monk Hang Jung welcomes Grandmaster Shin, Shaolin Temple,
                China 1984</small> </div> <div class="col-lg-4"> <p>
In 1968 Master Jae Chul Shin came to the United States of
                America as the U.S. representative for the Korean Soo Bahk Do
                Association. He formed the United States Tang Soo Do Federation
                in Burlington, New Jersey. The organization expanded to all
                parts of America and foreign countries. This traditional and
                classical art was quickly accepted and soon grew in popularity
                throughout America and the world. After 14 years of Tang Soo Do
                promotion in the U.S.A. and the world, the organisation was
                re-organised to fit new demands internationally and
                domestically. On November 13th 1982, a charter convention for
                the World Tang Soo Do Association was held in Philadelphia,
                Pennsylvania. At the charter convention a new constitution was
                passed, a new logo and insignia were selected, the uniform and
                belt system were revised, and new organizational standards were
                adopted. Most importantly, Master Jae C. Shin was recognised as
                Grandmaster of the World Tang Soo Do Association. With the
                proclamation of three mottos, Traditionalism, Professionalism
                and Brotherhood, the advent of the World Tang Soo Do Association
                evoked the interest of many international martial artists, whose
                genuine interest was in the Art, and was not sports oriented.
</p> </div> <div class="col-lg-4"> <img src="assets/img/shin-chuck.webp" class="img-fluid" alt=""> <small>Chuck Norris greets Grandmaster Shin, his first instructor,
                Hollywood, CA 1985</small> <h5 class="red">Seven <span>Tenets</span></h5> <ul> <li><i class="bx bx-chevron-right"></i> Integrity</li> <li><i class="bx bx-chevron-right"></i> Concentration</li> <li><i class="bx bx-chevron-right"></i> Perseverance</li> <li> <i class="bx bx-chevron-right"></i> Respect and Obedience
</li> <li><i class="bx bx-chevron-right"></i> Self Control</li> <li><i class="bx bx-chevron-right"></i> Humility</li> <li><i class="bx bx-chevron-right"></i> Indomitable Spirit</li> </ul> </div> </div> <div class="row content"> <div class="col-lg-4"> <img src="assets/img/shin-2.webp" class="img-fluid" alt=""> <small>Grandmaster Shin at the Shaolin Monastery, 1984</small> </div> <div class="col-lg-4"> <p>
In the past three decades, the Association has expanded from 17
                member studios to 400 plus, from 164 charter members to over
                150,000 members. As of 2010, the following global locations are
                training under the banner of the World Tang Soo Do Association;
                Argentina, Australia, Belgium, Brazil, Bolivia, Bulgaria,
                Canada, China, Chile, Columbia, Costa Rica, Czechoslovakia,
                England, Germany, Greece, Guam, Holland, India, Italy, Korea,
                Mozambique, Mexico, Pakistan, Peru, Philippines, Poland, Puerto
                Rico, Rumania, Russia, Seychelles, South Africa, Saudi Arabia,
                Sweden, Uruguay and the U.S.A. For the purpose of guidance and
                regional management, there are 21 region which make up the World
                Tang So Do Association. The martial art of Tang Soo Do is
                relatively modern, but it's roots lie in the ancient Korean art
                of Soo Bahk Do, which can be traced back many centuries. Tang
                Soo Do is a style composed from three major areas and styles,
                which are Soo Bahk Do (60%), Northern China Kung Fu (30%) and
                Southern China Kung Fu (10%) Literally translated, the word TANG
                means T'ang Dynasty of China which reflects the shared cultural
                background between China and Korea. SOO means hand, but it
                implies fist, punch, strike or defence. DO means way of life or
                art. Thus TANG SOO DO means the korean classical martial art
                which was influenced by the T'ang method of martial art. The
                final translation can be put together as the rather poetical -
                WAY OF THE CHINA HAND
</p> </div> <div class="col-lg-4 pt-4 pt-lg-0"> <img src="assets/img/shin-kick.webp" class="img-fluid" alt=""> <small>Grandmaster Shin's flying side kick, 1958</small> <h5 class="red">Five <span>Codes</span></h5> <ul> <li><i class="bx bx-chevron-right"></i> Loyalty to country</li> <li> <i class="bx bx-chevron-right"></i> Obedience to parents
</li> <li><i class="bx bx-chevron-right"></i> Honor friendship</li> <li> <i class="bx bx-chevron-right"></i> No retreat in battle
</li> <li> <i class="bx bx-chevron-right"></i> In fighting choose with
                  sense and honor
</li> </ul> </div> </div> </div> <div class="container"></div> </section>  <section id="grandmasters" class="team"> <div class="container"> <div class="section-title"> <h2>Grandmasters</h2> <h3>Our <span>Grandmasters</span></h3> </div> <div class="row content"> <div class="col-lg-4"> <h3></h3> <img src="assets/img/shin.webp" class="img-fluid" alt=""> <small>Kwan Chang Nim Jae Chul Shin, Founder</small> </div> <div class="col-lg-4">
Grandmaster Jae C. Shin, the founder of the World Tang Soo Do
              Association, was one of the leading figures of martial arts in the
              world today. Sadly Grandmaster Shin passed away on Monday 9th July
              2012. He has left us a legacy, his dream, the World Tang Soo Do
              Association which we now have to nurture, promote and continue to
              build. He was born in Korea in 1936, and began his long and
              distinguished career in martial arts at the age of twelve. During
              his childhood, an unknown monk initially inspired in him a strong
              desire to learn martial arts. Later, he joined Seoul Moo Duk Kwan
              central gym and began serious study under Grandmaster Hwang Kee, a
              founder of the Korean Moo Duk Kwan system. By the time he was 1st
              Dan, he had already started his teaching career as an assistant
              instructor at the central gym. After that, he taught at Korean
              University, Seoul Central YMCA, various colleges, and many police
              and military institutions. His many years of teaching experience
              and his extreme dedication have added to his scientific and unique
              methods of teaching Tang Soo Do. His six fields of expertise
              include self-defence, forms, breaking, weapons, health care, and
              meditation. He has evolved these separate arts into one of the
              finest and most effective martial arts; The World Tang Soo Do
              system. When he was recruited to the Korean Air Force in 1958, he
              had his first experience teaching American soldiers. After
              receiving his Master's degree in Political Science at Korea
              University, he came to the United States in order to extend his
              instruction of foreign students in 1968.
</div> <div class="col-lg-4"> <p>
The year he came to the United States of America, Black Belt
                Magazine honoured him for all time by devoting a full chapter to
                him in the book, "20th Century Warriors," putting him in the
                company of the most legendary martial arts figures ever.
                Grandmaster Shin, one of the most respected and well known
                masters in this century, is one of the few masters who has
                devoted his entire life to the traditional martial arts. In
                addition to insisting on disciplined, rigorous training and
                exacting techniques, he has always preached that the true value
                of martial arts training is in the application to everyday life.
                Teaching children is one of his favourite pastimes and he has
                become an expert in child development. His advice to his Black
                Belt instructors is good advice for teachers of all kinds, "When
                examining your abilities as an instructor, examine your young
                student's manners, attitudes, school reports and health
                conditions. Their improvements should mirror your own." He
                raised three Mottoes for his leadership of nearly 8,000 black
                belt members: TRADITIONALISM, PROFESSIONALISM AND BROTHERHOOD
                and he brings these qualities with him wherever he travels and
                teaches. Grandmaster Shin is respected as a true leader, teacher
                and master of masters. On July 17th 2010 Grandmaster Shin
                received his ninth Dan, following a proclamation containing
                100,000 signatures of W.T.S.D.A. members. This took place at a
                very moving ceremony during the 2010 World Championships, which
                some of us were fortunate enough to attend. Not only did
                Grandmaster become ninth Dan but Master Beaudoin was also
                presented with his eight Dan at the same ceremony.
</p> </div> </div> <div class="row content"> <div class="col-lg-4"> <h3></h3> <img src="assets/img/gmaster/bob.webp" class="img-fluid" alt=""> <small>Kwan Chang Nim Robert E Beaudoin, Presidennt</small> </div> <div class="col-lg-4">
Grandmaster Robert E. Beaudoin started his study of the Martial
              Arts in 1960-61 while in the U.S. Air Force studying Chinese at
              Yale University. He earned his Black Belt under Master Jae Chul
              Shin while in Korea in 1962-63. Dr. Beaudoin taught thousands of
              students in the Waterbury area for more than thirty-five years and
              promoted over three hundred Black Belts and ten Masters. His
              students have been from all professions and walks of life, and
              from four to seventy years old. Grandmaster Beaudoin taught many
              of his own classes including Tiny Tigers, Little Dragons, Advanced
              Children and Cho Dan Bos, as well as the Black Belt Excellence
              class. He also conducted the Masters Forum and special clinics...
</div> <div class="col-lg-4"> <p>
On July 17th 2010, following a proclamation signed by over
                100,000 members of the World Tang Soo Do Association, and after
                28 years as head of our association, Grandmaster Shin accepted
                the honour of ninth Dan at a special ceremony held at the World
                Championships in Greensboro North Carolina. Making way for
                Master Beaudoin to be promoted to 8th Dan Grandmaster. On July
                9, 2012, Grandmaster Beaudoin assumed the role of Grandmaster
                and Interim President of the World Tang Soo Do Association after
                the passing of our founder Grandmaster J C Shin. He presided
                over the opening of our own headquarters, fulfilling Grandmaster
                J C Shin's dream. He continued in this role with great
                dedication until his sudden passing in early 2020. He was due to
                be promoted to 9th Dan Grandmaster at a ceremony later that year
                at the World Championships but received the honour posthumously
                with the iconic black and red belt being presented to his
                family. Grandmaster Strong took over as the lead of the
                association at that time.
</p> </div> </div> <div class="row content"> <div class="col-lg-4"> <h3></h3> <img src="assets/img/gmaster/strong.webp" class="img-fluid" alt=""> <small>Kwan Chang Nim William "Bill" Strong, President</small> </div> <div class="col-lg-4">
Grandmaster Strong began his martial arts training in Tae Kwon Do
              through the Jhoon Rhee Institute in Austin, Texas when he was an
              undergraduate student at the University of Texas. He received his
              1st Dan from the Alabama Karate Institute in 1974 and his 2nd Dan
              from the Kuk Ki Won in 1977, both in Tae Kwon Do. He achieved his
              3rd and 4th Dan from the Korean Tang Soo Do Association, Moo Duk
              Kwan, Hwang Kee, President in 1981 and 1983 respectively. In 1986,
              he joined the World Tang Soo Do Association and achieved 5th
              through 7th Dan promotions from Grandmaster Jae C. Shin and 8th
              Dan from Grandmaster Robert Beaudoin in 2014. On October 10, 2021
              Grandmaster Strong was promoted to 9th Dan.
</div> <div class="col-lg-4"> <p>
On April 1, 2017 at the 28th Annual Masters’ Clinic, the Board
                of Directors voted to approve Grandmaster William Strong as the
                President of the World Tang Soo Do Association. He began the
                presidency on May 15, 2017. In this position, he is responsible
                for numerous administrative duties for the Association and the
                WTSDA Foundation including general headquarters office policy,
                studio/club approval, coordination of travel for the two
                Grandmasters, Dan promotions, financial reporting, legal issues,
                Board meetings, and World Championships. He is also responsible
                for diplomatic issues, organizing publications, and sanctioning
                WTSDA events. Grandmaster Strong served as the chair of the
                Membership committee 1987-1990, Technical Advisory Coordinator
                1990-1995, chair of the Technical Advisory committee 1995-2014,
                and Director of Masters’ Clinics 1991-2014. He is also Secretary
                General of the WTSDA and member of the Board of Directors,
                Executive Committee, Governance Committee, and Publications
                Committee. He was promoted to 8th Dan Grandmaster at the 2014
                World Championships. Grandmaster Strong received his Ph.D. in
                Geography from the University of Texas at Austin. He served as
                professor and chair of the Department of Geography at the
                University of North Alabama for 42 years, interim vice-president
                for Academic Affairs for one year, and worked at the National
                Geographic Society as Geographer-in-Residence for two years. He
                retired from the University of North Alabama in 2012. Since then
                he has worked closely with Grandmaster Robert Beaudoin to give
                greater support to the promotion and enhancement of the World
                Tang Soo Do Association and its membership.
</p> </div> </div> <div class="row content"> <div class="col-lg-4"> <h3></h3> <img src="assets/img/grandmaster-khan.webp" class="img-fluid" alt=""> <small>Boo Kwan Chang Nim M Khan, Grandmaster</small> </div> <div class="col-lg-4">
Boo Kwan Chang Nim Mujahid Khan is currently recognised as a 8th Dan (Pal dan 팔단) Instructor in the World Tang Soo Do Association. He has been training in the Martial Arts for over 50+ years and has received many awards, including Instructor of the year 1987 and many other commendations and appreciation awards from the Association

              Master Khan is the regional director for region #11, which encompasses Western Europe. He is married with three children. The whole family practises Tang Soo Do. His wife Dawn is a Oh Dan Master, daughter Noreen is also an Oh Dan Master, daughter Aisha is a Sah dan Master, and the newest recruit, youngest daughter Safiya is an E dan.
              
              "I teach every class myself, from basic warm-ups to the end of class", says Master Khan. "I feel that students pay for my instruction and they should receive it".
              
              Some of Master Khans favourite quotes are :
              
              "Nothing is too difficult for a sound mind"
              
              "Tang Soo Do IS NOT a destination, it is journey"
              
              My name is Mujahid Khan and I was born in Kashmir, Pakistan. I came to live in England in October 1970 when my parents emigrated here. My current rank is Pal Dan. I received my Master's belt in July 1989 in Holland at the European Championship that year. I was honoured to be presented my Master rank in front of all the European members. It was a privilege to have it presented to me by Grandmaster Shin. The feeling was indescribable, as I was the first European Master in WTSD at the time. It was a dream that I never thought would become reality!
              
              I am the currently the European Director for Region #11 which covers all of Western Europe. I am also the Chief Instructor for Great Britain TSD. I run my own studios in Alconbury (An American Air Force Base) Huntingdon and St.Ives. All my studios are in the Cambridgeshire area. I am married with 3 daughters. My wife Dawn is an Oh Dan Master, my eldest daughter Noreen is also an Oh Dan Master, Aisha is now a Sah Dan Master and our youngest, Safiya is an E Dan. We go as a family to teach and train EVERYDAY! Dawn, Aisha and Safiya assist me regularly in teaching my classes as well as practicing TSD for themselves.
</div> <div class="col-lg-4"> <p>I started TSD in early 1974 in a village called Buckden in Cambridgeshire. A friend of mine whom I worked with was practicing TSD and introduced me to it. My first instructor was an American serviceman by the name of Stephen Coleman. He was a 2nd Dan in TSD. I remember him well. He is a very big man with OUTSTANDING Martial Arts ability.
</p> <p>I hold various different fund-raising events mainly in aid of the World Headquarters Building Fund. The most unique one I have held is an auction to raise money for the Headquarters Fund. I auctioned my personal belongings, some that were VERY sentimental, like my 5th Dan Master's Sword that I received during my promotion ceremony. I have also auctioned my Master's belt and some other special items. One which I'll never forget is the dobohk I wore in the making of Kwan Chang Nim's Volume 3 Book-DAE RYUN. We raised over $7000.00 at this one AUCTION!!
</p> <p>
Lastly I would like to share a few of my personal beliefs. They are that the success to Martial Arts is to persevere and not to look back. Remember too that you only get out of your training what you PUT INTO IT!! Success comes through a positive mind. Always try to be positive in whatever you may do and you will one day achieve your goals.
</p> </div> </div> </div> </section> ${renderComponent($$result2, "Masters", $$Masters, {})} ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/index.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
