Page({
  data: {
    mytxt: '这是item页面',
    color:"green"
  },
  onLoad: function () {
    var appInstance = getApp()
    console.log(appInstance.className) // I am global data
    this.setData({
      mytxt: appInstance.className
    })
  },
  onReady: function () {
    console.log("触发onReady事件");
  },
  onShow: function () {
    console.log("触发onShow事件");
  },
  onHide: function () {
    console.log("触发onHide事件");
  },
  onUnload: function () {
    console.log("触发onUnload事件");
  },
  clickMe:function(){
    // wx.navigateTo({
    //   url: '../imooctest/imooctest',
    // })
    wx.redirectTo({
      url: '../imooctest/imooctest',
    })
  }

})