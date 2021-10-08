<template>
  <div class="ct-flex ct-justify-end ct-mb-8 ct-mr-4">
    <div class="ct-inline-block ct-rounded-sm ct-px-4 ct-py-3 ct-bg-brand-green-dark hover:ct-bg-green-400">
      <button @click="toggleModal" type="submit" class="ct-text-white">Add Voter</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddVoter',
  methods: {
        toggleModal() {
            this.$store.commit('toggleUserModal');
        },
    },
}
</script>
<style scoped>
</style>

