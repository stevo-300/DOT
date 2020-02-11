<template>
	<b-card class="text-center" header="Please Sign In">
		<b-form @submit="onSubmit">
			<b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
       <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button variant="information">Register<b-button>
      <b-link href="#">Reset</b-link>
    </b-form>
	</b-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
