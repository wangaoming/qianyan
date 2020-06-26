// pages/eaguedetail/eaguedetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249648&di=35dfd997142344cc2085e8b6c7f31cff&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-a06bef977a9148954cbfa717596add6e_hd.jpg',
        'biaoshi':'小编I',
        'nicheng':'小朋友',
        'age':'15 双子',
        'qianji':'50',
        'qianyou':'456',
        'renqi':'63.5w',
        'wenzi':'缘份：吃醋是喜欢你，生气是在乎你，伤你是不想失去你！',
        'is':'1',
        'hour':'2小时内',
        'fire':'19080'
      },
      {
        'img':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2792189642,473914008&fm=26&gp=0.jpg',
        'biaoshi':'小编I',
        'nicheng':'A蜜桃~',
        'age':'11 金牛',
        'qianji':'0',
        'qianyou':'123',
        'renqi':'1.5w',
        'wenzi':'淡忘仇恨，春暖花开。',
        'is':'1',
        'hour':'2小时内',
        'fire':'6789'

      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249646&di=9891658b07058f915ecfee807c27951e&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0514%2Ff2b1df29j00qablbq000lc000b400b4c.jpg',
        'biaoshi':'小编I',
        'nicheng':'莫得感情的老王',
        'age':'22 巨蟹',
        'qianji':'230',
        'qianyou':'623',
        'renqi':'22.5w',
        'wenzi':'爱上你不是错，错的是，我没让你爱上我。',
        'is':'0',
        'hour':'2小时内',
        'fire':'6789'
      }
      ,
      {
        'img':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3330645470,621223128&fm=26&gp=0.jpg',
        'biaoshi':'主编I',
        'nicheng':'close',
        'age':'18 射手',
        'qianji':'2',
        'qianyou':'234',
        'renqi':'2.3w',
        'wenzi':'愿你从此前程似锦，无疾病侵扰',
        'is':'0',
        'hour':'2小时内',
        'fire':'8954'
      },
      {
        'img':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006903191,2780954246&fm=26&gp=0.jpg',
        'biaoshi':'写手',
        'nicheng':'冷',
        'age':'18 射手',
        'qianji':'10',
        'qianyou':'345',
        'renqi':'23.5w',
        'wenzi':'最酸的感觉不是吃醋而是没权吃醋！',
        'is':'0',
        'hour':'1小时内',
        'fire':'3462'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249648&di=35dfd997142344cc2085e8b6c7f31cff&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-a06bef977a9148954cbfa717596add6e_hd.jpg',
        'biaoshi':'小编I',
        'nicheng':'小朋友',
        'age':'15 双子',
        'qianji':'50',
        'qianyou':'456',
        'renqi':'63.5w',
        'wenzi':'缘份：吃醋是喜欢你，生气是在乎你，伤你是不想失去你！',
        'is':'1',
        'hour':'2小时内',
        'fire':'6756'
      },
      {
        'img':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2792189642,473914008&fm=26&gp=0.jpg',
        'biaoshi':'小编I',
        'nicheng':'A蜜桃~',
        'age':'11 金牛',
        'qianji':'0',
        'qianyou':'123',
        'renqi':'1.5w',
        'wenzi':'淡忘仇恨，春暖花开。',
        'is':'1',
        'hour':'2小时内',
        'fire':'4534'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249646&di=9891658b07058f915ecfee807c27951e&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0514%2Ff2b1df29j00qablbq000lc000b400b4c.jpg',
        'biaoshi':'小编I',
        'nicheng':'莫得感情的老王',
        'age':'22 巨蟹',
        'qianji':'230',
        'qianyou':'623',
        'renqi':'22.5w',
        'wenzi':'爱上你不是错，错的是，我没让你爱上我。',
        'is':'0',
        'hour':'2小时内',
        'fire':'7895'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249645&di=979069a20b1b8075a788e4b638681007&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180730%2F810f5e0155424a23b1eeefacd7f76df2.jpeg',
        'biaoshi':'写手',
        'nicheng':'莫海蓝',
        'age':'22 巨蟹',
        'qianji':'89',
        'qianyou':'234',
        'renqi':'1230',
        'wenzi':'折柳作别，你微笑。然后转身。',
        'is':'0',
        'hour':'4小时内',
        'fire':'2345'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249644&di=3d226d77c12fc0b26acb7db0d0b0ecf9&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F21%2F20141021130151_ndsC4.jpeg',
        'biaoshi':'主编',
        'nicheng':'我是',
        'age':'21 天秤',
        'qianji':'23',
        'qianyou':'345',
        'renqi':'33.5w',
        'wenzi':'最心疼的心疼，是连呼吸都那么疼。',
        'is':'0',
        'hour':'3小时内',
        'fire':'8907'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249642&di=4a1da1b77b9d1bdfc02966d757a008be&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Forj360%2F00779Tthgy1gewcbcagltj30hs0hs79s.jpg',
        'biaoshi':'菜鸟',
        'nicheng':'栉柠',
        'age':'16 射手',
        'qianji':'0',
        'qianyou':'123',
        'renqi':'1.5w',
        'wenzi':'爱~。',
        'is':'1',
        'hour':'3小时内',
        'fire':'6756'
      },
      {
        'img':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2364670922,1932953460&fm=26&gp=0.jpg',
        'biaoshi':'小编II',
        'nicheng':'是99@ya',
        'age':'16 射手',
        'qianji':'34',
        'qianyou':'1230',
        'renqi':'5.5w',
        'wenzi':'我枕着对你的思念入眠，枕上留下潮湿一片。',
        'is':'1',
        'hour':'3小时内',
        'fire':'2345'
      },
      
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249637&di=e7cbf15ce782e972024aed3b03d94947&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-e73ebe5fb7fbae39d69ed94dcc82f145_hd.jpg',
        'biaoshi':'小编II',
        'nicheng':'wewe',
        'age':'16 射手',
        'qianji':'340',
        'qianyou':'123w',
        'renqi':'89.5w',
        'wenzi':'总是在担心失去谁, 现在想想,有谁会担心失去我。',
        'is':'0',
        'hour':'3小时内',
        'fire':'6785'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592819638043&di=66164cf73fa8fa17129d36e65a907191&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F19%2F20160819200523_QJNtd.jpeg',
        'biaoshi':'小编II',
        'nicheng':'superhero',
        'age':'19 摩羯',
        'qianji':'34',
        'qianyou':'12w',
        'renqi':'4.5w',
        'wenzi':'岁月如一指流沙，缓缓的在指尖流淌',
        'is':'1',
        'hour':'3小时内',
        'fire':'7895'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592819638044&di=cdbbd1a91d792e70a99eea9bc40552e8&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-c3bbcb22ed4cfa2a31e22d729982e718_hd.jpg',
        'biaoshi':'主编',
        'nicheng':'我是',
        'age':'21 天秤',
        'qianji':'123',
        'qianyou':'1.2w',
        'renqi':'5.5w',
        'wenzi':'最酸的感觉不是吃醋而是没权吃醋！',
        'is':'0',
        'hour':'3小时内',
        'fire':'4567'
        
      }
    ]

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