Page({
  data: {
    height : "",
    width : ""
  },
  toTechSup : function(){
    wx.navigateTo({
      url: '/pages/mess/TechnicalSupport/index'
    })
  },
  toCompany: function () {
    wx.navigateTo({
      url: '/pages/mess/Company/index'
    })
  },
  toDNAMethylation: function () {
    wx.navigateTo({
      url: '/pages/mess/DNAMethylation/index'
    })
  },

  onLoad: function (options) {
    var _height = wx.getSystemInfoSync().windowHeight;
    var _width = wx.getSystemInfoSync().windowWidth;
    this.setData({
      height : _height,
      width : _width
    });
  }
})