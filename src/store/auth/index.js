import axios from 'axios';
import router from '../../router';

const state = {
    email: '',
    password: '',
    userToken: '',
    userName: ''
}
const mutations = {
  //Commit
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

const actions = {
  //dispatch
  async login({ commit }){
    console.log('Processsing Login Here')
    const credentials = { 
      email: state.email, 
      password: 'admin'
    };
    
    const res = axios.post("http://127.0.0.1:8000/api/login", credentials)
      .then(
        function (response){
        commit('userAuth', response.data.data.token, response.data.data.name)
    });  
    router.push('/home')
  },
  setEmail({commit}, email){
    commit('setEmail', email)
  }
}

export default {state, mutations, actions}
