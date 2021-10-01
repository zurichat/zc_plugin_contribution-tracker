<template>
  <div>
    <div class="ct-mb-8">
      <ComponentHeader />
    </div>
    <div class="ct-flex ct-justify-end ct-mb-10 ct-mr-3">
      <AddNewTicket />
    </div>
    <TicketList />
    <TicketCreated />
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'
import AddNewTicket from '@/components/AddNewTicket'
import TicketList from '@/components/TicketList'
import TicketCreated from '@/components/TicketCreated'
export default {
  name: 'Home',
  components: { ComponentHeader, AddNewTicket, TicketList, TicketCreated }
}
</script>
