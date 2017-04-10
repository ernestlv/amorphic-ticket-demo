<template>
    <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            Hello <span>{{userFirstName}}</span><b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
            <li><a href="#" @click.prevent="logout">Logout</a></li>
            <li><a href="#" @click.prevent="changeEmail">Change email</a></li>
            <li><a href="#" @click.prevent="password">Change Password</a></li>
            <li><a href="#" @click.prevent="deleteAll">Clear Database</a></li>
        </ul>
    </li>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        computed: mapState({ //vuex store will maintain my state
          userFirstName: state => state.userFirstName
        }),
        //see main.js for actions
        methods: {
            ...mapActions([
                'logout',
                'changeEmail',
                'password',
                'deleteAll'
            ])
        }
    }
</script>
