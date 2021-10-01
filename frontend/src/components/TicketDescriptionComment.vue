<template>
  <div>
    <div class="ct-flex ct-w-100 ct-h-screen ct-bg-red-500">
      <div class="ct-w-3/4 ct-bg-gray-600 ct-p-2"></div>
      <div class="ct-w-1/4 ct-bg-white">
        <div
          class="
            toolbar
            ct-bg-green-600
            ct-h-11
            ct-flex
            ct-justify-between
            ct-items-center
            ct-px-4
          "
        >
          <div class="toolbar-title ct-flex ct-items-center">
            <p class="ct-font-semibold ct-text-xl ct-text-white ct-pr-2">Description</p>
            <p class="ct-text-xs ct-text-gray-200">#Contribution-tracker</p>
          </div>
          <span class="close ct-cursor-pointer ct-w-5">
            <img src="@/assets/close.svg" alt="close icon" class="ct-w-full" />
          </span>
        </div>
        <div class="body">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TicketDescriptionComment",
  setup() {},
};
</script>
<style scoped>
</style>
