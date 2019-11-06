// pages/Buy/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: "",
    height: ""
  },

  toNutri: function () {
    wx.navigateTo({
      url: '/pages/Buy/nutritional',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      width: wx.getSystemInfoSync().windowWidth,
      height: wx.getSystemInfoSync().windowHeight
    })
  },

})