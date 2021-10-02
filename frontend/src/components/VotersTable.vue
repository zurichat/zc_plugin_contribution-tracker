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
      <tbody v-for="(voter, i) in voters" :key="i">
        <tr class="ct-border-b ct-font-medium">
          <td class="voters-td ct-p-3">{{voter.name}}</td>
          <td class="voters-td ct-p-3">0{{voter.voting_weight}}</td>
          <td class="voters-td ct-p-3 ct-text-brand-gray-light-3">{{((voter.voting_weight/sumVotingWeights())*100).toFixed(0)}}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VotersTable',
  data(){
    return {
      voters:[
        {
          name:"John Doe",
          voting_weight:2
        },
        {
          name:"Mary Jane",
          voting_weight:1
        },
        {
          name:"Mark E",
          voting_weight:2
        },
      ]
    }
  },
  methods:{
    sumVotingWeights(){
      const allWeights = this.voters.map(function (el) { return el.voting_weight; });
      return allWeights.reduce(this.getSum, 0);
    },

    getSum(total, num){return total + num;}
  }
}
</script>

<style scoped>
</style>
