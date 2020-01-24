import Login from '@/components/login/Login';
import Auth from '@/middleware/auth';

export default [
    {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: {
            middleware: {
                ignore: Auth
            },
            nav: {
                addToNav: false,
                navText: 'Login',
                navIcon: '',
            }
        }
    }
]