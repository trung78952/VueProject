<template>
  <div class="addform">
    <input v-model="todo" type="text" />
    <button @click="handleClickAdd">Add</button>
  </div>
</template>

<script>
export default {
  name: "Addtodo",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    handleClickAdd() {
      //console.log(this.todo)
      //handleAdd(this.todo)
      if (this.todo) {
        this.handleAdd(this.todo);
        this.todo = "";
        return;
      } else {
        alert("to do must not empty");
        return;
      }
    },
    handleEditform() {
      this.todo = this.todoEdit;
    },
  },
  props: {
    handleAdd: Function,
    todoEdit: String,
  },
};
</script>

<style>
.addform{
  margin-top: 2rem;
}
input{
  font-size: 20px;
  margin-bottom: 1rem;
}
</style>