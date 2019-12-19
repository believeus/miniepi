//app.js
App({
  globalData:{ 
      userInfo: null,
      goods: [],
      openid:'xxxxx',
     
  },
  onLaunch: function () {
    var that = this;
    wx.login({
      success: function (res) {
        console.log("rescode"+res.code);
        wx.getUserInfo({
          success: ures2 => {
            // this.globalData.userInfo = ures2.userInfo;
            console.log("获取到的用户数据：");
            console.log(ures2)
            JSON.stringify(ures2)
            if (that.userInfoReadyCallback) {
              that.userInfoReadyCallback(ures2)
            }
            // 获取到用户的 code 之后：res.code
            console.log("用户的code:" + res.code);
            wx.request({
              url: "https://app.beijingepidial.com/user/getopenid",
              data: {
                code: code,
                encryptedData: ures2.encryptedData,
                iv: ures2.iv

              },
              method: 'GET',
              header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
              },
              success: function (res) {
                console.log(res.data);
              },
              fail: function (res) {
                console.log("反馈未提交，请检查网络");
                wx.showToast({
                  title: res,
                })
              },
              complete: function (err) {
                wx.showToast({
                  title: err,
                })
              }
            })



          }
        });
        // wx.request({
        //   //     // 自行补上自己的 APPID 和 SECRET
        //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx4f53ae05242a3e7b&secret=73acec450c056332720f026523e89e64&js_code=' + res.code + '&grant_type=authorization_code',
        //   success: res => {
        //     // 获取到用户的 openid                
        //     var openid = res.data.openid;
        //     that.globalData.openid = openid
        //     console.log("apptestopenid:" + that.globalData.openid);           
        //   },
        //   fail: function (res) {
        //     console.info(res)
        //      wx.showToast({
        //        title: res,
        //      })
         
        //   },
        //   complete:function(res){
        //     console.info(res)
        //     wx.showToast({
        //       title: res,
        //     })
        //   }
        // });
      }
    })
    
  },
  // onError: function (err) {
  //   swan.request({
  //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx4f53ae05242a3e7b&secret=73acec450c056332720f026523e89e64&js_code=' + res.code + '&grant_type=authorization_code', 
  //     method: "POST",
  //     errMsg: err
  //   })
  // },
  onShow:function(options){
    
  },
})