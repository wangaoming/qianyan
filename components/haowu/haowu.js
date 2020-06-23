// components/haowu/haowu.js
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
    items:[
      {
      url:'/images/haowu/a.png'
    },
    {
      url:'/images/haowu/b.png'
    },
    {
      url:'/images/haowu/c.png'
    },
    {
      url:'/images/haowu/d.png'
    }
    ],
    navbar:['全部','彩妆','美体','穿搭','日用','装饰','文具'],
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




  },
  

})
