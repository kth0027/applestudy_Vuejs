import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            // 모든 컴포넌트에서 적용 가능
            name: 'kim',
            age: 20,
            likes: 30,
            좋아요눌렀니: false,
            //   ajax 객체 요청
            more: {},
        }
    },

    mutations: {
        이름변경(state) {
            state.name = 'park'
        },

        증가1(state) {
            state.age++
        },
        증가(state, data) {
            state.age += data
        },

        좋아요(state) {
            if (state.좋아요눌렀니 == false) {
                state.likes++;
                state.좋아요눌렀니 = true;
            } else {
                state.likes--;
                state.좋아요눌렀니 = false;
            }

        },

        setMore(state, data){
            state.more = data
        },
    },

    actions: {
        getData(context) {
            axios.get('https://codingapple1.github.io/vue/more0.json').then((a) => {
                
            console.log(a.data);
            context.commit('setMore', a.data)
            })
        },
    },

    methods: {
        
    },

    computed : {

    },

})

export default store