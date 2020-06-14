// pages/addhanda/addhanda.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['情感小屋', '碎碎念', '学霸党', '爱情', '二次元', '文字控', '爱旅行', '时尚娱乐'],
    index: 0,
    imgname:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3025976706,1082702786&fm=26&gp=0.jpg',
    textname1:'浅言日记',
    text:'美食日记',
    textname:'美食日记',
    setting:'公开'

  },
  // 取值e
  getTextValue(e){
    this.setData({
      textname:e.detail.value,
      
    })
  }
,
//赋值
showText(){
  this.setData({
    text:this.data.textname
  })
},
  // 选择手帐风格
  chooseaccHandle(){
wx.navigateTo({
  url: '../../pages/chooseaccs/chooseaccs',
  success: function(res){
    // success
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})
  },
  labelHandle(){
    var list= ['公开', '秘密']
    var that = this
    wx.showActionSheet({
      itemList:list,
      success(res){
        if(res.tapIndex === 0){
          that.setData({
            setting:list[res.tapIndex ]
          })

        }else if(res.tapIndex === 1){
         that.setData({
           setting:list[res.tapIndex ]
          })
        }else{
          
        }
      }
    })

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that  = this
    var img = wx.getStorageSync('img')
    console.log(img)
    that.setData({
      imgname:img
    })
 

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})