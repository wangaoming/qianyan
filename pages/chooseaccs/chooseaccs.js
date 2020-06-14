// pages/chooseaccs/chooseaccs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3025976706,1082702786&fm=26&gp=0.jpg',
    list:[
      { 'id':'1',
        'img':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3025976706,1082702786&fm=26&gp=0.jpg',
         'text':'美食一刻'
      },
      {'id':'2',
        'img':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3041199417,108457576&fm=26&gp=0.jpg',
         'text':'闺蜜情深'
      },
      {'id':'3',
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592125453271&di=0f9c146f77b73fa55733980cf8ed179d&imgtype=0&src=http%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffw800%2Fbackground%2F20190221%2Fourmid%2Fpngtree-graduation-season-youth-cartoon-hand-painted-image_25350.jpg',
         'text':'青春毕业季'
      },
      {'id':'4',
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592125485096&di=021d7f0db456b3a40f83e3b22bae6c9c&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3361521908%2C1638254452%26fm%3D193',
         'text':'旅行的意义'
      },
      {'id':'5',
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592125541631&di=19078aa10ac65036d4396984cc8b2cce&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffront%2F165%2Fw529h436%2F20190106%2FrGxb-hrfcctn2968471.jpg',
         'text':'慵懒猫咪'
      },{'id':'6',
        'img':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3196510957,2592753926&fm=26&gp=0.jpg',
         'text':'寻梦环游'
      },{'id':'7',
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592125592297&di=dc3247c8a80ad3438170c646646f1bb0&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D4024694230%2C4070828553%26fm%3D214%26gp%3D0.jpg',
         'text':'岁月童话'
      },{'id':'8',
        'img':'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2115389579,73649881&fm=26&gp=0.jpg',
         'text':'幸福站点'
      },{'id':'9',
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592125629246&di=ec652c53f8c130305457585b0c03cb66&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F23%2F20171123171425_fYNcK.jpeg',
         'text':'断桥残雪'
      },{'id':'10',
        'img':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2431114524,1588052669&fm=26&gp=0.jpg',
         'text':'秘密时光'
      },
      
    ]
  },
// 图片选择
choose(e){
  var name = e.currentTarget.dataset.img;
  var text = e.currentTarget.dataset.text;
  wx.setStorageSync('img', name)
  wx.setStorageSync('textname',text)
  
 
  if(name){
  this.setData({
  image:name
})
  }

},
// 保存并传值
save(e){
  var img = wx.getStorageSync('imgname')
  
  wx.navigateTo({
    url: '../../pages/addhanda/addhanda',
    success: function(res){
      // console.log(wx.getStorageSync('imgname'))
      // wx.setStorageSync('imgname',wx.getStorageSync('imgname'))
      // console.log(wx.getStorageSync('textname'))

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