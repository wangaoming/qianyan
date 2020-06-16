// pages/wode/wode.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    list:[{
      'text':'浅记',
      'num':'3'
    },
    {
      'text':'手帐',
      'num':'1'
    },
    {
      'text':'浅友',
      'num':'4'
    },
    {
      'text':'好友',
      'num':'1'
    }
  ],
  serlist1:[
    {
      'img':'/images/wode/1.png',
      'text':'我的主页'
    },
    {
      'img':'/images/wode/2.png',
      'text':'我的账户'
    },{
      'img':'/images/wode/3.png',
      'text':'我的等级'
    },{
      'img':'/images/wode/4.png',
      'text':'我的背包'
    }
  ],
  serlist2:[
    {
      'img':'/images/wode/5.png',
      'text':'我的关注'
    },
    {
      'img':'/images/wode/6.png',
      'text':'我的收藏'
    },{
      'img':'/images/wode/7.png',
      'text':'个性装扮'
    },{
      'img':'/images/wode/8.png',
      'text':'小浅客服'
    }
  ],
  serlist3:[
    {
      'img':'/images/wode/9.png',
      'text':'文集'
    },
    {
      'img':'/images/wode/10.png',
      'text':'星座解谜'
    },{
      'img':'/images/wode/11.png',
      'text':'PK赛'
    },{
      'img':'/images/wode/12.png',
      'text':'同城'
    }
  ],
  serlist4:[
    {
      'img':'/images/wode/13.png',
      'text':'时光说'
    },
    {
      'img':'/images/wode/14.png',
      'text':'盲盒'
    },{
      'img':'/images/wode/15.png',
      'text':'周榜'
    },{
      'img':'/images/wode/16.png',
      'text':'杂货铺'
    }
  ],
  serlist5:[
    {
      'img':'/images/wode/17.png',
      'text':'浅言主题曲'
    },
    {
      'img':'/images/wode/18.png',
      'text':'互动小说'
    },{
      'img':'/images/wode/19.png',
      'text':'有料看看'
    },{
      'img':'/images/wode/20.png',
      'text':'闹钟'
    }
  ]
  
  
  },
  // 个人资料
  inforHandle(){
   wx.navigateTo({
     url: '../../pages/infors/infors',
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
  settinghandle(){
wx.navigateTo({
  url: '../../pages/setting/setting',
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
  vipHandle(){
     wx.navigateTo({
       url: '../../pages/vip/vip',
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
    app.editTabbar();
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