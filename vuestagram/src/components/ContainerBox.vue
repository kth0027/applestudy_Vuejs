<template>
  <div>
    <!-- <Post :게시물="게시물[0]" />
    
        
    
            <Post :게시물="게시물[1]" />
    
        
    
            <Post :게시물="게시물[2]" /> -->

    <!-- 반복문  -->

    <div v-if="step == 0">
      <Post :게시물="게시물[i]" v-for="(a, i) in 게시물" :key="i" />
    </div>

    <!-- 필터선택페이지 -->

    <div class="filterbox" v-if="step == 1">
      <div
        :class="선택한필터"
        class="upload-image"
        :style="`background-image:url(${이미지})`"
      ></div>

      <div class="filters">
        <FilterBox
          :필터="필터"
          :이미지="이미지"
          v-for="필터 in 필터들"
          :key="필터"
        >
          <span>{{ 필터 }}</span>

          <!-- <template v-slot:a>
    
        
    
                        데이터1
</template>
<template v-slot:b>
     데이터2
</template>-->

          <!--<template v-slot:default="작명">
     {{작명.자식데이터}}
</template>-->
        </FilterBox>
        <!-- <FilterBox :이미지="이미지"></FilterBox>
        <FilterBox :이미지="이미지"></FilterBox>
        <FilterBox :이미지="이미지"></FilterBox> -->

        <!-- <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div> -->
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        :class="선택한필터"
        class="upload-image"
        :style="`background-image:url(${이미지})`"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!</textarea
        >
      </div>
    </div>

    <div v-if="step == 3">
      <MypageBox :one="1" />
    </div>
  </div>
</template>

<script>
import PostBox from "./PostBox.vue";
import FilterBox from "./FilterBox.vue";
import MypageBox from "./MypageBox.vue";

export default {
  components: {
    Post: PostBox,
    FilterBox: FilterBox,
    MypageBox: MypageBox,
  },
  props: {
    게시물: Array,
    step: Number,
    이미지: String,
  },

  data() {
    return {
      필터들: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],

      선택한필터: "",
    };
  },

  mounted() {
    this.emitter.on("박스클릭함", (a) => {
      this.선택한필터 = a;
    });
  },
};
</script>

<style>
@import "./ContainerBox.css";
</style>