import pkg from './package';

let blogposts = require('./static/blogposts.json');
blogposts = Object.keys(blogposts);

let tags = require('./static/tags.json');
tags = Object.keys(tags);

function blogpostURL(key) {
  const tmp = key.split('-');
  const date = tmp.slice(0, 3);
  const rest = tmp.slice(3);
  return `/blog/${date[0]}/${date[1]}/${date[2]}/${rest.join('-')}`;
}

function tagURL(key) {
  return `/blog/tag/${key}`;
}

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Dominic Carrington's Personal Website",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "./node_modules/prismjs/themes/prism.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa'
    }],
    '@nuxtjs/markdownit',
    '@nuxtjs/moment'
  ],

  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true,
    use: [
      ['markdown-it-prism', {
        init() {
          require('prismjs/components/prism-clike');
          require('prismjs/components/prism-markup-templating');
          require('prismjs/components/prism-php');
        }
      }]
    ]
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  generate: {
    fallback: true,
    subFolders: true,
    routes: [].concat(blogposts.map(b => blogpostURL(b))).concat(tags.map(t => tagURL(t)))
  }
}
