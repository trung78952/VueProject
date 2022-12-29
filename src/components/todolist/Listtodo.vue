<template>
  <div class="list">
    <table style="width: 100%">
      <tr>
        <th>id</th>
        <th>to do</th>
      </tr>
      <tr v-for="item in todos" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.todo }}</td>
        <td><button @click="handleDeleteclick(item.id)">Delete</button>
          <button @click="handleEditclick(item.todo)">Edit</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Listtodo",
  data() {
    return {};
  },
  props: {
    todos: Array,
    handleDelete: Function,
    handleEdit: Function,
  },
  methods: {
    handleDeleteclick(id){
      //console.log('check delete',id)
      this.handleDelete(id)
    },
    handleEditclick(id){
      this.handleEdit(id)
      console.log('check: ',this.$emit)
    }
  },
};
</script>

<style>
table,
th,
td {
  border: 1px black solid;
  width: 50%;
}
.list {
  width: 50%;
  margin: 1rem;
}
</style>