// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://luciencd.github.io/personal-website/',
	base: '/',
	integrations: [mdx(), sitemap()],
    outDir: '.'
});
