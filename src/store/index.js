import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        data: [
            {id: 1,title: '1',  checked: false},
            {id: 2,title: '2',  checked: false},
            {id: 3,title: '3',  checked: false},
            {id: 4,title: '4',  checked: false},
        ],
    },
    getters:{
        filterData:state => button =>{
            if(button === 'all'){
                return state.data.filter(key => {
                    return key;
                });
            }
            else if(button === 'active'){
                return state.data.filter(key => {
                    return !key.checked;
                })
            }
            else if(button === 'com'){
                return state.data.filter(key => {
                    return key.checked;
                })
            }
        },
        selectCompleted(state){
            return state.data.filter(key => {
                return key.checked;
            }).length;
        }

    },
    actions:{

    },
    mutations:{
        addPost(state,title){
            state.data.push({
                id: state.data.length ? state.data[state.data.length - 1].id + 1 : 1,
                title: title,
                checked: false,
            });
        },
        deletePost(state,index){
            let findIndex = state.data.findIndex(i => i.id === index)
            state.data.splice(findIndex,1)
        },
        deleteCompleted(state){
            let length = state.data.length - 1;
            for(let i = length; i >= 0;i--){
                if(state.data[i].checked){
                    state.data.splice(i,1)
                }
            }
        }
    },
})
