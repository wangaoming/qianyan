// components/labeldialog/labeldialog.js
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
isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 公共方式
    // 隐藏弹框
    hideLabelDialog(){
      this.setData({
        isShow:!this.data.isShow
      })
    },
    // 显示弹框
    showLabelDialog(){
     this.setData({
       isShow:!this.data.isShow
     })
    }

  },
  // 确定事件
  confirmhandle(){
    this.triggerEvent("confirmEvent")
  }
})
