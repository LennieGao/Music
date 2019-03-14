<template>
	<div class="tab">
		<ul>
			<li v-for="(item,index) in tabBar" :key=index>
				<router-link :to="item.path">
					<!-- <i class="iconfont" v-html="item.icon"></i> -->
					<span>{{item.name}}</span>
				</router-link>

			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabBar: [{
						// icon:"&#xe717;",
						name: "推荐",
						path: "/recommend"
					},
					{
						// icon:"&#xe61d;",
						name: "歌手",
						path: "/singer"
					},
					{
						// icon:"&#xe605;",
						name: "排行",
						path: "/ranking"
					},
					{
						// icon:"&#xe605;",
						name: "搜索",
						path: "/search"
					}

				]
			}
		},
		methods: {
			handleToggle(index) {
				this.$emit("handleToggle", index)
			}
		}
	}
</script>

<style lang="less" scoped="">
	@import url('../../style/main.less');

	.tab {
		.w(375);
		.h(44);
		color: @fontColorSel;
		ul {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			li,
			a {
				width: 100%;
				height: 100%;
			}
			a {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				font-size: @fontSize-L;

			}
		}
	}
</style>
