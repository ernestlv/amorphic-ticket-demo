<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <ul class="nav navbar-nav">
            <li><a href="#" @click.prevent="home">Home</a></li>
            <li><a href="#" @click.prevent="login">Login</a></li>
            <li><a href="#" @click.prevent="registration">Register</a></li>
            <li><a href="#" @click.prevent="tests">Tests</a></li>
        </ul>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        //see main.js for actions
        methods:{
            ...mapActions([
                'login',
                'home',
                'registration',
                'tests'
            ])
        }
    }
</script>
