<template>
  <div class="ct-flex ct-w-100 ct-h-screen ct-gap-2">
    <div class="ct-flex-grow">
      <ComponentHeader />
      <RequestFeatureButton />
      <ContributionNavbar />
      <RequestedFeatures @click="toggleSidebar" />
      <div><Comments /></div>     
    </div>
    <div :class="toggleSidebarState ? 'ct-w-96' : 'ct-hidden' ">
      <TicketDescriptionSidebar/>
    </div>
  </div>
  
</template>

<script>
import { provide, ref } from '@vue/runtime-core'
import ComponentHeader from '@/components/ComponentHeader'
import RequestedFeatures from '@/components/RequestedFeatures'
import RequestFeatureButton from '@/components/RequestFeatureButton'
import ContributionNavbar from '@/components/ContributionNavbar.vue'
import Comments from '../components/Comments.vue'
import TicketDescriptionSidebar from '../components/TicketDescriptionSidebar.vue'

export default {
  name: 'RequestFeature',
  components: { ComponentHeader, RequestedFeatures, RequestFeatureButton, ContributionNavbar, TicketDescriptionSidebar, Comments},
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
