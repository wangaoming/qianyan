// pages/gooddetail/gooddetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {
      url:'/images/gooddetail/1.jpg'
    },
    {
      url:'/images/gooddetail/2.jpg'
    },
    {
      url:'/images/gooddetail/3.jpg'
    },
    {
      url:'/images/gooddetail/4.jpg'
    },
    {
      url:'/images/gooddetail/5.jpg'
    },
    {
      url:'/images/gooddetail/6.jpg'
    },
    {
      url:'/images/gooddetail/7.jpg'
    },
    {
      url:'/images/gooddetail/8.jpg'
    },
    {
      url:'/images/gooddetail/9.jpg'
    },
  
  
  
    ]

  },
// 轮播图滑动时触发，当前页索引改变
onSlideChange(e) {
  this.setData({
    lunboindex: e.detail.current + 1
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