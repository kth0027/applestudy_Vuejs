<template>
    <!-- {{$route.params.id}} -->
    
    <div>
    
        <div class="row p-3">
            <h4>상세페이지</h4>
        </div>
    
    
    
        <h5>{{ 블로그글[$route.params.id].title }}</h5>
    
        <p>{{ 블로그글[$route.params.id].content }}</p>

        <button class="btn btn-info" @click="$router.go(-1)">뒤로가기</button>
    
    </div>
</template>

<script>
export default {
    name: "DetailBox",

    props: {
        블로그글: Array,
    },
};
</script>

<style>

</style>