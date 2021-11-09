<template>
  <div class="flex flex-col mt-8">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <table class="w-full">
          <TableHead 
            :tableRows =  "tableRows"
          />
          <tbody class="bg-white" v-for="order in recentOrders" :key="order._id">
            <tr class="text-sm">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15 text-red-600">
                    {{order.msn}}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    {{order.eclipse_id}}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15">
                    {{order.shipping_expense}}
                  </div>
                </div>
              </td>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    {{order.carrier_type}}
                  </div>
                </div>
              </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-5 w-15">
                    {{order.carrier_method}}
                  </div>
                </div>
              </td>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10">
                    {{order.tracking_number}}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15">
                    {{order.ship_date}}
                  </div>
                </div>
              </td>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15">
                    <button @click="showModal(order.eclipse_id)" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      View
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <OrdersModal 
      v-if="viewModal"
      :showModal="showModal"
      :eclipse_id="eclipse_id"
    
    />
  </div>
</template>
<script>
import TableHead from '@/components/Walmart/Tablehead'
import OrdersModal from '@/components/Walmart/OrdersModal'

export default {
  data(){
    return {
       tableRows: [
        'MSN',
        'EclipseID',
        'Shipping Expense',
        'Carrier Type',
        'Carrier Method',
        'Tracking Number',
        'Ship Date',
      ],
      viewModal: false,
      eclipse_id: ''
    }
  },
  props: ['recentOrders'],
  components: {
    TableHead,
    OrdersModal
  },
  methods: {
    showModal(eclipseId){
      this.viewModal = !this.viewModal
      this.eclipse_id = eclipseId
    }
  }
}
</script>
