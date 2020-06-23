// components/11/11.js
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
    book:[
      {
        'img':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2257398704,1428931779&fm=26&gp=0.jpg',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687081033&di=98c78b41dbce1e9827e18c4c4f81ef9e&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170708%2Fa63395f3ac6344e893f54a577b01e2ab_th.png',
        'bookName':'小确幸',
        'name':'鱼七',
        'time':'2020-06-19',
        'times':'345'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687060508&di=4d956b669ddf0eed60cfd3522f6c5681&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F08%2F20150308190113_NMhux.jpeg',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687151566&di=f200e52481791288d7c4055fdbcd83ac&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F622762d0f703918feb8de92e533d269758eec4f2.jpg',
        'bookName':'遗憾的暗恋',
        'name':'青鹭阁&君浅歌',
        'time':'2020-05-01',
        'times':'905'
      },
      {
        'img':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2286672998,2923562677&fm=26&gp=0.jpg',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687081042&di=49101e05f8210f684e9898e56c84ae4f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201410%2F09%2F20141009224754_AswrQ.jpeg',
        'bookName':'乔萤',
        'name':'稚玖.',
        'time':'2020-06-20',
        'times':'435'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592686870515&di=9009e72b0b0adffae6fc7850578aad0e&imgtype=0&src=http%3A%2F%2Fimg3.a0bi.com%2Fupload%2Fttq%2F20150508%2F1431076267581.jpg',
        'headimg':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3994192346,279218919&fm=26&gp=0.jpg',
        'bookName':'是摘抄呀',
        'name':'思君',
        'time':'2020-06-19',
        'times':'678'
      },
      {
        'img':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2257398704,1428931779&fm=26&gp=0.jpg',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687081033&di=98c78b41dbce1e9827e18c4c4f81ef9e&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170708%2Fa63395f3ac6344e893f54a577b01e2ab_th.png',
        'bookName':'小确幸',
        'name':'鱼七',
        'time':'2020-06-19',
        'times':'345'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592686932754&di=d0f8bbe42740defc68587074b344f4f6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F13caad98124d0a120dc463b8d8397909321e574158cd2-s8hQBS_fw658',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687081032&di=ea81a874247b0865d370e693b159a1e8&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F28%2F20160728005911_v23dU.jpeg',
        'bookName':'一眼沦陷的...',
        'name':'人间清欢',
        'time':'2020-06-20',
        'times':'235'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592686972727&di=94dc6d20d4576545542e9900503438cc&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F8c713eff5837d1197a6e062ace20241e1d16c953.png',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687132805&di=74a0078cda8c7aebc31df43630f75d7b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F20%2F20150820003153_UwJfV.thumb.700_0.jpeg',
        'bookName':'鸭子遇见死神',
        'name':'萧.玖.橘',
        'time':'2020-06-19',
        'times':'455'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592686972724&di=88ced648d08817bc31efffca2ca1f1f7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F00db76fe64bf05b665e36658afef37a14011a90affca-cI8MsL_fw658',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687151577&di=1a9bfa9826e33c3a17532372b7db7a4b&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180803%2F20%2F1533298837-mdgSanODPW.jpg',
        'bookName':'一往情深',
        'name':'七玥',
        'time':'2020-06-18',
        'times':'235'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687030557&di=70fee0b54081a33247b29c745770462b&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3384729212%2C1534377499%26fm%3D214%26gp%3D0.jpg',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687177528&di=f07c705f94b756f5600d793a331b20ff&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1993550763%2C1457058094%26fm%3D214%26gp%3D0.jpg',
        'bookName':'于你我的灵感',
        'name':'落梦',
        'time':'2020-06-17',
        'times':'735'
      },
      {
        'img':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2257398704,1428931779&fm=26&gp=0.jpg',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687081033&di=98c78b41dbce1e9827e18c4c4f81ef9e&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170708%2Fa63395f3ac6344e893f54a577b01e2ab_th.png',
        'bookName':'小确幸',
        'name':'鱼七',
        'time':'2020-06-19',
        'times':'345'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592686932754&di=d0f8bbe42740defc68587074b344f4f6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F13caad98124d0a120dc463b8d8397909321e574158cd2-s8hQBS_fw658',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687081032&di=ea81a874247b0865d370e693b159a1e8&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F28%2F20160728005911_v23dU.jpeg',
        'bookName':'一眼沦陷的...',
        'name':'人间清欢',
        'time':'2020-06-20',
        'times':'235'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592686972727&di=94dc6d20d4576545542e9900503438cc&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F8c713eff5837d1197a6e062ace20241e1d16c953.png',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687132805&di=74a0078cda8c7aebc31df43630f75d7b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F20%2F20150820003153_UwJfV.thumb.700_0.jpeg',
        'bookName':'鸭子遇见死神',
        'name':'萧.玖.橘',
        'time':'2020-06-19',
        'times':'455'
      },
      {
        'img':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=259799453,1152764202&fm=26&gp=0.jpg',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687151573&di=691ef8da736e6eeb1a2d3d158c06cc67&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F07%2F20170207232615_NUWEz.thumb.700_0.jpeg',
        'bookName':'曾是惊鸿照...',
        'name':'流光飞舞',
        'time':'2020-06-15',
        'times':'835'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687060508&di=4d956b669ddf0eed60cfd3522f6c5681&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201503%2F08%2F20150308190113_NMhux.jpeg',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687151566&di=f200e52481791288d7c4055fdbcd83ac&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F622762d0f703918feb8de92e533d269758eec4f2.jpg',
        'bookName':'遗憾的暗恋',
        'name':'青鹭阁&君浅歌',
        'time':'2020-05-01',
        'times':'905'
      },
      {
        'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592686932754&di=d0f8bbe42740defc68587074b344f4f6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F13caad98124d0a120dc463b8d8397909321e574158cd2-s8hQBS_fw658',
        'headimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592687081032&di=ea81a874247b0865d370e693b159a1e8&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F28%2F20160728005911_v23dU.jpeg',
        'bookName':'一眼沦陷的...',
        'name':'人间清欢',
        'time':'2020-06-20',
        'times':'235'
      },
      
      
      
          ]

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
