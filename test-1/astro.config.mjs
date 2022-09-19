import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), solidJs(), svelte()],
  /*output: 'server',
  adapter: vercel()*/
});
