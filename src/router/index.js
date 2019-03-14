import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/page/recommend/recommend'
import Singer from '../components/page/singer/singer'
import Ranking from '../components/page/ranking/ranking'
import Search from '../components/page/search/search'
Vue.use(Router)

export default new Router({
  routes: [
   {
		  path: '/',
		  // name: 'recommend',
			component: Recommend,
		},
		 {
		  path: '/recommend',
		  name: 'recommend',
			component: Recommend,
		},
		 {
		  path: '/singer',
		  name: 'singer',
			component: Singer,
		},
		{
		  path: '/ranking',
		  name: 'ranking',
			component: Ranking,
		},
		{
		  path: '/search',
		  name: 'search',
			component: Search,
		}
  ]
})
