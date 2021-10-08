<template>
    <div class="ct-flex ct-justify-end ct-mb-8 ct-mr-3">
      <div class="ct-text-black  ">
        <button class="ct-py-3 ct-px-4 hover:ct-bg-green-200 ct-rounded ct-text-white ct-bg-brand-green-dark" @click="clicked = true">Request Feature</button>
        <div v-if="clicked" class="ct-fixed ct-w-screen ct-h-screen ct-backdrop-opacity-50 ct-inset-0 ct-bg-brand-backdrop ct-z-50">
            <div class="ct-relative ct-container ct-mx-auto ct-my-20 ct-w-1/3 ct-h-4/6 ct-bg-white ct-h-100 ct-p-5 ct-border ct-border-gray-300 ct-shadow-md ct-z-50 ct-text-black">
            <div class="ct-flex ct-z-20 ct-w-100 ct-justify-between">
            <h4 class="ct-text-xl ct-text-black ct-font-bold" >Request Feature</h4>
            <button @click="clicked = false" class="ct-text-2xl ct-font-light ct-bg-white ct-p-2"> x
            </button>
            </div>
            <div v-if="showError" class="ct-text-red-600 ct-text-xs ct-my-4">*Kindly Fill Both Fields</div>
            <div class="ct-my-6">
                <span class="ct-text-xs ct-font-bold">Name of Request</span>
                <div class="ct-w-full ct-h-10">
                    <input type='text' v-model="input1" class="ct-w-full ct-border ct-h-full ct-border-gray-300 ct-p-2"/>
                </div>
            </div>
            <div class="ct-my-6">
                <span class="ct-text-xs ct-font-bold" >Allocated time for voting <span class="ct-text-gray-500 ct-font-medium">(in minutes)</span></span>
                <div class="ct-w-full ct-h-10">
                    <input v-model="input2" type='text' class="ct-w-full ct-h-full ct-border ct-border-gray-300 ct-p-2"/>
                </div>
            </div>
            <div class="ct-absolute ct-bottom-4 ct-right-4">
                <button @click="submit()" class="ct-bg-brand-green-dark ct-text-white hover:ct-bg-brand-gray-light-2 ct-w-40 ct-h-12 ct-p-2">Request Feature</button>
            </div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "RequesFeatureButton",
    data(){
        return{
          clicked: false,
            showError: false,
            input1: '',
            input2: '',
            info: null
        }
    },
    methods: {
        submit () {
            if(this.input1 && this.input2){
                this.info = {
                requestName: this.input1,
                votingTime: this.input2
              }
                 this.showError = false
            this.clicked = false;
          }else{
              this.showError = true
          }
          this.input1 = ''
          this.input2 = ''
        }
    }
}
</script>

<style scoped>

</style>