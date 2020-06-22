// components/goodthing/goodthing.js
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
       'img':'https://s1.ax1x.com/2020/06/20/Nl2xMV.jpg',
       'text':'超可爱~'
     },

 {
       'img':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=281415370,2475711383&fm=26&gp=0.jpg',
       'text':'超奈斯~'
     },
     {
      'img':'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1834514560,747682364&fm=26&gp=0.jpg',
      'text':'嘶~'
    },
    {
      'img':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=376935182,3454322881&fm=26&gp=0.jpg',
      'text':'值得你拥有'
    },
    {
      'img':'http://img4.imgtn.bdimg.com/it/u=3574676591,1713008385&fm=26&gp=0.jpg',
      'text':'古风饰品哒~'
    },
    {
      'img':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4023439635,3142860682&fm=26&gp=0.jpg',
      'text':'手办哒~'
    },

   ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goodhandle(e){
      var img = e.currentTarget.dataset.img
      console.log(img)
      if(img == 'https://s1.ax1x.com/2020/06/20/Nl2xMV.jpg'){
        
        wx.navigateTo({
          url: '../../pages/gooddetail/gooddetail',
          success: function(res){
            // success
          },
          fail: function() {
       

            // fail
          },
          complete: function() {
            // complete
          }
        })
      }

    }

  }
})
