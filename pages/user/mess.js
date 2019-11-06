// pages/user/mess.js

Page({
  date : {
    height : "",
    width : "" ,
    sex:[{
      name : "Male",
      value : "男"
    },
    {
      name : "Female",
      value : "女"
    }]
  },
  formSubmit: function (e) {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
  onLoad: function (options) {
    this.setData({
      height: wx.getSystemInfoSync().screenHeight,
      width : wx.getSystemInfoSync().screenWidth
    });
  }
})