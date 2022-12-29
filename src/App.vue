<template>
  <div id="app">
    <Nav />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Todolist from "./components/todolist/Todolist.vue";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Nav,
    Todolist
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
  /* margin-top: 60px; */
}
.content{
  display: flex;
  justify-content: center;
  
}
</style>
