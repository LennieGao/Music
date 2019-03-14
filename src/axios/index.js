import Axios from 'axios'; //引入axios这个插件模块 进行二次封装
// axios插件的第二次封装  

//响应拦截器  所有请求 的回复 (响应 )都会经过拦截器里的方法 这个目的是为了利用拦截数据 在一堆数据中只获取我们需要的数据
Axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


export default Axios //封装完毕跑出  然后在main.js中引入使用