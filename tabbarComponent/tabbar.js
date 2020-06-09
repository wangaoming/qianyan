// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#777777",
        "borderStyle": "white",
        "selectedColor": "#000000",
        "list": [
          {
            "pagePath": "/pages/qianyan/qianyan",
            "text": "浅言",
            "iconPath": "/tabbarComponent/icon/app_img_tab_zy.png",
            "selectedIconPath": "/tabbarComponent/icon/app_img_tab_zy_selected.png"
          },
          {
            "pagePath": "pages/shetuan/shetuan",
            "text": "社团",
            "iconPath": "/tabbarComponent/icon/app_img_tab_find.png",
            "selectedIconPath": "/tabbarComponent/icon/app_img_tab_find_selected.png"
          },
          {
            "pagePath": "pages/write/write",
            "iconPath": "/tabbarComponent/icon/app_img_tab_pen_tab.png",
            "isSpecial": true
          },
          {
            "pagePath": "pages/xiaoxi/xiaoxi",
            "text": "消息",
            "iconPath": "/tabbarComponent/icon/app_img_tab_chat.png",
            "selectedIconPath": "/tabbarComponent/icon/app_img_tab_chat_selected.png"
          },
          {
            "pagePath": "pages/wode/wode",
            "text": "我的",
            "iconPath": "/tabbarComponent/icon/app_img_tab_mine_down.png",
            "selectedIconPath": "/tabbarComponent/icon/app_img_tab_mine_up.png"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
