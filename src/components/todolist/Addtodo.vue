<template>
  <div class="addform">
    <label for="input-live">To do:</label>
    <b-form-input 
    id="input-live" 
            v-model="todo" 
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback" 
            placeholder="Enter your to do " trim>
    </b-form-input>
    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>
    <b-form-text id="input-live-help">Your full name.</b-form-text>
    <b-button variant="success" @click="handleClickAdd">Add</b-button>
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
  computed: {
    nameState() {
      return this.todo.length > 2 ? true : false
    }
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
.addform {
  margin-top: 2rem;
  text-align: start;
  width: 25rem;
}

input {
  font-size: 20px;
  margin-bottom: 1rem;
}
</style>