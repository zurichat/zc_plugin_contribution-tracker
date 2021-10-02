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
        <ContributionNavbar />
<<<<<<< HEAD
        <AdminNav />
        <VotersTable />
=======
        <AdminTab />
        <VotersTable />        
>>>>>>> 33668c3e1e77b2c234371ab5c3ac062435a356c8
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader';
import AddUser from '@/components/AddUser';
import ContributionNavbar from '@/components/ContributionNavbar.vue';
import AdminTab from '@/components/AdminTab.vue';
import VotersTable from '@/components/VotersTable.vue';
import AddNewUser from '@/components/AddNewUser.vue';

export default {
    name: 'Home',
<<<<<<< HEAD
    components: {
        ComponentHeader,
        AddUser,
        ContributionNavbar,
        AdminNav,
        VotersTable
    }
=======
    components: { 
        ComponentHeader, 
        AddUser, 
        ContributionNavbar, 
        AdminTab, 
        VotersTable,
        AddNewUser,
    },
    
>>>>>>> 33668c3e1e77b2c234371ab5c3ac062435a356c8
}
</script>
