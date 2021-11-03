<template>
<main class="flex w-full h-screen">
    <aside class="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <Sidebar />
    </aside>
    <section class="w-full">
        <Navbar />
        <Card />
        <Table 
          :recentOrders = recentOrders
        />
        <!-- <button @click="getUser()">{{recentOrders}}</button> -->

    </section>
</main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Walmart/Navbar'
import Card from '@/components/Walmart/Card'
import Table from '@/components/Walmart/Table'
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
        console.log(response.data[0].purchase_order_id)
      });   
  }
}
</script>