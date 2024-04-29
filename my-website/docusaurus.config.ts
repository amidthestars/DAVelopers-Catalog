import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/and.png',
    navbar: {
      title: 'The DAVeloper’s Catalog',
      logo: {
        alt: 'an and gate',
        src: 'img/and.png',
      },
      // items: [
      //   {
      //     type: 'docSidebar',
      //     sidebarId: 'tutorialSidebar',
      //     position: 'left',
      //     label: 'Tutorial',
      //   },
      //   {to: '/blog', label: 'Blog', position: 'left'},
      //   {
      //     href: 'https://github.com/facebook/docusaurus',
      //     label: 'GitHub',
      //     position: 'right',
      //   },
      // ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Start here!',
              to: '/docs/hello',
            },
            
          ],
        },
        {
          title: 'IEEE at UCLA',
          items: [
            {
              label: 'Website',
              href: 'https://ieeebruins.com/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Vk3cmf9Rmx',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/uclaieee/?hl=en',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Find Prem',
              href: 'https://www.linkedin.com/in/prem-giridhar/',
            },
            {
              label: 'Find Claire',
              href: 'https://www.linkedin.com/in/claire-huang-7469091b7/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/amidthestars/DAVelopers-Catalog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DAV, IEEE at UCLA. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
