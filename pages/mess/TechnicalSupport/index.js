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
  CF: function () {
    wx.navigateTo({
      url: '../../../../fat/chafat'
    })
  },
  jason: function () {
    wx.navigateTo({
      url: '../../../../lv/index'
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