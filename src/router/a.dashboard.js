import Dashboard from '@/components/dashboard/Dashboard';
import Auth from '@/middleware/auth';

export default [
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta: {
            middleware: {
                ignore: Auth
            },
            nav: {
                addToNav: true,
                navText: 'Dashboard',
                navIcon: 'mdi-home',
            }
        }
    }
]