import axios from 'axios';
import router from '../../router';
import { getField, updateField } from 'vuex-map-fields';

const state = {
    email: '',
    password: '',
    userToken: '',
    userName: '',
    hasError: false,
    authorization: '',
    showSpinner: false
}
const mutations = {
  updateField,
  setEmail(state, email){
    state.email = email
    console.log(email)
  },
  setuserToken(state, userToken){
    state.userToken = userToken
    localStorage.setItem("userToken", userToken)
  },
  setuserName(state, userName){
    state.userName = userName
    localStorage.setItem("userName", userName)
  },
  hasError(state, value){
    state.hasError = value
  },
  showSpinner(state, value){
    state.showSpinner = value
  }
}

const getters = {
  getField,
  
}

const actions = {
  //dispatch
  async login({ commit }){
    commit('showSpinner', true)
    console.log('Processsing Login Here')
    const credentials = { 
      email: state.email, 
      password: state.password
    };
    
    const res = axios.post("http://127.0.0.1:8000/api/login", credentials)
      .then(
        function (response){
          commit('setuserToken', response.data.data.token)
          commit('setuserName', response.data.data.name)
          router.push('/home')
      }).catch((error) => {
        console.log(error); //Logs a string: Error: Request failed with status code 404
        if(error){
          commit('hasError', true)
        }
      });  
    
  },
  setEmail({commit}, email){
    commit('setEmail', email)
  },
  logout({commit }){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    commit('showSpinner', false)
    commit('hasError', false)
    router.push('/')
  }
}

export default {
  state, 
  mutations, 
  getters, 
  actions
}
