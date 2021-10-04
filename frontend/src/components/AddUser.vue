<template>
  <div class="ct-inline-block ct-rounded-sm ct-px-4 ct-py-3 ct-bg-brand-green-dark hover:ct-bg-green-400">
    <button @click="toggleModal" type="submit" class="ct-text-white">Add User</button>
      <div v-for="(user, i) in users" :key="i">
          {{ user.id }}
      </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
export default {
   data() {
        return {
            // users: null,
        }
    },
  name: 'AddUser',
  methods: {
        toggleModal() {
            this.$store.commit('toggleUserModal');
        },
        ...mapActions(["getAllUSers"])
    },
    computed:{
      ...mapGetters(["users"])
    },
    mounted(){
      this.getAllUsers()
    }
}
</script>
<style scoped>
</style>

