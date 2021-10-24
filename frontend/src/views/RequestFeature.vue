<template>
  <div class="ct-flex ct-h-screen ct-gap-2">
    <RequestFeatureModal/>
    <div class="ct-flex-grow">
      <Header />
      <RequestFeatureButton/>
      <ContributionNavbar />
      <RequestedFeatures @click="toggleSidebar" />
      <Comments />    
    </div>
    <div :class="toggleSidebarState ? 'ct-w-96' : 'ct-hidden' ">
      <TicketDescriptionSidebar/>
    </div>
  </div> 
</template>

<script>
import RequestFeatureModal from '@/components/RequestFeatureModal'
import Header from '@/components/Header'
import RequestedFeatures from '@/components/RequestedFeatures'
import RequestFeatureButton from '@/components/RequestFeatureButton'
import ContributionNavbar from '@/components/ContributionNavbar.vue'
import Comments from '../components/Comments.vue'
import TicketDescriptionSidebar from '../components/TicketDescriptionSidebar.vue'
import { provide, ref } from '@vue/runtime-core'

export default {
  name: 'RequestFeature',
  components: {RequestFeatureModal, Header, RequestedFeatures, RequestFeatureButton, ContributionNavbar, TicketDescriptionSidebar, Comments},
  setup(){
    const toggleSidebarState = ref(false);
    const toggleSidebar = () => {
      toggleSidebarState.value = !toggleSidebarState.value;
    };
    provide('toggleSidebar', toggleSidebar)
    return {
      toggleSidebar,
      toggleSidebarState,
    }
  }
}
</script>
