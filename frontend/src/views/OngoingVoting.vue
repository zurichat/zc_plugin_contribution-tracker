<template>
  <div class="ct-flex">
    <div class="ct-flex-grow">
      <ComponentHeader />
      <AddNewTicket />
      <ContributionNavbar />
      <TicketList />
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'
import AddNewTicket from '@/components/AddNewTicket'
import ContributionNavbar from '@/components/ContributionNavbar.vue'
import TicketList from '@/components/TicketList'

export default {
  name: 'OngoingVoting',
  components: { 
    ComponentHeader, 
    AddNewTicket, 
    ContributionNavbar, 
    TicketList, 
  }
}
</script>
