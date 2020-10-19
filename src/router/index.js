import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//引入路由模块化文件
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'
import cityRouter from './routes/city'
import vuexRouter from './routes/vuex';
import authRouter from './routes/auth'
import {
  from
} from 'core-js/fn/array'


const routes = [{
    path: '/',
    redirect: '/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  cityRouter,
  vuexRouter,
  ...authRouter

]

const router = new VueRouter({
  mode: 'history',

  //前缀
  // base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let arr = [
    "/cinema",
  ];
  if (arr.includes(to.path)) {
    if (localStorage.getItem("_token")) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          refer: encodeURI(to.fullPath)
        }
      });
    }
  }else{
    next();
  }
})

export default router;