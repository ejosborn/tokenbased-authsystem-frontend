<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 v-if="!clicked">Welcome to Token-Based Authentication System</h1>
  <button v-if="!clicked" @click="goToRegister">Register</button>
  <button v-if="!clicked" @click="goToLogin">Log In</button>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    }
  },
  name: "App",
  methods: {
    goToRegister() {
      this.$router.push("/register")
      this.clicked = true
    },
    goToLogin() {
      this.$router.push("/login")
      this.clicked = true
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
