<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>


  <Container
    :이미지="이미지"
    :게시물="게시물"
    :step="step"
    @write="작성한글 = $event"
  />
  <button class="col-4 offset-4 btn btn-outline-info" @click="more">
    더보기
  </button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <!-- multiple -->
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

<!-- 예시 -->
  <!-- <h4>안녕 {{$store.state.name}}</h4>
  <button @click="$store.state.name = '박'">버튼</button> -->

    <h4>안녕 {{$store.state.name}}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>

  <hr>
  
      <h4>안녕 {{$store.state.age}}</h4>
  <!-- <button @click="$store.commit('증가1')">버튼</button> -->
  <button @click="$store.commit('증가10', 10)">버튼</button>

  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button class="col-2 offset-2" @click="step = 0">버튼0</button>
  <button class="col-2 offset-1" @click="step = 1">버튼1</button>
  <button class="col-2 offset-1"  @click="step = 2">버튼2</button>
  <div style="margin-top: 500px"></div> -->
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
      step: 3, // 1 or 2 일때 다른걸 보여준다      
      게시물: postdata,
      더보기: 0,
      이미지: "",
      작성한글: "",
    };
  },
  mounted() {
    this.emitter.on("박스클릭함", (a)=>{
      this.선택한필터 = a;
    });
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
      axios
        .get(`https://codingapple1.github.io/vue/more${this.더보기}.json`)
        .then((결과) => {
          this.게시물.push(결과.data);
          this.더보기++;
        });
    },
    upload(e) {
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]); // URL 생성후 변수 지정 저장
      console.log(url);
      this.이미지 = url;
      this.step++;
    },
    publish() {
      var 내게시물 = {
        name: "김태호",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.이미지,
        likes: 100,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        // filter: "perpetua",
        filter: this.선택한필터,
      };
      this.게시물.unshift(내게시물);
      this.step = 0;
    },
  },
};
</script>

<style>
@import "./style.css";
</style>