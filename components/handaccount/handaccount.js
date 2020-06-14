// components/handaccount/handaccount.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navbar:['浅记','手账'],
    currentTab:0,
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //导航栏
navbarTap(e){
  this.setData({
    currentTab: e.currentTarget.dataset.idx
  })
},

// 滑动事件
swiperChange: function (e) {
  this.setData({
    currentTab: e.detail.current
  })

},
// 手账的增加
addhandaccount(e){
  wx.navigateTo({
    url: '../../pages/addhanda/addhanda',
  })
},
click(){
  var that = this
  that.labledialog.showLabelDialog();
},
comfirmEvent(){
  this.labledialog. hideLabelDialog();
}
  },
  onReady(){
    this.labledialog = this.selectComponent("#labeldialog")
  }
})
