<template>

    <div class="ct-modal ct-fixed ct-z-50 ct-top-0 ct-left-0 ct-flex ct-items-center ct-justify-center" :class="{'ct-opacity-0': this.$store.state.addUserModalActive,'ct-pointer-events-none': this.$store.state.addUserModalActive, 'ct-modal-active': this.$store.state.addUserModalActive}">
        <div class="ct-modal-overlay ct-absolute ct-w-screen ct-h-screen ct-bg-gray-800 ct-opacity-50"></div>
        <div class="ct-form1 ct-bg-white ct-flex ct-flex-col ct-p-4 ct-z-50 ct-rounded ct-shadow-lg z-50">
            <div class="tet3">
               <h1 class=" hello1  ">Add New Ticket</h1>
               <div class="ct-cursor-pointer " @click="modalControl">
                    <button class=" hello2 ct-mr-3 ct-mt-2">&#x2715;</button>
               </div>
            </div>
            <form class="ct-w-full ct-px-2 ct-pt-10 ct-flex ct-flex-col" @submit.prevent="AddNewTicket()">
                <div class=" text1 ct-mb-50">
                    <div class="ct-mt-3 ct-ml-1">
                <p class="tet4 ct-text-sm ct-font-bold ct-font-bold">Ticket Name</p>
                <input type="text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" >
            </div>
            <div class="ct-mt-3 ct-ml-1">
                <p class="tet4 ct-text-sm ct-font-bold">Description</p>
                <input type="text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" >
            </div>
            <div class="ct-mt-3 ct-ml-1">
                <p class="tet4 ct-text-sm ct-font-bold">Commit Link</p>
                <input type="text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" >
            </div>
            <div class="ct-mt-3 ct-ml-1">
                <p class="tet4 ct-text-sm ct-font-bold">Text Link</p>
                <input type="text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" >

            </div>
                    
                </div>
                <div class="ct-cursor-pointer ct-flex ct-justify-end ct-mt-4">
                    <button type="submit" class="ct-w-36  ct-bg-green-500 ct-p-3 ct-px-4 hover:ct-bg-green-400 ct-rounded ct-text-white">Add New Ticket</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'FormTicket',
        methods: {
            modalControl(){
                this.$store.commit('toggleUserModal');
            },
        },
        computed:{
        },
    }
</script>

<style>
    .form1{
        position: relative;
        height: 419px;
        width: 300px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 1px 1px 10px rgba(228, 225, 225, 0.5);
    }
    .tet1{
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        line-height: 34px;
    }
    .tet2{
        margin-left: 140px;
    }
    .tet2:focus{
        border: 1px solid rgb(231, 222, 222);
    }
    .tet3{
        border: 1px solid  rgb(231, 222, 222);
        border-radius: 3px;
    }
    .tet4{
        color: rgba(29, 28, 29, 1);
        font-style: normal;
    }
    .tet5{
        background: #00B87C;
        border-radius: 3px;
        margin-left: 100px;
    }
</style>