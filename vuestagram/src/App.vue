<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :게시물="게시물" />
  <button class="col-4 offset-4 btn btn-outline-info" @click="more">
    더보기
  </button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import ContainerBox from "./components/ContainerBox.vue";
import postdata from "./assets/postdata";
import axios from "axios";

axios.post();

export default {
  name: "App",

  components: {
    Container: ContainerBox,
  },

  data() {
    return {
      게시물: postdata,
      더보기: 0,
    };
  },

  methods: {
    more() {
      // post 요청하기
      // axios.post('URL', {name : 'kim'}).then().catch((err) => {
      //   err
      // }

      // axios.get('https://codingapple1.github.io/vue/more0.json')
      // .then((결과)=>{
      //   console.log(결과.data);
      //   // push = array에 추가해줘라.
      //   this.게시물.push(결과.data);
      // })

      // 더보기 사용
      axios.get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
      .then((결과) => {
          this.게시물.push(결과.data);
          this.더보기++;
        });
    },
  },
};
</script>

<style>
@import "./style.css";
</style>
