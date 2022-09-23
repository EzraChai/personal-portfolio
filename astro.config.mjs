import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    site: "https://ezrachai.pages.dev",
    experimental: {
        integrations: true,
    },
    integrations: [
        react(),
        tailwind(),
        sitemap(),
        compress(),
        robotsTxt(),
        image(),
    ],
});
