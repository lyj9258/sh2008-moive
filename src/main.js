import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// Vue.config.productionTip = false
// //axios体验
// import axios from "axios"
// //配置域名
// axios.defaults.baseURL = "https://m.maizuo.com/"
// axios.interceptors.request.use(function(config){
//   config.headers = {
//     "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"160074879731645319036929","bc":"310100"}',
//     "X-Host":"mall.film-ticket.film.list"
//   };
//   //返回配置
//   return config
// },function(err){
//   //对错误的处理
// })
// axios.get("gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5742090");
//使用懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  loading:"https://2url.cc/1OwrB",
});

//定义事件总线
Vue.prototype.eventBus = new Vue();

import store from '@/store/vuex'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
