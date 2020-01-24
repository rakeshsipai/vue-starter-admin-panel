import Vue from 'vue'
import MiddlewarePlugin from 'vue-router-middleware-plugin'
import store from '@/store'
import router from '@/router'
import auth from '@/middleware/auth'

Vue.use(MiddlewarePlugin, {
    router,
    middleware: auth,
    context: { store }
})
