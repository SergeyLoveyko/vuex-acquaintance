// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex';
import post from './modules/post'

// Vue.use(Vuex);

// export default new Vuex.Store({});
// const store = createStore({});
// export default store;


export default createStore({
  modules: {
    post
  }
});
