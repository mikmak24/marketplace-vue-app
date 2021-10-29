<template>
<main class="flex w-full h-screen">
    <aside class="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
        <Sidebar />
    </aside>
    <section class="w-full">
        <CardDashboard />
    </section>
</main>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import CardDashboard from '@/components/CardDashboard'

export default {
  name: 'Home',
  components: {
    Sidebar,
    CardDashboard
  },
  methods:{
    
  }
}
</script>