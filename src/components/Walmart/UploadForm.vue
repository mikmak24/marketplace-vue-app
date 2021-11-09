<template>
<div id="app">
    <AlertSuccess v-if="success" />
  <div
    class="flex flex-col max-w-5xl h-52 bg-white rounded-lg md:flex-row my-10 mt-1"
    >
    <div class="md:flex items-center justify-center md:w-1/2 md:bg-blue-600">
      <div class="py-6 px-8 md:py-0">
        <h2 class="text-gray-700 text-2xl font-bold md:text-gray-100">
          Upload a Excel/CSV File
        </h2>
        <p class="mt-2 text-gray-600 md:text-white">
          You can download the template below for Reference
        </p>
      </div>
    </div>
    <div
      class="flex items-center justify-center pb-6 md:py- md:w-1/2 md:border-b-8 border-blue-6.00 w-10"
    >
      <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row">
        <input
          type="file"
          id="file"
          ref="file"
          v-on:change="handleFileUpload()"
          class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
        />
        <button
          v-on:click="submitFile()"
          class="py-3 px-4 bg-yellow-400 text-black font-semibold uppercase hover:bg-gray-600"
        >
          Upload File
        </button>
      </div>
    </div>
  </div>
  {{productUploaded}}
  </div>
</template>
<script>
import axios from 'axios';
import AlertSuccess from '@/components/Walmart/AlertSuccess'
export default {
    data(){
        return {
            productUploaded: [],
            file: '',
            success: false
        }
    },
    components: {
        AlertSuccess
    },
    methods: {
        submitFile(){
            const self = this;
            const usertoken = 'Bearer ' + localStorage.getItem('userToken')
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post('http://127.0.0.1:8000/api/wm-uploadsetter',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": usertoken
                }
              }
        ).then(
        function (response){
          self.productUploaded = response.data.data
          self.success = true
        })
        .catch(function(){
          console.log('Error!!');
        });
      },

      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
}
</script>
