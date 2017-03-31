import HomeMenu from '../components/HomeMenu';
import Login from '../components/Login';
import Registration from '../components/Registration';

const routes = [
    {path: '/', component: HomeMenu},
    {path: '/home', component: HomeMenu},
    {path: '/login', component: Login},
    {path: '/registration', component: Registration}
];

export default routes