<template>
<main class="flex w-full h-screen">
    <aside class="w-60 ml-10 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <Sidebar />
    </aside>
    <section class="w-full">
        <Navbar />
        <Card />
        <Table 
          :recentOrders = "recentOrders"
        />
    </section>
</main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Walmart/Navbar'
import Card from '@/components/Walmart/Card'
import Table from '@/components/Walmart/TableDashboard'
import axios from 'axios';

export default {
  name: 'Dashboard',
  data(){
    return{
      recentOrders: []
    }
  },
  components: {
    Sidebar,
    Navbar,
    Card,
    Table
  },
  created(){
    this.$store.dispatch('recentOrders').wmdashboard 
    this.recentOrders = this.$store.state.wmdashboard.recentOrders
  }
}
</script>