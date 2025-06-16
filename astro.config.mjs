// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://markmo123.github.io',
  base: 'astrotest',
  integrations: [preact()],
});