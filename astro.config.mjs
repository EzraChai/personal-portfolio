import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
    site: "https://ezrachai.pages.dev",
    experimental: {
        integrations: true,
    },
    integrations: [react(), tailwind(), sitemap(), compress(), robotsTxt()],
});
