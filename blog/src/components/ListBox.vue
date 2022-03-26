<template>
  <div>
    <h5 class="listtitle" @click="$router.push('/detail/0')">{{ 블로그글[0].title }}</h5>
<!-- @click="$router.go(1)" ⇒ 앞으로 1페이지
@click="$router.go(-2)" ⇒ 뒤로 2페이지 -->
    <p>{{ 블로그글[0].date }}</p>
  </div>

  <div>
    <h5 class="listtitle" @click="$router.push('/detail/1')">{{ 블로그글[1].title }}</h5>
    <p>{{ 블로그글[1].date }}</p>
  </div>

  <div>
    <h5 class="listtitle" @click="$router.push('/detail/2')">{{ 블로그글[2].title }}</h5>
    <p>{{ 블로그글[2].date }}</p>
  </div>
</template>

<script>
export default {
  name: "ListBox",

  props: {
    블로그글: Array,
  },
};
</script>

<style>
.listtitle:hover {
    background: skyblue;
    display: inline-block;
    transition: all 1s;
    padding: 0.2rem;
    border-radius: 0.3rem;
    color: white;
    cursor: pointer;
    
}
</style>