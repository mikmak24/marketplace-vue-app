import axios from 'axios';
import router from '../../router';
import { getField, updateField } from 'vuex-map-fields';

const state = {
    recentOrders: [],
    ordersFullfilled: [],
    gg: 'ggg'
}
const mutations = {
  // updateField,
  setRecentOrders(state, recentOrders){
    state.recentOrders = recentOrders
  },
  setOrdersFullfilled(state, ordersFullfilled){
    state.ordersFullfilled = Array.from(ordersFullfilled)
  }
}

const getters = {
  // getField, 
  sample: state => state.gg
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
        commit('setOrdersFullfilled', response.data)
      });
  }
}

export default {state, mutations, getters, actions}
