<template>
  <div>
    <!-- <ul v-for="user in userlist" :key="user.id">
      <li @click="handleUser(user.id)">
        {{ user.id }}- {{ user.first_name }} {{ user.last_name }}
      </li>
    </ul> -->
    <b-list-group v-for="user in userlist" :key="user.id">
      <b-list-group-item  @click="handleUser(user.id)" variant="dark" class="my-1 text-left py-1 hover-overlay">
        {{ user.id }} - {{ user.first_name }} {{ user.last_name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    userlist: Array
  },
  methods: {
    // hàm điều hướng page
    handleUser(id) {
      console.log(id);
      this.$router.push(`/users/${id}`);
    }
  }
};
</script>

<style>
li {
  border-bottom: 1px gray solid;
  margin-bottom: 0.5rem;
  padding: 2px;
  text-align: left;
}
li:hover {
  background-color: aqua;
  color: black;
  cursor: pointer;
}
</style>
