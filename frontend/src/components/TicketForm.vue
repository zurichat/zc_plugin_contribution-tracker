<template>
    <div class="ct-modal ct-fixed ct-z-50 ct-top-0 ct-left-0 ct-flex ct-items-center ct-justify-center" >
        <div class="ct-modal-overlay ct-absolute ct-w-screen ct-h-screen ct-bg-gray-800 ct-opacity-50"></div>
        <div class="ct-form1 ct-bg-white ct-flex ct-flex-col ct-p-4 ct-z-50 ct-rounded ct-shadow-lg z-50">
            <div class="tet3">
               <h1 class=" hello1 ">Add New Ticket</h1>
               <!--on click function to close the add new task form-->
               <div class="ct-cursor-pointer ">
                    <button class=" hello2 ct-mr-3 ct-mt-2" @click="TogglePopup">&#x2715;</button>
               </div>
            </div>
            <form class="ct-w-full ct-px-2 ct-pt-10 ct-flex ct-flex-col" @submit="AddTicket" method="post">
                <div class=" text1 ct-mb-50">
                    <div class="ct-mt-3 ct-ml-1 ">
                <p class="tet4 ct-text-sm ct-font-bold">Ticket Name</p>
                <input type="text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3 ct-border-2 ct-border-light-6 ct-rounded-md" name="ticketName" v-model="postTicket.ticketName">
            </div>
            <div class="ct-mt-3 ct-ml-1">
                <p class="tet4 ct-text-sm ct-font-bold">Description</p>
                <input type="text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" name="ticketDes" v-model="postTicket.ticketDes">
            </div>
            <div class="ct-mt-3 ct-ml-1">
                <p class="tet4 ct-text-sm ct-font-bold">Commit Link</p>
                <input type="text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" name="commitLink" v-model="postTicket.commitLink">
            </div>
            <div class="ct-mt-3 ct-ml-1">
                <p class="tet4 ct-text-sm ct-font-bold">Text Link</p>
                <input type="text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" name="textLink" v-model="postTicket.textLink">

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
// using axios to post the data from the form to the url
// script code for the onclick function to close the add new task form
    export default {
        name: 'FormTicket',
        props: ['TogglePopup'],
         data(){
            return{
                postTicket:{
                    ticketName:null,
                    ticketDes:null,
                    commitLink:null,
                    textLink:null
                }
            }
        },
        methods:{
            AddTicket(e){
                this.post("http://localhost:8081/v1/api/tickets", this.postTicket)
                .then((result)=>{
                    console.warn(result)
                })
                e.preventDefault();
            }
        }
    }
</script>
<style scoped>
.ct-modal {
  transition: opacity 0.25s ease;
  width: 100vw;
  height: 100vh;
}
.ct-form1 {
  width: 420px;
  height: 470px;
}
.hello1{
    min-width: fit-content;
    padding: 0px ;
    font-size: 25px;
    font-weight: bold;
    }
.hello2{
font-size: 20px;
}
.tet3{
    display: flex;
    justify-content: space-between;
}
body.ct-modal-active {
  overflow-x: hidden;
  overflow-y: visible !important;
}
.text1{
    margin-top: -30px;
}
.tet2:focus{
border: 1px solid rgb(231, 222, 222);
}
</style>