
Page({
  data: {
    array: [
      { num: '1' },
      { num: '2' },
      { num: '3' },
      { num: '4' },
      { num: '5' },
      { num: '6' },
      { num: '7' },
      { num: '8' },
      { num: '9' },
      { num: '10' },
      { num: '11' },
      { num: '12' }
    ]
  },
  onLoad: function () {
    var appInstance = getApp()
    console.log(appInstance.className) // I am global data
    this.setData({
      mytxt: appInstance.className
    })
  }

})