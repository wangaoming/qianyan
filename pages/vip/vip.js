// pages/vip/vip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      'id':'1',
      'beijing':'https://s1.ax1x.com/2020/06/16/NFrY5t.png',
      'yueshu':'3',
      'yuanjia':'54',
      'xianjia':'45',
      'chengzhang':'668',
      'qianbi':'999'
    },
    {
      'id':'2',
      'beijing':'https://s1.ax1x.com/2020/06/16/NFrJUI.png',
      'yueshu':'12',
      'yuanjia':'168',
      'xianjia':'216',
      'chengzhang':'3168',
      'qianbi':'6999'
    },
    {
      'id':'3',
      'beijing':'https://s1.ax1x.com/2020/06/16/NFr3bd.png',
      'yueshu':'1',
      'yuanjia':'20',
      'xianjia':'18',
      'chengzhang':'668',
      'qianbi':'999'
    }
  
  ]

  },
  change(e){
var name = e.currentTarget.dataset.beijing;
console.log(name)
this.setData({
  'list[0].beijing':(name == 'https://s1.ax1x.com/2020/06/16/NFrY5t.png')?'https://s1.ax1x.com/2020/06/16/Nk4sW4.png':'https://s1.ax1x.com/2020/06/16/NFrY5t.png',
  'list[1].beijing':(name == 'https://s1.ax1x.com/2020/06/16/NFrJUI.png')?'https://s1.ax1x.com/2020/06/16/Nk4gyR.png':'https://s1.ax1x.com/2020/06/16/NFrJUI.png',
  'list[2].beijing':(name == 'https://s1.ax1x.com/2020/06/16/NFr3bd.png')?'https://s1.ax1x.com/2020/06/16/Nk46SJ.png':'https://s1.ax1x.com/2020/06/16/NFr3bd.png',
   
})




  },
  ledalhandle(){
wx.navigateTo({
  url: '../../pages/legal/legal',
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