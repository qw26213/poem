const app = getApp();
Page({
    data: {
        address: 'China',
        canIUse: true,
        userInfo: { avatarUrl: "../../image/user.png", nickName: "点击头像授权" },
        hasUserInfo: false,
        hidden: true,
        host:'',
        videoSrc: ''
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
    getUserInfo: function(e) {
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    onShow: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        }
    },
    onLoad: function() {
        wx.setNavigationBarTitle({ title: '我的' });
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        }
    }
})

