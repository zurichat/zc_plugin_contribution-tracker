<template>
  <div class="about">



    <h1>This is an about page</h1>
    <!-- <Description /> -->
    <AdminTab />
    <GetUsers />

  </div>
</template>



<script>
import AdminTab from '@/components/AdminTab'
import GetUsers from '@/components/GetUsers'
// import Description from '@/components/DescriptionSection'
export default {
  components: {AdminTab, GetUsers }
}
</script>

