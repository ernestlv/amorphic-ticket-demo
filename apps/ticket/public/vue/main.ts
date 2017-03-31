import * as Vue from 'vue';
// import injector from 'vue-inject';
import App from './App';

// import './styles/style.scss'

// import store from './store'
// Vue.use(injector);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // data: {
    //     controller: injector.get('amorphicService').controller
    // },
    // // store,
    render: h => h(App)
});
