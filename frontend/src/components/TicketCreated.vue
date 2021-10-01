<template>
    <div>
        <div v-for='ticket in tickets' :key="ticket.contributor" class="ct-flex ct-justify-between ct-items-center ct-px-3 ct-py-3 ct-border-b ct-border-brand-gray-light-2">
            <div>
                <div class="ct-font-bold">{{ ticket.name }}</div>
                <div class="ct-text-brand-gray-light-1 ct-text-sm">{{ ticket.contributor }}</div>
            </div>
            <div class="ct-flex ct-items-center ct-h-5 ct-px-2 ct-bg-brand-gray-light-2 ct-space-x-1 ct-rounded-xl">
                <div><img src="../assets/tick.png" alt="Up vote"></div>
                <div class="ct-text-sm">4</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tickets: [
                {
                    name: 'CreateTeamListView1',
                    contributor: '#001 added by John Doe'
                },
                {
                    name: 'CreateTeamListView2',
                    contributor: '#001 added by Jane Doe'
                },
                {
                    name: 'CreateTeamListView3',
                    contributor: '#001 added by Sarah Doe'
                }
            ]
        }
    }
}
</script>