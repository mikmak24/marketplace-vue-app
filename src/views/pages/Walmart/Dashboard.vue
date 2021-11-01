<template>
<main class="flex w-full h-screen">
    <aside class="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <Sidebar />
    </aside>
    <section class="w-full">
        <Navbar />
        <Card />
        <Table />
        <button @click="getUser()">Button</button>
        <h1>{{pageName}}</h1>

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
      pageName: 'Walmart Dashboard'
    }
  },
  components: {
    Sidebar,
    Navbar,
    Card,
    Table
  },
    methods: {
        async getUser(){  
            const article = { title: "Vue POST Request Example" };
            const headers = { 
              "Accept": "application/json",
              "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYwODQ3ODZkMzg4NjVkNjcxN2QyZjYzZGFjYzJmZjAyNzI3ZTE0NTIxNTVjYTU5ODRhM2MzMjkwMzYzMDAzMTMzOTdiMmU4NGE2OWJhMGJjIn0.eyJhdWQiOiIzIiwianRpIjoiNjA4NDc4NmQzODg2NWQ2NzE3ZDJmNjNkYWNjMmZmMDI3MjdlMTQ1MjE1NWNhNTk4NGEzYzMyOTAzNjMwMDMxMzM5N2IyZTg0YTY5YmEwYmMiLCJpYXQiOjE2MzU1MDY4NDIsIm5iZiI6MTYzNTUwNjg0MiwiZXhwIjoxNjY3MDQyODQyLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.aEzFAqpJb46FGhp2YxS7aLU-ddZzbAWTVtTnCcyEVgd9lGNGGMFv6OCe9f4SOrrvijmA29otXytiaKUhnaPnfym5t88RSlYpK3X_v1SmcnnvxlV-Mm_tRnq-CwTMhNKdbP9srGDf2LCNJj8yZU_EoAgwWu4up1n4r8FpLPOg2GfExEc0Au3jiEmyXchSxUfoGWSjRmNKjDkwe7QBuAmgaOFwuC9AI_jFpTRv3rcIEqjV5cCuynda17KdMx7aIVmy80ghHwhAUEoxkfBxaNpBC_wcam4bzGq17iURqRIW6U080u4Xlt8t03UhbPMIVPdIITxV2LBMvcDYcMsj3WM7eawdrV2w5b0EMEzdV11Om74fiCDmtJBO3aM4X9r_klIT18wEQz8s6hFSxTaXKNWDj7YBE4cVTE0OjOewqiQAx8W9ZG2wC12I8HPhHRrKLsYcfAh1EHEhCfr3d9eiCua0Nv-1J7DRGt1DriVOGSTDFhfGdfRAHwYh87yrxPa7iJ_dKv9xLbHLo0tffMwBgOUotXgY6kAlk1VVUQ3y7nbOwU1w-hHaIx5n2G48PqWLTDNKihNUekw7Izj1oGLBuJ1pc7RH3g7CtZHvNtQfEdqprfmAuLl89tY94s48X0wyYxAo22EvtNHyBXqbIouIotfuVbXjM0_nYITS3vjU51bgRxQ"
            };
            const res = axios.post("http://127.0.0.1:8000/api/test", article, { headers })
              .then(
                  function (response){
                  console.log(response.data.title)
              });   
        }
    }
}
</script>