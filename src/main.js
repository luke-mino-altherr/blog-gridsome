// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faLinkedin, faEnvelope, faSoundcloud)

import DefaultLayout from '~/layouts/Default.vue'
import ContentLayout from '~/layouts/Content.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('ContentLayout', ContentLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Overpass:wght@100;400;600;800&display=swap'
  });
}
