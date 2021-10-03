import { createStore } from 'vuex'
import ContributionServices from "@/services/config.js"

export default createStore({
  state: {
    users: [],
    tickets: [],
    selectedTicket: [],
    description: false,
    addUserModalActive: false,
  },
  mutations: {
    selectTicket: (state, index) => {
      state.selectedTicket = state.tickets[index];
    },
    openDescription: state => {
      state.description = true
    },
    closeDescription: state => {
      state.description = false
    },
    toggleUserModal: state => {
      state.addUserModalActive =! state.addUserModalActive
    },
    setUsers(state, payload) { state.users = payload },
    appendUser: (state, payload) => {
      console.log(payload)
    },
    setVoters(state, payload) {
      state.voters = payload 
   },
    getTicket(state, payload) {
      state.tickets = payload
    }
  },
  actions: {
    async getVoters({commit}) {
      await ContributionServices.getVoters().then(response => {
        commit("setVoters", response.data.data.data)
        console.log(response.data.data.data)
      })
    },
    async getAllUsers({commit}) {
      await ContributionServices.getAllUsers().then(response => {
        commit("setUsers", response.data)
        console.log(response.data)
      })
    },
    async getUser(id) {
      await ContributionServices.getUser(id)
    },
    async addUser({ commit }, payload) {
      commit('appendUser', payload)
      await ContributionServices.addUser(payload).then(response => {
        console.log(response.data)
      })
    },
    async getTicket({commit}) {
      await ContributionServices.getTicket().then(response => {
        commit("getTicket", response.data)
      })
    }
  },
  getters: {
    voters(state) {
      return state.voters
    },
    users(state) {
      return state.users
    },
    tickets(state) {
      return state.tickets
      }
  }, 
  modules: {
  }
})
