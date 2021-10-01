<template>
  <div>
      <div class="form1 ct-mt-10 ct-ml-10">
          <div class="ct-absolute">
              <div class="ct-flex">
           <h1 class="tet1 ct-text-sm ct-ml-6 ct-mt-4">Add New Ticket</h1>  
            <button class=" tet2 mt-3 ">&#x2715;</button>
              </div>
            <div class="ct-mt-3 ct-ml-6">
                <p class="tet4 ct-text-xs ">Ticket Name</p>
                <input type="ct-text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" >
            </div>
            <div class="ct-mt-3 ct-ml-6">
                <p class="tet4 ct-text-xs ">Description</p>
                <input type="ct-text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" >
            </div>
            <div class="ct-mt-3 ct-ml-6">
                <p class="tet4 ct-text-xs ">Commit Link</p>
                <input type="ct-text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" >
            </div>
            <div class="ct-mt-3 ct-ml-6">
                <p class="tet4 ct-text-xs ">Text Link</p>
                <input type="ct-text" class="tet3 ct-min-w-full ct-h-9 ct-mt-3" >
            </div>
            <div>
             <button class="tet5 ct-mt-5 ct-p-2 ct-text-white">Add Ticket</button>
            </div>
          
          </div>
     
      </div>
  </div>
</template>

<script>
export default {
    name: 'TicketForm'
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