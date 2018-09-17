
Page({
  data: {
    array: [
      { grade: '100' },
      { grade: '72' },
      { grade: '83' },
      { grade: '49' },
      { grade: '85' },
      { grade: '66' },
      { grade: '70' },
      { grade: '88' },
      { grade: '90' },
      { grade: '100' },
      { grade: '71' },
      { grade: '92' }
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