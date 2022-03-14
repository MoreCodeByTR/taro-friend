export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/hello/index'
  ],
  tabBar: {
    list: [{
      'iconPath': 'resource/match_unchoose.png',
      'selectedIconPath': 'resource/match_choose.png',
      pagePath: 'pages/index/index',
      text: '匹配'
    }, {
      'iconPath': 'resource/mine_unchoose.png',
      'selectedIconPath': 'resource/mine_choose.png',
      pagePath: 'pages/hello/index',
      text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
