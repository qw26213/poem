//-------判断是否为空------------value.replace(/(^s*)|(s*$)/g, "")==""||
function isNull(value) {
    if (value == "null" || value == "" || value == undefined || value == null) {
        return true;
    } else {
        return false;
    }
}

//----------获取url参数值----------- 
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    return r != null ? unescape(r[2]) : null;
}

//-----判断手机号--------
function telCheck(mobile) {
    var myreg = /^(((12[0-9]{1})|(13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
        return false;
    }
    return true;
}

//----------邮箱验证---------
function emailCheck(r) {
    var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!pattern.test(r)) {
        return false;
    } else {
        return true;
    }
}

//----------判断邮编---------
function postCheck(number) {
    var re = /^[0-9][0-9]{5}$/;
    if (!re.test(number)) {
        return false;
    } else {
        return true;
    }
}
// ------判断是不是anroid系统-------
var isAndroid = (window.navigator.userAgent.indexOf('Android') >= 0) ? true : false;

// ----------返回上一页----------
function back() {
    window.history.go(-1);
}

// -------去除连接符-------
function delLinkMark(str) {
    return str.replace(/-/g, "");
}

//----------调试log--------
function log(str) {
    console.log(str);
}

//----------取消冒泡--------
function stopProp(e) {
    if (e.stopPropagation)
        e.stopPropagation();
    else
        e.cancelBubble = true;
}
//-----------刷新本页面----------
function refresh() {
    document.location.reload();
}
//------------验证数字(整数、浮点数都可以通过)----------
function isFloat(oNum) {
    if (!oNum) return false;
    var strP = /^\d+(\.\d+)?$/;
    if (!strP.test(oNum)) return false;
    try {
        if (parseFloat(oNum) != oNum) return false;
    } catch (ex) {
        return false;
    }
    return true;
}
//-----------正整数验证----------
function isNumber(str) {
    var retel = /^[\d]+$/;
    if (retel.test(str)) {
        return true;
    } else {
        return false;
    }
}
// -----------是否是中文---------
function isZh(str) {
    if (/^[\u4e00-\u9fa5]+$/i.test(str)) {
        return true;
    } else {
        return false;
    }
}

// 去除数组空元素
function ClearNullArr(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (!arr[i] || arr[i] == '' || arr[i] == undefined) {
            arr.splice(i, 1);
            len--;
            i--;
        }
    }
    return arr;
}

// 去除数组重复元素
function uniqueArr(arr) {
    var result = [],
        hash = {};
    for (var i = 0, elem;
        (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
//----------获取验证码---------
var waitTime = 60;
function waittime() {
    if (waitTime <= 0) {
        waitTime = 60;
        $('#getCode').html('再次获取验证码');
        $('#getCode').attr('onclick', 'getCode()');
    } else {
        console.log('2')
        $('#getCode').html(waitTime + '秒后再次获取');
        $('#getCode').attr('onclick', '');
        waitTime--;
        setTimeout(function() {
            waittime()
        }, 1000);
    }
}

// 原生js获取id对象
function $$(id) {
    return document.getElementById(id);
}

/*是否含数字*/
function hasNum(str) {
    reg = /[0-9]/g;
    return reg.test(str)
}
//是否含字母
function isEng(str) {
    reg = /^[A-Za-z]+$/;
    return reg.test(str)
}
//是否是字符串
function IsString(str) {
    return (typeof str == "string" || str.constructor == String);
}

//获取当前日期
function getNowDay() {
    var d = new Date();
    var str1 = d.getFullYear()
    var str2 = d.getMonth() + 1;
    // var str3 = d.getDate();
    if (str2 < 10) {
        str2 = '0' + str2;
    }
    // return str1+'-'+str2+'-'+str3;
    return str1 + '-' + str2;
}

//获取当前时间
function getNowTime() {
    var d = new Date();
    var str1 = d.getHours();
    var str2 = d.getMinutes();
    var str3 = d.getSeconds();
    str1 = parseInt(str1)
    str2 = parseInt(str2)
    str3 = parseInt(str3)
    if (str1 < 10) {
        str1 = '0' + str1;
    }
    if (str2 < 10) {
        str2 = '0' + str2;
    }
    if (str3 < 10) {
        str3 = '0' + str3;
    }
    return str1 + ':' + str2 + ':' + str3;
}

function getDayList() {
    var myDate = new Date();
    myDate.setDate(myDate.getDate() - 14);
    var dateArray = [];
    var dateTemp;
    var flag = 1;
    for (var i = 0; i < 14; i++) {
        dateTemp = myDate.getDate();
        dateArray.push(dateTemp + '日');
        myDate.setDate(myDate.getDate() + flag);
    }
    return dateArray;
}
//获取本月前12月
function getMonth(number) {
    var date1 = new Date();
    date1.setMonth(date1.getMonth() - number);
    var year1 = date1.getFullYear();
    var month1 = date1.getMonth() + 1;
    return (month1.toString())
}

function getMonthList() {
    var monthArray = [];
    for (var i = 1; i < 13; i++) {
        monthArray.push(String(getMonth(i)) + '月');
    }
    return monthArray.reverse();
}

function formatDate(date) {
    var time = new Date(date);
    var mymonth = time.getMonth() + 1;
    var myweekday = time.getDate();
    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    return String(mymonth + "." + myweekday);
}
//得到每周的周一
function getFirstDateOfWeek(theDate) {
    var firstDateOfWeek;
    theDate.setDate(theDate.getDate() + 1 - theDate.getDay());
    firstDateOfWeek = theDate;
    return firstDateOfWeek;
}
//得到每周的周日
function getLastDateOfWeek(theDate) {
    var lastDateOfWeek;
    theDate.setDate(theDate.getDate() + 7 - theDate.getDay()); //  
    lastDateOfWeek = theDate;
    return lastDateOfWeek;
}

function getWeek(i) {
    var tD = new Date();
    var curTime1 = parseInt(getFirstDateOfWeek(tD).getTime()) - 604800000 * i;
    var curTime2 = parseInt(getLastDateOfWeek(tD).getTime()) - 604800000 * i;
    return formatDate(curTime1) + "-" + formatDate(curTime2)
}

function getWeekList() {
    var weekArray = [];
    for (var i = 1; i < 13; i++) {
        weekArray.push(getWeek(i))
    }
    return weekArray.reverse();
}

// ----------原生js获取id对象-----------
function $$(id) {
    return document.getElementById(id);
}

// ----------开启loading页--------
function loading() {
    var loading = document.createElement("div");
    loading.innerHTML = '<div class="loadingbox"><div class="loading_icon"></div><p>加载中...</p></div>';
    $$("bodyDiv").appendChild(loading);
}

// ----------关闭loading页--------
function closeLoading() {
    $$("bodyDiv").removeChild($$("bodyDiv").lastChild);
}

// ------无数据显示页----
// nodata('icon_nodata','暂无相关数据');nodata('icon_nowifi','网络太不给力了');
function nodata(icon_class, str) {
    var nodata = document.createElement("div");
    nodata.innerHTML = '<div class="nodata"><div class="' + icon_class + ' ub-img2"></div><p>' + str + '</p></div>';
    $$("bodyDiv").appendChild(nodata);
};

// ------清除无数据显示页----
function clearNodata() {
    $$("bodyDiv").removeChild($$("bodyDiv").lastChild);
};

// -------提示框------
function textTip(text) {
    var textTip = document.createElement("div");
    textTip.className = "textTips";
    textTip.innerHTML = '<span>' + text + '</span>';
    $$("bodyDiv").appendChild(textTip);
    textTip.style.display = "block";
    setTimeout(function() {
        $$("bodyDiv").removeChild($$("bodyDiv").lastChild);
    }, 1500);
}

/*******返回月剩几天*********/
function getCountDays() {
    var curDate = new Date();
    var curMonth = curDate.getMonth();
    curDate.setMonth(curMonth + 1);
    var curDay = curDate.getDate();
    curDate.setDate(0);
    return parseInt(curDate.getDate()) - parseInt(curDay);
}

//根据2000-00-00 00:00:00类型获取时间戳
function stampify(str) {
    var timestamp = Date.parse(new Date(str));
    return timestamp;
}

//****获取当前时间返回20151102格式日期
function add0(m) {
    return m < 10 ? '0' + m : m
}

function getCurDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();
    var currentdate = year + "" + add0(month) + "" + add0(date);
    return currentdate;
}

// 根据时间戳格式化日期
function formatDate(stortime) {
    var time = new Date(stortime);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    return y + '-' + add0(m) + '-' + add0(d);
}

// 取随机数
function RndNum(MaxNum, MinNum) {
    return parseInt((MaxNum - MinNum + 1) * Math.random() + MinNum)
}

// 原生ajax请求函数
function getAjax(url, data, success, error) {
    var xmlHttp = new XMLHttpRequest();
    var params = [];
    for (var key in data) {
        params.push(key + '=' + data[key]);
    }
    var postData = params.join('&');
    xmlHttp.open('GET', url + "?" + postData, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            success(xmlHttp.responseText);
        } else {
            error(xmlHttp.responseText);
        }
    }
}

//POST方法封装的函数为:
function postAjax(url, data, success, error) {　　
    var XHR = new XMLHttpRequest();　　
    var params = [];
    for (var key in data) {
        params.push(key + '=' + data[key]);
    }
    var postData = params.join('&');
    XHR.open('POST', url, true);
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");　　
    XHR.send(postData);
    XHR.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            success(xmlHttp.responseText);
        } else {
            error();
        }
    };
}

/* 封装ajax函数
 ajax({
   method: 'GET',
   url: 'http://121.43.168.135:8080/iwater/v1/waterquality/nt/WaterQuality4Items/v1.json',
   data: dataObj,
   success: function (data) {
     console.log(data)
   }
})*/

function ajax(opt) {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function() {};
    var xmlHttp = new XMLHttpRequest();
    var params = [];
    for (var key in opt.data) {
        params.push(key + '=' + opt.data[key]);
    }
    var postData = params.join('&');
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
    } else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            opt.success(xmlHttp.responseText);
        }
    };
}

// -----------jquery封装ajax方法----------
$.extend({
    iwaterAjax: function(url, type, dataObj, sucFuc, errorFuc, isLoad) {
        if (isLoad || isLoad == null) {
            Loading();
        }
        $.ajax({
            url: url,
            type: type,
            data: {
                "requestPara": JSON.stringify(dataObj)
            },
            dataType: "json",
            success: function(data) {
                closeLoading();
                if (data.status == 0) {
                    sucFuc(data.data);
                } else {
                    textTip(data.message);
                }
            },
            error: function(err) {
                closeLoading();
                if (errorFuc == null) {
                    textTip('网络太不给力了！');
                } else {
                    errorFuc();
                }
            }
        })
    }
})

// Array对象添加一个indexOf方法
// Array.prototype.indexOf = function(item) {
//         var length = this.length;
//         for (var i = 0; i < length; i++) {
//             if (this[i] == item) {
//                 return (i);
//             }
//         }
//         return (-1);
// }
// var myArray = [1,2,3,4,5,6];
// console.log(myArray.indexOf(8));
// console.log(myArray.indexOf(5));

//------------ 向json对象里面添加键值;-----------eg: myJson.push({ male:"male",result:'100'});------
// Object.prototype.push=function(obj){
//     if(typeof(obj)=='object')
//     for(var param in obj) this[param]=obj[param];  
// }

// 获取array对象里面的item键值对组成的数组
function getArray(array, item) {
    var len = array.length;
    var newArray = [];
    for (var i = 0; i < len; i++) {
        newArray.push(array[i][item]);
    }
    return newArray;
}
// 判断数组array中的每一项是否是数字
function checkNum1(array) {
    var newArray = [];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        newArray.push(isNumber(array[i]));
        
    }
    var str = newArray.join(',')
    if (str.match('false')) {
        return false;
    }
    return true;
}
// 判断数组array中的每一项是否是浮点型数字
function checkNum2(array) {
    var newArray = [];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        newArray.push(isFloat(array[i]));
    }
    var str = newArray.join(',')
    if (str.match('false')) {
        return false;
    }
    return true;
}

/*-------获取上一个月-------*/
function getPreMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2;
    return t2;
}

/*-------- 获取下一个月--------*/
function getNextMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2;
    return t2;
}

function touches(obj, direction, fun) {
    //obj:ID对象  
    //direction:swipeleft,swiperight,swipetop,swipedown,singleTap,touchstart,touchmove,touchend  
    //划左，    划右，     划上，   划下，    点击，    开始触摸， 触摸移动， 触摸结束  
    //fun:回调函数  
    var defaults = {
        x: 5,
        y: 5,
        ox: 0,
        oy: 0,
        nx: 0,
        ny: 0
    };
    direction = direction.toLowerCase();
    //配置：划的范围在5X5像素内当点击处理  
    obj.addEventListener("touchstart", function() {
        defaults.ox = event.targetTouches[0].pageX;
        defaults.oy = event.targetTouches[0].pageY;
        defaults.nx = defaults.ox;
        defaults.ny = defaults.oy;
        if (direction.indexOf("touchstart") != -1) fun();
    }, false);
    obj.addEventListener("touchmove", function() {
        event.preventDefault();
        defaults.nx = event.targetTouches[0].pageX;
        defaults.ny = event.targetTouches[0].pageY;
        if (direction.indexOf("touchmove") != -1) fun();
    }, false);
    obj.addEventListener("touchend", function() {
        var changeY = defaults.oy - defaults.ny;
        var changeX = defaults.ox - defaults.nx;
        if (Math.abs(changeX) > Math.abs(changeY) && Math.abs(changeY) > defaults.y) {
            //左右事件  
            if (changeX > 0) {
                if (direction.indexOf("swipeleft") != -1) fun();
            } else {
                if (direction.indexOf("swiperight") != -1) fun();
            }
        } else if (Math.abs(changeY) > Math.abs(changeX) && Math.abs(changeX) > defaults.x) {
            //上下事件  
            if (changeY > 0) {
                if (direction.indexOf("swipetop") != -1) fun();
            } else {
                if (direction.indexOf("swipedown") != -1) fun();
            }
        } else {
            //点击事件  
            if (direction.indexOf("singleTap") != -1) fun();
        }
        if (direction.indexOf("touchend") != -1) fun();
    }, false);
}
// ------------商品个数字段校验--------------
function verifyMoney(Input) {
    Input.off();
    Input.on('input', function(event) {
        var amountInput = $(this);
        //响应鼠标事件，允许左右方向键移动 
        event = window.event || event;
        if (event.keyCode == 37 | event.keyCode == 39) {
            return;
        };
        if (amountInput.val().substring(0, 1) == '0') {
            if (amountInput.val().substring(1, 2) != '.') {
                amountInput.val(0);
            }
        };
        //先把非数字的都替换掉，除了数字和. 
        amountInput.val(amountInput.val().replace(/[^\d.]/g, "").
            //只允许一个小数点              
            replace(/^\./g, "").replace(/\.{2,}/g, ".").
            //只能输入小数点后两位
            replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'));
    });
    Input.on('blur', function() {
        var amountInput = $(this);
        //最后一位是小数点的话，移除
        amountInput.val((amountInput.val().replace(/\.$/g, "")));
    });
}