import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://chunithm.sg",
  integrations: [alpinejs(), sitemap(), tailwind(), partytown()],
});
