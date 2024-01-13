// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var apk_list = {
  'com.bairimeng.dmmdzz': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.m4399': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.taptap': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.hykb': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.nearme.gamecenter': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.vivo': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.huawei': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.mi': 'https://online-ghofiles.koyeb.app',
  'com.tencent.tmgp.bairimeng.dmmdzz': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.uc': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.wdj': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.qihoo': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.mz': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.am': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.baidu': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.sougou': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.bilibili' : 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.samsung': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.g.baidu': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.meta': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.bytedance.gamecenter':'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.kuaishou': 'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.momoyu':'https://online-ghofiles.koyeb.app',
  'com.bairimeng.dmmdzz.lenovo':'https://online-ghofiles.koyeb.app',


  'default': 'https://online-ghofiles.koyeb.app',
};

// function isWeixin() {
//   return /MicroMessenger/i.test(navigator.userAgent);
// }

function isIOS() {
  return /(iPhone|iPod|iPad|iOS)/i.test(navigator.userAgent);
}

function startDownload() {
  var bundle = getParameterByName('bundle');
  if (isIOS()) {
    if (apk_list[bundle] === undefined) {
      window.location.href = 'https://online-ghofiles.koyeb.app';
    } else {  //带了别的包名 显示无法识别   (ios默认不带包名)
      window.location.href = 'https://update.ss.igreatdream.com/hide/unrecognized.html';
    }
  } else {
    if (apk_list[bundle] === undefined) {
      window.location.href = apk_list['default'];
    } else {
      window.location.href = apk_list[bundle];
    }
  }
}

function reportPageVisit() {
  var pfID = getParameterByName('pf_id');
  if (pfID === null || pfID === '') {
    pfID = 50;
  }
  var activityID = getParameterByName('activity_id');
  if (activityID === null || activityID === '') {
    activityID = 5000;
  }
  var script = document.createElement('script');
  script.setAttribute('src', '/zgame/?m=snake&a=snake_require&msg_id=60001&msg={"pf_id":' + pfID +',"activity_id":' + activityID + '}');
  document.head.appendChild(script);
}

if (isIOS()) {
  document.getElementById('button-tip-text').innerText = '“在Safari中打开”';
}

reportPageVisit();
setTimeout(function() {
  startDownload();
}, 1000);
