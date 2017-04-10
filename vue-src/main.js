import Vue from 'vue'
import Vuex from 'vuex'
import MainMenu from './components/main-menu.vue'

Vue.use(Vuex)

//store encapsulates amorphic controller
const store = new Vuex.Store({
  //global state broadcasted to components
  state: {
    isPrivate: !!controller.isLoggedIn(),
    userFirstName: controller.loggedInPerson ? controller.loggedInPerson.firstName : ''
  },

  //this code has to be synch
  mutations: {
    login (state) {
        state.isPrivate = controller.isLoggedIn()
        state.userFirstName = controller.loggedInPerson.firstName
    },
    logout (state) {
        state.isPrivate = false
        state.userFirstName = ''
    }
  },
  
  //this code could be asynch
  actions: {
    // public actions
    login ({state, commit}) {
        if (controller.isLoggedIn()){
            console.log('already logged')
            commit('login')
            controller.route.public.home()
        }else{
            controller.route.public.login()
            //funky code remove TO once you figure how to plug the asynch response from amorphic.
            var id = setInterval(() => {
                console.log('waiting')
                if(controller.isLoggedIn()){
                  commit('login')
                  clearInterval(id)
                }
            }, 500)
        }
    },
    home () {
        controller.route.public.home()
    },
    registration () {
        controller.route.public.registration()
    },
    tests () {
      console.log('testz!')
    },
    // private actions
    logout ({commit}) {
        controller.logout()
        commit('logout')
    },
    tickets () {
        controller.route.private.tickets()
    },
    projects () {
        controller.route.private.projects()
    },
    people () {
        controller.route.private.people()
    },
    changeEmail () {
        controller.route.public.change_email()
    },
    password () {
        controller.route.public.change_password()
    },
    deleteAll () {
        controller.deleteAll()
    }
  }
})

const vm = new Vue({
  el: '#vue-app',
  store,
  components: { MainMenu }
})

//for debugging purposes
saveVM(vm, store)