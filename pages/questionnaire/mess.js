// pages/questionnaire/mess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var code = options.type_code;
    console.log(code);
    var id = options.type_id;
    console.log(id);
    wx.request({
      url: 'http://192.168.1.103:8080/getQuestion.action?type_code=' + code + '&type_id=' + id,
      header: {
        'content-type': "application/json"
      },
      data: {},
      method: "GET",
      dataType: "json",
      success: function (res) {
        var list = res.data.data;
        for(var i=0;i<list.length;i++){
          if(list[i].type=="复合题"){
            var rs = list[i].content.match(/&\[\d\]/g);
            for(var j=0;j<rs.length;j++){
              // list[i].content = list[i].content.replace(rs[j], "<input style='width:100px;height:50px;border:1px solide grey;' data-name='"+rs[j]+"'/>");
            }
            list[i].content = "<input style='width:100px;height:50px;background-color:red;'/>"
            console.info("xxxx--" + list[i].content);
            // for(var j=0;rs.length;j++){
            //   list[i].content.replace(rs[j], " <input data-name="+rs[j]+" />");
            // }
          }
        }
        that.setData({
          data: list
        })
        console.log("-------------------------")
        console.log(list)
      }
    })
  },
})