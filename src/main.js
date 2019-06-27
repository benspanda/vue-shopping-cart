import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/styles.scss'

export default function (Vue, { router, head, isClient }) {
  // add google font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap'
  })

  // add toast support
  // only process on client side (dont process when building for SSR as this plugin relies on the window object)
  if(isClient) {
    const { default: Toasted } = require('vue-toasted')
    Vue.use(Toasted)
  }

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
