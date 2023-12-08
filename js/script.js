!(function ($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Stick the header at top on scroll

  // Init AOS
  // function aos_init() {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true
  //   });
  // }
  // $(window).on('load', function () {
  //   aos_init();
  // });

  // $("#click-to-show").click(function () {
  //   $(this).addClass('d-none');
  //   $(".col-md-6").removeClass('d-none');
  // });

  // ==================================
  // hide and show social
  //==================================
})(jQuery);

//======================================
// mobile browser detect
//=====================================

// device = document.getElementById('touch');
// var ua = new UAParser();
// var result = ua.getResult();

// var deviceType = result.device;

// if(deviceType.type === "mobile"){
//   device.style.display = "block";
// }else {
//   device.style.display = "none";
// }


//获取UTC时间
function getLocalTime(i) {
  var d = new Date();
  var len = d.getTime();
  var offset = d.getTimezoneOffset() * 60000;
  var utcTime = len + offset;
  return new Date(utcTime + 3600000 * i);
}

//柬埔寨时间
function getKmTime() {
  return getLocalTime(7);
}


//日期格式化
(function () {

  if (Date.prototype.format) return;

  Date.prototype.format = function (fmt) { //author: meizz 
    var o = {
      "M+": this.getMonth() + 1, //月份 
      "d+": this.getDate(), //日 
      "h+": this.getHours(), //小时 
      "m+": this.getMinutes(), //分 
      "s+": this.getSeconds(), //秒 
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
      "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  };

  //将指定的毫秒数加到此实例的值上 
  Date.prototype.addMilliseconds = function (value) {
    var millisecond = this.getMilliseconds();
    this.setMilliseconds(millisecond + value);
    return this;
  };
  //将指定的秒数加到此实例的值上 
  Date.prototype.addSeconds = function (value) {
    var second = this.getSeconds();
    this.setSeconds(second + value);
    return this;
  };
  //将指定的分钟数加到此实例的值上 
  Date.prototype.addMinutes = function (value) {
    var minute = this.getMinutes();
    this.setMinutes(minute + value);
    return this;
  };
  //将指定的小时数加到此实例的值上 
  Date.prototype.addHours = function (value) {
    var hour = this.getHours();
    this.setHours(hour + value);
    return this;
  };
  //将指定的天数加到此实例的值上 
  Date.prototype.addDays = function (value) {
    var date = this.getDate();
    this.setDate(date + value);
    return this;
  };
  //将指定的星期数加到此实例的值上 
  Date.prototype.addWeeks = function (value) {
    return this.addDays(value * 7);
  };
  //将指定的月份数加到此实例的值上 
  Date.prototype.addMonths = function (value) {
    var month = this.getMonth();
    this.setMonth(month + value);
    return this;
  };
  //将指定的年份数加到此实例的值上 
  Date.prototype.addYears = function (value) {
    var year = this.getFullYear();
    this.setFullYear(year + value);
    return this;
  };
})();

String.prototype.PadLeft = function (len, charStr) {
  var s = this + '';
  return new Array(len - s.length + 1).join(charStr || '') + s;
}

var API_URL = "http://www.lottowingo.com/api/";

function getFullUrl(url) {
  return API_URL + url;
}

//加载指定彩种的奖期
function loadIssue(lotteryCategoryId, callback) {
  $.get(getFullUrl("issue"), function (res) {
    var issue = res.filter((p) => p.lotteryCategoryId == lotteryCategoryId)[0];
    callback(issue);
  });
}


function loadDrawResult(lotteryCategoryId, callback) {
  $.get(getFullUrl("drawresult"), function (res) {
    var result = res.filter((p) => p.lotteryCategoryId == lotteryCategoryId)[0];
    if (result != null) {
      callback(result);
    }
  });
}

function loadDrawPage(lotteryCategoryId, page, pSize, callback) {
  var param = { lotteryCategoryId: lotteryCategoryId, page: page, pageSize: pSize };
  $.ajax({
    type: "post",
    url: getFullUrl("drawresult/list"),
    data: JSON.stringify(param),
    dataType: "json",
    contentType: "application/json;charset=utf-8",
    success: function (res) {
      callback(res);
    }
  });
}

function removeStyleNode(el) {
  var nodes = el.getElementsByTagName("style");
  if (nodes.length > 0) {
    for (var j = nodes.length - 1; j >= 0; j--) {
      el.removeChild(nodes[j]);
    }
  }
}

function setLocal(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function getLocal(key) {
  var val = window.localStorage.getItem(key);
  if (typeof (val) == "undefined" || val == null || val == "undefined") {
    return null;
  }
  return JSON.parse(val);
}

function removeLocal(key) {
  window.localStorage.removeItem(key);
}

function getCountDownTime(ctime) {
  if (ctime == null) {
    return "00:00";
  }
  var nowTime = Date.parse(getKmTime());
  var cmpTime = Date.parse(ctime);
  if (nowTime >= cmpTime) {
    return "00:00";
  }

  var time = cmpTime - nowTime;
  var day = parseInt(time / 1000 / 60 / 60 / 24);
  var hour = parseInt((time / 1000 / 60 / 60) % 24);
  var minute = parseInt((time / 1000 / 60) % 60);
  var seconds = parseInt((time / 1000) % 60);
  var str = hour > 0 ? hour.toString().PadLeft(2, "0") + ":" : "";
  return (
    str +
    minute.toString().PadLeft(2, "0") +
    ":" +
    seconds.toString().PadLeft(2, "0")
  );
}

if (innerWidth >= 1301 && innerWidth <= 1700) {
  $("body").css("zoom", "80%")
} else if (innerWidth < 1300 && innerWidth > 1000) {
  $("body").css("zoom", "65%")
} else {
  $("body").css("zoom", "100%")
}


function setAudioImg(el) {
  el.src = "./ImageGame/" + (bAudio ? "sound-png-3" : "Sound-off") + ".png";
}
function goToUrl(url) {
  window.location.href = url;
  window.event.preventDefault();
}
var conn = new signalR.HubConnectionBuilder()
  .withUrl(`${API_URL}drawresulthub`, { withCredentials: false })
  //  .withAutomaticReconnect()
  .build();

conn.onclose(async () => {
  //console.log("SignalR DisConnected.");
  await startConn();
});

var lotteryCategoryId = 7;

async function startConn() {
  try {
    await conn.start();
    conn.invoke("EnterGroup", lotteryCategoryId).catch(function (err) {
      //console.log(err);
    });
    initLoadIssue();
  } catch (err) {
    //console.log(err);
    setTimeout(startConn, 5000);
  }
};