import db from "@astrojs/db";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
//import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
    cacheOnDemandPages: true,
  }),
});
