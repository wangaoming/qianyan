// components/qianbi/qianbi.js
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
list:[

      {
        'text':'18',
        'text1':'1800',
        'text2':'送56浅币',
      },
      {
        'text':'68',
        'text1':'6800',
        'text2':'送139浅币',
      },
      {
        'text':'118',
        'text1':'11800',
        'text2':'送240浅币',
      }

    ],
list1:[
{
  'img':'/images/account/app_img_pay_icon_wechatpay.png',
  'text':'微信支付',
  'tubiao':'/images/account/app_img_label_choose.png'
}
,
{
  'img':'/images/account/app_img_pay_icon_alipay.png',
  'text':'支付宝',
  'tubiao':'/images/vip/app_img_vip_no_choose.png'
}
,
{
  'img':'/images/account/app_img_pay_icon_qqplay.png',
  'text':'QQ钱包',
  'tubiao':'/images/vip/app_img_vip_no_choose.png'
}


]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
