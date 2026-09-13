import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Unirazz Insights',
  description: 'Engineering, construction and power-system insights from Unirazz Services.',
  base: '/blog/',
  cleanUrls: false,
  lastUpdated: true,
  outDir: '../../blog',
  head: [
    ['meta', { name: 'theme-color', content: '#061426' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large' }],
    ['link', { rel: 'icon', href: '/assets/favicon.png' }]
  ],
  themeConfig: {
    logo: 'https://www.unirazz.com/assets/unirazz-logo.png',
    siteTitle: 'UNIRAZZ INSIGHTS',
    nav: [
      { text: 'All articles', link: '/articles/' },
      { text: 'Unirazz Services', link: 'https://www.unirazz.com/' }
    ],
    sidebar: [{
      text: 'Latest insights',
      items: [
        { text: 'Engineering BESS beyond the battery', link: '/articles/bess-procurement' },
        { text: 'A practical route to resilient grid infrastructure', link: '/articles/resilient-grid-infrastructure' }
      ]
    }],
    footer: {
      message: 'Construction · Management · Engineering',
      copyright: '© Unirazz Services. All rights reserved.'
    }
  }
})
