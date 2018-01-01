//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://img0.imgtn.bdimg.com/it/u=880477421,2302497799&fm=27&gp=0.jpg",
      "http://img5.imgtn.bdimg.com/it/u=1741138662,3408053349&fm=27&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=2930540385,1562266871&fm=27&gp=0.jpg",
    ],
    indicatorDots: true,//是否显示面板指示点
    autoplay: true,//是否自动切换
    interval: 3000,//自动切换时间间隔,3s
    duration: 1000,//滑动动画时长1s

    // 功能模块的data
    components:[],
    // 经典菜
    classifyList:[]
  },
  changeTo: (event) => {
    console.log(event)
    let where = event.currentTarget.dataset.where;
    console.log(where);
    if (where === "orderFood") {
      wx.switchTab({
        url: `/pages/${where}/${where}`,
      })
    } else {
      wx.navigateTo({
        url: `/pages/class/${where}/${where}`,
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://www.easy-mock.com/mock/5a1ffb42583969285ab22bb7/orderOnline/orderOnline',
      complete:res =>{
        // console.log(res)
        app.globalData.classifyList = res.data
        // console.log(app.globalData.classifyList)

        this.setData({
          classifyList: app.globalData.classifyList.myTrump,
          components: app.globalData.classifyList.components,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})