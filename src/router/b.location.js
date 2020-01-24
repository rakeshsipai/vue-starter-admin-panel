import Location from '@/components/location/Location';
import Auth from '@/middleware/auth';

export default [
    {
        name: 'Location',
        path: '/location',
        component: Location,
        meta: {
            middleware: {
                ignore: Auth
            },
            nav: {
                addToNav: true,
                navText: 'Location',
                navIcon: 'mdi-map',
            }
        }
    }
]