import axios from 'axios';
import router from '../../router';
// import { getField, updateField } from 'vuex-map-fields';

const state = {
    data: {
        sku: '',
        currentpricetype: '',
        comparisonpricetype: '',
        newcurrency: '',
        newprice: 0,
        oldcurrency: '',
        oldprice: '',
        displaycode: '',
        effectivedate: '',
        expirationdate: '',
        procesmode: ''
    },
    response: '',
    hasresponse: false

}
const mutations = {
    setSku(state, value){
        state.sku = value
    },
    setOldPrice(state, value){
        state.oldprice = value
    },
    setResponse(state, value){
        state.response = value
        state.hasresponse = true
    }
 
}

const getters = {
  //getField,
}

const actions = {
    setpromotion({commit}, sku){
       const usertoken = 'Bearer ' + localStorage.getItem('userToken')
       const headers = { 
       "Accept": "application/json",
       "Authorization": usertoken
       };
       const params = {
           "data": state.data,
           "sku": sku
       };
       const self = this;
       const res = axios.post("http://127.0.0.1:8000/api/wmsetpromotion", params, { headers })
       .then(
        function (response){
            console.log(response.data)
            commit('setResponse', response.data)

       })  
       .catch(function(){
         console.log('Error!!');
       });

    },

    setSku({commit}, sku){
        commit('setSku', sku)
        console.log(sku)
    },

    setOldPrice({commit}, price){
        commit('setOldPrice', price)
        console.log(price)
    },
  
}

export default {
    namespaced: true,
    state, 
    mutations, 
    getters, 
    actions
}
