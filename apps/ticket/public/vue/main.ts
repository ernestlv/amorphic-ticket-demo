import * as Vue from 'vue';
import VueRouter from 'vue-router';
import * as VeeValidate from 'vee-validate';
import routes from './common/routes';
import App from './App';

// import './styles/style.scss'
// import store from './store'
const router = new VueRouter({routes: routes});

Vue.use(VueRouter);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // // store,
    render: h => h(App)
});
