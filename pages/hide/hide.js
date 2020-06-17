// pages/hide/hide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tubiao:'/images/hide/app_img_switch_unselect.png',
    list:[{
      'id':'0',
      'biaoshi':'/images/hide/app_img_follow.png',
      'name':'我的关注'
    },
    {
      'id':'2',
      'biaoshi':'/images/hide/app_img_personal_collected.png',
      'name':'我的收藏'
    },
    {
      'id':'3',
      'biaoshi':'/images/hide/app_img_personal_gift.png',
      'name':'我的背包'
    },
    {
      'id':'0',
      'biaoshi':'/images/hide/app_img_personal_location_set.png',
      'name':'天气定位'
    },
  
  
  
  ]

  },
change(e){
var name = e.currentTarget.dataset.tubiao;
console.log(name)
this.setData({
  tubiao:(name == '/images/hide/app_img_switch_unselect.png')?'/images/hide/app_img_switch_select.png':'/images/hide/app_img_switch_unselect.png'
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