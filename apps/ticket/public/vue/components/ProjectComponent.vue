<template>
  <div>
    <div class="page-header">
      <div class="pull-right">
        <button @click="saveProject()" type="button" class="btn btn-primary btn-lg">Save</button>
      </div>
      <h1>Project</h1>
    </div>

    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label for="name" class="col-md-2 control-label">Name</label>
        <div class="col-md-10">
        <textarea v-model="project.name"
                  v-validate data-vv-rules="required"
                  name="name"
                  placeholder="Name"
                  focus="1">
        </textarea>
          <span class="text-danger" v-if="errors.has('name')"><br/>
            <span>{{errors.first('name')}}</span>
          </span>
        </div>
      </div>
      <div class="form-group">
        <label for="description" class="col-md-2 control-label">Description</label>
        <div class="col-md-10">
        <textarea v-model="project.description"
                  v-validate data-vv-rules="required"
                  name="description"
                  placeholder="Description"
                  focus="1">
        </textarea>
          <span class="text-danger" v-if="errors.has('description')"><br/>
            <span>{{errors.first('description')}}</span>
          </span>
        </div>
      </div>
      <div class="form-group" v-if="project.creator">
        <!--Static fields-->
        <label for="created" class="col-md-2 control-label">Created</label>
        <div class="col-md-4">
          <p type="text" class="form-control-static" id="created">{{project.created}}</p>
        </div>

        <label for="lastName" class="col-md-2 control-label">By</label>
        <div class="col-md-4">
          <p type="text" class="form-control-static" id="lastName">{{project.creator.getFullName()}}</p>
        </div>
      </div>
      <div class="form-group">
        <label for="selected" class="col-md-2 control-label">Owner</label>
        <div class="col-md-10" name="selected">
          <select v-model="project.owner">
            <option disabled value="">Please select one</option>
            <option v-for="person in people" v-bind:value="person">{{person.getFullName()}}</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import _ from 'underscore';
  import * as Vue from 'vue';
  import Component from 'vue-class-component';
  import {Inject} from 'vue-property-decorator';
  import {Controller} from '../../js/controller';
  import {amorphicService} from '../common/constants';
  import {AmorphicService} from '../common/amorphic.service';
  import {Project} from '../../js/tsmodel/project';
  import {Person} from '../../js/tsmodel/person';

  // The @Component decorator indicates the class is a Vue component
  @Component({
    name: 'project-component'
  })
  export default class ProjectComponent extends Vue {
    // Initial data can be declared as instance properties
    controller: Controller;
    project: Project;
    people: Array<Person> = [];
    @Inject(amorphicService) amorphicService: AmorphicService;
//        controller: Controller = window.controller
    // Component methods can be declared as instance methods
    created() {
      this.controller = this.amorphicService.controller;
      this.project = this.controller.project || this.controller.createNewProject();
      this.fetchPeople();
    }

    mounted() {
    }

    fetchPeople(): void {
      console.log('Fetch Tickets =========>');
      this.controller.peopleFetch()
          .then(function () {
            this.people = this.controller.people;
            console.log('Fetch Tickets ********** OK ');
          }.bind(this))
          .catch(function (e) {
            return console.log('Fetch Tickets *****EEEEEEE*******');
          });
    }

    saveProject(): void {
      console.log('Save Project =========>');
      this.controller.saveProjectServer(this.project.owner)
          .then(() => {
            this.$router.push('/projects')
          });
    }
  }
</script>