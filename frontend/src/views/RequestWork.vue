<template>
  <div class="ct-flex">
    <AddNewUser @click="toggleModal"/>
    <div class="ct-flex-grow">
      <div class="ct-mb-8">
        <ComponentHeader />
      </div>
      <div class="ct-flex ct-justify-end ct-mb-8 ct-mr-4">
        <AddUser />
      </div>
        <!-- <RequestedFeatures /> -->
        <ContributionNavbar />
        <AdminTab />
        <div class="ct-p-3">
            <div class="ct-text-brand-black ct-font-bold">Fix the top bar1</div>
            <p class="ct-text-brand-gray-light-1">#001 request added by Mark Essien at 10:00AM</p>
        </div>
        <p class="ct-p-3 ct-font-bold ct-text-brand-black">Comment: John Doe at 10:10am</p>  
        <VotersTable />
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader';
import AddUser from '@/components/AddUser';
import ContributionNavbar from '@/components/ContributionNavbar.vue';
// import RequestedFeatures from '@/components/RequestedFeatures.vue';
import AdminTab from '@/components/AdminTab.vue';
import VotersTable from '@/components/VotersTable.vue';
import AddNewUser from '@/components/AddNewUser.vue';

export default {
    name: 'Home',
    components: {
        ComponentHeader,
        AddUser,
        ContributionNavbar,
        // RequestedFeatures,
        AdminTab,
        VotersTable,
        AddNewUser,
    },

}
</script>
