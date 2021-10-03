import { createStore } from 'vuex'
import ContributionServices from "@/services/config.js"

export default createStore({
  state: {
    users: [],
    tickets: [
      {
          name: 'CreateTeamListView1',
          contributor: '#001 added by John Doe',
          description: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
          commit: 'https://github.com/zurichat/zc_plugin_contribution-tracker/commit/97438cf8762ad053a187e023cf8bb84aa0f8d9d6',
          test: 'http://zuri.chat'
      },
      {
          name: 'CreateTeamListView2',
          contributor: '#001 added by Jane Doe',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
          commit: 'https://github.com/zurichat/zc_plugin_contribution-tracker/commit/da84010793268f8a61f2bef942ccc0ab43845ad8',
          test: 'http://zuri.chat'
      },
      {
          name: 'CreateTeamListView3',
          contributor: '#001 added by Sarah Doe',
          description: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
          commit: 'https://github.com/zurichat/zc_plugin_contribution-tracker/commit/6d0f771968b92aad8af61492daf131baa2ec088d',
          test: 'http://zuri.chat'
      }
    ],
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
    }
  },
  actions: {
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
    }
  },
  getters: {
    users(state) {
      return state.users
    }
  },
  modules: {
  }
})
