const app = getApp();
Page({
  data:{
    shopList: [
      {id:"200",name:"水调歌头·明月几时有"},
      {id:"201",name:"念奴娇·赤壁怀古"},
      {id:"202",name:"题西林壁"},
      {id:"203",name:"江城子·乙卯正月二十日夜记梦"},
      {id:"204",name:"定风波·莫听穿林打叶声"},
      {id:"205",name:"望江南·超然台作"},
      {id:"206",name:"和子由渑池怀旧"},
      {id:"207",name:"浣溪沙·细雨斜风作晓寒"},
      {id:"208",name:"临江仙·送钱穆父"}
    ],
    imageHeight:''
  },
  onLoad: function () {
    wx.setNavigationBarTitle({title: '苏东坡诗词'});
    var height = wx.getSystemInfoSync().windowWidth*690/800;
    this.setData({
       imageHeight: height+'rpx'
    });
  }
})
