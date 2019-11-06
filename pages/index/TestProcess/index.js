// pages/index/TestProcess/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: ""
  },
  ToMarket: function () {
    wx.switchTab({
      url: '/pages/Buy/index'
    })
  },
  ToQuestionnaire: function () {
    wx.navigateTo({
      url: '/pages/questionnaire/page1'
    })
  },
  ToSaliva: function () {
    wx.navigateTo({
      url: '/pages/index/SalivaCollection/index'
    })
  },
  ToInformation: function () {
    wx.navigateTo({
      url: '/pages/index/introduction/question/index'
    })
  },
  ToDNA:function(){
    wx.navigateTo({
      url: '/pages/index/introduction/DNA/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
        width: wx.getSystemInfoSync().windowWidth
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})