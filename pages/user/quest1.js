const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    url: "https://app.beijingepidial.com/ques1/index.jhtml"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
   
  },
  getParams: function (a) {
    return wx.getStorageSync(a)
  },
  onShow: function (options) {
    var openid = this.getParams('openid');
    console.log(openid);
    this.setData({
      openid: openid
    })
  },
 
})