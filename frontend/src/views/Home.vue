<template>
  <div class="ct-flex">
    <div class="ct-flex-grow">
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
    <div>
      <Description />
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'
import AddNewTicket from '@/components/AddNewTicket'
import OngoingVoting from '@/components/OngoingVoting.vue'
import TicketList from '@/components/TicketList'
import TicketCreated from '@/components/TicketCreated'
import Archived from '@/components/Archived'
<<<<<<< HEAD

export default {
  name: 'Home',
  components: { ComponentHeader, AddNewTicket, OngoingVoting, TicketList, TicketCreated, Archived }
=======
import Description from '@/components/DescriptionSection'

export default {
  name: 'Home',
  components: { ComponentHeader, AddNewTicket, OngoingVoting, TicketList, TicketCreated, Archived, Description }
>>>>>>> 18020f1700d7affd8669d32558751af1ce96baa0
}
</script>
