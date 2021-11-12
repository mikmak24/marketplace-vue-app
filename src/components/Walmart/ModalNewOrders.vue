<template>
  <div
    class="fixed z-10 w-full inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl"
      >
        <div class="bg-blue-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <img class="object-contain h-10 w-full" src="../../assets/Walmart/walmart-icon.png">
        </div>

        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div class="mt-2">
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      OrderDate
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.created_at"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      PurchaseOrderID
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.purchase_order_id"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      OrderID
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.order_id"
                    />
                  </div>
                </div>
                
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Website
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.website"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Customer Email
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.cust_email"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Grand Total Cost
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.grand_total_cost"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Eclipse ID
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.eclipse_id"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Has Shipment
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.has_shipment"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      In Eclipse
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.in_eclipse"
                    />
                  </div>
                </div>

                 <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Name
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.name"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Address
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.address1"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      City
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.city"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      State
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.state"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      ZIP
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.zip"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Country
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="orderInfo.country"
                    />
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div class="bg-blue-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            @click="showModal"
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            orderInfo: ''
        }
    },
    props: ['showModal', 'eclipse_id'],
    created(){
        const eclipseId = this.eclipse_id
        const usertoken = 'Bearer ' + localStorage.getItem('userToken')
        const headers = { 
        "Accept": "application/json",
        "Authorization": usertoken
        };
        const params = {
            "eclipse_id": eclipseId
        };
        const self = this;
        const res = axios.post("http://127.0.0.1:8000/api/wmgetNewOrder", params, { headers })
        .then(
            function (response){
            self.orderInfo = response.data
        })  
        .catch(function(){
          console.log('Error!!');
        });
    }
}
</script>
