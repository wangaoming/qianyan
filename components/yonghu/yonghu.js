// components/yonghu/yonghu.js
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
        'img':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3330645470,621223128&fm=26&gp=0.jpg',
        'biaoshi':'主编I',
        'nicheng':'close',
        'age':'18 射手',
        'area':'江苏省',
        'is':'0',
        'hour':'2小时内'
      },
      {
        'img':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006903191,2780954246&fm=26&gp=0.jpg',
        'biaoshi':'写手',
        'nicheng':'冷',
        'age':'18 射手',
        'area':'上海市',
        'is':'0',
        'hour':'1小时内'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249648&di=35dfd997142344cc2085e8b6c7f31cff&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-a06bef977a9148954cbfa717596add6e_hd.jpg',
        'biaoshi':'小编I',
        'nicheng':'小朋友',
        'age':'15 双子',
        'area':'安徽省',
        'is':'1',
        'hour':'2小时内'
      },
      {
        'img':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2792189642,473914008&fm=26&gp=0.jpg',
        'biaoshi':'小编I',
        'nicheng':'A蜜桃~',
        'age':'11 金牛',
        'area':'贵州省',
        'is':'1',
        'hour':'2小时内'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249646&di=9891658b07058f915ecfee807c27951e&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0514%2Ff2b1df29j00qablbq000lc000b400b4c.jpg',
        'biaoshi':'小编I',
        'nicheng':'莫得感情的老王',
        'age':'22 巨蟹',
        'area':'广州省',
        'is':'0',
        'hour':'2小时内'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249645&di=979069a20b1b8075a788e4b638681007&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180730%2F810f5e0155424a23b1eeefacd7f76df2.jpeg',
        'biaoshi':'写手',
        'nicheng':'莫海蓝',
        'age':'22 巨蟹',
        'area':'广州省',
        'is':'0',
        'hour':'4小时内'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249644&di=3d226d77c12fc0b26acb7db0d0b0ecf9&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F21%2F20141021130151_ndsC4.jpeg',
        'biaoshi':'主编',
        'nicheng':'我是',
        'age':'21 天秤',
        'area':'马鞍山',
        'is':'0',
        'hour':'3小时内'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249642&di=4a1da1b77b9d1bdfc02966d757a008be&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Forj360%2F00779Tthgy1gewcbcagltj30hs0hs79s.jpg',
        'biaoshi':'菜鸟',
        'nicheng':'栉柠',
        'age':'16 射手',
        'area':'南京',
        'is':'1',
        'hour':'3小时内'
      },
      {
        'img':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2364670922,1932953460&fm=26&gp=0.jpg',
        'biaoshi':'小编II',
        'nicheng':'是99@ya',
        'age':'16 射手',
        'area':'南通',
        'is':'1',
        'hour':'3小时内'
      },
      
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592818249637&di=e7cbf15ce782e972024aed3b03d94947&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-e73ebe5fb7fbae39d69ed94dcc82f145_hd.jpg',
        'biaoshi':'小编II',
        'nicheng':'wewe',
        'age':'16 射手',
        'area':'南通',
        'is':'0',
        'hour':'3小时内'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592819638043&di=66164cf73fa8fa17129d36e65a907191&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F19%2F20160819200523_QJNtd.jpeg',
        'biaoshi':'小编II',
        'nicheng':'superhero',
        'age':'19 摩羯',
        'area':'广州省',
        'is':'1',
        'hour':'3小时内'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592819638044&di=cdbbd1a91d792e70a99eea9bc40552e8&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-c3bbcb22ed4cfa2a31e22d729982e718_hd.jpg',
        'biaoshi':'主编',
        'nicheng':'我是',
        'age':'21 天秤',
        'area':'马鞍山',
        'is':'0',
        'hour':'3小时内',
        'hidden':'1'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
