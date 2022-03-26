<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled">Disabled</a>
                </div>
            </div>
        </div>
    </nav>
    
    <div class="container mt-4 border">
        <h5>React 개발자의 블로그입니다</h5>
        <p>- Vue로 만들었음 -</p>
    </div>

    <router-link to="/">홈페이지</router-link>
    <router-link to="/list">리스트페이지</router-link>
    <router-view :블로그글="블로그글"></router-view>
    
    <!-- <ListBox :블로그글="블로그글" /> -->
</template>

<script>
import blog from './assets/blog.js';
// import ListBox from "./components/ListBox.vue";


export default {
    name: 'App',

    data() {
        return {
            블로그글: blog,
        }
    },

    components: {
        // ListBox: ListBox,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
