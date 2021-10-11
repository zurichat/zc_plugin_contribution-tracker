<template>
  <div class="ct-flex">
    <div class="ct-flex-grow ct-flex ct-flex-col">
      <div >
        <ComponentHeader />
        <!--onclick function to open the add new task form-->
        <AddNewTicket @click="toggleTicketModal">
        </AddNewTicket>
        <FormTicket v-if="addTicketModal"> </FormTicket>
        <ContributionNavbar />
        <TicketList />
        <TicketCreated />
      </div>
    </div>
    <div>
      <Description />
    </div>
  </div>
</template>

<script>
// imported ref and ticket form for the onclick function to work
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import FormTicket from '@/components/TicketForm.vue'
import ComponentHeader from '@/components/ComponentHeader'
import AddNewTicket from '@/components/AddNewTicket'
import ContributionNavbar from '@/components/ContributionNavbar.vue'
import TicketList from '@/components/TicketList'
import TicketCreated from '@/components/TicketCreated'
import Description from '@/components/DescriptionSection'

export default {
  name: 'Home',
  components: { 
    ComponentHeader, 
    AddNewTicket, 
    ContributionNavbar, 
    TicketList, 
    TicketCreated, 
    Description, 
    FormTicket
  },
  // created a function to show the add new ticket form when clicked 
  setup(){
    const store = useStore()
    return{
      FormTicket,
      addTicketModal: computed(() => store.getters.addTicketModal),
      toggleTicketModal: () => store.commit('toggleTicketModal')
    } 
  }
}
</script>
