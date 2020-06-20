// pages/shetuan/shetuan.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    list:[
       {'img':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1420084952,1075493402&fm=26&gp=0.jpg',
        'text1':'崽崽的宝贝社',
        'text2':'眼中有星辰大海的...',
    },
    {'img':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1017842582,2050596401&fm=26&gp=0.jpg',
    'text1':'随意，随缘社',
    'text2':'佛系',
},
{'img':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1133947559,2376670116&fm=11&gp=0.jpg',
'text1':'古风文学社',
'text2':'唯美古风暗香部落...',
},
{'img':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3560926794,3297299784&fm=26&gp=0.jpg',
'text1':'声控，笙歌社',
'text2':'欢迎喜欢音乐，声...',
},
{'img':'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=608809513,326531873&fm=26&gp=0.jpg',
'text1':'樱雪社社',
'text2':'除了吃就是睡，除...',
},
    ]
  },
  eaguehandle(){
wx.navigateTo({
  url: '../../pages/eague/eague',
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