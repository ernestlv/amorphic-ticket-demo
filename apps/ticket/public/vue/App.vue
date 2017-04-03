<template>
  <div>
    <home-menu></home-menu><!--must be same as vue file name-->
    <div class="container"  style="margin-top: 50px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import * as Vue from 'vue';
  import Component from 'vue-class-component';
  import {Controller} from '../js/controller';
  import HomeMenu from './components/HomeMenu';
  import {AmorphicService} from './common/amorphic.service';
  import {WindowService} from './common/window.service';
  import {amorphicService, windowService} from './common/constants';

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