import * as Vue from 'vue';
// import injector from 'vue-inject';
import App from './App';
import {AmorphicService} from './amorphic.service';
import {WindowService} from './window.service';
import {amorphicService, windowService} from './constants';
let windowServiceInstance = new WindowService();
let amorphicServiceInstance = new AmorphicService(windowServiceInstance);

// import './styles/style.scss'

// import store from './store'
// Vue.use(injector);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // data: {
    //     controller: injector.get('amorphicService').controller
    // },
    provide () {
        return {
            [windowService]: windowServiceInstance,
            [amorphicService]: amorphicServiceInstance
        }
    },
    // // store,
    render: h => h(App)
});
