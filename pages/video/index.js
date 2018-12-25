var part_urls = {};
var videoPage;
var pageArr = new Array();
import qqVideo from "../../utils/qqVideo.js"
Page({
    data: {
        host:'',
        videoSrc: ''
    },
    getVideoInfo: function(vid) {
        var urlString = 'https://vv.video.qq.com/getinfo?otype=json&appver=3.2.19.333&platform=11&defnpayver=1&vid=' + vid;
        wx.request({
            url: urlString,
            success: (res) => {
                var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
                var dataJson1 = dataJson.replace(/;qwe/, '');
                var data = JSON.parse(dataJson1);
                var fn_pre = data.vl.vi[0].lnk
                var streams = data['fl']['fi']
                var seg_cnt = data['vl']['vi'][0]['cl']['fc']
                if (parseInt(seg_cnt) == 0) {
                    seg_cnt = 1
                }
                var best_quality = streams[streams.length - 1]['name']
                var part_format_id = streams[streams.length - 1]['id']
                this.setData({
                    host: data['vl']['vi'][0]['ul']['ui'][0]['url']
                });
                for (var i = 1; i < (seg_cnt + 1); i++) {
                    var filename = fn_pre + '.p' + (part_format_id % 10000) + '.' + i + '.mp4';
                    pageArr.push(i);
                    this.requestVideoUrls(part_format_id, vid, filename, 'index' + i);
                }
            }
        })
    },
    requestVideoUrls: function(part_format_id, vid, fileName, index) {
        var keyApi = "https://vv.video.qq.com/getkey?otype=json&platform=11&format=" + part_format_id + "&vid=" + vid + "&filename=" + fileName + "&appver=3.2.19.333"
        wx.request({
            url: keyApi,
            success: (res) => {
                var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
                var dataJson1 = dataJson.replace(/;qwe/, '');
                var data = JSON.parse(dataJson1);
                if (data.key != undefined) {
                    var vkey = data['key'];
                    var url = this.data.host + fileName + '?vkey=' + vkey;
                    part_urls[index] = String(url)
                    this.setData({
                        videoSrc: part_urls.index1
                    });
                }
            }
        })
    },
    onLoad: function() {
        wx.setNavigationBarTitle({ title: '我的视频' });
        // this.getVideoInfo('h0541ilyitl');
        this.getVideoInfo('l05216ykf50');
    }
})

