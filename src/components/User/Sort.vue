<template>
  <div>
    <b-form-select v-model="selected" class="mb-3">
      <b-form-select-option value="null">Seclect sort</b-form-select-option>
      <b-form-select-option value="az">By name A-Z</b-form-select-option>
      <b-form-select-option value="za">By name Z-A</b-form-select-option>
    </b-form-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: null
    };
  },
  methods: {
    sortAZ() {
      let sort = "b";
      //console.log("this is sort A-z");
      this.handleSortname(sort);
    },
    sortZA() {
      let sort = "a";
      //console.log("this is sort Z-A");
      this.handleSortname(sort);
    }
  },
  watch: {
    selected() {
      if (this.selected === "az") {
        this.sortAZ();
      } else if (this.selected === "za") {
        this.sortZA();
      }
    }
  },
  props: {
    handleSortname: Function
  }
};
</script>

<style></style>
