<template>
  <div class="ct-text-center ">
    <ul class="ct-flex ct-border-brand-green-light ct-border">
      <li class="ct-bg-brand-green-light ct-h-12 ct-w-1/2">
        <a class="ct-text-brand-black ct-py-3 ct-px-4 ct-inline-block" href="#">Submitted Work</a>
      </li>
      <li class="ct-bg-white ct-h-12 ct-w-1/2">
        <router-link to="/request-work" class="admin-link ct-text-brand-black ct-py-3 ct-px-4 ct-inline-block hover:border-gray-200 hover:bg-gray-200" href="#">Requested Work</router-link>
      </li>
    </ul>
  </div>   
</template>

<script>

export default {
     name: 'AdminTab',
  data(){
    return {
    }
  },
}
</script>

<style scoped>
</style>