Page({
  data: {
    height: "",
    width: ""
  },
  onLoad: function (options) {
    var _height = wx.getSystemInfoSync().windowHeight;
    var _width = wx.getSystemInfoSync().windowWidth;
    this.setData({
      height: _height,
      width: _width
    });
  }
})