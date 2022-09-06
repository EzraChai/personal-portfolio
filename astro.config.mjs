import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: deno()
});