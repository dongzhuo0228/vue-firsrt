<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input v-model="loginUser.username">
    <input v-model="loginUser.password">
    <button @click="login">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginUser: {
        password: "",
        username: ""
      }
    };
  },
  methods: {
    login() {
      this.$axios
        .post(
          this.$baseurl.baseUrl.dev + "authentication/login",
          this.loginUser
        )
        .then();
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
