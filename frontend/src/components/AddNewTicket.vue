<template>
  <div class="ct-inline-block ct-rounded-sm ct-px-4 ct-py-3 ct-bg-brand-green-dark ">
    <button  @click="toggleModal" type="submit" class="ct-text-white">Add New Ticket</button>
  </div>
</template>

<script>
export default {
  name: 'AddNewTicket',
  methods: {
    toggleModal() {
      this.$store.commit('toggleUserModal');
    },
  },
}
</script>

<style scoped>
</style>
