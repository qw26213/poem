const app = getApp();
Page({
  data:{
    shopList: [
      {id:"100",name:"沁园春·雪"},
      {id:"101",name:"沁园春·长沙"},
      {id:"102",name:"七律·长征"},
      {id:"103",name:"卜算子·咏梅"},
      {id:"104",name:"忆秦娥·娄山关"},
      {id:"105",name:"采桑子·重阳"},
      {id:"106",name:"蝶恋花·答李淑一"},
      {id:"107",name:"清平乐·六盘山"},
      {id:"108",name:"水调歌头·游泳"},
      {id:"109",name:"人民解放军占领南京"},
      {id:"110",name:"七律·送瘟神"},
      {id:"111",name:"七律·到韶山"},
      {id:"112",name:"菩萨蛮·大柏地"},
      {id:"113",name:"浪淘沙·北戴河"},
      {id:"114",name:"诉衷肠（赠周恩来）"},
      {id:"115",name:"西江月·井冈山"},
      {id:"116",name:"清平乐·会昌"}
    ],
    imageHeight:''
  },
  onLoad: function () {
    wx.setNavigationBarTitle({title: '毛泽东诗词'});
    var height = wx.getSystemInfoSync().windowWidth*690/800;
    this.setData({
       imageHeight: height+'rpx'
    });
  }
})
