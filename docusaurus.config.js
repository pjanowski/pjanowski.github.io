module.exports = {
  title: 'Pawel Janowski',
  tagline: 'Data science, software engineering, biophysics, philosophy',
  url: ' https://pjanowski.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pjanowski', // Usually your GitHub org/user name.
  projectName: 'pjanowski.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Paweˆ Janowski',
      logo: {
        alt: 'My Site Logo',
        src: 'img/science.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { 
		  to: 'blog/',
		  label: 'Blog', 
		  position: 'left'
		},
        {
          href: 'https://github.com/pjanowski',
          label: 'GitHub',
          position: 'right',
        },
		{
          to: 'projects/',
          label: 'Projects',
          position: 'left',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Websites',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/pauljanowski/',
            },
            {
              label: 'Github',
              href: 'https://github.com/pjanowski',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pjanowski',
            },
          ],
        },
      ],
      copyright: `Copyright Â© ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
