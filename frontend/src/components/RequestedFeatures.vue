<template>
  <div class="">
    <div class="ct-p-3 ct-font-medium ct-bg-brand-green-light">List of requested features</div>
    <div class="ct-p-3">
      <div class="ct-text-brand-black ct-font-bold">Fix the top bar1</div>
      <p class="ct-text-brand-gray-light-1">#001 request added by Mark Essien at 10:00AM</p>
    </div>
    <!-- <div class="ct-p-3">
      <div class="ct-text-brand-black ct-font-bold">{{features.featureTitle}}</div>
      <p class="ct-text-brand-gray-light-1">#001 request added by Mark Essien at 10:00AM</p>
    </div> -->
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  name: "RequestedFeatures",
  setup(){
    const store = useStore()
    onMounted(() => {
      store.dispatch("getAllFeatures")
    })
    return{
      features: computed(() => store.getters.features)
    }
  }
};
</script>