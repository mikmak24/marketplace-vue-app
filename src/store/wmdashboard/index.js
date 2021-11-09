import axios from 'axios';
import router from '../../router';
import { getField, updateField } from 'vuex-map-fields';

const state = {
    recentOrders: [],
    ordersFullfilled: []
}
const mutations = {
  // updateField,
  setRecentOrders(state, recentOrders){
    state.recentOrders = recentOrders
  },
  ordersFullfilled(state, ordersFullfilled){
    state.ordersFullfilled = ordersFullfilled
  }
}

const getters = {
  // getField, 
}

const actions = {
  //dispatch
  recentOrders({commit}){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = { 
      "Accept": "application/json",
      "Authorization": usertoken
    };
    axios.get("http://127.0.0.1:8000/api/wmitems",{ headers })
      .then(
        function (response){     
        commit('setRecentOrders', response.data)
      });  
  },

  ordersFullfilled({commit}){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = {
      "Accept": "application/json",
      "Authorization": usertoken
    };
    axios.get("http://127.0.0.1:8000/api/wmfullfilled",{ headers })
      .then(
      function (response){
        commit('ordersFullfilled', response.data)
      });
  }
}

export default {state, mutations, getters, actions}
