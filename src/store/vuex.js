//引入vue 和 vuex
import Vue from 'vue'
import Vuex from 'vuex'
//在vue 中使用 vuex
Vue.use(Vuex)

//创建一个对象Store对象用于存储数据
export default new Vuex.Store({
    state: {
        count: 0,
        city: '地球',

    },
    mutations: {
        add: function (state, step) {
            state.count += step;
        },
        setCity: function (state, cityName) {
            state.city = cityName;
        },
        updataToken: function (state, _token) {
            state._token = _token;
            localStorage.setItem("_token", _token);
        }
    },
    actions: {
        addAsync: function (context, step) {
            setTimeout(() => {
                context.commit('add', step);
            }, 3000);
        },
    },
    getters: {
        getCount: function (state) {
            return '当前总数是' + state.count;
        }
    }
})