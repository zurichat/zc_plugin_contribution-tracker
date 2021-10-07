<template>
  <div class="ct-text-center ">
    <ul class="ct-flex ct-border-brand-green-light ct-border">
      <li class="ct-h-12 ct-w-1/2">
        <router-link to="/admin" class="admin-link ct-text-brand-black ct-py-3 ct-px-4 ct-inline-block" href="#">Submitted Work</router-link>
      </li>
      <li class="ct-bg-white ct-h-12 ct-w-1/2">
        <router-link to="admin/request-work" class="admin-link ct-text-brand-black ct-py-3 ct-px-4 ct-inline-block hover:border-gray-200 hover:bg-gray-200" href="#">Requested Work</router-link>
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
a.router-link-active {
  background-color: #E1FDF4;
  color: '#1D1C1D';
  font-weight: 700;
}
</style>