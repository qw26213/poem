var app = getApp();
Page({
    data: {},
    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo;
        wx.navigateBack({ delta: 1 });
    }
});