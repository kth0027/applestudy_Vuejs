import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        // 모든 컴포넌트에서 적용 가능
      name : 'kim',
      age : 20,
      likes : 30,
      좋아요눌렀니 : false,
    }
  },

  mutations : {
    이름변경(state){
        state.name = 'park'
    },

    증가1(state){
        state.age++
    },
    증가10(state, data){
        state.age += data
    },
    
    좋아요(state){
        if (state.좋아요눌렀니 == false){
            state.likes++;
            state.좋아요눌렀니 = true;
        } else {
            state.likes--;
            state.좋아요눌렀니 = false;
        }
        
    },
  },

})

export default store