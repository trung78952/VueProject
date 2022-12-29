<template>
  <div>
    <h1>List user</h1>
    <Userlist :userlist="userlist" />
    <button
      @click="activeBtn = 'btn1'; handlePage(1)"
      :class="{ active: activeBtn === 'btn1' }"
    >
      1
    </button>
    <button
      @click="activeBtn = 'btn2'; handlePage(2)"
      :class="{ active: activeBtn === 'btn2' }"
    >
      2
    </button>
  </div>
</template>

<script>
import Userlist from "./Uselist.vue";
import axios from "axios";
export default {
  name: "User",
  components: {
    Userlist
  },
  data() {
    return {
      userlist: [],
      activeBtn: "btn1",
      page: 2
    };
  },
  mounted() {
    let getUser = async page => {
      try {
        let data = await axios.get(`https://reqres.in/api/users?page=${page}`);
        console.log('check page ',page);
        if (data.data.data) {
          this.userlist = data.data.data;
        }
      } catch (err) {
        console.log("check error ", err);
      }
    };
    getUser();
  },
  methods: {
    handlePage(p) {
      this.page = p;
    }
  }
};
</script>

<style>
.todo {
  width: 50%;
}
button {
  padding: 0.5rem;
}
.active {
  background-color: black;
  color: aliceblue;
}
</style>
