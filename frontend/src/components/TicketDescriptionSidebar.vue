<template>
  <div>
      <!-- <div class="ct-bg-gray-600 ct-p-2" :class="toggleSidebarState? 'ct-w-full' : 'ct-w-3/4' "></div> -->
      <!-- SIDEBAR -->
      <div class="sidebar ct-relative ct-bg-white ct-w-full ct-h-full">
        <div class="toolbar ct-bg-brand-green-dark ct-h-12 ct-flex ct-justify-between ct-items-center ct-px-4 " >
          <div class="toolbar-title ct-flex ct-items-center ct-space-x-2 ct-text-white">
            <h4 class="ct-font-bold ct-text-lg ct-leading-8">Description</h4>
            <h6 class="ct-font-light ct-text-xs">#Contribution-Tracker</h6>
          </div>

          <span class="close ct-cursor-pointer ct-w-5" @click="toggleSidebar">
            <img src="@/assets/close.svg" alt="close icon" class="ct-w-full" />
          </span>
        </div>
        <!-- SIDEBAR BODY -->
        <div class="body ct-p-4 ct-relative">
          <p class="ct-text-lg ct-font-bold">Fix the top bar1</p>
          <!-- <p>{{toggleSidebarState}}</p> -->
          <p class="ct-text-gray-500 ct-text-sm ct-pb-5">
            #001 requested by Mark Essien
          </p>
          <span class="ct-flex ct-w-full ct-items-center ct-mb-3">
            <p class="ct-w-4/12 ct-text-gray-500 ct-text-sm">
              {{ messageCount }} comments
            </p>
            <hr class="ct-w-8/12" />
          </span>
          <!-- MESSAGE BODY -->
          <div class="message-body ct-mb-2 ct-overflow-y-scroll ct-h-86">
            <div
              class="message ct-flex ct-w-full ct-mb-3"
              v-for="(message, i) in messages"
              :key="i"
            >
              <div class="image ct-w-2/12">
                <img
                  :src="require(`@/assets/${message.userImage}.png`)"
                  alt="userImage"
                  class="ct-rounded-sm"
                />
              </div>
              <div class="text ct-w-10/12">
                <div class="headline ct-inline-flex ct-items-baseline">
                  <p class="ct-text-base ct-font-bold ct-pr-4">
                    {{ message.userName }}
                  </p>
                  <p class="ct-text-xs ct-text-gray-500">10:10 AM</p>
                </div>
                <div class="body ct-mb-1">
                  <p class="ct-text-sm ct-text-brand-black">
                    {{ message.message }}
                  </p>
                </div>
                <div class="message-reactions">
                  <div
                    class="
                      reaction
                      ct-mr-2
                      ct-cursor-pointer
                      ct-py-1
                      ct-px-2
                      ct-bg-gray-200
                      ct-inline-flex
                      ct-items-center
                      ct-rounded-full
                    "
                  >
                    <img
                      src="@/assets/tick.png"
                      alt="tick"
                      class="ct-w-3 ct-h-3 ct-mr-1"
                    />
                    <div class="reaction-count ct-text-xs">1</div>
                  </div>
                  <div
                    class="
                      reaction
                      ct-cursor-pointer
                      ct-py-1
                      ct-px-2
                      ct-bg-gray-200
                      ct-inline-flex
                      ct-items-center
                      ct-rounded-full
                    "
                  >
                    <img
                      src="@/assets/reject.png"
                      alt="reject"
                      class="ct-w-3 ct-h-3 ct-mr-1"
                    />
                    <div class="reaction-count ct-text-xs">1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- CHAT BOX -->
          <div class="chat-box ct-relative ct-w-full ct-border ct-h-20">
            <textarea
              class="
                ct-resize-none
                ct-border-gray-400
                ct-rounded-none
                ct-p-2
                ct-w-full
                ct-h-full
                placeholder-gray-500 placeholder-opacity-50
              "
              placeholder="Add a comment"
            ></textarea>
            <div
              class="
                chat-actions
                ct-px-1
                ct-flex
                ct-absolute
                ct-bg-white
                ct-bottom-1
                ct-inset-x-1
                ct-justify-between
                ct-w-full
              "
            >
              <span class="ct-flex">
                <img
                  class="ct-w-3 ct-h-3 ct-mr-2"
                  src="@/assets/lightning.svg"
                  alt="lightning"
                />
                <img
                  class="ct-w-3 ct-h-3 ct-mr-2"
                  src="@/assets/lighthr.svg"
                  alt="hr"
                />
                <img
                  class="ct-w-3 ct-h-3 ct-mr-2"
                  src="@/assets/bold.svg"
                  alt="hr"
                />
                <img
                  class="ct-w-3 ct-h-3 ct-mr-2"
                  src="@/assets/italic.svg"
                  alt="italic"
                />
                <img
                  class="ct-w-3 ct-h-3 ct-mr-2"
                  src="@/assets/hyperlink.svg"
                  alt="hyperlink"
                />
                <img src="@/assets/list.svg" alt="list" />
              </span>
              <span class="ct-flex">
                <img
                  class="ct-w-3 ct-h-3"
                  src="@/assets/atsign.svg"
                  alt="atsign"
                />
                <img
                  class="ct-w-3 ct-h-3 ct-ml-2"
                  src="@/assets/paperclip.svg"
                  alt="paperclip"
                />
                <img
                  class="ct-w-3 ct-h-3 ct-ml-2"
                  src="@/assets/sendbtn.svg"
                  alt="sendbtn"
                />
                <img
                  class="ct-w-3 ct-h-3 ct-ml-2"
                  src="@/assets/deephr.svg"
                  alt="hr2"
                />
                <img
                  class="ct-w-3 ct-h-3 ct-ml-2"
                  src="@/assets/downcaret.svg"
                  alt="downcaret"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { computed, inject, reactive } from "vue";
export default {
  name: "TicketDescriptionComment",
  props: [],
  setup() {
    const messages = reactive([
      {
        userName: "John Doe",
        message:
          "I can do it. I have fixed something similar for my team and i did it in a very short time frame. If given the opportunity, I promise not to dissapoint. Let me at it!",
        userImage: "user1",
      },
      {
        userName: "Mary Jane",
        message:
          "I can do it. I have fixed something similar for my team and i did it in a very short time frame. If given the opportunity, I promise not to dissapoint. Let me at it!",
        userImage: "user2",
      },
      {
        userName: "Mary Jane",
        message:
          "I can do it. I have fixed something similar for my team and i did it in a very short time frame. If given the opportunity, I promise not to dissapoint. Let me at it!",
        userImage: "user2",
      },
      {
        userName: "Deyrin Cutting",
        message:
          "I can do it. I have fixed something similar for my team and i did it in a very short time frame. If given the opportunity, I promise not to dissapoint. Let me at it!",
        userImage: "user3",
      },
    ]);
    const toggleSidebar = inject('toggleSidebar')
    return {
      messages,
      messageCount: computed(() => messages.length),
      toggleSidebar
    };
  },
};
</script>
<style scoped>
.ct-h-86{
  height: 22rem;
}
</style>
