function getCurDate(){
    var d = new Date();
    var str1 = d.getFullYear()
    var str2 = d.getMonth() + 1;
    var str3 = d.getDate();
    if (str2 < 10) {
        str2 = '0' + str2;
    }
    if (str3 < 10) {
        str3 = '0' + str3;
    }
    return str1+'-'+str2+'-'+str3;
}
// 获取本周第一天
function getWeekFirstDay(){     
    var date=new Date();     
    var WeekFirstDay=new Date(date-(date.getDay()-1)*86400000);     
    var M=Number(WeekFirstDay.getMonth())+1;   
    return WeekFirstDay.getFullYear()+"-"+add0(M)+"-"+add0(WeekFirstDay.getDate());     
}

// 获取本月第一天
function getMonthFirstDay(){     
    var date=new Date();     
    var MonthFirstDay=new Date(date.getFullYear(),date.getMonth(),1);     
    var M=Number(MonthFirstDay.getMonth())+1;   
    return MonthFirstDay.getFullYear()+"-"+add0(M)+"-"+add0(MonthFirstDay.getDate());     
}

// 获取昨天日期
function getYesterday(){
  var date = new Date();
  date.setTime(date.getTime()-24*60*60*1000);
  return date.getFullYear() + "-" + add0(date.getMonth()+1) + "-" + add0(date.getDate());
}

function add0 (str) {
    return str<10?'0'+str:str;
}

function getNowTime() {
    var d = new Date();
    var str1 = d.getHours();
    var str2 = d.getMinutes();
    var str3 = d.getSeconds();
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

function getCurrentPageUrl(){
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length-1]    //获取当前页面的对象
    var url = currentPage.route    //当前页面url
    return url
}

/*获取当前页带参数的url*/
function getCurrentPageUrlWithArgs(){
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length-1]    //获取当前页面的对象
    var url = currentPage.route    //当前页面url
    var options = currentPage.options    //如果要获取url中所带的参数可以查看options
    
    //拼接url的参数
    var urlWithArgs = url + '?'
    for(var key in options){
        var value = options[key]
        urlWithArgs += key + '=' + value + '&'
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length-1)
    
    return urlWithArgs
}

module.exports = {
    getCurDate: getCurDate,
    getWeekFirstDay:getWeekFirstDay,
    getMonthFirstDay:getMonthFirstDay,
    getYesterday:getYesterday,
    getNowTime: getNowTime,
    getCurrentPageUrl: getCurrentPageUrl,
    getCurrentPageUrlWithArgs: getCurrentPageUrlWithArgs
}
