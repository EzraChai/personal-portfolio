import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image()],
  site: 'https://ezrachai.github.io',
  base: "/"
});