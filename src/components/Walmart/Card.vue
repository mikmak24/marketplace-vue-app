<template>
    <div class="flex justify ...">
        <div w-24>
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div class="p-3 rounded-full bg-yellow-600 bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                    <div class="text-gray-500">Orders Fullfiled</div>
                    <div class="text-yellow-600 text-sm"><router-link to="/wm-orderstable">View Orders</router-link></div>
                </div>
            </div>
        </div>
         <div>
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div class="p-3 rounded-full bg-green-600 bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                    <div class="text-gray-500">New Orders (Week)</div>
                    <div class="text-green-600 text-sm"><router-link to="/">View Orders</router-link></div>
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div class="p-3 rounded-full bg-gray-600 bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                    <div class="text-gray-500">Orders w/out Eclipse ID</div>
                    <div class="text-gray-700 text-sm"><router-link to="/">View Orders</router-link></div>
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                <div class="p-3 rounded-full bg-red-600 bg-opacity-75">              
                </div>
                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">8,282</h4>
                    <div class="text-gray-500">Errors</div>
                    <div class="text-red-600 text-sm"><router-link to="/">View Orders</router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>