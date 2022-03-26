<template>
  <div>
    <!-- <Post :게시물="게시물[0]" />
    <Post :게시물="게시물[1]" />
    <Post :게시물="게시물[2]" /> -->
    
    <!-- 반복문  -->
    <Post :게시물="게시물[i]" v-for="(a,i) in 게시물" :key="i" />
    
  </div>
</template>

<script>
import PostBox from "./PostBox.vue";

export default {
  components: {
    Post: PostBox,
  },
  props: {
    게시물: Array,
  },
};
</script>

<style>
</style>