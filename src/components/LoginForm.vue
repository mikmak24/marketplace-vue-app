<template>
  <div class="h-screen font-sans login bg-cover bg-gray-200">
  <div class="container mx-auto h-full flex flex-1 justify-center items-center">
      <div class="w-full max-w-lg w-900">
        <div class="leading-loose">
        <div class="flex items-center justify-between">
	    </div>
          <form class="w-900 m-4 bg-white p-10 rounded shadow-xl border-2 border-green-600	mt-1">
              <div v-if="$store.state.auth.hasError"><AlertBarError /></div>
              <div class="mb-5 "><img src="../assets/gogreenlogo.png" /></div>
                <div class="">
                  <label class="block text-sm text-black" for="email">E-mail</label>
                  <input v-model="email"  class="w-full px-5 py-1 text-gray-400 bg-gray-300 rounded focus:outline-none focus:bg-white" type="email" id="email" aria-label="email" required>
                </div>
                <div class="mt-2">
                  <label class="block  text-sm text-black">Password</label>
                  <input v-model="password" class="w-full px-5 py-1 text-gray-400 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password" id="password" arial-label="password" required>
                </div>
                <div class="mt-4 items-center flex justify-between">
                  <button type="button" class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" @click="$store.dispatch('login')"
                    >Login Account</button>
                  <a class="inline-block right-0 align-baseline font-bold text-sm text-500 text-black hover:text-red-400"
                    href="#">Forgot Password ?</a>
                </div>
          </form>
              <LoadingSpinner 
                v-if="$store.state.auth.showSpinner"
              /> 

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import AlertBarError from '@/components/AlertBarError'
import LoadingSpinner from '@/components/LoadingSpinner'

export default {
  name: 'LoginForm',
  data(){
    return {
      showSpinner: false
    }
  },
  components: {
    AlertBarError,
    LoadingSpinner
  },
  methods: {
  },
  computed: {
     ...mapFields([
      'email',
      'password',
      ]),
  }
}
</script>

<style scoped>
  .login{ 
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
