//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     // console.log(res)
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           console.log(res)
    //           this.globalData.userInfo = res.userInfo
    //           wx.request({
    //             url: 'http://localhost:8080/user/wx/login',
    //             data: {
    //              openid:"xxxxx"
               
    //             },
    //             method: 'POST',
    //             header: {
    //               'content-type': 'application/x-www-form-urlencoded' // 默认值
    //             },
    //             success: function (res) {
    //               console.log(res.data);
    //             },
    //             fail: function (res) {
    //               console.log("反馈未提交，请检查网络");
    //             }
    //           })
              
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }

    //         }
    //       })
    //     }
    //   }
    // })


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
 
  globalData: {
    userInfo: null,
    goods: [],
  }
})