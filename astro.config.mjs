// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sarksnr.github.io',
  base: '/laundry-services',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },
});