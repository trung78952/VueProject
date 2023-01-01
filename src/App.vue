<template>
  <div id="app">
    <Nav />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c2d1df;
  /* margin-top: 60px; */
}

.content {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: rgb(71, 77, 77);
  padding-top: 1rem;
}


</style>
