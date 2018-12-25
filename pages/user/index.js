const app = getApp();
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        hidden: true
    },
    toshare: function() {
        if (app.globalData.userInfo) {
            wx.navigateTo({ url: '../share/index' });
        } else {
            this.toLogin();
        }
    },
    toLogin: function(event) {
        wx.navigateTo({ url: '../getuser/index' });
    },
    tovideo: function(){
        wx.navigateTo({ url: '../video/index' });
    },
    onShow: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            });
        }
    },
    onLoad: function() {
        wx.setNavigationBarTitle({ title: '我的' });
    }
});