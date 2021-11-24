import axios from 'axios';
import router from '../../router';
import { getField, updateField } from 'vuex-map-fields';

const state = {
    newOrdersCount: 0,
    completeOrdersCount: 0,
    passDueOrdersCount: 0,
    cancelOrdersCount: 0

}
const mutations = {
  // updateField,
  newOrdersCount(state, count){
    state.newOrdersCount = count
  },

  completeOrdersCount(state, count){
    state.completeOrdersCount = count
  },
  passDueOrdersCount(state, count){
    state.passDueOrdersCount = count
  },
  cancelOrdersCount(state, count){
    state.cancelOrdersCount = count
  }
}

const getters = {
  // getField, 
  sample: state => state.gg
}

const actions = {
  //dispatch
  newOrdersCount({commit}){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = { 
      "Accept": "application/json",
      "Authorization": usertoken
    };
    const self = this;
    const res = axios.get("http://127.0.0.1:8000/api/countnewOrders",{ headers })
      .then(
        function (response){
          commit('newOrdersCount', response.data)
      });   
  },

  completeOrdersCount({commit}){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = { 
      "Accept": "application/json",
      "Authorization": usertoken
    };
    const self = this;
    const res = axios.get("http://127.0.0.1:8000/api/countcompleteOrders",{ headers })
      .then(
        function (response){
          commit('completeOrdersCount', response.data)
      });   
  },

  passDueOrdersCount({commit}){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = { 
      "Accept": "application/json",
      "Authorization": usertoken
    };
    const self = this;
    const res = axios.get("http://127.0.0.1:8000/api/countdueOrders",{ headers })
      .then(
        function (response){
          commit('passDueOrdersCount', response.data)
      });   
  },

  cancelOrdersCount({commit}){
    const usertoken = 'Bearer ' + localStorage.getItem('userToken')
    const headers = { 
      "Accept": "application/json",
      "Authorization": usertoken
    };
    const self = this;
    const res = axios.get("http://127.0.0.1:8000/api/countcancelOrders",{ headers })
      .then(
        function (response){
          commit('cancelOrdersCount', response.data)
      });   
  }
}

export default {state, mutations, getters, actions}
