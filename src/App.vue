<template>
	<div id="app">
		<Header></Header>
		<Tab></Tab>
		<router-view />

	</div>
</template>

<script>
	import Header from './components/common/header'
	import Tab from './components/common/tab'
	import Apiconfig from './common/api/apiconfig.js';
	export default {
		components: {
			Header: Header,
			Tab: Tab
		},
	}
</script>

<style lang="less" scoped="">
	@import url('./style/main.less');

	#app {
		background: @bgColor;
		.w(375);
		position: fixed;
		top: 0;
		bottom: 0
	}
</style>
