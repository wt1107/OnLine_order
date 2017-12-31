//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:[
      "http://img0.imgtn.bdimg.com/it/u=880477421,2302497799&fm=27&gp=0.jpg",
      "http://img5.imgtn.bdimg.com/it/u=1741138662,3408053349&fm=27&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=2930540385,1562266871&fm=27&gp=0.jpg",
    ],
    indicatorDots: true,//是否显示面板指示点
    autoplay: true,//是否自动切换
    interval: 3000,//自动切换时间间隔,3s
    duration: 1000,//滑动动画时长1s
  },
  
})
