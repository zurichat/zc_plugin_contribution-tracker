<template>
  <div >  
    <div class="ct-inline-block ct-rounded-sm ct-px-4 ct-py-3 ct-bg-brand-green-dark hover:ct-bg-green-400">
      <button @click="toggleModal" type="submit" class="ct-text-white">Add User</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddUser',
  methods: {
        toggleModal() {
            this.$store.commit('toggleUserModal');
        },
    },
}
</script>
<style scoped>
</style>

