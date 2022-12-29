<template>
    <div>
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
<style></style>