<template>
<main class="flex w-full h-screen">
    <aside class="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <Sidebar />
    </aside>
    <section class="w-full">
        <Navbar />
        <UploadForm />
    </section>
</main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Walmart/Navbar'
import UploadForm from '@/components/Walmart/UploadForm'
import axios from 'axios'



export default {
  name: 'UploadItems',
  data(){
    return{
      pageName: 'Walmart Dashboard'
    }
  },
  components: {
    Sidebar,
    Navbar,
    UploadForm
  }
}
</script>