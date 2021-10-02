<template>
  <div class="ct-flex">
    <div class="ct-flex-grow">
      <div class="ct-mb-8">
        <ComponentHeader />
      </div>
      <div class="ct-flex ct-justify-end ct-mb-10 ct-mr-3">
        <RequestFeatureButton />
      </div>
        <ContributionNavbar />
        <RequestedFeatures />      
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'
import RequestedFeatures from '@/components/RequestedFeatures'
import RequestFeatureButton from '@/components/RequestFeatureButton'
import ContributionNavbar from '@/components/ContributionNavbar.vue'

export default {
  name: 'RequestFeature',
  components: { ComponentHeader, RequestedFeatures, RequestFeatureButton, ContributionNavbar }
}
</script>
