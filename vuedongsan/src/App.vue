<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
        <!-- {{logo}} -->
        <h4 class="red" :style="스타일">XX 원룸</h4>
        <P>{{price1}} 만원</P>
    </div>
    <div>
        <h4>XX 원룸</h4>
        <P>{{price2}} 만원</P>
    </div>
    <div>
        <h4>XX 원룸</h4>
        <P>{{price2}} 만원</P>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            price1: 60,
            price2: 70,
            // logo : '원룸샵',
            // 스타일 : 'color : blue',
            products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
        }
    },
    components: {},
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
