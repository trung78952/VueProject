<template>
  <div class="list">
    <table class="border w-100">
      <tr class="border border-danger">
        <th class="border border-danger">id</th>
        <th>List</th>
        <th></th>
      </tr>
      <tr v-for="item,index in todos" :key="item.id" class="border border-danger">
        <td class="border border-danger">{{ index + 1 }}</td>
        <td v-if="!isEdit && Edit===item.id"><input type="text" v-model="newEdit"/></td>
        <td v-else>{{ item.todo }}</td>
        <td class="button">
          <b-button variant="danger"  @click="handleDeleteclick(item.id)">Delete</b-button>
          <b-button v-if="!isEdit && Edit===item.id" variant="primary" @click="handleSave">Save</b-button>
          <b-button v-else variant="primary" @click="handleEditclick(item.id,item.todo)">Edit</b-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Listtodo",
  data() {
    return {
      isEdit: true,
      Edit: '',
      newEdit: '',
    };
  },
  props: {
    todos: Array,
    handleDelete: Function,
    handleEditsave: Function,
  },
  methods: {
    // gọi lên hàm xóa trên cha
    handleDeleteclick(id) {
      this.handleDelete(id)
    },
    // chuyển trạng thái nút edit
    handleEditclick(id,todo) {
      this.Edit=id
      this.newEdit=todo
      this.isEdit=!this.isEdit
    },
    // lưu lại gửi data về cha
    handleSave(){
      if(this.newEdit){
      this.handleEditsave(this.Edit,this.newEdit)
      this.isEdit=!this.isEdit
      }else{
        alert('empty todo')
      }
    }
  },
};
</script>

<style>

th,
td {
 /* border: 1px black solid; */
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