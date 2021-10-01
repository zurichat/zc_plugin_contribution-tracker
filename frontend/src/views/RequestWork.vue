<template>
  <div class="ct-flex">
    <div class="ct-flex-grow">
      <div class="ct-mb-8">
        <ComponentHeader />
      </div>
      <div class="ct-flex ct-justify-end ct-mb-10 ct-mr-3">
        <AddUser />
      </div>
        <OngoingVoting />
        <VotersTable />        
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'
import AddUser from '@/components/AddUser'
import OngoingVoting from '@/components/OngoingVoting.vue'
import VotersTable from '@/components/VotersTable.vue'

export default {
  name: 'Home',
  components: { ComponentHeader, AddUser, OngoingVoting, VotersTable }
}
</script>
