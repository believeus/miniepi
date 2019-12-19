const app = getApp()
Page({
  onLoad: function(options) {
    console.info("https://app.beijingepidial.com/user/wx/login.jhtml?openid=" + app.globalData.openid)
    // wx.request({
    //   url: "https://app.beijingepidial.com/user/wx/login.jhtm",
    //   data:{
    //     openid:app.globalData.openid,
        
    //   },
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //   },
    //   fail: function (res) {
    //     console.log("反馈未提交，请检查网络");
    //     wx.showToast({
    //       title: res,
    //     })
    //   },
    //   complete: function (err) {
    //       wx.showToast({
    //         title: err,
    //       })
    //   }
    // })
  },
  // onShow: function(options) {
  //   console.log("xxxxx:" + app.globalData.openid);
  //   this.setData({
  //     url: "https://app.beijingepidial.com/user/wx/login.jhtml?openid=" + app.globalData.openid,
  //   })
  // },
  // onError: function (err) {
    
  //   swan.request({
  //     url: 'https://app.beijingepidial.com/user/wx/login.jhtml',
  //     method: "POST",
  //     errMsg: err
  //   })
  // },
})