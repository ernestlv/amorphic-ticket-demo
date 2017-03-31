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

    @Component({
        components: {
            HomeMenu
        }
    })
    export default class App extends Vue {
        controller: Controller
    }


</script>