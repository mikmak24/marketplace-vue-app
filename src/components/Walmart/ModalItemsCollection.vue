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

        <AlertProductUpdated
            v-if="viewAlertProduct"
            :sku="sku"
        />

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
                      Last Updated Date
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.updated_at"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      SKU
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.prod_sku"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      WPID
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.prod_wpid"
                    />
                  </div>
                </div>
                
                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      UPC
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.prod_upc"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      GTIN
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.prod_gtin"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Name
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.prod_name"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Price
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.prod_price"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      Status
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.prod_status"
                    />
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <label
                      class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
                    >
                      LifeCycle
                    </label>
                    <input
                      readonly
                      class="appearance-none block w-full text-red-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      :placeholder="productInfo.prod_lifecycle_status"
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
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            X
          </button>
          <button
            @click="updateContent(productInfo.prod_sku)"
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Get Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import AlertProductUpdated from '@/components/Walmart/AlertProductUpdated'

export default {
    data(){
        return{
            productInfo: '',
            viewAlertProduct: false
        }
    },
    components: {
        AlertProductUpdated
    },
    props: ['showModal', 'sku', 'showAlertProduct'],
    methods: {
        updateContent(sku){
            const usertoken = 'Bearer ' + localStorage.getItem('userToken')
            const headers = { 
                "Accept": "application/json",
                "Authorization": usertoken
            };
            const params = {
                "sku": sku
            };
            const self = this;
            const res = axios.post("http://127.0.0.1:8000/api/wmupdatecontent", params, { headers })
            .then(
                function (response){
                console.log('Updating...')
                self.viewAlertProduct = true
                // self.showModal()
                //console.log(self.showAlertProduct)
            })  
                .catch(function(){
                console.log('Error!!');
            });
            }
    },
    created(){
        const sku = this.sku
        const usertoken = 'Bearer ' + localStorage.getItem('userToken')
        const headers = { 
        "Accept": "application/json",
        "Authorization": usertoken
        };
        const params = {
            "sku": sku
        };
        const self = this;
        const res = axios.post("http://127.0.0.1:8000/api/wmgetproduct", params, { headers })
        .then(
            function (response){
            self.productInfo = response.data
        })  
        .catch(function(){
          console.log('Error!!');
        });


    }
}
</script>
