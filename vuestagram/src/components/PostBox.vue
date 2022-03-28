<template>
    <div class="post">
    
        <div class="post-header">
    
            <div class="profile"></div>
    
            <span class="profile-name">{{ 게시물.name }}</span>
    
        </div>
    
        <div @click="$store.commit('좋아요')" :class="게시물.filter" class="post-body" :style="{ backgroundImage: `url( ${게시물.postImage})` }"></div>
    
        <div class="post-content">
    
            <p>{{ $store.state.likes }} Likes</p>
    
            <p>
    
                <strong>{{ 게시물.name }}</strong> {{ 게시물.content }}
    
            </p>
    
            <p class="date">May 15</p>
    
        </div>
    
    </div>
</template>

<script>
export default {
    props: {
        게시물: Object,
    },
};
</script>

<style>
@import "./PostBox.css";
</style>