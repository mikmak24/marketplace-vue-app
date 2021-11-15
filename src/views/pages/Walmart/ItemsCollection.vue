<template>
<main class="flex w-full h-screen">
    <aside class="w-60 ml-10 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <Sidebar />
    </aside>
    <section class="w-full">
        <Navbar />
        <Table 
          :products = "products"
        />
    </section>
</main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Walmart/Navbar'
import Table from '@/components/Walmart/TableItemsCollection'
import axios from 'axios';

export default {
  data(){
    return{
      products: [],
      newOrders: true
    }
  },
  components: {
    Sidebar,
    Navbar,
    Table
  },
  created(){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = { 
      "Accept": "application/json",
      "Authorization": usertoken
    };
    const self = this;
    const res = axios.get("http://127.0.0.1:8000/api/wmitemscollection",{ headers })
      .then(
        function (response){
        self.products = response.data
      });   
  }
}
</script>