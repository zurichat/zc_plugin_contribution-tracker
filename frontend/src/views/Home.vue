<template>
  <div class="ct-flex">
    <div class="ct-flex-grow ct-flex ct-flex-col">
      <div>
        <ComponentHeader />
        <!--onclick function to open the add new task form-->
        <AddNewTicket @click="() => TogglePopup('buttonTrigger')">
        </AddNewTicket>
        <FormTicket v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')"> </FormTicket>
        <ContributionNavbar />
        <TicketList />
        <TicketCreated />
      </div>
    </div>
    <Description />   
  </div>
</template>

<script>
// imported ref and ticket form for the onclick function to work
import {ref} from 'vue'
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
    const popupTriggers = ref({
      buttonTrigger: false
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
    return{
      FormTicket,
      popupTriggers,
      TogglePopup 
    } 
  }
}
</script>
