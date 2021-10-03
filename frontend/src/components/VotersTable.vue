<template>
  <div>
    <p class="ct-p-3 ct-font-bold ct-text-brand-black">CreateTeamListView1</p>
    <table class="ct-table-fixed ct-w-full ct-text-center ct-text-brand-black">
      <thead>
        <tr class="ct-bg-brand-green-light ct-font-medium">
          <th class="ct-p-3">Voters</th>
          <th class="ct-p-3">Voting Weight</th>
          <th class="ct-p-3">Calculated Voting Weight(%)</th>
        </tr>
      </thead>
      <tbody v-for="(voter, i) in all_voters" :key="i">
        <tr class="ct-border-b ct-font-medium">
          <td class="voters-td ct-p-3">{{voter.first_name}} {{voter.last_name}}</td>
          <td class="voters-td ct-p-3">0{{voter.voting_weight}}</td>
          <td class="voters-td ct-p-3 ct-text-brand-gray-light-3">
            <!-- Calculate the voting percent of each voter -->
            {{((voter.voting_weight/sumVotingWeights())*100).toFixed(0)}}%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex"
  export default {
    name: 'VotersTable',
    data(){
      return {
        all_voters:[
          {
            first_name:"John",
            last_name:"Doe",
            voting_weight:2
          },
          {
            first_name:"Mary",
            last_name:"Jane",
            voting_weight:1
          },
          {
            first_name:"Petec",
            last_name:"0x0",
            voting_weight:2
          },
        ]
      }
    },
    methods:{
      sumVotingWeights(){
        // This method sums voting weights of all voters
        const allWeights = this.voters.map(function (el) { return el.voting_weight; });
        return allWeights.reduce(this.getSum, 0);
      },
      //
      getSum(total, num){return total + num},

      updateDummyData(){
        if(this.voters != null){
          console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",this.voters)
          this.all_voters = this.voters
        }
      },

      ...mapActions(["getVoters"])
    },
    computed: {
        ...mapGetters(["voters"]),
    },
    mounted() {
        this.getVoters()
        this.updateDummyData()
    },
  }
</script>

<style scoped>
</style>
