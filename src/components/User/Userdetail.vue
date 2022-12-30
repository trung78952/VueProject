<template>
  <div>
    <h1>Detail user</h1>
    <div class="detail">
      <div v-if="loading"><b-spinner variant="primary" label="Spinning"></b-spinner></div>
      <div class="detail" v-else>
        <span><b-avatar :src="detail.avatar" size="6rem"></b-avatar></span>
        <span>ID: {{ detail.id }}</span>
        <span>Last name: {{ detail.last_name }}</span>
        <span>First name: {{ detail.first_name }}</span>
        <span>Email: {{ detail.email }}</span>
        
        <!-- <div><img :src="detail.avatar" /></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  created() {
    let getUser = async id => {
      try {
        let data = await axios.get(`https://reqres.in/api/users/${id}`);
        if (data.data.data) {
          let detailuser = data.data.data;
          this.detail = detailuser;
          console.log("check detail ", this.detail);
        }
        this.loading=false
      } catch (err) {
        console.log("check error ", err);
      }
    };
    let id = this.$route.params.id;
    getUser(id);
  },
  data() {
    return {
      detail: {},
      loading: true
    };
  }
};
</script>
<style>
.detail {
  display: flex;
  flex-direction: column;
  font-size: large;
  justify-content: space-between;
  justify-content: left;
}
</style>
