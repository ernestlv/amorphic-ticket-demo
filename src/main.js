import Vue from 'vue'
import MainMenu from './main-menu.vue'

saveVM(new Vue({
  el: '#vue-app',
  components: { MainMenu }
}));