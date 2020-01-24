import User from '@/components/user/User';
import Auth from '@/middleware/auth';

export default [
    {
        name: 'User',
        path: '/user',
        component: User,
        meta: {
            middleware: {
                ignore: Auth
            },
            nav: {
                addToNav: true,
                navText: 'User',
                navIcon: 'mdi-account',
            }
        }
    }
]