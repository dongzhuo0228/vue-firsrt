import Vue from "vue";
import App from "./App.vue";
import axios from "./axios/http";
import baseurl from "./axios/index";
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$baseurl = baseurl;
new Vue({
  render: h => h(App)
}).$mount("#app");
