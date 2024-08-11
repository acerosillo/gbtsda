import db from "@astrojs/db";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
//import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  //integrations: [db(), react()],
  integrations: [react()],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
    cacheOnDemandPages: true,
  }),
});
