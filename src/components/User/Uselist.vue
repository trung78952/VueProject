<template>
  <div>
    <ul v-for="user in userlist" :key="user.id">
      <li @click="handleUser(user.id)">
        {{ user.id }}- {{ user.first_name }} {{ user.last_name }}
      </li>
    </ul>
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
        console.log(id)
        this.$router.push(`/users/${id}`)
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
  cursor: pointer;
}
</style>
