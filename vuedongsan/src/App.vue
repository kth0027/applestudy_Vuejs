<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    margin: 0;
}

/* 모달 */

div {
    box-sizing: border-box;
}

.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}

.white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
}

.menu {
    background: darkblue;
    padding: 15px;
    border-radius: 5px;
}

.menu a {
    color: white;
    padding: 10px;
    text-decoration: none;
}

.oneroombox h4 {
    cursor: pointer;
}

.oneroombox h4:hover {
    display: inline-block;
    padding: 0.5rem;
    background: #2c3e50;
    color: white;
    transform: scale(1.1);
    transition: all ease-out 0.5s;
    border-radius: 0.2rem;
}
</style>

<template>
    <ModalBanner :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" />
    
    <!-- nav -->
    <div class="menu">
        <!-- <a href="">Home</a>
                                    <a href="">Products</a>
                                    <a href="">About</a> -->
        <!-- <a href="" v-for="작명 in 3" :key="작명">Home</a> -->
        <a href="" v-for="a in 메뉴들" :key="a">{{ a }}</a>
        <!-- <a href="" v-for="(작명, i) in 메뉴들" :key="i">{{ i }}</a> -->
    </div>
    
    <!-- <DiscountBanner v-bind="오브젝트" :이름="오브젝트.name" :나이="오브젝트.age" /> -->
    <DiscountBanner />
    
    <!-- <div v-for="(a,i) in 3" :key="i">
                                <h4 class="red" :style="스타일">{{products[i]}}</h4>   
                            <P>{{price1}} 만원</P>
                        
                        </div> -->
    
    <!-- <div v-for="(a,i) in products" :key="i">
                            <h4 class="red" :style="스타일">{{a}}</h4>
                            <P>{{price1}} 만원</P>
                        </div> -->
    
    <!-- <div>
        <img src="./assets/room0.jpg" alt="" style="width: 100%; margin-top: 10px" />
        <h4 @click="모달창열렸니 = true" class="red" :style="스타일">{{ products[0] }}</h4>
        <P>{{ price1 }} 만원</P>
        <button v-on:click="신고수++">허위매물신고</button>
        <span>신고수 : {{ 신고수 }}</span>
        <button v-on:click="increase">허위매물신고</button>
        <span>신고수 : {{ 신고수 }}</span>
        <button @click="신고수1[0]++">허위매물신고</button>
        <span>신고수 : {{ 신고수1[0] }}</span>
      </div>
      <div>
        <img  src="./assets/room1.jpg" alt="" style="width: 100%; margin-top: 10px" />
        <h4>{{ products[1] }}</h4>
        <P>{{ price2 }} 만원</P>
        <button @click="신고수1[1]++">허위매물신고</button>
        <span>신고수 : {{ 신고수1[1] }}</span>
      </div>
      <div>
        <img  src="./assets/room2.jpg" alt="" style="width: 100%; margin-top: 10px" />
        <h4>{{ products[2] }}</h4>
        <P>{{ price2 }} 만원</P>
        <button @click="신고수1[2]++">허위매물신고</button>
        <span>신고수 : {{ 신고수1[2] }}</span>
      </div> -->
    
    <!-- <div class="oneroombox" v-for="(a,i) in 원룸들" :key="i" >
          <img :src="a.image" alt="" style="width: 100%; margin-top:10px" class="room-img">
          <h4 @click="모달창열렸니 = true; 누른거 = i"><span>방명 : </span> {{ a.title }}</h4>
          <p>{{ a.price }} <span>원</span> </p>
      </div> -->
    
    <!-- 전체요소  -->
    <!-- <CardBox :원룸="원룸들[i]" v-for="(작명,i) in 원룸들" :key="작명" @click="모달창열렸니 = true" /> -->
    
    <CardBox :원룸="원룸들[i]" v-for="(작명, i) in 원룸들" :key="작명" @openModal="모달창열렸니 = true; 누른거 = $event"  />

    <!--  -->
    
    <!-- <CardBox :원룸="원룸들[1]" />
      <CardBox :원룸="원룸들[2]" />
      <CardBox :원룸="원룸들[3]" />
      <CardBox :원룸="원룸들[4]" />
      <CardBox :원룸="원룸들[5]" /> -->
</template>

<script>
// // 함수 생성
// function 어쩌구(){
//     console.log('abcde')
//     console.log('abcde')
//     console.log('abcde')
// }

// 어쩌구()

// 임포트하기
// import apple from './assets/oneroom.js';
// apple;

// import {apple, apple2} from './assets/oneroom.js';
// apple;
// apple2;

import data from "./assets/oneroom";
import DiscountBanner from "./DiscountBanner.vue";
import ModalBanner from "./ModalBanner.vue";
import CardBox from "./CardBox.vue";

export default {
    name: "App",
    data() {
        return {
            오브젝트: { name: "kim", age: 20 },
            price1: 60,
            price2: 70,
            // logo : '원룸샵',
            // 스타일 : 'color : blue',
            메뉴들: ["Home", "Products", "About"],

            products: ["역삼동원룸", "천호동원룸", "마포구원룸"],

            // 버튼
            신고수: 0,
            신고수1: [0, 0, 0],
            신고수2: 0,
            신고수3: 0,

            // 모달
            모달창열렸니: false,

            //  방정보 데이터
            원룸들: data,
            누른거: 0,
        };
    },
    methods: {
        increase() {
            this.신고수 += 1;
        },
    },

    components: {
        DiscountBanner: DiscountBanner,
        // eslint-disable-next-line vue/no-unused-components
        ModalBanner: ModalBanner,
        // eslint-disable-next-line vue/no-unused-components
        CardBox: CardBox,
    },
};
</script>


