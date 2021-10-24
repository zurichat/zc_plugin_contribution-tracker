<template>
  <div class="ct-flex ct-h-screen">
    <div class="ct-flex-grow">
      <Header />
      <AddNewTicket @click="() => TogglePopup('buttonTrigger')">
      </AddNewTicket>
      <AddNewTicketModal v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')"> </AddNewTicketModal>
      <ContributionNavbar />
      <TicketList />
      <TicketCreated />
    </div>
    <div>
      <Description />
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import AddNewTicketModal from '@/components/AddNewTicketModal.vue'
import Header from '@/components/Header'
import AddNewTicket from '@/components/AddNewTicket'
import ContributionNavbar from '@/components/ContributionNavbar.vue'
import TicketList from '@/components/TicketList'
import TicketCreated from '@/components/TicketCreated'
import Description from '@/components/DescriptionSection'

export default {
  name: 'Home',
  components: { 
    Header, 
    AddNewTicket, 
    ContributionNavbar, 
    TicketList, 
    TicketCreated, 
    Description, 
    AddNewTicketModal
  },
  setup(){
    const popupTriggers = ref({
      buttonTrigger: false
    });
    const TogglePopup = (trigger) => {
       popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
    return{
      AddNewTicketModal,
      popupTriggers,
      TogglePopup 
    } 
  }
}
</script>
