import { createApp } from 'vue'
import store from './store/index'
import App from './App.vue'

// Vue.config.prodactionTip = false;

// new Vue({
//   store,
//   render: h => h(App)
// }).$mount('#app');

const app = createApp(App);
app.use(store);
app.mount('#app');
  
// createApp(App).use(store).mount('#app')
