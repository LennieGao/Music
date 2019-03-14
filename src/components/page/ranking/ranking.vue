<template>
	<div class='warpper'>

		<ul>
			<li id="one_li" v-for="(item,index) in topList" :key="index">
				<div class="left">
					<img :src="item.picUrl" alt="">
				</div>
				<ul class="right">
					<li v-for="(item,index) in item.songList" :key="index">
						{{index+1}} {{item.songname}}-{{item.singername}}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import Apiconfig from "../../../common/api/apiconfig.js";
	export default {
		data() {
			return {
				topList: []
			}
		},
		methods: {
			
			initScroll() {
				new BScroll('.warpper', {
					click: true
				})
			},
			initRankingData() {
				this.$axios.get(Apiconfig.rankingApi)
					.then((data) => {
						// console.log(data)
						let dataList = data.slice(4, length - 1)
						// console.log(dataList)
						let dataObj = JSON.parse(dataList)
						// console.log(dataObj.data.topList)
						let arr = []
						dataObj.data.topList.forEach(element => {
							arr.push({
								picUrl: element.picUrl,
								songList: element.songList
							})
						})
						this.topList = arr
						console.log(arr)
					})

			}
		},
		created() {
			this.initRankingData()
		},
		mounted() {
			this.initScroll()

		}
	}
</script>

<style lang="less">
	@import url('../../../style/main.less');

	.warpper {
		position: fixed;
		.top(89);
		.bottom(0);
		overflow: hidden;

		ul {
			#one_li {
				.w(375);
				.h(100);
				.padding(0, 20, 20, 20);

				display: flex;
				align-items: center;

				.left {
					img {
						.h(100);
						.w(100);
					}

				}
				.right {
					background:#333;
					color: hsla(0, 0%, 100%, .3);
					.h(100);
					.w(240);
					li{
						margin-left:20px;
						margin-top: 5px
					}
				}
			}


		}
	}
</style>
