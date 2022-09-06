import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://ezrachai.github.io',
  output: "server",
  adapter: netlify()
});