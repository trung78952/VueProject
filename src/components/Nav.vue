<template>
  <div>
      <div class="topnav">
        <router-link active-class="active" to="/" exact>Home</router-link>
        <router-link active-class="active" to="/todolist">To do list</router-link>
        <router-link active-class="active" to="/users">List user</router-link>
        <router-link active-class="active" to="/covid">Covid track</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Nav'
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
  height: 8vh;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  background-color: #333;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
</style>