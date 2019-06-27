import DefaultLayout from '~/layouts/Default.vue'
import Toasted from 'vue-toasted'
import '~/assets/styles.scss'

export default function (Vue, { router, head, isClient }) {
  // add google font
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap'
  })

  // add toast support
  Vue.use(Toasted)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
