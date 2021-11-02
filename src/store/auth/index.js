import axios from 'axios';
import router from '../../router';
import { getField, updateField } from 'vuex-map-fields';
import { isSet } from '@vue/shared';

const state = {
    email: '',
    password: '',
    userToken: '',
    userName: '',
    result: ''
}
const mutations = {
  //Commit
  updateField,
  setEmail(state, email){
    // state.colorCode = newColor
    state.email = email
    console.log(email)
  },
  userAuth(state, userToken, userName){
    state.userToken = userToken
    state.userName = userName
  }
}

const getters = {
  getField,
}

const actions = {
  //dispatch
  async login({ commit }){
    console.log('Processsing Login Here')
    const credentials = { 
      email: state.email, 
      password: state.password
    };
    
    const res = axios.post("http://127.0.0.1:8000/api/login", credentials)
      .then(
        function (response){
        commit('userAuth', response.data.data.token, response.data.data.name)
        router.push('/home')
      }).catch((error) => {
        console.log(error); //Logs a string: Error: Request failed with status code 404
        if(error){
          console.log('Incorrect Username or Password')
        }
      });  
    
  },
  setEmail({commit}, email){
    commit('setEmail', email)
  }
}

export default {state, mutations, getters, actions}
