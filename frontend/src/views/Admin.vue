<template>
  <div class="ct-flex">
    <AddNewUser @click="toggleModal"/>
    <div class="ct-flex-grow">
      <ComponentHeader />
      <AddUser />
      <ContributionNavbar />
      <AdminTab />
      <p class="ct-p-3 ct-font-bold ct-text-brand-black">CreateTeamListView1</p>
      <VotersTable />
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader';
import AddUser from '@/components/AddVoter';
import ContributionNavbar from '@/components/ContributionNavbar.vue';
import AdminTab from '@/components/AdminTab.vue';
import VotersTable from '@/components/VotersTable.vue';
import AddNewUser from '@/components/AddNewUser.vue';

export default {
  name: 'Home',
  components: {
    ComponentHeader,
    AddUser,
    ContributionNavbar,
    AdminTab,
    VotersTable,
    AddNewUser,
  },
}
</script>
