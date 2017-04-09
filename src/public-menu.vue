<template>
    <a href="#" @click.prevent="login">Login</a>
</template>

<script>
    export default {
        methods: {
            login: function(){
                controller.route.public.login();
            }
        }
    }
</script>
