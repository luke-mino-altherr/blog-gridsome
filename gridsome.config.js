// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

module.exports = {
  siteName: 'Min | Alt',
  siteUrl: 'https://min-alt.com',
  pathPrefix: '',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        remark: {
          //Config options can be added here
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/projects/*.md',
        typeName: 'Project',
        remark: {
          //Config options can be added here
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/static/*.md',
        typeName: 'About',
        remark: {
          //Config options can be added here
        }
      }
    },
  ],
  transformers: {
    remark: {
      //Config options can be added here
    }
  },
  templates: {
    Post: [
      {
        path: '/posts/:slug',
        component: './src/templates/Post.vue'
      }
    ],
    Project: [
      {
        path: '/projects/:slug',
        component: './src/templates/Project.vue'
      }
    ],
    About: [
      {
        path: '/about',
        component: './src/templates/About.vue'
      }
    ]
  },
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        },
    },
  },
}
