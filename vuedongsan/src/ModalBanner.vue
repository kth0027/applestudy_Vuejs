<template>
    <!-- modal -->
    
    <div class="black-bg" v-if="모달창열렸니 == true">
    
        <div class="white-bg">
    
            <img :src="원룸들[누른거].image" alt="" style="width: 100%; margin-top:10px" class="room-img">
    
            <h4>{{ 원룸들[누른거].title }}</h4>
    
            <p>{{ 원룸들[누른거].content }}</p>
    
            <!-- <input type="text" @input="month = $event.target.value"> -->
    
            <input type="text" v-model="month">
    
            <!-- <input type="checkbox" v-model="month"> -->
    
            <!-- <textarea name="" id="" cols="30" rows="10" v-model="month"></textarea>       -->
    
            <!-- <select v-model="month">
    
            <option >1</option>
    
            <option >2</option>
    
            <option >3</option>
    
          </select> -->
    
            <p> {{month}}개월 선택함</p>
    
            <p>{{ 원룸들[누른거].price * month}} 원</p>
    
            <!-- <button v-on:click="모달창열렸니 = false">닫기</button> -->
    
            <button @click="$emit('closeModal')">닫기</button>
    
    
    
        </div>
    
    </div>
</template>

<script>
export default {
    name: "ModalBanner",
    data() {
        return {
            month: 1,
            // 초기갑 문자 시 month : '1',
        }

    },
    props: {
        원룸들: Array,
        누른거: Number,
        모달창열렸니: Boolean,
    },

    watch: {
        // 사용자가 문자 입력시 경고문 뛰우셈
        month(a) {
            //사용자가 month 입력한 데이터가 13보다 크면 경고문 띄우기
            if (a >= 13) {
                alert('13이상 입력 불가!')
            }
            if (isNaN(a) == true) {
                alert('문자입력하지마라');
                this.month = 1;
            }

        },
    },

    beforeUpdate() {
        if (this.month == 2) {
            alert('2개월은 너무 적음.. 안팝니다')
        }
    },

};
</script>

<style>

</style>