<template>
  <div>
    <div class="page-header">
      <div class="pull-right">
        <a @click="fetchTickets()">refresh</a>&nbsp;&nbsp;&nbsp;
        <button @click="addTicket()" type="button" class="btn btn-primary btn-lg">New Ticket</button>
      </div>
      <h1>Tickets</h1>
    </div>
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>By</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="ticket in tickets">
          <td><a @click="showTicket(ticket)">{{ticket.title || 'unnamed'}}</a></td>
          <td>{{ticket.created}}</td>
          <td>{{ticket.creator ? ticket.creator.getFullName() : 'unknown'}}</td>
          <td><a @click="deleteTicket(ticket)">Delete</a></td>
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
  import {Ticket} from '../../js/tsmodel/ticket';

  // The @Component decorator indicates the class is a Vue component
  @Component({
    name: 'tickets-component'
  })
  export default class TicketsComponent extends Vue {
    // Initial data can be declared as instance properties
    controller: Controller;
    tickets: Array<Ticket> = [];
    @Inject(amorphicService) amorphicService: AmorphicService;
//        controller: Controller = window.controller
    // Component methods can be declared as instance methods
    created() {
      this.controller = this.amorphicService.controller;
    }

    mounted() {
      this.fetchTickets();
    }

    fetchTickets(): void {
      console.log('Fetch Tickets =========>');
      this.controller.ticketsFetch()
          .then(function () {
            this.tickets = this.controller.tickets;
            console.log('Fetch Tickets ********** OK ');
          }.bind(this))
          .catch(function (e) {
            return console.log('Fetch Tickets *****EEEEEEE*******');
          });
    }

    showTicket(ticket): void {
      console.log('Show Ticket =========>');
      this.controller.ticket = ticket;
      this.$router.push('/ticket');
    }

    addTicket(): void {
      console.log('Add Ticket =========>');
//      this.controller.createNewTicket();
      this.controller.ticket = null;
      this.$router.push('/ticket');
    }

    deleteTicket(ticket): void {
      console.log('Delete Ticket =========>');
      this.controller.removeTicket(ticket);
    }
  }
</script>