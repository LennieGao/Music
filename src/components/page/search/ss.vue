<template>
	<div class='Search'>
		<input type="text" placeholder="搜索歌曲、歌手" id='mydata' @keyup="getval" @blur="back" v-model="val">
		<ul class="serchbox">
			<li v-for="(item,index) in Sdata" :key='index'>{{item.albumname}} - {{item.singer[0].name}}</li>
		</ul>
		<img src="../../icon/search.png" class="serch">
		<ul class="hotsearch">
			<li>热门搜索</li>
			<span>不能说的秘密</span>
			<span>盗将行</span>
			<span>哈哈遥远的你呀</span>
			<span>出山</span>
			<span>写给黄淮</span>
			<span>哈哈遥远的你呀</span>
			<span>哈哈遥你呀</span>
			<span>出山</span>
		</ul>
		<ul class="last">
			<li>搜索历史</li>
			<li>写给黄淮<img src="../../icon/cuo.png"></li>
			<li>出山</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				val: "",
				Sdata: '',
			}
		},
		methods: {
			getval() {
				let box = document.getElementsByClassName('serchbox')[0]
				box.style.display = 'block';
				var url =
					`/cont/music/api/search?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&w=${this.val}&p=1&perpage=20&n=20&catZhida=1&zhidaqu=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&remoteplace=txt.mqq.all&uin=0&needNewCode=1&platform=h5`;
				this.$axios.get(url)
					.then(data => {
						//   console.log(this.val)
						//    console.log(data.data.song.list);  
						this.Sdata = data.data.song.list;
						console.log(this.Sdata);
					})
			},
			back() {
				let box = document.getElementsByClassName('serchbox')[0]
				box.style.display = 'none';

			}
		},
		mounted() {
			this.getval();
			this.back()
		}
	}
</script>
<style></style>
