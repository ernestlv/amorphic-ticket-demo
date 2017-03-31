import HomeMenu from '../components/HomeMenu';
import Login from '../components/Login';

const routes = [
    {path: '/', component: HomeMenu},
    {path: '/home', component: HomeMenu},
    {path: '/login', component: Login}
];

export default routes