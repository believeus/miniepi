// pages/user/investigation.js
Page({
  data: {
    currentTab: 0,
    items: [{
        name: 1,
        value: "温和的"
      },
      {
        name: 2,
        value: "令人不安的"
      },
      {
        name: 3,
        value: "痛苦的"
      },
      {
        name: 4,
        value: "可怕的"
      },
      {
        name: 5,
        value: "折磨人的"
      },
    ]
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  swichNav: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindDateChange: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
  }
})