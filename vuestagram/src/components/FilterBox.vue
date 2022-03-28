<template>
  <div :class="필터 + ` filter-item`" :style="`background-image:url(${이미지})`" @click="fire">
      <slot></slot>
  
      <!-- <slot name="a"></slot>
      <slot name="b"></slot> -->

     <!-- <slot :자식데이터="자식데이터"></slot> -->
     <!-- <button @click="fire">버튼</button> -->
  </div>
  <!-- <div :class="필터" class="filter-item" :style="`background-image:url(${이미지})`"></div> -->
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    이미지: String,
    필터 : String,
  },
  data(){
    return{
      자식데이터 : 'hello'
    }
  },

  methods : {
    fire(){
      this.emitter.emit('박스클릭함', this.필터)
    }
  },
  

};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>