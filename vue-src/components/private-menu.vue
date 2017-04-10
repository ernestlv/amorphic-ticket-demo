<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <ul class="nav navbar-nav">
            <li><a href="#" @click.prevent="home">Home</a></li>
            <li><a href="#" @click.prevent="tickets">Tickets</a></li>
            <li><a href="#" @click.prevent="projects">Projects</a></li>
            <li><a href="#" @click.prevent="people">People</a></li>
            <dropdown-menu></dropdown-menu>
        </ul>
    </nav>
</template>

<script>
    import { mapActions } from 'vuex'
    import DropdownMenu from './dropdown-menu.vue'

    export default {
        //see main.js for actions
        methods: {
            ...mapActions([
                'home',
                'tickets',
                'projects',
                'people'
            ])
        },
        components: {
            DropdownMenu
        }
    }
</script>
