//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  onShow:function(options){
      console.log(options)
      switch(options.scene){
        case 1001:
          "1001 场景进入"
          break;
        case 1005:
          "1005 场景进入"
          break;
        case 1011:
          "1011  扫描二维码场景进入"
          break;       
      }
  },
  onError:function(err){
    setInterval(function(){
        console.log("发生错误："+err)
    },3000)
  },
  globalData: {
    userInfo: null,
    goods: [],
  }
})