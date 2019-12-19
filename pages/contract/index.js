const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    zh_lang: true,
    en_lang: false,
    zh_color: "red",
    en_color: "black",
    
    

   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var oThis = this;
    wx.getSystemInfo({
      success: function (res) {
        oThis.setData({
          lang: res.language
        });
      },
    })
    wx.login({
      success: res => {
        console.log(res)
        if(res.code){
          var code = res.code;
          console.log("data:"+res.code);

          // 查看是否授权
          wx.getSetting({
            success: function (res) {
              console.info("index:res"+res)
              if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                  success: ures2 => {
                    // this.globalData.userInfo = ures2.userInfo;
                    console.log("获取到的用户数据：");
                    console.log(ures2)
                    JSON.stringify(ures2)
                    if (oThis.userInfoReadyCallback) {
                      oThis.userInfoReadyCallback(ures2)
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
                        console.log("日志："+res);
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
              } else {
                // 用户没有授权
                // 改变 isHide 的值，显示授权页面
                oThis.setData({
                  isHide: true
                });
              }
            }
          });

        }
      }
    })
    


  },

  authorize: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(+e.detail.userInfo);
      wx.switchTab({
        url: "/pages/index/index"
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了"返回授权"');
          }
        }
      });
    }
  },
  toLang: function (e) {
    var _lang = e.target.dataset.lang;
    if (_lang == 'CN') {
      this.setData({
        zh_lang: true,
        en_lang: false,
        zh_color: "red",
        en_color: "black"
      });
    } else if (_lang == 'EN') {
      this.setData({
        zh_lang: false,
        en_lang: true,
        zh_color: "black",
        en_color: "red"
      });
    }


  },
  
})