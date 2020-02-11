<template>
  <b-card class="text-center" header="Please Sign In">
    <b-form @submit="this.login">
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

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button variant="information">Register</b-button>
      <b-link href="#">Reset</b-link>
    </b-form>
  </b-card>
</template>

<script>
// import store from "@/store";
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
  methods: {
    // login() {
    //   this.$store.dispatch("login", { user, requestOptions });
    // }
  },
  computed: {
    // isAuthenticated: function() {
    //   return store.getters.isAuthenticated();
    // }
  }
};
</script>

<style></style>
