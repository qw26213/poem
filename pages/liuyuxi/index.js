Page({
  data:{
    shopList: [
      {id:"300",name:"浪淘沙 其一"},
      {id:"301",name:"浪淘沙 其三"},
      {id:"302",name:"浪淘沙 其八"},
      {id:"303",name:"酬乐天扬州初逢席上见赠"},
      {id:"304",name:"竹枝词"},
      {id:"305",name:"望洞庭"},
      {id:'306',name:'和乐天春词'}
    ],
    imageHeight:''
  },
  onLoad: function () {
    wx.setNavigationBarTitle({title: '刘禹锡诗词'});
    var height = wx.getSystemInfoSync().windowWidth*690/800;
    this.setData({
       imageHeight: height+'rpx'
    });
  }
})
