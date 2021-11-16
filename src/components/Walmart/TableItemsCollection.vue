<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div class="my-2 flex sm:flex-row flex-col">
        <div class="flex items-center justify-center ">
          <div class="flex border-2 border-gray-200 rounded">
              <input v-model="searchSku" type="text" class="px-4 py-2 w-80" placeholder="Search...">
              <button @click="getSpecificSku(searchSku)" class="px-4 text-white bg-green-600 border-l ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button @click="reload" class="px-4 text-white bg-blue-600 border-l">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
          </div>
        </div>
       
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <TableHead :tableRows="tableRows" />
            <tbody v-for="product in products" :key="product._id">
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                  >
                    <span
                      aria-hidden
                      class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                    ></span>
                    <span class="relative">{{product.updated_at}}</span>
                  </span>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{product.prod_sku}}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{product.prod_wpid}}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{product.prod_upc}}
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{product.prod_gtin}}
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{product.prod_name}}
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{product.prod_price}}
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{product.prod_status}}
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{product.prod_lifecycle_status}}
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    {{product.prod_mart}}
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <button
                      @click="showModal(product.prod_sku)"
                      class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      View
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
     <ItemsCollectionModal
      v-if="viewModal"
      :showModal="showModal"
      :sku="sku"
    />
  </div>
</template>
<script>
import TableHead from '@/components/Walmart/Tablehead'
import ItemsCollectionModal from '@/components/Walmart/ModalItemsCollection'
import axios from 'axios';

export default {
  data(){
    return {
      tableRows: [
        'Updated_At',
        'Sku',
        'WPID',
        'UPC',
        'GTIN',
        'Name',
        'Price',
        'Status',
        'LifeCycle',
        'Mart'
        ],
      viewModal: false,
      sku: '',
      searchSku: ''
    }
  },
  props: ['products', 'getSpecificSku'],
  components: {
    TableHead,
    ItemsCollectionModal,
  },
   methods: {
    showModal(sku){
      this.viewModal = !this.viewModal
      this.sku = sku  
    },
    reload(){
      window.location.reload();
    }
  },
  created(){
    let urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('sku')){
       this.showModal(urlParams.get('sku'))
    }
  },
  // watch: {
  //   '$data': {
  //     handler: function(newValue) {
  //       console.log(newValue.searchSku)
  //     },
  //     deep: true
  //   }
  // }
}
</script>
