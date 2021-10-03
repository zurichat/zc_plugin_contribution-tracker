<template>
    <div class="">
      <div class="ct-flex ct-justify-between ct-text-brand-black ct-font-bold ct-pl-6 ct-pr-3">
          <div class="ct-text-brand-black">Comments <span class="ct-text-brand-gray-light-1 ct-font-medium">(Voting ends 10 minutes after the first comment)</span> </div>
          <div class="">Votes</div>
      </div>

      <div v-for="comment in comments" :key="comment.id" class="ct-flex ct-justify-between ct-bg-brand-gray-light-5 ct-pl-6 ct-pr-3 ct-my-1 ct-py-1" >
        <div class="ct-text-brand-gray-light-1">
          {{comment.name}}
        </div>       
        <div class="ct-flex ct-space-x-2 ct-items-center">
          <div class="ct-flex ct-items-center ct-h-5 ct-px-2 ct-bg-brand-gray-light-2 ct-space-x-1 ct-rounded-xl">
              <div><img class="ct-w-3" src="../assets/tick.png" alt="Up vote"></div>
              <div class="ct-text-sm">4</div>
          </div>
            <div class="ct-flex ct-items-center ct-h-5 ct-px-2 ct-bg-brand-gray-light-2 ct-space-x-1 ct-rounded-xl">
                <div><img class="ct-w-3" src="../assets/reject.png" alt="Down vote"></div>
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
