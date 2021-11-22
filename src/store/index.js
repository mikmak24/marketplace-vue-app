import { createStore } from 'vuex';
import auth from "./auth";
import wmdashboard from "./wmdashboard";
import wmpromotion from "./wmpromotion";


const store = createStore({
  modules: {
    auth,
    wmdashboard,
    wmpromotion
  },
})

export default store