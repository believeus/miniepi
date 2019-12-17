//app.js
App({
  globalData:{ 
      userInfo: null,
      goods: [],
      openid:''
  },
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function (res) {
        console.log(res.code);
        wx.request({
          //     // 自行补上自己的 APPID 和 SECRET
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx4f53ae05242a3e7b&secret=73acec450c056332720f026523e89e64&js_code=' + res.code + '&grant_type=authorization_code',
          success: res => {
            // 获取到用户的 openid                
            console.log("apptestopenid:" + res.data.openid);
            var openid = res.data.openid;
            that.globalData.openid = openid
            wx.setStorageSync("openid", openid);
            console.log("test的openid+app:" + wx.getStorageSync("openid"));

          }
        });
      }
    })
    
  },
  

  onShow:function(options){
    
  },
  onError:function(err){
    setInterval(function(){
        console.log("发生错误："+err)
    },3000)
  },
 
})