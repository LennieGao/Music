// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'

import router from './router'
//引入样式文件
// import iconfont from './style/iconfont.css'
import reset from './style/reset.less'
Vue.prototype.$axios=Axios  // 在vue原型上挂载axios对象
Vue.config.productionTip = false

Axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('响应拦截器')
  console.log(response)
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

Vue.prototype.$axios=Axios


//图片懒加载
import LazyLoad from 'vue-lazyload'

Vue.use(LazyLoad, {
  error: require('@/assets/logo.png'),  //错误的时候显示图片
  loading: require('@/assets/logo.png'),  // 正在加载中的图片
  attempt: 1  // 每次加载几张
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
