<template>
  <main class="flex w-full h-screen">
    <aside class="w-60 ml-10 h-screen shadow-md w-fulll hidden sm:block">
      <Sidebar />
    </aside>
    <section class="w-full">
      <Navbar />
      <div class="flex justiyfy">
        <div class="w-1/2 md:w-50 flex items-center px-5 py-6 shadow-sm rounded-md">
           <div class="flex items-center shadow-sm rounded-md bg-white">
                <div class="p-3 rounded-full bg-yellow-600 bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                    <div class="text-gray-500">Orders Fullfiled</div>
                </div>
            </div>
        </div>
      </div>
      <Table 
        :recentOrders="recentOrders"
        :tableRows="tableRows"
       />
    </section>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Walmart/Navbar'
import Card from '@/components/Walmart/Card'
import Table from '@/components/Walmart/TableOrders'
import axios from 'axios';

export default {
  name: 'Dashboard',
  data(){
    return{
      pageName: 'Walmart Dashboard',
      recentOrders: [],
    }
  },
  components: {
    Sidebar,
    Navbar,
    Card,
    Table
  },
  created(){
    this.$store.dispatch('ordersFullfilled').wmdashboard 
    this.recentOrders = this.$store.state.wmdashboard.ordersFullfilled
  }
}
</script>
