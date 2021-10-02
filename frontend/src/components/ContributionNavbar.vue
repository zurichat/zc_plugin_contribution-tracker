<template>
    <div class="ct-w-full ct-mx-auto">
      <tabs>
          <ul class="ct-flex ct-px-4 ct-py-3 ct-cursor-pointer ct-gap-6">
            <li class="ct-font-bold ct-text-brand-black"><router-link to="/">Ongoing Voting</router-link></li>
            <li class="ct-text-brand-gray-light-1"><router-link to="/request-feature">Requested features</router-link></li>
            <li class="ct-text-brand-gray-light-1"><router-link to="/admin">Admin</router-link></li>
          </ul>
       </tabs>
    </div>   
</template>

<script>

export default {
     name: 'ContributionNavbar',
  data(){
    return {
    }
  },
}
</script>

<style scoped>
</style>