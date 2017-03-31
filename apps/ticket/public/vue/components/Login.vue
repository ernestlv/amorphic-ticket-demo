<template>
  <div>
    <h1>Please Login</h1>
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <!--Text field-->
        <label for="email" class="col-md-2 control-label">Email</label>
        <div class="col-md-4">
          <input v-model="email"
                 v-validate data-vv-rules="required|email"
                 type="text"
                 class="form-control"
                 name="email"
                 placeholder="email"
                 focus="1"/>
          <span class="text-danger" v-if="errors.has('email')"><br/><span>{{errors.first('email')}}</span></span>
        </div>
      </div>

      <div class="form-group">
        <!--Text field-->
        <label for="password" class="col-md-2 control-label">password</label>
        <div class="col-md-4">
          <input v-model="password"
                 v-validate data-vv-rules="required"
                 type="password"
                 class="form-control"
                 name="password" placeholder="password"
                 focus="2"/>
          <span class="text-danger" v-if="errors.has('password')"><br/><span>{{errors.first('password')}}</span></span>
        </div>
      </div>
      <button @click="login()" type="submit" class="btn btn-primary btn-lg"
              :disabled="email && password && errors.any()">Login</button>
    </form>
    <!--<span style="color:red" v-if="controller.isError('')"><br/><span>{{controller.error}}</span></span>-->
  </div>
</template>

<script lang="ts">
  import * as Vue from 'vue';
  import Component from 'vue-class-component';
  import {Inject} from 'vue-property-decorator';
  import {Controller} from '../../js/controller';
  import {amorphicService} from '../common/constants';
  import {AmorphicService} from '../common/amorphic.service';

  // The @Component decorator indicates the class is a Vue component
  @Component({
    name: 'login'
  })
  export default class Login extends Vue {
    // Initial data can be declared as instance properties
    email: string = '';
    password: string = '';
    controller: Controller;
    @Inject(amorphicService) amorphicService: AmorphicService;
//        controller: Controller = window.controller
    // Component methods can be declared as instance methods
    created() {
      this.controller = this.amorphicService.controller;
    }

    login(): void {
      this.controller.publicLogin()
          .then(function () {
            //this.router.navigate(['/tickets']);
          });
    }
  }
</script>
