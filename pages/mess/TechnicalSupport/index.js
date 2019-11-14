Page({
  data: {
    height: "",
    width: ""
  },
  toMoShe: function () {
    wx.navigateTo({
      url: '../../../../new/MoShe'
    })
  },
  toDavid: function () {
    wx.navigateTo({
      url: '../../../../david/index'
    })
  },
  toHui: function () {
    wx.navigateTo({
      url: '../../../../huili/index'
    })
  },
  onLoad: function (options) {
    var _height = wx.getSystemInfoSync().screenHeight;
    var _width = wx.getSystemInfoSync().screenWidth;
    this.setData({
      height: _height,
      width: _width
    });
  }
})