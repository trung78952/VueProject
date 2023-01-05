<template>
  <div>
    <h1>List user</h1>
    <Sort :handleSortname="handleSortname" />
    <span v-if="loading"
      ><b-spinner variant="primary" label="Spinning"></b-spinner
    ></span>
    <span v-else><Userlist :userlist="userlist"/></span>
    <UserPage :handlePage="handlePage" />
  </div>
</template>
<script>
import Userlist from "./Uselist.vue";
import UserPage from "./UserPage.vue";
import Sort from "./Sort.vue";
import axios from "axios";
export default {
  name: "User",
  components: {
    Userlist,
    UserPage,
    Sort
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
        this.loading = false;
      } catch (err) {
        console.log("check error ", err);
      }
    };
    getUser();
  },
  methods: {
    async handlePage(p) {
      try {
        console.log("check page ", p);
        let data = await axios.get(`https://reqres.in/api/users?page=${p}`);
        console.log("check data ", data);
        if (data.data.data) {
          this.userlist = data.data.data;
        }
      } catch (err) {
        console.log("check error ", err);
      }
    },
    handleSortname(sort) {
      console.log("check log: ", sort);
      if (sort === "a") {
        this.userlist.sort((a, b) => {
          if (a.first_name > b.first_name) {
            return -1;
          }
        });
        console.log("sort 1");
      }
      else{
        this.userlist.sort((a, b) => {
          if (a.first_name < b.first_name) {
            return -1;
          }
        });
        console.log("sort 2");
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
