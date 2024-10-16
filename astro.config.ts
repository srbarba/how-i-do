import tutorialkit from '@tutorialkit/astro'
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'

export default defineConfig({
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
