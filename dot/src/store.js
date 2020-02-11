import Vue from "vue";
import Vuex from "vuex";
// import { VueAuthenticate } from "vue-authenticate";

Vue.use(Vuex);

// const VueAuth = new VueAuthenticate(Vue.prototype.$http, {
//   baseUrl: "http://api.dreamingoftech.uk"
// });

export default new Vuex.Store({
  // You can use it as state property
  state: {
    // isAuthenticated: false
  },

  // You can use it as a state getter function (probably the best solution)
  getters: {
    // isAuthenticated() {
    //   return vueAuth.isAuthenticated();
    // }
  },

  // Mutation for when you use it as state property
  mutations: {
    // isAuthenticated(state, payload) {
    //   state.isAuthenticated = payload.isAuthenticated;
    // }
  },

  actions: {
    // Perform VueAuthenticate login using Vuex actions
    // login(context, payload) {
    //   vueAuth.login(payload.user, payload.requestOptions).then(response => {
    //     context.commit("isAuthenticated", {
    //       isAuthenticated: vueAuth.isAuthenticated()
    //     });
    //   });
    // }
  }
});
