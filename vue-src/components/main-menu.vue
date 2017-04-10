<template>
    <div>
      <private-menu v-if="isPrivate"></private-menu>
      <public-menu v-else></public-menu>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import PublicMenu from './public-menu.vue'
    import PrivateMenu from './private-menu.vue'

    export default {
      computed: mapState({ //vuex store will maintain my state
          isPrivate: state => state.isPrivate
      }),
      components: {
        PublicMenu,
        PrivateMenu
      }
    }
</script>
