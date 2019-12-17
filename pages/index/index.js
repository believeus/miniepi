
const app = getApp()
Page({
  data: {
    // height: "",
    // width: "",
    // L: "",
    openid:'',
    url: "https://app.beijingepidial.com/user/wx/login.jhtml",
    // userInfo:{
    //   avatarUrl: "",//用户头像
    //   nickName: "",//用户昵称

    // },   
    // selectShow: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    // selectData: ['中', '繁', 'En', 'Ru'], //下拉列表的数据
    // index: 0, //选择的下拉列表下标
  },

  onLoad: function (options) {

  },
  getParams: function (a) {
    return wx.getStorageSync(a)
  },
  onShow:function(options){
    var openid = this.getParams('openid');
    console.log(openid);
    this.setData({
      openid: openid
    })
  },

  ToSwiper: function(str) {
    var str = str.currentTarget.dataset.urls
    if (str != '') {
      wx.navigateTo({
        url: str
      })
    } else
      console.log("进行了一次空点击")
  },
  
  
  // 只能转跳到tabbar
  tous:function(){
    wx.switchTab({
      url: '/pages/mess/index',
    })
  },
  
  white1: function() {
    console.log("while1")
  },
  white2: function() {
    console.log("while2")
  },
  black1: function() {
    console.log("black1")
  },
  black2: function() {
    console.log("black2")
  },

  //语言选择菜单 --start
  // 点击下拉显示框
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });
  },
  

  //语言选择菜单 --end
})

