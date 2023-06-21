// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Interstate Design System',
  tagline: 'Design Systems are cool!',
  favicon: 'img/favicon.ico',

  url: 'https://interstate.coxautoinc.com',
  baseUrl: '/',

  projectName: 'Interstate Design System', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/interstate-social-card.svg',
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Interstate',
        logo: {
          alt: 'Interstate Logo',
          src: 'img/interstate.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          { to: '/whats-new', label: "What's New", position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'foundationSidebar',
            position: 'left',
            label: 'Foundation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'stylesSidebar',
            position: 'left',
            label: 'Styles',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tokensSidebar',
            position: 'left',
            label: 'Tokens',
          },
          {
            type: 'docSidebar',
            sidebarId: 'designPattersSidebar',
            position: 'left',
            label: 'Design Patterns',
          },
          {
            type: 'docSidebar',
            sidebarId: 'componentsSidebar',
            position: 'left',
            label: 'Components',
          },
          {
            href: 'https://ghe.coxautoinc.com/Interstate',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/',
              },
              {
                label: 'What\'s New',
                to: '/whats-new/',
              },
              {
                label: 'Foundation',
                to: '/docs/foundation/accessibility/',
              },
              {
                label: 'Components',
                to: '/docs/components/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://ghe.coxautoinc.com/Interstate',
              },
            ],
          },
        ],
        copyright: `Interstate Design System. Copyright © ${new Date().getFullYear()} Cox Automotive Inc. All Rights Reserved.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
