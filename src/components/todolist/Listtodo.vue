<template>
  <div class="list">
    <table style="width: 100%">
      <tr>
        <th>id</th>
        <th>List</th>
        <th></th>
      </tr>
      <tr v-for="item,index in todos" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.todo }}</td>
        <td class="button">
          <b-button variant="danger"  @click="handleDeleteclick(item.id)">Delete</b-button>
          <b-button variant="primary" @click="handleEditclick(item.todo)">Edit</b-button>
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
    handleDeleteclick(id) {
      //console.log('check delete',id)
      this.handleDelete(id)
    },
    handleEditclick(id) {
      this.handleEdit(id)
      console.log('check: ', this.$emit)
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

button {
  width: 50%;
  margin: 0 1px;
}

.button {
  display: flex;
  width: 100%;
}
</style>