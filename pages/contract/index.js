// pages/contract/index.js
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
      success: function (res) {
        console.log(res.code);
        wx.request({
          //     // 自行补上自己的 APPID 和 SECRET
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx4f53ae05242a3e7b&secret=73acec450c056332720f026523e89e64&js_code=' + res.code + '&grant_type=authorization_code',
          success: res => {
            // 获取到用户的 openid                
            console.log("用户的openid:" + res.data.openid);
            var openid = res.data.openid;
            wx.setStorageSync("openid", openid);
            console.log("test的openid:" + wx.getStorageSync("openid"));
          }
        });
      }
    })
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        console.info(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                  wx.request({
                    //     // 自行补上自己的 APPID 和 SECRET
                    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx4f53ae05242a3e7b&secret=73acec450c056332720f026523e89e64&js_code=' + res.code + '&grant_type=authorization_code',
                    success: res => {
                      // 获取到用户的 openid
                      console.log("用户的openid:" + res.data.openid);
                      var openid = res.data.openid;
                      wx.setStorageSync("openid", openid);
                      console.log("test的openid:" + wx.getStorageSync("openid"));
                    }
                  });
                }
              });
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
  },

  authorize: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      wx.request({
        url: 'https://app.beijingepidial.com/user/wx/login',
        data: {
          openid: wx.getStorageSync('openid')
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success: function (res) {
          console.log(res.data);
        },
        fail: function (res) {
          console.log("反馈未提交，请检查网络");
        }
      })
      wx.switchTab({
        url: "/pages/user/quest1"
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})