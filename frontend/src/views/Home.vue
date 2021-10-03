<template>
  <div class="ct-flex">
    <div class="ct-flex-grow ct-flex ct-flex-col">
      <div >
        <div class="ct-mb-8">
          <ComponentHeader />
        </div>
        <!--onclick function to open the add new task form-->
        <div class="ct-flex ct-justify-end ct-mb-8 ct-mr-4">
          <AddNewTicket @click="() => TogglePopup('buttonTrigger')">
          </AddNewTicket>
        </div>
        <FormTicket v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')"> </FormTicket>
        <ContributionNavbar />
        <TicketList />
        <TicketCreated />
      </div>
        <!-- <Archived /> -->
    </div>
    <div>
      <Description />
    </div>
      

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
// import Archived from '@/components/Archived'
import Description from '@/components/DescriptionSection'

export default {
  name: 'Home',
  components: { 
    ComponentHeader, 
    AddNewTicket, 
    ContributionNavbar, 
    TicketList, 
    TicketCreated, 
    // Archived, 
    Description, 
    FormTicket},
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
