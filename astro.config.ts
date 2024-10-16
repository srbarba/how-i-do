import tutorialkit from '@tutorialkit/astro'
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'

export default defineConfig({
  site: 'https://how-i-do.vercel.app',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    vue(),
    tutorialkit({
      components: {
        TopBar: './src/components/TopBar.astro',
      },
    }),
  ],
})
