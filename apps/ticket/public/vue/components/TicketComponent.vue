<template>
  <div>
    <div class="page-header">
      <div class="pull-right">
        <button @click="saveTicket()" type="button" class="btn btn-primary btn-lg">Save</button>
      </div>
      <h1>Ticket</h1>
      <p style="text-align: right;height: 14px;padding-top: 4px">
        <span style="align:center">{{controller.status}}</span>
        <span style="color: red;align:center">{{controller.error}}</span>
      </p>

    </div>

    <form class="form-horizontal" role="form">
      <div class="form-group">
        <!--Text field-->
        <label for="title" class="col-md-2 control-label">Title</label>
        <div class="col-md-10">
          <input v-model="ticket.title"
                 v-validate data-vv-rules="required"
                 type="text"
                 class="form-control"
                 name="title"
                 placeholder="Title"
                 focus="1"/>
          <span class="text-danger" v-if="errors.has('title')"><br/>
            <span>{{errors.first('title')}}</span>
          </span>
        </div>
      </div>

      <div class="form-group">
        <!--Memo field-->
        <label for="description" class="col-md-2 control-label">Description</label>
        <div class="col-md-10">
          <input v-model="ticket.description"
                 v-validate data-vv-rules="required"
                 type="text"
                 class="form-control"
                 name="description"
                 placeholder="Description"
                 focus="1"/>
          <span class="text-danger" v-if="errors.has('description')"><br/>
            <span>{{errors.first('description')}}</span>
          </span>
        </div>
      </div>

      <div class="form-group" v-if="ticket.creator">
        <!--Static fields-->
        <label for="created" class="col-md-2 control-label">Created</label>
        <div class="col-md-4">
          <p type="text" class="form-control-static" id="created">{{ticket.created}}</p>
        </div>

        <label for="lastName" class="col-md-2 control-label">Last Name</label>
        <div class="col-md-4">
          <p type="text" class="form-control-static" id="lastName">{{ticket.creator.getFullName()}}</p>
        </div>
      </div>

      <!--<div class="form-group">-->
        <!--<label class="col-md-2 control-label">{{ticket.project}}</label>-->
        <!--<div class="col-md-4">-->
          <!--<select class="form-control" id="power" required-->
                  <!--v-model="ticket.project" @change="if(!ticket.project){ticket.release=null}">-->
            <!--<option v-for="pr in controller.projects" v-text="pr">{{pr}}</option>-->
          <!--</select>-->
        <!--</div>-->
      <!--</div>-->

    </form>

    <!--<div *ngIf="ticket.created">-->
    <!--<div class="page-header">-->
    <!--<div class="pull-right">-->
    <!--<button (click)="addComment()" type="button" class="btn btn-primary btn-lg">Add Comment</button>-->
    <!--</div>-->
    <!--<h1>Ticket Activity</h1>-->
    <!--</div>-->

    <!--<form class="form-horizontal" role="form">-->

    <!--<div class="form-group">-->
    <!--&lt;!&ndash;Memo field&ndash;&gt;-->
    <!--<label for="comment" class="col-md-2 control-label">Description</label>-->
    <!--<div class="col-md-10">-->
    <!--<textarea [(ngModel)]="comment" type="text" class="form-control" id="comment" placeholder="Comment"-->
    <!--(change)="if(typeof(commentTrigger) == 'function'){commentTrigger()}"-->
    <!--(enter)="ticket.addComment(comment);comment=''"></textarea>-->
    <!--<span style="color:red"-->
    <!--*ngIf="controller.isError('ticket.description')"><br/><span>{{controller.error}}</span></span>-->
    <!--</div>-->
    <!--</div>-->


    <!--</form>-->

    <!--<div class="page-header">-->
    <!--</div>-->

    <!--<div class="container">-->
    <!--<table class="table" *ngIf="ticket.ticketItemsGet().length > 0">-->
    <!--<thead>-->
    <!--<tr>-->
    <!--<th>Created</th>-->
    <!--<th>By</th>-->
    <!--<th>Comment</th>-->
    <!--</tr>-->
    <!--</thead>-->
    <!--<tbody>-->
    <!--<tr *ngFor="let ticketItem of ticket.ticketItems">-->
    <!--<td>{{ticketItem.created | date-->
    <!--:-->
    <!--'medium'}}-->
    <!--</td>-->
    <!--<td>{{ticketItem.creator.getFullName()}}</td>-->
    <!--<td>-->
    <!--<span>{{ticketItem.text}}</span>-->
    <!--</td>-->

    <!--</tr>-->
    <!--</tbody>-->
    <!--</table>-->
    <!--</div>-->
    <!--</div>-->
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
  import {Ticket} from '../../js/tsmodel/ticket';

  // The @Component decorator indicates the class is a Vue component
  @Component({
    name: 'ticket-component'
  })
  export default class TicketComponent extends Vue {
    // Initial data can be declared as instance properties
    controller: Controller;
    ticket: Ticket;
    @Inject(amorphicService) amorphicService: AmorphicService;
//        controller: Controller = window.controller
    // Component methods can be declared as instance methods
    created() {
      this.controller = this.amorphicService.controller;
      this.ticket = this.controller.ticket || this.controller.createNewTicket();
    }

    saveTicket(): void {
      console.log('Save Ticket =========>');
      this.controller.saveTicketServer()
          .then(() => {
            this.$router.push('/tickets')
          });
    }
  }
</script>