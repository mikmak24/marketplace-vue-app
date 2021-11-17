<template>
  <main class="flex w-full h-screen">
    <LoadingSpinner 
      v-if="showSpinner"
    /> 
    <aside class="w-60 ml-10 h-screen shadow-md w-fulll hidden sm:block">
      <Sidebar />
    </aside>
    <section class="w-full">
      <Navbar />
       <Card
        :fullfilledOrders = "fullfilledOrders"
         />
      <Table 
        :recentOrders="recentOrders"
        :getSpecificID = "getSpecificID"
       />
    </section>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Walmart/Navbar'
import Card from '@/components/Walmart/Card'
import Table from '@/components/Walmart/TableCompleteOrders'
import LoadingSpinner from '@/components/LoadingSpinner'
import axios from 'axios';

export default {
  name: 'Dashboard',
  data(){
    return{
      pageName: 'Walmart Dashboard',
      recentOrders: [],
      fullfilledOrders: true,
      showSpinner: true
    }
  },
  components: {
    Sidebar,
    Navbar,
    Card,
    Table,
    LoadingSpinner
  },
  methods: {
     getSpecificID(eclipse_id){
        const usertoken = 'Bearer ' + localStorage.getItem('userToken')
        const headers = { 
        "Accept": "application/json",
        "Authorization": usertoken
        };
        const params = {
            "eclipseID": eclipse_id
        };
        const self = this;
        const res = axios.post("http://127.0.0.1:8000/api/wmsearcheclipseid", params, { headers })
        .then(
            function (response){
        self.recentOrders = response.data
        })  
        .catch(function(){
          console.log('Error!!');
        });
    }
  },
  created(){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = {
      "Accept": "application/json",
      "Authorization": usertoken
    };
    const self = this;
    const res = axios.get("http://127.0.0.1:8000/api/wmfullfilled",{ headers })
      .then(
        function (response){
        self.recentOrders = response.data
        self.showSpinner = false
      });
  }
}
</script>
