// components/dressup/dressup.js
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
    navbar:['主题','皮肤','聊天背景','邮票','明信片'],
    currentTab:0

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
  }
})
