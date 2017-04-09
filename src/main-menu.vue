<template>
    <div class="message">
      {{ msg }}
      <public-menu></public-menu>
      <private-menu></private-menu>
    </div>
</template>

<script>
    import PublicMenu from './public-menu.vue'
    import PrivateMenu from './private-menu.vue'

    export default {
      data () {
        return {
          msg: 'Hello from vue-loader!'
        }
      },
      components: {
        PublicMenu,
        PrivateMenu
      }
    }
</script>

<style>
    .message {
      color: blue;
    }
</style>