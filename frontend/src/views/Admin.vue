<template>
  <div class="ct-h-screen">
    <AddVoterModal @click="toggleModal"/>
    <Header />
    <AddVoter />
    <ContributionNavbar />
    <AdminTab />
    <div>
      <p class="ct-p-3 ct-font-bold ct-text-brand-black">CreateTeamListView1</p>
    </div>
    <VotersTable />
  </div>
</template>

<script>
import Header from '@/components/Header';
import AddVoter from '@/components/AddVoter';
import ContributionNavbar from '@/components/ContributionNavbar.vue';
import AdminTab from '@/components/AdminTab.vue';
import VotersTable from '@/components/VotersTable.vue';
import AddVoterModal from '@/components/AddVoterModal.vue';

export default {
  name: 'Home',
  components: {
    Header,
    AddVoter,
    ContributionNavbar,
    AdminTab,
    VotersTable,
    AddVoterModal,
  },
}
</script>
