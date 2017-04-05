import * as Vue from 'vue';
import VueRouter from 'vue-router';
import * as VeeValidate from 'vee-validate';
import routes from './common/routes';
import store from './common/store';
import App from './App';

// import './styles/style.scss'
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.use(VueRouter);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new App({
    // el: '#app',
    router,
    store,
    // render: h => h(App)
}).$mount('#app');
