import { createStore } from 'vuex';
import auth from "./auth";
import wmdashboard from "./wmdashboard";

const store = createStore({
  modules: {
    auth,
    wmdashboard,
  },
})

export default store