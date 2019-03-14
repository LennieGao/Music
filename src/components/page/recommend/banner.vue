
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
        <img :src="item.picUrl" class="slidepic">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
	
</template>

<script>
	import Connect from './connect'
	import Swiper from "swiper";
	// import Axios from "axios";
	import Apiconfig from "../../../common/api/apiconfig.js";
// console.log(Apiconfig)

  export default {
		components: {
			Connect
		},
    data() {
      return {
        imgs: []
      };
    },
    methods: {
      initswiper() {
        // 在挂载完成的钩子函数初始化轮播图 不能在created里初始化 因为这里涉及dom操作 created里还没有dom元素
        var mySwiper = new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      },
      initdata() {
        let url = Apiconfig.bannerApi;
				// console.log(this);
				// console.log(Apiconfig.bannerApi)
				// console.log(url)
        // 已在vue原型上挂载了axios对象 实例中的组件直接使用this.$axios.get/post即可 Vue.prototype.$axios = Axios
   this.$axios.get(url)
    .then(data => {
     // console.log(data.data.slider);
		 console.log(url)

     this.imgs = data.data.slider;
     // 数据更新完 页面更新完才执行
     this.$nextTick(()=>{
       this.initswiper();
     })
        });
      },
      mounted() {
      //  this.initswiper();由于生命周期的原因 创建函数先于挂载 也就是数据请求会先于轮播执行 而在数据请求里有涉及挂载后才有的数据 所以目前initdata的imgs数据为空 一个空数据是不会在页面有显示的 所以要让 数据更新完成后 再执行 this.initswiper();  $nextTick
      }
    },
    created() {
      this.initdata();
    }


}
</script>

<style lang='less' scoped>
	@import url('../../../../node_modules/swiper/dist/css/swiper.css');
	@import url('../../../style/main.less');
.swiper-container {
  .w(375);
  .h(150);
  /* background: pink; */
  margin-left: 0 !important;
  .swiper-wrapper {
    float: left;
    .slidepic {
      width: 100%;
      height: 100%;
    }
  }
}
</style>