// @ts-check
const config = {
  title: 'Fictional Engineering',
  tagline: 'A601 · Fictional Engineering Lab',
  favicon: 'img/logo.svg',

  url: 'https://example.com',
  baseUrl: '/',

  organizationName: 'fictional-engineering',
  projectName: 'fictional-engineering-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Fictional Engineering',
        logo: {
          alt: 'Fictional Engineering Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/projects', label: 'Projects', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {to: '/docs/intro', label: 'Docs', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Lab',
            items: [
              {
                label: 'About A601',
                to: '/about',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fictional Engineering.`,
      },
    }),
};

module.exports = config;
