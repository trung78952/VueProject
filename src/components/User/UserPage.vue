<template>
    <div class="btnpage">
        <button
      @click="activeBtn = 1; handlePage(1)"
      :class="{ active: activeBtn === 1 }"
    >
      1
    </button>
    <button
      @click="activeBtn = 2; handlePage(2)"
      :class="{ active: activeBtn === 2 }"
    >
      2
    </button>
    <!-- <b-pagination-nav :link-gen="linkGen" :number-of-pages="3" use-router></b-pagination-nav> -->
    </div>
</template>
<script>
export default{
    data(){
        return{
            activeBtn: 1
        }
    },
    methods:{
        handleOnlick(page){
            handlePage(page)
        }
    },
    props:{
        handlePage: Function
    }
}
</script>
<style>
.btnpage{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.btnpage button{
    width: 2rem;
    height: 2rem;
}
</style>