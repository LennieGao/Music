<template>
	<div class='singer'>
		<div class='wapper'>
			<ul class='content'>
				<li v-for='(group,index) of singerList' :key='index'>
					<div class='title' :ref='group.title'>{{group.title}}</div>
					<ul class='singer-group'>
						<li v-for='(item,index) in group.items' :key='index' class='singer-item'>
							<div>
								<img width='50' height='50' :src='item.avator' alt="">
								<span>{{item.name}}</span>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<!-- 侧边栏 -->
		<ul class='slider'>
			<li v-for='(item,index) in sliderData' :key='index' @click='go(item)'>
				{{item==='hot'?'热':item}}
			</li>
		</ul>
	</div>
</template>

<script>
	import SingerData from '../../../common/data/singerdata.js'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				singerList: []
			}
		},
		methods: {
			goDetail() {
				console.log('跳转')
				this.$router.push('/ranking')
				//编程式导航
			},
			go(item) {
				console.log(item)
				console.log(this.$refs)
				console.log(this.$refs[item])
				this.scroll.scrollToElement(this.$refs[item][0])
				//滚动到某一个元素
			},
			initSinger() {
				setTimeout(() => {
					let list = SingerData.data.list;
					//    console.log(data)
					//    Findex   首字母
					//    Fsinger_mid  获取头型
					//    Fsinger_name  歌手名字
					let obj = {
						'hot': {
							title: 'hot',
							items: []
						}
					}
					//将数据按照首字母进行分组 
					let index = 0;
					list.forEach(element => {
						index++
						//添加热门
						if (index <= 20) {
							obj.hot.items.push({
								name: element.Fsinger_name,
								avator: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${element.Fsinger_mid}.jpg?max_age=2592000`,
								Findex: element.Findex
							})
						}

						if (obj[element.Findex]) {
							// 已经相同首字母  直接push
							obj[element.Findex].items.push({
								name: element.Fsinger_name,
								avator: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${element.Fsinger_mid}.jpg?max_age=2592000`,
								Findex: element.Findex
							})
						} else {
							// 没有相同首字母创建一个新的对象
							obj[element.Findex] = {
								title: element.Findex,
								items: []
							}
							obj[element.Findex].items.push({
								name: element.Fsinger_name,
								avator: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${element.Fsinger_mid}.jpg?max_age=2592000`,
								Findex: element.Findex
							})
						}

					});
					console.log(obj)
					//对象转化为数组
					let arr = []
					let hot = []
					// 排除 9 开头的  将hot 已经字母开头进行区分
					for (const key in obj) {
						if (key != 9) {
							if (key == 'hot') {
								hot.push(obj[key])
							} else {
								arr.push(obj[key])
							}

						}
					}
					//排序
					arr.sort((a, b) => {
						return a.title.charCodeAt() - b.title.charCodeAt()
					})
					this.singerList = hot.concat(arr)
					console.log(this.singerList)
					this.$nextTick(() => {
						this.initScroll()
					})
				}, 500)
			},
			initScroll() {
				this.scroll = new BScroll('.wapper')
			}
		},
		computed: {
			sliderData() {

				let arr = this.singerList.map((item) => {
					return item.title
				})
				console.log(arr)
				return arr;
			}
		},
		created() {
			this.initSinger()
		}
	}
</script>

<style lang="less">
	@import url('../../../style/main.less');

	.singer {
		.top(88);
		.bottom(0);
		position: fixed;
		.w(375);

		.wapper {
			overflow: hidden;
			.w(375);
			position: fixed;
			.top(88);
			.bottom(0);

			ul {
				li {
					.title {
						.w(375);
						box-sizing: border-box;
						.h(30);
						.lh(30);
						color: @fontColorWO;
						background: #333;
						font-size: @fontSize-L;
						.padding(0, 0, 0, 20);
					}

					.singer-group {
						color: #fff;

						.singer-item {
							.h(70);
							.w(375);
							.padding(20, 0, 0, 20);
							box-sizing: border-box;

							div {
								display: flex;

								img {
									border-radius: 50%;
								}

								span {
									display: inline-block;
									.h(50);
									.lh(50);
									color: @fontColorWO;
									font-size: @fontSize-m;
									.padding(0, 0, 0, 20);
								}
							}
						}
					}
				}
			}
		}

		.slider {
			z-index: 999;
			border-radius: 10px;
			.padding(20, 0, 20, 0);
			position: absolute;
			right: 10px;
			top: 50%;
			.w(20);
			transform: translate3d(0, -50%, 0);
			background: @fontColorNormal;

			//  background: #fff;
			li {
				.w(20);
				.h(18);
				font-size: @fontSize-s;
				text-align: center;
				color: @fontColorWO;

			}
		}
	}
</style>
