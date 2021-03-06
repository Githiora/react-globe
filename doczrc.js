export default {
  dest: 'dist/docs',
  menu: [
    'README',
    {
      name: 'Props',
      menu: ['Component', 'Types'],
    },
    {
      name: 'Usage',
      menu: [
        'Globe',
        'Textures',
        'Camera',
        'Lights',
        'Focus',
        'Markers',
        'Events',
        'Animations',
      ],
    },
    {
      name: 'Gallery',
      menu: ['Contributing', 'metoorising'],
    },
    'FAQ',
    'CHANGELOG',
    { name: 'Github', href: 'https://github.com/chrisrzhou/react-globe' },
  ],
  public: 'docs/public',
  themeConfig: {
    showPlaygroundEditor: true,
  },
  typescript: true,
};
