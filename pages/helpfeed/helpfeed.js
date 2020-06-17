// pages/helpfeed/helpfeed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        'name':'什么是人气值？'
      },
      {
        'name':'怎么获得浅币？'
      },
      {
        'name':'浅币可以用来干嘛？'
      },
      {
        'name':'怎么退出社团/社团聊天室或者群聊？'
      },
      {
        'name':'怎么找到全部社团？如何搜索社团？'
      },
      {
        'name':'有哪些等级？每个等级的权益都有哪些？'
      },
      {
        'name':'怎么设置水印？'
      },
      {
        'name':'怎么开启或关闭手机内的签到提醒、日程？'
      },
    ]

  },
  feedbackhandle(){
    wx.navigateTo({
      url: '../../pages/feedback/feedback',
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