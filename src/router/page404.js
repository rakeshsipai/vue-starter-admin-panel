import Page404 from '@/components/Page404';
import Auth from '@/middleware/auth';

export default [
    {
        name: '404',
        path: '*',
        component: Page404,
        meta: {
            middleware: {
                ignore: Auth
            },
            nav: {
                addToNav: false,
                navText: 'Page Not Found',
                navIcon: '',
            }
        }
    }
]