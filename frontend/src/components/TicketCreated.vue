<template>
    <div>
        <div v-for='(ticket, index) in tickets' @click="selectTicket(index)" :key="index" class="ct-flex ct-justify-between ct-items-center ct-p-4 ct-border-b ct-border-brand-gray-light-2">
            <div>
                <div class="ct-font-bold">{{ ticket.name }}</div>
                <div class="ct-text-brand-gray-light-1 ct-text-sm">{{ ticket.contributor }}</div>
            </div>
            <div class="ct-flex ct-items-center ct-h-5 ct-px-2 ct-bg-brand-gray-light-2 ct-space-x-1 ct-rounded-xl">
                <div><img class="ct-w-3" src="../assets/tick.png" alt="Up vote"></div>
                <div class="ct-text-sm">4</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        tickets() {
            return this.$store.state.tickets;
        }
    },
    methods: {
       selectTicket: function(index) {
           this.$store.commit('selectTicket', index);
           this.$store.commit('openDescription');
       }
    }
}
</script>