const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
 

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    console.info("wowo:" + app.globalData.openid)
    
  },

  onShow: function (options) {
    console.log("https://app.beijingepidial.com/ques1/index.jhtml?openid=" + app.globalData.openid);
    this.setData({
      url: "https://app.beijingepidial.com/ques1/index.jhtml"
    })
  },
 
})