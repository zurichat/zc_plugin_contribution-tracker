<template>
    <div class="ct-w-96" v-if="description">
        <div class="ct-bg-brand-green-dark ct-text-white ct-p-4 ct-flex ct-items-center ct-justify-between">
            <div class="ct-flex">
                <h4 class="ct-mr-2 ct-font-bold">Description</h4>
                <h6 class="ct-font-light">#Contribution-Tracker</h6>
            </div>
            <div @click="closeDescription">
                <svg xmlns="http://www.w3.org/2000/svg" class="ct-w-5 ct-cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>

        
        <div class="ct-px-4 ct-py-7">
            <div>
                <div class="ct-flex ct-text-base">
                    <h4 class="ct-font-semibold ct-mr-2.5">{{ selectedTicket.name }}</h4>
                    <span class="ct-text-gray-400">#200</span>
                </div>
                <div class="ct-text-gray-400 ct-text-sm ct-flex">
                    <p class="ct-mr-2">John Doe added this ticket 2 hours ago</p>
                    <!-- A dot goes here. I haven't found icon yet  -->
                    <p>3 votes</p>
                </div>
            </div>
            <div class="ct-mt-5">
                <h4 class="ct-font-semibold">Description</h4>
                <p class="ct-mt-3">{{ selectedTicket.description }}</p>
            </div>
            <div class="ct-mt-8">
                <div>
                    <span>Commit Link: </span>
                    <span class="ct-text-brand-green-dark"><a :href="selectedTicket.commit" target="_blank">{{ selectedTicket.commit }}</a></span>
                </div>
                <div class="ct-mt-4">
                    <span>Test Link: </span>
                    <span class="ct-text-green-500"><a :href="selectedTicket.test" target="_blank">{{ selectedTicket.test }}</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        selectedTicket() {
            return this.$store.state.selectedTicket;
        },
        description() {
            return this.$store.state.description;
        }
    },
    methods: {
        closeDescription: function() {
            this.$store.commit('closeDescription');
        }
    }
}
</script>