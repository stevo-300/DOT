import Vue from "vue";
import VueAxios from "vue-axios";
import Axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import "./registerServiceWorker";
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuex);
Vue.use(VueAxios, Axios);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
