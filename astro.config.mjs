import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  base: '/astro-template-v01-Espresso/', // replace with your GitHub repo name
  output: 'static',
});

