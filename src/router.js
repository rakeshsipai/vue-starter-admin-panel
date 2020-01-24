import Vue from 'vue';
import Router from 'vue-router';
import pathParse from 'path-parse'

import Layout from '@/components/Layout';

/*
 *  register includes
 */
import Header from '@/includes/Header';
import Footer from '@/includes/Footer';
import LeftNav from '@/includes/LeftNav';

/*
 * register Loading icons
 */
import PulseLoader from 'vue-spinner/src/PulseLoader';
import SkewLoader from 'vue-spinner/src/SkewLoader';

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('left-nav', LeftNav);
Vue.component('pulse-loader', PulseLoader);
Vue.component('skew-loader', SkewLoader);

// get all routes from router directory
let routes = []
let page404 = {}
let Login = {}
function importAll(allRoutes) {
    allRoutes.keys().forEach(key => {
        if (pathParse(key).name !== 'page404' && pathParse(key).name !== 'login')
            routes.push(...allRoutes(key).default)
        else if (pathParse(key).name === 'page404')
            page404 = allRoutes(key).default
        else if (pathParse(key).name === 'login')
            Login = allRoutes(key).default
    })
}
importAll(require.context('./router', false, /\.js$/))

Vue.use(Router);


const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        ...Login,
        {
            path: "*",
            component: Layout,
            meta: {
                nav: {
                    addToNav: false
                },
            },
            children: [...routes, ...page404],

        }
    ]
})

// create page title
router.beforeEach((to, from, next) => {
    const documentTitle = 'App - ' + to.meta.nav.navText;
    if (documentTitle) document.title = documentTitle;

    next();
});

export default router;