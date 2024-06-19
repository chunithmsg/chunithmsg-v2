import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://chunithm.sg",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown(),
    vue(),
  ],
});
