<template>
<main class="flex w-full h-screen">
    <LoadingSpinner 
        v-if="showSpinner"
    /> 
    <aside class="w-60 ml-10 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <Sidebar />
    </aside>
    <section class="w-full">
        <Navbar />
        
    </section>
</main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Amazon/Navbar'
import LoadingSpinner from '@/components/LoadingSpinner'
import axios from 'axios';

export default {
  data(){
    return{
      recentOrders: [],
      newOrders: true,
      showSpinner: true
    }
  },
  components: {
    Sidebar,
    Navbar,
    LoadingSpinner
  },
  methods:{
 
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
        self.showSpinner = false
      });   
  }
}
</script>