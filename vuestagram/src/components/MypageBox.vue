<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" @input="search($event.target.value)" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
// import { computed, onMounted, reactive, ref, toRefs, watch } from "vue";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MypageBox",

  props: {
    one: Number,
  },
  //   setup(props) {
  setup() {
    //
    let follower = ref([]);

    let followerOriginal = ref([]);

 

    // // 보통 array, object 집어넣음
    // let test = reactive({ name: "kim" });
    // test;

    // let { one } = toRefs(props);
    // console.log(one.value);

    // watch(one, () => {});

    // let 결과 = computed(() => {
    //   return follower.value.length;
    // });
    // console.log(결과.value);

    onMounted(() => {
      axios.get('/follower.json').then((a)=>{
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      })
    });

    // 검색
    function search(검색어){
    let newFollower = follower.value.filter((a)=>{
        return a.name.indexOf(검색어) != -1
    });
    follower.value = [...newFollower]
    }

        return {follower, search}

  },

  data() {
    return {};
  },
};
</script>

<style>
</style>