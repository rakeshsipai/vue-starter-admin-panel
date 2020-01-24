import Vue from 'vue'
import config from '@/config.js'

// mixin
let mixin = require.context('../mixin', false, /\.js$/)
mixin.keys().forEach(eachMixin => {
    let each = mixin(eachMixin)
    Vue.mixin(each.default)
})

Vue.mixin({
    data() {
        return {
            config: config[config.env]
        }
    }
})