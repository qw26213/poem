import {ToastPannel} from './component/toast/toast.js';
App({
  ToastPannel,
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function (res) {
        if (res.code) {
            wx.setStorageSync('code', res.code);
        }
      }
    });
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})