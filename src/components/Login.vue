<template>
  <form @submit.prevent="signIn">
    <label for="email">Email:</label>
    <input type="email" v-model="email" id="email" required />
    <br />
    <label for="password">Password:</label>
    <input type="password" v-model="password" id="password" required />
    <br />
    <button type="submit">Sign In</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signIn() {
      try {
        const response = await axios.post("https://reqres.in/api/login", {
          email: this.email,
          password: this.password
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
