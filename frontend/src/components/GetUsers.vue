<template>
  <div>
      <div v-for="(user, i) in users" :key="i">
          {{ user.name }}
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
    methods: {
        ...mapActions(["getAllUsers"])
    },
    computed: {
        ...mapGetters(["users"])
    },
    mounted() {
        this.getAllUsers()
        if(this.users.length > 0) {
            console.log(this.users);
        }
    }
}
</script>
