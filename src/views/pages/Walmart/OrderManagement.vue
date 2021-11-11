<template>
<main class="flex w-full h-screen">
    <aside class="w-60 ml-10 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <Sidebar />
    </aside>
    <section class="w-full">
        <Navbar />
        <Card
        :newOrders = "newOrders"
         />
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
  data(){
    return{
      recentOrders: [],
      newOrders: true
    }
  },
  components: {
    Sidebar,
    Navbar,
    Card,
    Table
  },
  created(){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = { 
      "Accept": "application/json",
      "Authorization": usertoken
    };
    const self = this;
    const res = axios.get("http://127.0.0.1:8000/api/wmitems",{ headers })
      .then(
        function (response){
        self.recentOrders = response.data
      });   
  }
}
</script>