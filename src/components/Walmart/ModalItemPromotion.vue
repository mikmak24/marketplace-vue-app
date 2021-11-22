<template>
  <div class="fixed z-10 w-full inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" >&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl">
        <div class="bg-blue-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="showPromotionModal" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-xs border border-gray-700 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">X</button>
          <img class="object-contain h-10 w-full" src="../../assets/Walmart/walmart-icon.png" />
        </div>
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class=" border-t border-b bg-green-100 border-green-700 text-black px-4 py-3" role="alert">
                <p class="font-bold">Promotion Management</p>
                <p class="text-xs">Sellers can set regular or promotional prices for their items. Setting the Promotional prices is an option to create unique pricing for events such as clearance sales or to call out a comparison price</p>
            </div>

            <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Current Price Type</label>
                            <select v-model="data.currentpricetype" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>CLEARANCE</option>
                                <option>REDUCED</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium text-gray-700">Comparison Price Type</label>
                            <select v-model="data.comparisonpricetype" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>BASE</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Previous Currency</label>
                            <select v-model="data.oldcurrency" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>USD</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium text-gray-700">Previous Price: {{currentPrice}}</label>
                            <input v-model="data.oldprice" placeholder='Please enter an amount' class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number">
                        </div>
                         <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">New Currency</label>
                            <select v-model="data.newcurrency" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>USD</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium text-gray-700">New Price</label>
                            <input v-model="data.newprice" class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number">
                        </div>

                         <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">Price Display Code</label>
                            <select v-model="data.displaycode" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>CHECKOUT</option>
                                <option>CART</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium text-gray-700">Process Mode</label>
                             <select v-model="data.procesmode" id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>UPSERT</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="first-name" class="block text-sm font-medium text-gray-700">New Currency</label>
                            <input v-model="data.effectivedate" class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="datetime-local">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last-name" class="block text-sm font-medium text-gray-700">New Price</label>
                            <input v-model="data.expirationdate" class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="datetime-local">
                        </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="country" class="block text-sm font-medium text-gray-700">SKU</label>
                        <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>{{sku}}</option>
                        </select>
                    </div>

                    </div>
                </div>
              
                </div>
            </form>
            
        </div>
        <div class="bg-blue-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="$store.dispatch('wmpromotion/setpromotion', sku)" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Compare and Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import {mapState, mapGetters} from 'vuex';
export default {
    data(){
        return{
            orderInfo: '',
            orderDetails: []
        }
    },
    props: ['showPromotionModal', 'sku', 'currentPrice'],
    computed: {
        ...mapState({
            data: state => state.wmpromotion.data
        }) 
    },
    created() {
        this.$store.dispatch('wmpromotion/setSku', this.sku)
        this.$store.dispatch('wmpromotion/setOldPrice', this.currentPrice)
    },
    

}
</script>
