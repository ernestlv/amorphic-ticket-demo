<template>
    <div>
        <button @click="onClick">Hello!</button>
        <span v-if="isLoggedIn()">Log in</span>
    </div>
    <!--<div>-->
    <!--<table class="table table-hover">-->
    <!--<thead>-->
    <!--<tr>-->
    <!--<th>Product Id</th>-->
    <!--<th>Name</th>-->
    <!--<th>Description</th>-->
    <!--<th>Price</th>-->
    <!--</tr>-->
    <!--</thead>-->
    <!--<tbody>-->
    <!--<tr v-for="product in products" track-by="id">-->
    <!--<td>{{product.id}}</td>-->
    <!--<td>{{product.name}}</td>-->
    <!--<td>{{product.description}}</td>-->
    <!--<td>{{product.price}}</td>-->
    <!--</tr>-->
    <!--</tbody>-->
    <!--</table>-->
    <!--</div>-->
</template>

<script lang="ts">
    import * as Vue from 'vue'
    import Component from 'vue-class-component'
    import {Controller} from '../../js/controller'
    // The @Component decorator indicates the class is a Vue component
    @Component({})
    export default class HomeMenu extends Vue {
        // Initial data can be declared as instance properties
        message: string = 'Hello!'
        controller: Controller
//        controller: Controller = window.controller
        // Component methods can be declared as instance methods
        onClick(): void {
            window.alert(this.message)
        }

        isLoggedIn(): boolean {
//            return window.controller && window.controller.isLoggedIn()
            return false;
        }
    }
</script>
