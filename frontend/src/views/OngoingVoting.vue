<template>
  <div class="ct-flex">
    <div class="ct-flex-grow">
      <div class="ct-mb-8">
        <ComponentHeader />
      </div>
      <div class="ct-flex ct-justify-end ct-mb-8 ct-mr-4">
        <AddNewTicket />
      </div>
      <ContributionNavbar />
      <TicketList />
      <!-- <TicketCreated />
      <Archived /> -->
    </div>
    <div>
      <!-- <Description /> -->
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'
import AddNewTicket from '@/components/AddNewTicket'
import ContributionNavbar from '@/components/ContributionNavbar.vue'
import TicketList from '@/components/TicketList'
// import TicketCreated from '@/components/TicketCreated'
// import Archived from '@/components/Archived'
// import Description from '@/components/DescriptionSection'

export default {
    name: 'OngoingVoting',
    components: { 
        ComponentHeader, 
        AddNewTicket, 
        ContributionNavbar, 
        TicketList, 
        // TicketCreated, 
        // Archived, 
        // Description 
    }
}
</script>
