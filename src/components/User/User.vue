<template>
  <div>
    <h1>List user</h1>
    <span v-if="loading"><b-spinner variant="primary" label="Spinning"></b-spinner></span>
    <span v-else><Userlist :userlist="userlist" /></span>   
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
      loading: true
    };
  },
  created() {
    let getUser = async () => {
      try {
        let data = await axios.get(`https://reqres.in/api/users?page=1`);  
        if (data.data.data) {
          this.userlist = data.data.data;
        }
        this.loading=false
      } catch (err) {
        console.log("check error ", err);
      }
    };
    getUser()
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
.active {
  background-color: black;
  color: aliceblue;
}
</style>
