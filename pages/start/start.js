// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**获取屏幕的宽度**/
    width:"",
    /**获取屏幕的高度**/
    height:"",
    /**启动页面的图片透明度**/
    opacity:1,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /**Begin:Name:wuqiwei 获取手机屏幕宽度和高度，从而让前台可以获取高度，给小程序背景色和手机屏幕高度一致*/
    var oThis=this;
    //获取系统信息
    wx.getSystemInfo({
      success: function(res) {
        oThis.setData({
          height: res.windowHeight,
          width: res.windowWidth
        });
      },
    })
    /**End:Name:wuqiwei 获取手机屏幕宽度和高度，从而让前台可以获取高度，给小程序背景色和手机屏幕高度一致**/
    /**Begin:Name:wuqiwei 启动页面停留1500毫秒之后，逐渐淡化并隐藏启动页**/
    var _opacity = 1;
    setTimeout(function(){
      var task = setInterval(function () {
        _opacity -= 0.08;
        if (_opacity < 0) {
          wx.switchTab({
            url: "../index/index"
          });
          clearInterval(task);
        }
        oThis.setData({
          opacity: _opacity,
        });
      }, 100);  
    },4000);
   /**End:Name:wuqiwei 启动页面停留1500毫秒之后，逐渐淡化并隐藏启动页**/
  },
 
})