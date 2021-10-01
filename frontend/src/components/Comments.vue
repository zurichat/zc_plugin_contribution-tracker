<template>
    <div>
      <p class=""><b class="ct-text-light ct-ml-1">Comments</b>(Voting ends 10 minutes after the first comment)<b class="ct-float-right ct-mr-3">Votes</b></p>
      <div class="ct-bg-gray-100 ct-justify-between ct-pl-2 ct-block ct-p-px ct-py-1 ct-text-lg ct-font-light ct-my-1 ct-flex ct-space-x-60" v-for="comment in comments" :key="comment.id">
        {{comment.name}}
        <div class="ct-flex ct-float-right ct-mr-3">
          <div class="ct-flex ct-items-center ct-h-5 ct-px-2 ct-bg-brand-gray-light-2 ct-space-x-1 ct-rounded-xl">
                <div class=""><img src="../assets/tick.png" alt="Up vote"></div>
                <div class="ct-text-sm">4</div>
            </div>
            <div class="ct-flex ct-items-center ct-h-5 ct-px-2 ct-ml-15 ct-bg-brand-gray-light-2 ct-space-x-1 ct-rounded-xl">
                <div><img src="../assets/tick.png" alt="Up vote"></div>
                <div class="ct-text-sm">4</div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Comments',
    data() {
      return {
        comments: [
          {
            id: 1,
            name: 'Amos Mogaka'
          },
          {
            id: 2,
            name: 'Amos Mogaka'
          },
          {
            id: 3,
            name: 'Amos Mogaka'
          },
          {
            id: 4,
            name: 'Amos Mogaka'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
