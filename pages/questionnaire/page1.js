// pages/questionnaire/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      width: wx.getSystemInfoSync().windowWidth
    })
  },
  // To0:function(){
  //   wx.navigateTo({
  //     url: '/pages/questionnaire/page/lifestyle',
  //   })
  // },
  // To1: function() {
  //   wx.navigateTo({
  //     url: '/pages/questionnaire/page/q1',
  //   })
  // },
  // To2: function() {
  //   wx.navigateTo({
  //     url: '/pages/questionnaire/page/q2',
  //   })
  // },
  // To3: function() {
  //   wx.navigateTo({
  //     url: '/pages/questionnaire/page/q3',
  //   })
  // },
  jumpTo: function (event){
    console.info(event.target);
    var _url = event.target.dataset.url;
    console.info(_url);
    wx.navigateTo({
      url: _url,
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