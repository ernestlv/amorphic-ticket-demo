<template>
  <div>
    <div class="page-header">
      <div class="pull-right">
        <a @click="fetchProjects()">refresh</a>
        <button @click="addProject()" type="button" class="btn btn-primary btn-lg">New Project</button>
      </div>
      <h1>Projects</h1>
    </div>
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Creator</th>
          <th>Owner</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="project in projects">
          <td><a @click="showProject(project)">{{project.name || 'unnamed'}}</a></td>
          <td>{{project.created}}</td>
          <td>{{project.creator ? project.creator.getFullName() : 'unknown'}}</td>
          <td>{{project.owner ? project.owner.getFullName() : 'unknown'}}</td>
          <td><a @click="deleteProject(project)">Delete</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import * as Vue from 'vue';
  import Component from 'vue-class-component';
  import {Inject} from 'vue-property-decorator';
  import {Controller} from '../../js/controller';
  import {amorphicService} from '../common/constants';
  import {AmorphicService} from '../common/amorphic.service';
  import {Project} from '../../js/tsmodel/Project';

  // The @Component decorator indicates the class is a Vue component
  @Component({
    name: 'projects-component'
  })
  export default class ProjectsComponent extends Vue {
    // Initial data can be declared as instance properties
    controller: Controller;
    projects: Array<Project> = [];
    @Inject(amorphicService) amorphicService: AmorphicService;
//        controller: Controller = window.controller
    // Component methods can be declared as instance methods
    created() {
      this.controller = this.amorphicService.controller;
      this.fetchProjects();
    }

    mounted() {
    }

    fetchProjects(): void {
      console.log('Fetch Projects =========>');
      this.controller.projectsFetch()
          .then(function () {
            this.projects = this.controller.projects;
            console.log('Fetch Projects ********** OK ');
          }.bind(this))
          .catch(function (e) {
            return console.log('Fetch Projects *****EEEEEEE*******');
          });
    }

    showProject(project): void {
      console.log('Show Project =========>');
      this.controller.project = project;
      this.$router.push('/project');
    }

    addProject(): void {
      console.log('Add Project =========>');
//      this.controller.createNewProject();
      this.controller.project = null;
      this.$router.push('/project');
    }

    deleteProject(project): void {
      console.log('Delete Project =========>');
      this.controller.removeProject(project);
    }
  }
</script>