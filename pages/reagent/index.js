// pages/reagent/index.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:"",
    size:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight,
      size: app.globalData.goods.length
    });
  },
  //当点击左上角回退到按钮时，onShow方法被调用
  onShow:function(){
    this.setData({
      size: app.globalData.goods.length
    });
  },
  loadIn:function(){
    wx.navigateTo({
      url: '../detail/index',
    })
  },
  navto: function () {
    wx.navigateTo({
      url: '../cart/index',
    })
  }
})