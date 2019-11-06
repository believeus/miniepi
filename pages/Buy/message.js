// pages/Buy/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width : "",
    height : "",
    height1 : "",
    size:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        width: wx.getSystemInfoSync().screenWidth * 0.5,
        height : wx.getSystemInfoSync().screenHeight * 0.5,
        height1: wx.getSystemInfoSync().windowHeight
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  add: function () {
    var _size=1;
    if(this.data.size<=0){_size=2;}
    else { _size = this.data.size + 1;}
    this.setData({
      size:_size
    });
  },
  minus:function(){
    var _size = this.data.size - 1;
    this.setData({
      size: _size
    });

  }
})