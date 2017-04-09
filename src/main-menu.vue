<template>
    <div class="message">
      <private-menu v-if="isPrivate"></private-menu>
      <public-menu v-else></public-menu>
    </div>
</template>

<script>
    import PublicMenu from './public-menu.vue'
    import PrivateMenu from './private-menu.vue'

    export default {
      data () {
        return {
          isPrivate: controller.isLoggedIn()
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