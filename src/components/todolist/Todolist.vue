<template>
  <div class="todo">
    <h1>To do list</h1>
    <Addtodo :handleAdd="handleAdd" :todoEdit="todo" />
    <Listtodo
      :todos="todos"
      :handleDelete="handleDelete"
      :handleEdit="handleEdit"
    />
  </div>
</template>

<script>
import Addtodo from "./Addtodo.vue";
import Listtodo from "./Listtodo.vue";
export default {
  name: "Todolist",
  data() {
    return {
      todos: [
        { id: 2, todo: "eat" },
        { id: 3, todo: "sleep" },
        { id: 4, todo: "code" },
        { id: 5, todo: "fix" },
      ],
      todo: "",
    };
  },
  methods: {
    handleAdd(item) {
      console.log(item);
      let add = {
        id: Math.floor(Math.random() * 1000),
        todo: item,
      };
      this.todos = [...this.todos, add];
      console.log("check todo", this.todos);
    },
    handleDelete(id) {
      console.log(id);
      let newTodo = this.todos.filter((item) => item.id !== id);
      this.todos = newTodo;
    },
    handleEdit(id) {
      //this.todo = this.todos[id]

      this.todo = id;
      console.log("check edit", this.todo);
    },
  },
  components: {
    Addtodo,
    Listtodo,
  },
};
</script>

<style>
.todo {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
</style>