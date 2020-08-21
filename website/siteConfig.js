/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const RemarkablePlugins = require('./core/RemarkablePlugin');

const siteConfig = {
  title: 'kintone UI Component supports you to create cool kintone app.', // Title for your website.
  tagline: '',
  // For GitHub Pages hosting
  // url: 'https://tomokomiyake.github.io',
  // baseUrl: '/docusaurus-proto/',

  // For Netlify hosting
  url: 'https://tomokomiyake.netlify.app',
  baseUrl: '/',
  projectName: 'docusaurus-proto',
  organizationName: 'tomokomiyake',
  headerLinks: [
    {doc: 'overview/navigation', label: 'Documentation'},
    {doc: 'overview/navigation', label: 'Blog/Tips(pattern A)'},
    {blog: true, label: 'Blog/Tips(pattern B)'},
    // {page: 'versions', label: 'Version'},
    // {page: 'help', label: 'Help'},
    {href: 'https://github.com/TomokoMiyake/docusaurus-proto', label: 'GitHub'}, // Need to change to kuc repo
    {search: true},
    {languages: false}
  ],
  headerIcon: 'img/kuc_logo_white.png',
  footerIcon: 'img/kuc_box_white.png',
  favicon: 'img/kuc_box_yellow.png',
  colors: {
    primaryColor: '#2b3137', //'#03A9F4', '#000', '#609f6f',
    secondaryColor: '#03A9F4', //'#3498DB', '#2b3137', '#333333', '#24292e', '#436f4d',
  },
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  copyright: `Copyright © ${new Date().getFullYear()} Cybozu Inc.`,
  highlight: {
    theme: 'atom-one-dark', // 'Nord', 'Dracula', 'Monokai Sublime'
    defaultLang: 'javascript'
  },
  onPageNav: 'separate',
  docsSideNavCollapsible: true,
  cleanUrl: true,
  ogImage: 'img/kuc_logo.png',
  twitterImage: 'img/kuc_logo.png',
  disableHeaderTitle: true,
  scrollToTop: true,
  markdownPlugins: [
    RemarkablePlugins.KUCComponentRenderer,
  ],
  scripts: [
    // 'https://miyass.github.io/kuc-cdn/kintone-ui-component-dist.js',
    'https://unpkg.com/@kintone/kintone-ui-component@0.3.3/dist/kintone-ui-component.min.js',
    '/js/extra.js',
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-button.js',
  ],
  stylesheets: [
    'https://unpkg.com/@kintone/kintone-ui-component@0.3.3/dist/kintone-ui-component.min.css',
    '/css/custom.css',
    '/css/code-block-button.css'
  ],
  // Option for Algolia DocSearch(It can be set at production-ready.)
  // algolia: {
  //   apiKey: '',
  //   indexName: ''
  // }
};

module.exports = siteConfig;
