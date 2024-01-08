import { defineConfig } from 'astro/config'
import lit from '@astrojs/lit'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import rehypeExternalLinks from 'rehype-external-links'

export default defineConfig({
  site: 'https://trevoreyre.com',
  integrations: [lit(), vue(), sitemap()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noreferrer noopener'] }]],
  },
})
