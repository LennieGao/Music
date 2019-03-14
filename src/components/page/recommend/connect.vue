<template>
	<div class='warpper'>

	<div class="connect">
			<div class='title'>热门榜单推荐</div>
			<ul>
				<li v-for='(item,index) in list' :key='index' @click='goDetail()'>
					<div class='left'>
						<img v-lazy="item.imgurl" width="60" height="60" alt="">
					</div>
					<div class='right'>
						<h4>{{item.name}}</h4>
						<p>{{item.dissname}}</p>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import Apiconfig from "../../../common/api/apiconfig.js";

	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			goDetail() {
				console.log('跳转')
				this.$router.push('/singer')
				//编程式导航
			},
			initScroll() {
				new BScroll('.warpper', {
					click: true
				})
			},
			initConnectData() {
				this.$axios.get(Apiconfig.contApi)
					.then((data) => {
						let arr = []
						data.data.list.forEach(element => {
							arr.push({
								name: element.creator.name,
								dissname: element.dissname,
								imgurl: element.imgurl,
							})
						})
						this.list = arr
						// console.log(arr)
					})
			}
		},
		created() {
			this.initConnectData();
		},
		  mounted(){
		    this.initScroll()
		    
		}
	}
</script>
<style lang='less' scoped>
	@import url('../../../style/main.less');

	/* .connect { */
		.warpper {
			.w(375);
			position: fixed;
			.top(239);
			.bottom(0);
			overflow: hidden;

			/* background: blue; */
			.title {

				.h(65);
				.lh(65);
				text-align: center;
				/* background: greenyellow; */
				font-size: @fontSize-L;
				color: @fontColorSel;
			}

			ul {
				li {
					.w(375);
					.h(60);
					.padding(0, 20, 20, 20);
					display: flex;
					align-items: center;

					.left {
						.padding(0, 20, 0, 0);
						.w(60);
						.h(60);
					}
					.right{
						h4,p{
						  .h(20);
						   .lh(20);
						   font-size: @fontSize-L;
						   color: #fff;
						}    
						p{
						   color: @fontColorWO;
						    
						}
					}
				}
			}
		}
	/* } */
</style>
