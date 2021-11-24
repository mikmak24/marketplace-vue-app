<template>
  <div
    class="bg-green-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
    role="alert"
  >
    <div class="flex">
      <div class="py-1">
        <svg
          class="fill-current h-6 w-6 text-teal-500 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
          />
        </svg>
      </div>
      <div>
        <p class="font-bold">Product has been successfully added</p>
        <p class="text-sm">
          Page will refresh after 5 seconds: {{ timerCount }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    props: ['sku'],
    data() {
        return {
            timerCount: 5
        }
    },
    watch: {
        timerCount: {
            handler(value) {
                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
                const self = this;

                if(value == 0){
                    window.location.href = '/wm-itemscollection?sku='+this.sku;
                }
            },
            immediate: true // This ensures the watcher is triggered upon creation
        }
    }
}
</script>
