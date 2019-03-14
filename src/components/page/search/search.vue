<template>

	<div class="search">
		<div class="search_box">
			<span class="span_img">

			</span>
			<input type="text" placeholder="搜素歌曲 . 歌手" @keyup="getVal()" v-model="val">
			<ul>
				<li>
					<h2>热门搜索</h2>
					<span>不能说的秘密</span>
					<span>盗将行</span>
					<span>哈遥远的你</span>
					<span>哈哈遥远你</span>
					<span>哈哈遥远的你</span>
					<span>哈哈远的你</span>
					<span>哈哈遥远的</span>
					<span>哈哈哈遥远的你</span>
					<span>出山</span>
				</li>
			</ul>
		</div>
	</div>

</template>
<!-- <script src="./iconfont.js"></script> -->
<script>
	import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				val: ""
			}
		},
		methods: {
			getVal() {
				var url=`http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.9179656885893261`
				this.$axios.get(url)
				.then(data=>{
					console.log(this.val)
				})
			}
		},
		
		
		
		// 		data(){
		// 			
		// // 		},
		// 		methods:{
		// 			initScroll() {
		// 				new BScroll('.warpper', {
		// 					click: true
		// 				})
		// 			},
		// 		},
		// 		created(){
		// 			
		// 		},
		// 		mounted(){
		// 			this.initScroll()
		// 		}
		// 		
	}
</script>

<style lang="less">
	@import url('../../../style/main.less');


	.search {
		.w(375);
		.h(40);
		margin-top: 20px;

		.search_box {
			.w(335);
			.h(40);
			// background: pink;
			margin-left: 20px;
			border-radius: 6px;

			.span_img {
				display: inline-block;
				.w(40);
				.h(40);
				// background: gold;
				margin-left: 6px;
				.lh(40);

				img {
					.h(40);
					.w(40);
				}
			}

			input {
				display: inline-block;
				margin-top: -35px;
				border: none;
				.h(30);
				.w(240);
			}

			ul {
				margin-top: 10px;
				h2{
					.h(30);
					.w(375);
					font-size: @fontSize-L;
					color: @fontColorSel;
				}
				span{
// 					.padding(20,0,20,20);
					margin-left: 10px;
					font-size: @fontSize-L;
					color: #fff;
					background: gray	
				}
			}

		}
	}
</style>
