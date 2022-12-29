<template>
  <div>
    <h1>List user</h1>
    <Userlist :userlist="userlist" />
    <UserPage :handlePage="handlePage" />
  </div>
</template>
<script>
import Userlist from "./Uselist.vue";
import UserPage from "./UserPage.vue";
import axios from "axios";
export default {
  name: "User",
  components: {
    Userlist,
    UserPage
  },
  data() {
    return {
      userlist: [],
    };
  },
  created() {
    let getUser = async () => {
      try {
        let data = await axios.get(`https://reqres.in/api/users?page=1`);  
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
    async handlePage(p) {
      try {
        console.log('check page ',p);
        let data = await axios.get(`https://reqres.in/api/users?page=${p}`);
        console.log('check data ',data)
        if (data.data.data) {
          this.userlist = data.data.data;
        }
      } catch (err) {
        console.log("check error ", err);
      }
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
