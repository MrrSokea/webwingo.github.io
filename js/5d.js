var curIssue = null;
var issueTimer = null;
var lastPeriod = null;
var bAudio = true;
var arraynum1 = [];
var arraynum = [];
var arraynum2 = [];
lotteryCategoryId = 7;
var audio = new Audio("./sounds/sec5_countdown.mp3");
var audio1 = new Audio("./sounds/2d_mix_sound.mp3");
var audio2 = new Audio("./sounds/3D_mixing_sound.mp3");
var soundnonew = new Audio("./sounds/soundnonew.mp3");
var countdown=new Audio("./sounds/preparenew.mp3");
$(async function () {
    conn.on("Draw", function (drawResult) {
        printDurations(drawResult.details);
    });

    conn.on("Issue", function (issue) {
        curIssue = issue;
        showIssue();
    });

    await startConn();
    initIssue();
    loadTable(1);                                             
});
function chkLoadIssue() {
    if (curIssue == null) return true;
    var now = Date.parse(getKmTime());
    return now >= Date.parse(curIssue.drawTime);
}
function initIssue() {
    if (issueTimer == null) {
        issueTimer = setInterval(() => {
            var ctime = getCountDownTime(curIssue == null ? null : curIssue.drawTime);
            showIssue();
            $("#spTime").text(ctime);
            setEndTime();
            if(ctime=="00:06"){
                definerandom1();
            }else if(ctime=="00:05"){
                countdown.play()
            }
        }, 1000);
    }
}
function showIssue() {
    if (curIssue == null) {
        return;
    }
    $("#spIssue").text("Issue: " + curIssue.period);
    $("#spDate").text(
        "Date: " + new Date(curIssue.drawTime).format("yyyy/MM/dd")
    );
}
function initLoadIssue() {
    loadIssue(lotteryCategoryId, (issue) => {
        curIssue = issue;
        showIssue();
    });
}
function setEndTime() {
    var ctime = getCountDownTime(curIssue == null ? null : curIssue.endTime);
    $("#h1").text(ctime[0]);
    $("#h2").text(ctime[1]);
    $("#m1").text(ctime[3]);
    $("#m2").text(ctime[4]);
}
function loadTable(page) {
    cpage = page;
    loadDrawPage(lotteryCategoryId, page, 10, (res) => {
        // initPager(res.pageCount, page);
        var html = '';
        for (var i = 0; i < res.data.length; i++) {
            html += getRowHtml(res.data[i]);
        }
        stop_Game(res.data[0].details[0].num[0] + res.data[0].details[0].num[1], res.data[0].details[1].num[0] + res.data[0].details[1].num[1], res.data[0].details[2].num[0] + res.data[0].details[2].num[1], res.data[0].details[3].num[0] + res.data[0].details[3].num[1])
        Result_3d(res.data[0].details[0].num[2] + res.data[0].details[0].num[3] + res.data[0].details[0].num[4], res.data[0].details[1].num[2] + res.data[0].details[1].num[3] + res.data[0].details[1].num[4], res.data[0].details[2].num[2] + res.data[0].details[2].num[3] + res.data[0].details[2].num[4], res.data[0].details[3].num[2] + res.data[0].details[3].num[3] + res.data[0].details[3].num[4])
        // console.log()
        $(".container-result-5d").html(html);
        $(".result_3d").addClass("visible");
        $(".result_2d").addClass("visible");
    });
}

// function initPager(total, page) {
// $('#pagination').pagination({
//     pages: total, //总页数
//     edges: 2,
//     currentPage: page,
//     prevText: '<i class="icofont-arrow-left"></i>',
//     nextText: '<i class="icofont-arrow-right"></i>',
//     ellipseText: '...',
//     cssStyle: 'pagination-sm',
//     displayedPages: 2, //显示几个
//     onPageClick: function (pageNumber, event) {
//         loadTable(pageNumber);
//     }
// });
// }

function getRowHtml(data) {
    var html = `
    <div class="block-result-5d">
              <div class="title-result-5d"><span style="margin-right: 5px;">${data.issue}</span><span>${((data.drawTime.slice(5, 16)).replace("-", "")).replace(" ", "-")}</span>
              </div>
              <div class="body-result-5d">
                <div class="body-result-2d">
                  <div class="ball-result-2d"><span>${data.details[0].num[0] + data.details[0].num[1]}</span></div>
                  <div class="ball-result-2d"><span>${data.details[1].num[0] + data.details[1].num[1]}</span></div>
                  <div class="ball-result-2d"><span>${data.details[2].num[0] + data.details[2].num[1]}</span></div>
                  <div class="ball-result-2d"><span>${data.details[3].num[0] + data.details[3].num[1]}</span></div>
                </div>
                <div class="body-result-3d">
                  <div class="ball-result-3d"><span>${data.details[0].num[2] + data.details[0].num[3] + data.details[0].num[4]}</span></div>
                  <div class="ball-result-3d"><span>${data.details[1].num[2] + data.details[1].num[3] + data.details[1].num[4]}</span></div>
                  <div class="ball-result-3d"><span>${data.details[2].num[2] + data.details[2].num[3] + data.details[2].num[4]}</span></div>
                  <div class="ball-result-3d"><span>${data.details[3].num[2] + data.details[3].num[3] + data.details[3].num[4]}</span></div>
                </div>
              </div>
            </div>
  `
    return html;
ន
}
function stop_Game(n1, n2, n3, n4) {
    $(".result_2d:eq(0)").text(n1);
    $(".result_2d:eq(1)").text(n2);
    $(".result_2d:eq(2)").text(n3);
    $(".result_2d:eq(3)").text(n4);
}
function Result_3d(a1, a2, a3, a4) {
    (arraynum1.length == 1) ? $(".result_3d:eq(0)").text(a1) : (arraynum1.length == 2) ? $(".result_3d:eq(1)").text(a2) : (arraynum1.length) == 3 ? $(".result_3d:eq(2)").text(a3) : $(".result_3d:eq(3)").text(a4);
}
function definerandom2() {
    audio.play()
    var c = null;
    if (!c) {
        clearInterval(c);
        c = null;
    }
    var se = 6;
    c = setInterval(() => {
        --se;
        if(se==5){
            $(".hello4").removeClass("none");
        }else if (se == 0) {
            $(".hello4").addClass("none");
            clearInterval(c);
            c = null;
        }
        $(".hello4").text(se)
    }, 1000)
}
function definerandom1() {
    var c = null;
    if (!c) {
        clearInterval(c);
        c = null;
    }
    var se = 6;
    c = setInterval(() => {
        --se;
        if(se==5){
            $(".hello").removeClass("none");
        }else if (se == 0) {
            $(".hello").addClass("none");
            clearInterval(c);
            c = null;
        }
        $(".hello").text(se)
    }, 1000)
}
function Random3d() {
    audio2.play()
    var ch = null;
    if (!ch) {
        clearInterval(ch);
        ch = null;
    }
    var seco = 9;
    var seco1 = 0;

    ch = setInterval(() => {
        --seco;
        ++seco1;
        $(".re1-3d").removeClass("none");
        $(".re2-3d").removeClass("none");
        $(".re3-3d").removeClass("none");
        $(".show:eq(0)").addClass("none")
        $(".show:eq(1)").addClass("none")
        $(".show:eq(2)").addClass("none")
        if (seco == 0) {
            arraynum.push("1");
            clearInterval(ch);
            if (arraynum.length < 7) {
                Random3d();
            } else {
                $(".re1-3d").addClass("none");
                $(".re2-3d").addClass("none");
                $(".re3-3d").addClass("none");
                $(".show:eq(0)").removeClass("none")
                $(".show:eq(1)").removeClass("none")
                $(".show:eq(2)").removeClass("none")
                arraynum1.push("1");
                arraynum.length = 0;
            }
            ch = null;
        }
        $(".re1-3d").text(seco);
        $(".re2-3d").text(seco1);
        $(".re3-3d").text(seco);
    }, 50)
}
var check = null;
function printDurations(drawDetails) {
    var re_3d_1 = drawDetails[0].num[2] + drawDetails[0].num[3] + drawDetails[0].num[4]
    var re_3d_2 = drawDetails[1].num[2] + drawDetails[1].num[3] + drawDetails[1].num[4]
    var re_3d_3 = drawDetails[2].num[2] + drawDetails[2].num[3] + drawDetails[2].num[4]
    var re_3d_4 = drawDetails[3].num[2] + drawDetails[3].num[3] + drawDetails[3].num[4]

    var re_2d_1 = drawDetails[0].num[0] + drawDetails[0].num[1];
    var re_2d_2 = drawDetails[1].num[0] + drawDetails[1].num[1];
    var re_2d_3 = drawDetails[2].num[0] + drawDetails[2].num[1];
    var re_2d_4 = drawDetails[3].num[0] + drawDetails[3].num[1];
    if (!check) {
        clearInterval(check);
        check = null;
    }
    var sec = 32;
    check = setInterval(() => {
        --sec;
        if (sec == 31) {
            stop_Game(re_2d_1, re_2d_2, re_2d_3, re_2d_4);
            soundnonew.play()
            $(".box-number:eq(" + parseInt(drawDetails[0].num[0] + drawDetails[0].num[1]) + ")").addClass("backgoldenrod")
        } else if (sec == 30) {
            $(".result_2d:eq(0)").removeClass("visible")
        } else if (sec == 27) {
            soundnonew.play()
            stop_Game(re_2d_1, re_2d_2, re_2d_3, re_2d_4);
            if(re_2d_2==re_2d_1){
                $(".box-number:eq("+re_2d_2+")").html(re_2d_2+"<span class='infoma'>2</span>");
                $(".infoma").removeClass("none")
            }else{
                $(".box-number:eq("+re_2d_2+")").addClass("backgoldenrod");
            }
        } else if (sec == 26) {
            $(".result_2d:eq(1)").removeClass("visible")
        } else if (sec == 23) {
            soundnonew.play()
            stop_Game(re_2d_1, re_2d_2, re_2d_3, re_2d_4);
            if(re_2d_3==re_2d_1 && re_2d_3==re_2d_2){
                $(".box-number:eq("+re_2d_3+")").html(re_2d_3+"<span class='infoma'>3</span>");
            }else if(re_2d_3==re_2d_1 && re_2d_3!==re_2d_2){
                $(".box-number:eq("+re_2d_3+")").html(re_2d_3+"<span class='infoma'>2</span>");
            }else if(re_2d_3==re_2d_2 && re_2d_3!==re_2d_1){
                $(".box-number:eq("+re_2d_3+")").html(re_2d_3+"<span class='infoma'>2</span>");
            }else{
                $(".box-number:eq("+re_2d_3+")").addClass("backgoldenrod");
            }
        } else if (sec == 22) {
            $(".result_2d:eq(2)").removeClass("visible");
        } else if (sec == 19) {
            definerandom2();
            soundnonew.play()
            stop_Game(re_2d_1, re_2d_2, re_2d_3, re_2d_4);
            if(re_2d_4==re_2d_1 && (re_2d_4==re_2d_2 && re_2d_4==re_2d_3)){
                $(".box-number:eq("+re_2d_4+")").html(re_2d_4+"<span class='infoma'>4</span>");
            }else if(re_2d_4==re_2d_1 && (re_2d_4!==re_2d_2 && re_2d_4!==re_2d_3)){
                $(".box-number:eq("+re_2d_4+")").html(re_2d_4+"<span class='infoma'>2</span>");
            }else if((re_2d_4==re_2d_1 && re_2d_4==re_2d_2)&& re_2d_4!==re_2d_3){
                $(".box-number:eq("+re_2d_4+")").html(re_2d_4+"<span class='infoma'>3</span>");
            }else if((re_2d_4==re_2d_2 && re_2d_4==re_2d_3)&& re_2d_4!==re_2d_1){
                $(".box-number:eq("+re_2d_4+")").html(re_2d_4+"<span class='infoma'>3</span>");
            }else if(re_2d_4==re_2d_2 && (re_2d_4!==re_2d_3 && re_2d_4!==re_2d_1)){
                $(".box-number:eq("+re_2d_4+")").html(re_2d_4+"<span class='infoma'>2</span>");
            }else if(re_2d_4==re_2d_3 && (re_2d_4!==re_2d_2 && re_2d_4!==re_2d_1)){
                $(".box-number:eq("+re_2d_4+")").html(re_2d_4+"<span class='infoma'>2</span>");
            }else if((re_2d_4==re_2d_1 && re_2d_4==re_2d_1) && (re_2d_4!==re_2d_2)){
                $(".box-number:eq("+re_2d_4+")").html(re_2d_4+"<span class='infoma'>3</span>");
            }else{
                $(".box-number:eq("+re_2d_4+")").addClass("backgoldenrod");
            }
        } else if (sec == 18) {
            $(".result_2d:eq(3)").removeClass("visible")
        } else if (sec == 13) {
            Random3d();
        } else if (sec == 10) {
            $(".show:eq(0)").text(drawDetails[0].num[2])
            $(".show:eq(1)").text(drawDetails[0].num[3])
            $(".show:eq(2)").text(drawDetails[0].num[4])
        } else if (sec == 9) {
            Result_3d(re_3d_1, re_3d_2, re_3d_3, re_3d_4)
            Random3d();
            $(".result_3d:eq(0)").removeClass("visible")
        } else if (sec == 6) {
            $(".show:eq(0)").text(drawDetails[1].num[2])
            $(".show:eq(1)").text(drawDetails[1].num[3])
            $(".show:eq(2)").text(drawDetails[1].num[4])
        } else if (sec == 5) {
            Result_3d(re_3d_1, re_3d_2, re_3d_3, re_3d_4)
            Random3d();
            $(".result_3d:eq(1)").removeClass("visible")
        } else if (sec == 2) {
            $(".show:eq(0)").text(drawDetails[2].num[2])
            $(".show:eq(1)").text(drawDetails[2].num[3])
            $(".show:eq(2)").text(drawDetails[2].num[4])
        } else if (sec == 1) {
            Result_3d(re_3d_1, re_3d_2, re_3d_3, re_3d_4)
            Random3d();
            $(".result_3d:eq(2)").removeClass("visible");
        } else if (sec == -2) {
            $(".show:eq(0)").text(drawDetails[3].num[2])
            $(".show:eq(1)").text(drawDetails[3].num[3])
            $(".show:eq(2)").text(drawDetails[3].num[4])
        } else if (sec == -3) {
            Result_3d(re_3d_1, re_3d_2, re_3d_3, re_3d_4)
            $(".result_3d:eq(3)").removeClass("visible")
        } else if (sec == -230) {
            $(".infoma").remove();
            $(".result_3d").addClass("visible");
            $(".result_2d").addClass("visible");
            loadTable(1);
            $(".box-number").removeClass("backgoldenrod");
            $(".show:eq(0)").text("?")
            $(".show:eq(1)").text("?")
            $(".show:eq(2)").text("?")
            arraynum1.length = 0;
            clearInterval(check);
            check = null;
        }
    }, 1000)
}