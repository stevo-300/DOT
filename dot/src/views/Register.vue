<template>
  <b-card class="text-center" header="Please Sign In">
    <b-form @submit="this.register">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.password"
          type="password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Register</b-button>
      <b-button variant="information">Login</b-button>
      <b-link href="#">Reset</b-link>
    </b-form>
    <!-- <Register></Register> -->
  </b-card>

</template>

<script>
import { global } from "../functions/globals"
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        code: ""
      }
    };
    
  },
  // components: {
  //     'Register': reg
  //   },
  methods: {
    register() {
      console.log(global.backendURI)
    }
  },
  computed: {
    // isAuthenticated: function() {
    //   return store.getters.isAuthenticated();
    // }
  }
};
</script>

<style></style>
