export default {
  pages: [
    'pages/index/index',
    'pages/login/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      'iconPath': 'resource/latest.jpeg',
      'selectedIconPath': 'resource/latest.jpeg',
      pagePath: 'pages/index/index',
      text: '最新'
    }, {
      'iconPath': 'resource/latest.jpeg',
      'selectedIconPath': 'resource/latest.jpeg',
      pagePath: 'pages/login/index',
      text: '登陆'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  }
}
