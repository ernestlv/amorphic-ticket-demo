<template>
    <div>
        <home-menu></home-menu><!--must be same as vue file name-->
    </div>
</template>

<script lang="ts">
    import * as Vue from 'vue';
    import Component from 'vue-class-component';
    //      import ProductList from './components/ProductList'
    import {Controller} from '../js/controller';
    import HomeMenu from './components/HomeMenu';
    import {AmorphicService} from './amorphic.service';
    import {WindowService} from './window.service';
    import {amorphicService, windowService} from './constants';
    let windowServiceInstance = new WindowService();
    let amorphicServiceInstance = new AmorphicService(windowServiceInstance);

    @Component({
        components: {
            HomeMenu
        },
        provide () {
            return {
                [windowService]: windowServiceInstance,
                [amorphicService]: amorphicServiceInstance
            }
        }
    })
    export default class App extends Vue {
        controller: Controller
    }


</script>