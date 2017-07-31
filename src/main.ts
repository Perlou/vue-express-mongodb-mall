/**
 * app entry
 * @author Perlou(perloukevin@gmail.com)
 */

import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'
import App from 'components/pages/app'
import router from 'router'
import svgicon = require('vue-svgicon')
import store from 'store'
import * as ElementUI from 'element-ui'

// import all icons
import 'components/icons'
Vue.use(svgicon, {
    tagName: 'icon'
})

// import element-ui
Vue.use(ElementUI)

// import global tags
import 'components/tags/globalTags'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

