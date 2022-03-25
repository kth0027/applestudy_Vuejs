<template>
    <div class="oneroombox">
    
        <img :src="원룸.image" alt="" style="width: 100%; margin-top:10px" class="room-img">
    
        <!-- <h4 @click="모달창열렸니 = true; 누른거 = i"><span>방명 : </span> {{ a.title }}</h4> -->
    
        <!-- <h4 @click="$emit('openModal', 원룸.id)" ><span>방명 : </span> {{ 원룸.title }}</h4> -->
        <h4 @click="send" ><span>방명 : </span> {{ 원룸.title }}</h4>
    
        <p>{{ 원룸.price }} <span>원</span> </p>
    
    </div>
</template>

<script>
export default {
    name: "CardBox",

    props: {
        원룸: Object,
    },
    methods : {
    send(){
            this.$emit('openModal', this.원룸.id)
        }
    },
}
</script>

<style>

</style>