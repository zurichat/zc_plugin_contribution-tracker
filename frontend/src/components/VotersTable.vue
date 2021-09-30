<template>
  <div>
    <p class="ct-p-4 ct-font-bold">CreateTeamListView1</p>
    <table class="ct-table-fixed voters-table">
      <thead>
        <tr class="ct-bg-green-100">
          <th class="ct-w-1/3 ct-p-3.5 ct-font-normal">Voters</th>
          <th class="ct-w-1/3 ct-p-3.5 ct-font-normal">Voting Weight</th>
          <th class="ct-w-1/3 ct-p-3.5 ct-font-normal">Calculated Voting Weight(%)</th>
        </tr>
      </thead>
      <tbody v-for="(voter, i) in voters" :key="i">
        <tr class="ct-border-b">
          <td class="voters-td ct-p-3">{{voter.name}}</td>
          <td class="voters-td ct-p-3">0{{voter.voting_weight}}</td>
          <td class="voters-td ct-p-3 ct-text-gray-400">{{((voter.voting_weight/sumVotingWeights())*100).toFixed(0)}}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  .voters-td {
    text-align:center
  }
  .voters-table{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
  }
</style>
