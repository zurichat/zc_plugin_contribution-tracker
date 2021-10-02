<template>
  <div class="ct-flex">
    <div class="ct-flex-grow">
      <div class="ct-mb-8">
        <ComponentHeader />
      </div>
      <div class="ct-flex ct-justify-end ct-mb-8 ct-mr-4">
        <AddUser />
      </div>
        <ContributionNavbar />
        <AdminNav />
        <VotersTable />
    </div>
  </div>
</template>

<script>
import ComponentHeader from '@/components/ComponentHeader'
import AddUser from '@/components/AddUser'
import ContributionNavbar from '@/components/ContributionNavbar.vue'
import AdminNav from '@/components/AdminNav.vue'
import VotersTable from '@/components/VotersTable.vue'

export default {
    name: 'Home',
    components: {
        ComponentHeader,
        AddUser,
        ContributionNavbar,
        AdminNav,
        VotersTable
    }
}
</script>
