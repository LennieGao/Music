export default {
  bannerApi:
    "/qqmusic/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1552093803179&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1",
  contApi:
    "/cont/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.8846386713551841",
	rankingApi:
		"rank/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&uin=0&needNewCode=1&platform=h5&jsonpCallback=jp0"
		
};
// http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.08832287154984164

// 默认请求 https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1

// 因为跨域 我们替换为自己的暗号 先改成请求自己的服务器
// /qqmusic/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg
// 然后再次用拼接的请求地址时 由于没有头部域名 服务器会默认加上当前自己的ip
// http:localhost:8080/qqmusic/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg

// 然后会发现我们现在请求的地址和默认请求的地址正好多了一个 / mydata 即我们自己起的暗号
// https://c.y.qq.com/qqmusic/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg

// 所以在config index.js 配置项里设置了  把多余的去掉 pathRewrite: {"^/qqmusic": ""}

// http://ustbhuangyi.com/music/api/getPurlUrl