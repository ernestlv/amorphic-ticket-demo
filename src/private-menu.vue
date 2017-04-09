<template>
    <a href="#" @click.prevent="logout">Logout</a>
</template>

<script>
    export default {
        methods: {
            logout: function(){
                controller.logout();
            }
        }
    }
</script>
