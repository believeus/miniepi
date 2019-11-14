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
  },

    //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
    onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight +  20
        });
      }
    })
  }
})