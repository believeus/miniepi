Page({
  data: {
    height: "",
    width: ""
  },
  toMoShe: function () {
    wx.navigateTo({
      url: '../../../../professor/MoShe'
    })
  },
  toDavid: function () {
    wx.navigateTo({

    })
  },
  toHui: function () {
    wx.navigateTo({

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