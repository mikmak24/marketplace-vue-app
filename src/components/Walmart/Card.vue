<template>
<div class="container mx-auto px-4 sm:px-8 mt-3">
    <div class="flex justify ...">
        <div :style="{ 'background-color': newOrdersColor}">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md ">
                <div class="p-3 rounded-full bg-green-600 bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">{{$store.state.wmdashboard.newOrdersCount}}</h4>
                    <div class="text-gray-500">New Orders (Weekly)</div>
                    <div class="text-green-600 text-sm"><router-link to="/wm-neworders">View Orders</router-link></div>
                </div>
            </div>
        </div>
        <div :style="{ 'background-color': fullfilledOrdersColor}">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md">
                <div class="p-3 rounded-full bg-yellow-600 bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">{{$store.state.wmdashboard.completeOrdersCount}}</h4>
                    <div class="text-gray-500">Orders Completed (Weekly)</div>
                    <div class="text-yellow-600 text-sm"><router-link to="/wm-completedorders">View Orders</router-link></div>
                </div>
            </div>
        </div>
        
        <div :style="{ 'background-color': eclipseOrdersColor}">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md">
                <div class="p-3 rounded-full bg-red-600 bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">{{$store.state.wmdashboard.passDueOrdersCount}}</h4>
                    <div class="text-gray-500">Pass Due Orders</div>
                    <div class="text-gray-700 text-sm"><router-link to="/wm-passorderstable">View Orders</router-link></div>
                </div>
            </div>
        </div>

        <div :style="{ 'background-color': cancelOrdersColor}">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md">
                <div class="p-3 rounded-full bg-black bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">{{$store.state.wmdashboard.cancelOrdersCount}}</h4>
                    <div class="text-gray-500">Cancelled Orders</div>
                    <div class="text-gray-700 text-sm"><router-link to="/wm-cancelorders">View Orders</router-link></div>
                </div>
            </div>
        </div>

    </div>
    </div>
</template>

<script>
export default {
    props: ['newOrders', 'fullfilledOrders', 'eclipseOrders', 'dueOrders', 'cancelOrders'],
    created(){
        this.$store.dispatch('newOrdersCount')
        this.$store.dispatch('completeOrdersCount')
        this.$store.dispatch('passDueOrdersCount')
        this.$store.dispatch('cancelOrdersCount')
    },
    computed: {
      newOrdersColor() {
        if(this.$props.newOrders){
            return "#dee0e3"
        }
      },
      fullfilledOrdersColor(){
        if(this.$props.fullfilledOrders){
            return "#dee0e3"
        }
      },
      eclipseOrdersColor(){
        if(this.$props.eclipseOrders){
            return "#dee0e3"
        }
      },
      dueOrdersColor(){
          if(this.$props.dueOrders){
            return "#dee0e3"
        }
      },
      cancelOrdersColor(){
          if(this.$props.cancelOrders){
            return "#dee0e3"
        }
      }
    }
}
</script>