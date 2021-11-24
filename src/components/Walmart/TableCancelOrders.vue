<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div class="my-2 flex sm:flex-row flex-col">
        <div class="flex items-center justify-center">
          <div class="flex border-2 border-gray-200 rounded">
            <input
              v-model="searchOrderID"
              type="text"
              class="px-4 py-2 w-80"
              placeholder="Search Order ID..."
            />
            <button
              @click="getSpecificID(searchOrderID)"
              class="px-4 text-white bg-green-600 border-l"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              @click="reload"
              class="px-4 text-white bg-blue-600 border-l"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <TableHead :tableRows="tableRows" />
            <tbody v-for="order in recentOrders" :key="order._id">
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{order.order_date}}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{order.purchase_order_id}}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{order.order_id}}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{order.grand_total_cost}}
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{order.order_item_id}}
                  </div>
                </td>
                 <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{order.quantity_ordered}}
                  </div>
                </td>
                 <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{order.unit_cost}}
                  </div>
                </td>
              
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    Cancelled
                  </div>
                </td>
                <td>
                  <div class="inline-flex">
                    <button
                      @click="showOrderDetails(order.eclipse_id)"
                      class="h-7 px-4 m-2 text-sm text-black transition-colors duration-150 border border-green-700 rounded-lg focus:shadow-outline hover:bg-white"
                    >
                      SDOrder
                    </button>
                    <button
                      @click="showShipmentDetails(order.eclipse_id)"
                      class="h-7 px-4 m-2 text-sm text-black transition-colors duration-150 border border-blue-700 rounded-lg focus:shadow-outline hover:bg-white"
                    >
                      SDShipment
                    </button>
                    <button
                      @click="showWalmartDetails(order.order_id)"
                      class="h-7 px-4 m-2 text-sm text-black transition-colors duration-150 border border-yellow-700 rounded-lg focus:shadow-outline hover:bg-white"
                    >
                      WalmartAPI
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <span class="text-xs xs:text-sm text-gray-900">
              Showing {{$store.state.wmdashboard.newOrdersCount}} Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
              >
                Prev
              </button>
              <button
                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalOrderDetails
      v-if="viewOrderDetails"
      :showOrderDetails="showOrderDetails"
      :eclipse_id="eclipse_id"
    />
    <ModalWalmartDetails
      v-if="viewDetails"
      :showWalmartDetails="showWalmartDetails"
      :order_id="order_id"
    />
    <ModalShipmentDetails
      v-if="viewShipmentDetails"
      :showShipmentDetails="showShipmentDetails"
      :eclipse_id="eclipse_id"
    />
  </div>
</template>
<script>
import TableHead from '@/components/Walmart/Tablehead'
import ModalOrderDetails from '@/components/Walmart/ModalOrderDetails'
import ModalWalmartDetails from '@/components/Walmart/ModalWalmartDetails'
import ModalShipmentDetails from '@/components/Walmart/ModalShipmentDetails'

export default {
  data(){
    return {
      tableRows: [
        'Order Date',
        'Purchase Order ID',
        'Order ID',
        'Grand Total Cost',
        'SKU',
        'Quantity Ordered',
        'Unit Cost',
        'Status',
        'Details'
      ],
      searchOrderID: '',
      viewDetails: false,
      viewOrderDetails: false,
      viewShipmentDetails: false,
      order_id: '',
      eclipse_id: ''
    }
  },
  props: ['recentOrders', 'getSpecificID'],
  components: {
    TableHead,
    ModalOrderDetails,
    ModalWalmartDetails,
    ModalShipmentDetails
  },
   methods: {
    showOrderDetails(eclipseId) {
      this.viewOrderDetails = !this.viewOrderDetails
      this.eclipse_id = eclipseId
    },
    showWalmartDetails(orderId){
      this.viewDetails = !this.viewDetails
      this.order_id = orderId
    },
    showShipmentDetails(eclipseId){
      this.viewShipmentDetails = !this.viewShipmentDetails
      this.eclipse_id = eclipseId
    },
    reload() {
      window.location.reload();
    }
  }
}
</script>
