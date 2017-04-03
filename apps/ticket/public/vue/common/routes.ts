import Login from '../components/Login';
import Registration from '../components/Registration';
import TicketsComponent from '../components/TicketsComponent';
import TicketComponent from '../components/TicketComponent';

const routes = [
    {path: '/login', component: Login},
    {path: '/registration', component: Registration},
    {path: '/tickets', component: TicketsComponent},
    {path: '/ticket', component: TicketComponent}
];

export default routes