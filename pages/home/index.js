var util = require('../../utils/util.js');
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    imgUrl:'',
    title:'',
    idVal:'',
    content:''
  },
  getContentById(id){
    var dataArr = [{id:"100",content:'<p class="scCon">北国风光，千里冰封，万里雪飘。<br/>望长城内外，惟余莽莽。<br/>大河上下，顿失滔滔。<br/>山舞银蛇，原驰蜡象，欲与天公试比高。<br/>须晴日，看红装素裹，分外妖娆。</p><p class="scCon mt10">江山如此多妖，引无数英雄竞折腰。<br/>惜秦皇汉武，略输文采；<br/>唐宗宋祖，稍逊风骚；<br/>一代天骄，成吉思汗，只识弯弓射大雕。<br/>俱往矣，数风流人物，还看今朝。</p>'},
      {id:"101",content:'<p class="scCon">独立寒秋，湘江北去，橘子洲头。<br/>看万山红遍，层林尽染<br/>漫江碧透，百舸争流。<br/>鱼翔浅底，万类霜天竞自由。<br/>怅寥廓，问苍茫大地，谁主沉浮？</p><p class="scCon mt10">携来百侣曾游，忆往昔峥嵘岁月稠。<br/>恰同学少年，风华正茂<br/>书生意气，挥斥方遒。<br/>指点江山，激扬文字，粪土当年万户候<br/>曾记否，到中流击水，浪遏飞舟！</p>'},
      {id:"102",content:'<p class="scCon">红军不怕远征难，万水千山只等闲。<br/>五岭逶迤腾细浪，乌蒙磅礴走泥丸。<br/>金沙水拍云崖暖，大渡桥横铁索寒。<br/>更喜岷山千里雪，三军过后尽开颜。</p>'},
      {id:"103",content:'<p class="scCon">风雨送春归，飞雪迎春到。<br/>已是悬崖百丈冰，犹有花枝俏。<br/>俏也不争春，只把春来报。<br/>待到山花烂漫时，她在丛中笑。</p>'},
      {id:"104",content:'<p class="scCon">西风烈，长空雁叫霜晨月。 <br/>霜晨月，马蹄声碎，喇叭声咽。 <br/>雄关漫道真如铁，而今迈步从头越。 <br/>从头越，苍山如海，残阳如血。</p>'},
      {id:"105",content:'<p class="scCon">人生易老天难老，岁岁重阳。<br/>今又重阳，战地黄花分外香。<br/>一年一度秋风劲，不似春光。<br/>胜似春光，寥廓江天万里霜。</p>'},
      {id:"106",content:'<p class="scCon">我失骄杨君失柳，杨柳轻飏直上重霄九。<br/>问讯吴刚何所有，吴刚捧出桂花酒。<br/>寂寞嫦娥舒广袖，万里长空且为忠魂舞。<br/>忽报人间曾伏虎，泪飞顿作倾盆雨。</p>'},
      {id:"107",content:'<p class="scCon">天高云淡，望断南飞雁。 <br/>不到长城非好汉，屈指行程二万。 <br/>六盘山上高峰，红旗漫卷西风。 <br/>今日长缨在手，何时缚住苍龙？</p>'},
      {id:"108",content:'<p class="scCon">才饮长沙水，又食武昌鱼。<br/>万里长江横渡，极目楚天舒。<br/>不管风吹浪打，胜似闲庭信步，今日得宽馀。<br/>子在川上曰：逝者如斯夫！</p><p class="scCon mt10">风樯动，龟蛇静，起宏图。<br/>一桥飞架南北，天堑变通途。<br/>更立西江石壁，截断巫山云雨，高峡出平湖。<br/>神女应无恙，当惊世界殊。</p>'},
      {id:"109",content:'<p class="scCon">钟山风雨起苍黄，百万雄师过大江。 <br/>虎踞龙盘今胜昔，天翻地覆慨而慷。 <br/>天若有情天亦老，人间正道是沧桑。<br/>宜将剩勇追穷寇，不可沽名学霸王。</p>'},
      {id:"110",content:'<p class="scCon">绿水青山枉自多，华佗无奈小虫何！<br/>千村薜荔人遗矢，万户萧疏鬼唱歌。<br/>坐地日行八万里，巡天遥看一千河。<br/>牛郎欲问瘟神事，一样悲欢逐逝波。<br/>春风杨柳万千条，六亿神州尽舜尧。<br/>红雨随心翻作浪，青山着意化为桥。<br/>天连五岭银锄落，地动三河铁臂摇。<br/>借问瘟君欲何往，纸船明烛照天烧。</p>'},
      {id:"111",content:'<p class="scCon">别梦依稀咒逝川，故园三十二年前。<br/>红旗卷起农奴戟，黑手高悬霸主鞭。<br/>为有牺牲多壮志，敢教日月换新天。<br/>喜看稻菽千重浪，遍地英雄下夕烟。</p>'},
      {id:"112",content:'<p class="scCon">赤橙黄绿青蓝紫，谁持彩练当空舞？<br/>雨后复斜阳，关山阵阵苍。<br/>当年鏖战急，弹洞前村壁，<br/>装点此关山，今朝更好看。</p>'},{id:"112",content:'<p class="scCon">赤橙黄绿青蓝紫，谁持彩练当空舞？<br/>雨后复斜阳，关山阵阵苍。<br/>当年鏖战急，弹洞前村壁，<br/>装点此关山，今朝更好看。</p>'},
      {id:"113",content:'<p class="scCon">大雨落幽燕，白浪滔天，秦皇岛外打鱼船。<br/>一片汪洋都不见，知向谁边？<br/>往事越千年，魏武挥鞭，东临碣石有遗篇。<br/>萧瑟秋风今又是，换了人间。</p>'},
      {id:"114",content:'<p class="scCon">当年忠贞为国酬，何曾怕断头？<br/>如今天下红遍，江山靠谁守？<br/>业未就，身躯倦，鬓已秋。<br/>你我之辈，忍将夙愿，付与东流？</p>'},
      {id:"115",content:'<p class="scCon">山下旌旗在望，山头鼓角相闻。<br/>敌人围困万千重，我自岿然不动。<br/>早已森严壁垒，更加众志成城。<br/>黄洋界上炮声隆，报道敌军宵遁。</p>'},
      {id:"116",content:'<p class="scCon">东方欲晓，莫道君行早。<br/>踏遍青山人未老，风景这边独好。<br/>会昌城外高峰，颠连直接东溟。<br/>战士指看南粤，更加郁郁葱葱。</p>'},
      
      {id:"200",content:'<p class="scCon">明月几时有，把酒问青天。 <br/>不知天上宫阙，今夕是何年？ <br/>我欲乘风归去，又恐琼楼玉宇，高处不胜寒。<br/>起舞弄清影，何似在人间！</p><p class="scCon mt10">转朱阁，低绮户，照无眠。 <br/>不应有恨，何事长向别时圆？ <br/>人有悲欢离合，月有阴晴圆缺， 此事古难全。<br/> 但愿人长久，千里共婵娟。</p>'},
      {id:"201",content:'<p class="scCon">大江东去，浪淘尽，千古风流人物。<br/>故垒西边，人道是，三国周郎赤壁。<br/>乱石穿空，惊涛拍岸，卷起千堆雪。<br/>江山如画，一时多少豪杰。</p><p class="scCon mt10">遥想公瑾当年，小乔初嫁了，雄姿英发。<br/>羽扇纶巾，谈笑间，樯橹灰飞烟灭。<br/>故国神游，多情应笑我，早生华发。<br/>人生如梦，一尊还酹江月。</p>'},
      {id:"202",content:'<p class="scCon">横看成岭侧成峰，<br/>远近高低各不同。<br/>不识庐山真面目，<br/>只缘身在此山中。</p>'},
      {id:"203",content:'<p class="scCon">十年生死两茫茫，不思量，自难忘。<br/>千里孤坟，无处话凄凉。<br/>纵使相逢应不识，尘满面，鬓如霜。</p><p class="scCon mt10">夜来幽梦忽还乡，小轩窗，正梳妆。<br/>相顾无言，惟有泪千行。<br/>料得年年肠断处，明月夜，短松冈。</p>'},
      {id:"204",content:'<p class="scCon">莫听穿林打叶声，何妨吟啸且徐行。 <br/>竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。 </p><p class="scCon mt10">料峭春风吹酒醒，微冷，山头斜照却相迎。<br/> 回首向来萧瑟处，归去，也无风雨也无晴。</p>'},
      {id:"205",content:'<p class="scCon">春未老，风细柳斜斜。<br/>试上超然台上望，半壕春水一城花。烟雨暗千家。</p><p class="scCon mt10">寒食后，酒醒却咨嗟。<br/>休对故人思故国，且将新火试新茶。诗酒趁年华。</p>'},
      {id:"206",content:'<p class="scCon">人生到处知何似，应似飞鸿踏雪泥。<br/>泥上偶然留指爪，鸿飞那复计东西。<br/>老僧已死成新塔，坏壁无由见旧题。<br/>往日崎岖还记否，路长人困蹇驴嘶。</p>'},
      {id:"207",content:'<p class="scCon">细雨斜风作晓寒，淡烟疏柳媚晴滩。入淮清洛渐漫漫。</p><p class="scCon mt10">雪沫乳花浮午盏，蓼茸蒿笋试春盘。人间有味是清欢。</p>'},
      {id:"208",content:'<p class="scCon">一别都门三改火，天涯踏尽红尘。<br/>依然一笑作春温。无波真古井，有节是秋筠。</p><p class="scCon mt10">惆怅孤帆连夜发，送行淡月微云。<br/>尊前不用翠眉颦。人生如逆旅，我亦是行人。</p>'},

      {id:"300",content:'<p class="scCon">九曲黄河万里沙，<br/>浪淘风簸自天涯。<br/>如今直上银河去，<br/>同到牵牛织女家。</p>'},
      {id:"301",content:'<p class="scCon">汴水东流虎眼纹，<br/>清淮晓色鸭头春。<br/>君看渡口淘沙处，<br/>渡却人间多少人。</p>'},
      {id:"302",content:'<p class="scCon">莫道谗言如浪深，<br/>莫言迁客似沙沉。<br/>千淘万漉虽辛苦，<br/>吹尽狂沙始到金。</p>'},
      {id:"303",content:'<p class="scCon">巴山楚水凄凉地，二十三年弃置身。<br/>怀旧空吟闻笛赋，到乡翻似烂柯人。<br/>沉舟侧畔千帆过，病树前头万木春。<br/>今日听君歌一曲，暂凭杯酒长精神。</p>'},
      {id:"304",content:'<p class="scCon">杨柳青青江水平，<br/>闻郎江上唱歌声。<br/>东边日出西边雨，<br/>道是无晴却有晴。</p>'},
      {id:'305',content:'<p class="scCon">湖光秋月两相和，<br/>潭面无风镜未磨。<br/>遥望洞庭山水翠，<br/>白银盘里一青螺。</p>'},
      {id:'306',content:'<p class="scCon">新妆面面下朱楼，<br/>深锁春光一院愁。<br/>行到中庭数花朵，<br/>蜻蜓飞上玉搔头。</p>'}
      ];
    for(var i=0;i<dataArr.length;i++){
      if(dataArr[i].id==id){
        return dataArr[i].content;
      }
    }
  },
  onLoad: function (options) {
    var imgUrl = '../../image/p'+(Math.floor(Math.random()*8))+'.jpg';
    let app = getApp();new app.ToastPannel();
    wx.setNavigationBarTitle({title: options.name});
    var insertData = this.getContentById(options.id);
    this.setData({
      imgUrl:imgUrl,
      title:options.name,
      content:WxParse.wxParse('content', 'html', insertData, this)
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      return {
        title: this.data.title,
        path: util.getCurrentPageUrlWithArgs()
      }
    } else {
      return {
        title: this.data.title,
        path: util.getCurrentPageUrlWithArgs()
      }
    }
  }
})