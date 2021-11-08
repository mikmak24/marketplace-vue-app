<template>
  <div class="flex flex-col mt-8">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <table class="table-auto">
          <TableHead 
            :tableRows =  "tableRows"
          />
          <tbody class="bg-white" v-for="order in recentOrders" :key="order._id">
            <tr class="text-sm">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15 text-red-600">
                    {{order.created_at}}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    {{order.purchase_order_id}}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15">
                    {{order.order_id}}
                  </div>
                </div>
              </td>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15">
                    {{order.website}}
                  </div>
                </div>
              </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-5 w-15">
                    {{order.name}}
                  </div>
                </div>
              </td>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10">
                    {{order.grand_total_cost}}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15">
                    {{order.eclipse_id}}
                  </div>
                </div>
              </td>
               <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-15">
                    {{order.has_shipment}}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import TableHead from '@/components/Walmart/Tablehead'
export default {
  data(){
    return {
      tableRows: [
        'Order Date',
        'Purchase Order ID',
        'Order ID',
        'Website',
        'Name',
        'Grand Total Cost',
        'Eclipse ID',
        'Has Shipment'
      ]
    }
  },
  props: ['recentOrders'],
  components: {
    TableHead
  }
}
</script>
