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
          <button
            @click="showWalmartDetails"
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-xs border border-gray-700 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            X
          </button>
          <img
            class="object-contain h-10 w-full"
            src="../../assets/Walmart/walmart-icon.png"
          />
        </div>

        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <pre class="text-sm">{{orderDetails}}</pre>
        </div>
        <div class="bg-blue-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            @click="showWalmartDetails"
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Compare and Update
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
            orderInfo: '',
            orderDetails: []
        }
    },
    props: ['showWalmartDetails', 'order_id'],
    created(){
        const orderId = this.order_id
        const usertoken = 'Bearer ' + localStorage.getItem('userToken')
        const headers = {
        "Accept": "application/json",
        "Authorization": usertoken
        };
        const params = {
            "order_id": orderId
        };
        const self = this;
        const res = axios.post("http://127.0.0.1:8000/api/wmgetwalmartdetails", params, { headers })
        .then(
            function (response){
            self.orderDetails = response.data.order
            //self.orderInfo = response.data
        })
        .catch(function(){
          console.log('Error!!');
        });
    }
}
</script>
