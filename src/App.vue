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
  background-color: rgb(71, 77, 77);
  /* margin-top: 60px; */
}

.content {
  display: flex;
  justify-content: center;
  height: 92vh;
  padding-top: 1rem;
}



</style>
