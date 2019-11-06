Page({

  /**
   * 页面的初始数据
   */
  data: {
    width : "",
    height : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _height = wx.getSystemInfoSync().screenHeight;
    var _width = wx.getSystemInfoSync().screenWidth;
    this.setData({
      height: _height,
      width: _width
    });
  },

  ToFAQ : function(){
    wx.navigateTo({
      url: '/pages/user/question/index',
    })
  }
})