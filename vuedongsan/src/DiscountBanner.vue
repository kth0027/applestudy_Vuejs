<template>
    <div class="discount">
    
    
    
        <h4>지금 결제하면 20% 할인</h4>
    
    
    
        <p>지금 결제하면 {{amount}}% 할인</p>
    
    
    
    </div>
</template>

<script>
export default {
    name: "DiscountBanner",
    data() {
        return {
            amount: 30,
        };
    },

    // 30% 할인문구가 1초바다 1%씩 감소
    mounted() {
        setInterval(() => {
            this.amount--;
        }, 1000);
    }

};
</script>

<style>
.discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 0.5rem;
}
</style>