<template>
  <div>
    <div class="ct-mb-8">
      <ComponentHeader />
    </div>
    <div class="ct-flex ct-justify-end ct-mb-10 ct-mr-3">
      <AddNewTicket />
    </div>
    <OngoingVoting />
    <TicketList />
    <TicketCreated />
    <Archived />
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'
import AddNewTicket from '@/components/AddNewTicket'
import OngoingVoting from '@/components/OngoingVoting.vue'
import TicketList from '@/components/TicketList'
import TicketCreated from '@/components/TicketCreated'
import Archived from '@/components/Archived'

export default {
  name: 'Home',
  components: { ComponentHeader, AddNewTicket, OngoingVoting, TicketList, TicketCreated, Archived }
}
</script>
