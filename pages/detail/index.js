// pages/detail/index.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: "",
    size: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight
    });
  },
  add:function(){
    this.data.size++;
    this.setData({
      size:this.data.size
    });
  },
  minus:function(){
    if(this.data.size==1){return;}
    this.data.size--;
    this.setData({
      size: this.data.size
    });
  },
  addCart:function(data){
    var goods={};
    goods.id=data.currentTarget.dataset.id;
    goods.name = data.currentTarget.dataset.name;
    goods.price = data.currentTarget.dataset.price;
    goods.image = data.currentTarget.dataset.image
    app.globalData.goods.push(goods);
    console.info(app.globalData.goods);
    wx.showToast({
      title: '加入购物车',
      icon: 'success',
      duration: 2000
    })
  }
})