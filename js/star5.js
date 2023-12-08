var curIssue = null;
var issueTimer = null;
var lastPeriod = null;
var lotteryCategoryId = 10;
var colorArr = ["bb", "br"];
var array_color = ["bc_y", "bc_bl", "bc_gr", "bc_br", "bc_re"]
var totalCol = (innerWidth <= 500) ? 10 : 20;
var totalCol_two = 10;
var totalRow = 7;
var arraynum = [];
var arraynum_1 = [];
var historyNum = [];
var Arrayresult_two = [];
var preparenew = new Audio("./sounds/preparenew.mp3");
var soundnonew = new Audio("./sounds/soundnonew.mp3");
const loading = document.querySelector('.image-loading');
const keyFrames = document.createElement("style");
keyFrames.innerHTML = `
  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  }
`;
loading.appendChild(keyFrames);

const info_color = document.querySelector('.text-small');
const info_color2 = document.querySelector('.text-big');
const info_color3 = document.querySelector('.c_1');
const info_color4 = document.querySelector('.c_2');
const info_color5 = document.querySelector('.c_3');
const info_color6 = document.querySelector('.c_4');
const info_color7 = document.querySelector('.c_5');
const keyFrames1 = document.createElement("style");
keyFrames1.innerHTML = `
  @keyframes ccolor {
    from {
      background-color: blue;
    }
    to {
        background-color: goldenrod;
    }
  }
  }
`;
info_color2.appendChild(keyFrames1);
info_color.appendChild(keyFrames1);
info_color3.appendChild(keyFrames1);
info_color4.appendChild(keyFrames1);
info_color5.appendChild(keyFrames1);
info_color6.appendChild(keyFrames1);
info_color7.appendChild(keyFrames1);
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
    loadHistory();
    loadTable(1)
});
function chkLoadIssue() {
    if (curIssue == null) return true;
    var now = Date.parse(getKmTime());
    return now >= Date.parse(curIssue.drawTime);
}

function loadTable(page) {
    cpage = page;
    loadDrawPage(lotteryCategoryId, page, 12, (res) => {
        var html = '';
        ;
        for (var i = 0; i < res.data.length; i++) {
            var sum_load = 0;
            for (var j = 0; j < 20; j++) {
                sum_load = parseInt(sum_load) + parseInt(res.data[i].details[0].num[j])
            }

            html += getRowHtml(res.data[i], sum_load);

        }
        sum_sp = 0;
        for (var k = 0; k < 20; k++) {
            sum_sp = parseInt(sum_sp) + parseInt(res.data[0].details[0].num[k])
        }
        $(".tatal-result").text(sum_sp)
        $(".body-all-result").nextAll().remove();
        $(".body-all-result").after(html);
        $(".tit-issue").text(res.data[0].issue)
    });
}
function getRowHtml(data, sum) {
    var html = `
      <div class="result-6-37" style="border-bottom: 1px solid gray;background-color: white;"><span><span>${((data.drawTime.slice(5, 11)).replace("-", "")).replace(" ", "-")}</span><span>${data.issue}</span></span><span>${sum}</span></div>
  `
    return html;

}
function initIssue() {
    if (issueTimer == null) {
        issueTimer = setInterval(() => {
            var ctime = getCountDownTime(curIssue == null ? null : curIssue.drawTime);
            $(".time-init").text(ctime);
            if (ctime == "00:06") {
                preparenew.play();
            }
            showIssue();
        }, 1000);
    }
}
function initLoadIssue() {
    loadIssue(lotteryCategoryId, (issue) => {
        curIssue = issue;
        showIssue();
    });
}
function showIssue() {
    if (curIssue == null) {
        return;
    }
    $(".title-issue").text(curIssue.period);
    $(".title-time").text(new Date(curIssue.drawTime).format("yyyy/MM/dd"));
}
function loadHistory() {
    loadDrawPage(lotteryCategoryId, 1, 20, (res) => {
        var data = res.data;

        for (let i = 0; i < data.length; i++) {
            var sum = 0;
            for (var j = 0; j < 20; j++) {
                sum = parseInt(sum) + parseInt((data[i].details[0].num[j]));
            }
            (sum >= 210 && sum <= 810) ? historyNum.push(1) : historyNum.push(2);
            (sum >= 210 && sum <= 695) ? Arrayresult_two.push(1) : (sum >= 696 && sum <= 763) ? Arrayresult_two.push(2) : (sum >= 764 && sum <= 855) ? Arrayresult_two.push(3) : (sum >= 856 && sum <= 923) ? Arrayresult_two.push(4) : Arrayresult_two.push(5)
        }
        if (data.length > 0) {
            lastPeriod = data[0].issue;
        }
        genMapAll()
    });
}
function genMap() {
    var rowHtml = initTableHtml();
    var lastIndex = -1;
    var row = 0;
    var col = -1;
    for (var i = 0; i < totalRow * totalCol; i++) {
        if (historyNum.length <= i) {
            break;
        }
        var item = historyNum[i];
        var n = parseInt(item);

        if (lastIndex != n) {
            lastIndex = n;
            row = 0;
            ++col;
        } else {
            ++row;
            if (row >= totalRow) {
                row = 0;
                ++col;
            }
        }

        if (col >= totalCol) {
            break;
        }

        var html = rowHtml[row][col];
        var bs = getBallStyle();
        html = html
            .replace(bs, `${bs} ${colorArr[n - 1]}`)
            .replace("&nbsp;", n.toString());
        rowHtml[row][col] = html;
    }
    resetTable("trMap", rowHtml);
}
function genTableHtml(rowHtml) {
    var html = "";
    for (var i = 0; i < rowHtml.length; i++) {
        html += "<tr>";
        for (var j = rowHtml[i].length - 1; j >= 0; j--) {
            html += rowHtml[i][j];
        }
        html += "</tr>";
    }

    return html;
}
function genMaptwo() {
    var rowHtml = initTableHtmltwo();
    var lastIndex = -1;
    var row = 0;
    var col = -1;

    for (var i = 0; i < totalRow * totalCol_two; i++) {

        if (Arrayresult_two.length <= i) {
            break;
        }
        var item = Arrayresult_two[i];
        var n = parseInt(item);
        if (lastIndex != n) {
            lastIndex = n;
            row = 0;
            ++col;
        } else {
            ++row;
            if (row >= totalRow) {
                row = 0;
                ++col;
            }
        }

        if (col >= totalCol_two) {
            break;
        }

        var html = rowHtml[row][col];
        var bs = getBallStyle();
        html = html
            .replace(bs, `${bs} ${array_color[n - 1]}`)
            .replace("&nbsp;", (parseInt(n)));
        rowHtml[row][col] = html;
    }
    resetTable("trMaptwo", rowHtml);
}
function initTableHtml() {
    var rowHtml = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    for (var i = 0; i < rowHtml.length; i++) {
        for (var j = 0; j < totalCol; j++) {
            rowHtml[i].push(getEmptyTd(i, j));
        }
    }
    return rowHtml;
}
function initTableHtmltwo() {
    var rowHtml = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    for (var i = 0; i < rowHtml.length; i++) {
        for (var j = 0; j < totalCol_two; j++) {
            rowHtml[i].push(getEmptyTd_two(i, j));
        }
    }
    return rowHtml;
}
function getEmptyTd(row, col) {
    var sty = "";
    if (col == 0) {
        // sty = `border-right-style: none;`;
    } else if (col == totalCol - 1) {
        // sty = `border-left-style: none;`;
    }

    if (row == totalRow - 1) {
        // sty += "border-bottom-style: none;";
        if (col == totalCol - 1) {
            sty += "border-radius: 0px 0px 0px 15px;";
        } else if (col == 0) {
            sty += "border-radius: 0px 0px 15px 0px;";
        }
    }

    if (sty.length > 0) {
        sty = `style="${sty}"`;
    }

    return `<td style="padding: 2px"><div class="divmap"><span class="ball ${getBallStyle()}">&nbsp;</span></div></td>`;
}
function getEmptyTd_two(row, col) {
    var sty = "";
    if (col == 0) {
        // sty = `border-right-style: none;`;
    } else if (col == totalCol_two - 1) {
        // sty = `border-left-style: none;`;
    }

    if (row == totalRow - 1) {
        // sty += "border-bottom-style: none;";
        if (col == totalCol_two - 1) {
            sty += "border-radius: 0px 0px 0px 15px;";
        } else if (col == 0) {
            sty += "border-radius: 0px 0px 15px 0px;";
        }
    }

    if (sty.length > 0) {
        sty = `style="${sty}"`;
    }

    return `<td style="padding: 2px"><div class="divmap"><span class="ball ${getBallStyle()}">&nbsp;</span></div></td>`;
}
function getBallStyle() {
    return "lball";
}
function resetTable(id, rowHtml) {
    var el = $("#" + id);
    el.nextAll().remove();
    el.after(genTableHtml(rowHtml));
}
function genMapAll() {
    genMap();
    genMaptwo();
}
function Random3d() {
    $(".result").removeClass("none");
    $(".result-1").addClass("none");
    $(".text-result-6-37").removeClass("bg-result")
    var ch = null;
    if (!ch) {
        clearInterval(ch);
        ch = null;
    }
    var seco1 = 0;

    ch = setInterval(() => {
        ++seco1;
        if (seco1 == 80) {
            arraynum.push("1");
            clearInterval(ch);
            if (arraynum.length < 3) {
                Random3d();
            } else {
                arraynum.length = 0;
                arraynum_1.push("1");
                $(".result").addClass("none");
                $(".result-1").removeClass("none");
                $(".text-result-6-37").addClass("bg-result")
                $(".text-time").text(arraynum_1.length);
            }
            ch = null;
        }
        $(".result").text(seco1);
    }, 0)
}
function printDurations(drawDetails) {
    var c = null;
    if (!c) {
        clearInterval(c);
        c = null;
    }
    var se = 1;
    var sum_total = 0;

    c = setInterval(() => {
        --se;
        if (se == 0) {
            $(".time-init").addClass("none");
            $(".sero").removeClass("none")
            $(".image-loading").addClass("loading")
            Random3d()
            $(".block-result-6-37").addClass("none");
            $(".contain-block-f-result").removeClass("none");
        } else if (se == -1) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[0])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[0])
            $(".sum-total").text(sum_total);
        } else if (se == -2) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[0]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -3) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[1])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[1])
            $(".sum-total").text(sum_total);
        } else if (se == -4) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[1]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -5) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[2])
            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[2])
            $(".sum-total").text(sum_total);
        } else if (se == -6) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[2]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -7) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[3])
            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[3])
            $(".sum-total").text(sum_total);
        } else if (se == -8) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[3]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -9) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[4])
            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[4])
            $(".sum-total").text(sum_total);
        } else if (se == -10) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[4]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -11) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[5])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[5])
            $(".sum-total").text(sum_total);
        } else if (se == -12) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[5]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -13) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[6])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[6])
            $(".sum-total").text(sum_total);
        } else if (se == -14) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[6]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -15) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[7])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[7])
            $(".sum-total").text(sum_total);
        } else if (se == -16) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[7]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -17) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[8])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[8])
            $(".sum-total").text(sum_total);
        } else if (se == -18) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[8]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -19) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[9])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[9])
            $(".sum-total").text(sum_total);

        } else if (se == -20) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[9]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -21) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[10])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[10])
            $(".sum-total").text(sum_total);

        } else if (se == -22) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[10]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -23) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[11])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[11])
            $(".sum-total").text(sum_total);

        } else if (se == -24) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[11]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -25) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[12])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[12])
            $(".sum-total").text(sum_total);

        } else if (se == -26) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[12]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -27) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[13])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[13])
            $(".sum-total").text(sum_total);

        } else if (se == -28) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[13]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -29) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[14])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[14])
            $(".sum-total").text(sum_total);

        } else if (se == -30) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[14]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -31) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[15])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[15])
            $(".sum-total").text(sum_total);

        } else if (se == -32) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[15]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -33) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[16])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[16])
            $(".sum-total").text(sum_total);

        } else if (se == -34) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[16]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -35) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[17])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[17])
            $(".sum-total").text(sum_total);

        } else if (se == -36) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[17]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -37) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[18])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[18])
            $(".sum-total").text(sum_total);

        } else if (se == -38) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[18]) - 1) + ")").addClass("bg-red")
            Random3d()
        } else if (se == -39) {
            soundnonew.play();
            $(".result-1").text(drawDetails[0].num[19])

            sum_total = parseInt(sum_total) + parseInt(drawDetails[0].num[19])
            $(".sum-total").text(sum_total);

        } else if (se == -40) {
            $(".num-6-37:eq(" + (parseInt(drawDetails[0].num[19]) - 1) + ")").addClass("bg-red")
            if (sum_total >= 210 && sum_total < 810) {
                $(".text-small").addClass("ccolor");
                historyNum.unshift(1)
            } else if (sum_total >= 811 && sum_total < 1410) {
                $(".text-big").addClass("ccolor");
                historyNum.unshift(2)
            }

            if (sum_total >= 210 && sum_total < 695) {
                $(".c_1").addClass("ccolor");
                Arrayresult_two.unshift(1);
            } else if (sum_total >= 696 && sum_total <= 763) {
                $(".c_2").addClass("ccolor");
                Arrayresult_two.unshift(2);
            } else if (sum_total >= 764 && sum_total <= 855) {
                $(".c_3").addClass("ccolor");
                Arrayresult_two.unshift(3);
            } else if (sum_total >= 856 && sum_total <= 923) {
                $(".c_4").addClass("ccolor");
                Arrayresult_two.unshift(4);
            } else if (sum_total >= 924 && sum_total <= 1410) {
                $(".c_5").addClass("ccolor");
                Arrayresult_two.unshift(5);
            }
            $(".time-init").removeClass("none");
            $(".sero").addClass("none");
            arraynum_1.length = 0;
        } else if (se == -43) {
            $(".image-loading").removeClass("loading");
            $(".text-time").text("0");
            $(".tatal-result").text(sum_total)
            sum_total = 0;
            $(".sum-total").text(sum_total);

            $(".block-result-6-37").removeClass("none");
            $(".contain-block-f-result").addClass("none");
            $(".num-6-37").removeClass("bg-red");
            $(".c_1").removeClass("ccolor");
            $(".c_2").removeClass("ccolor");
            $(".c_3").removeClass("ccolor");
            $(".c_4").removeClass("ccolor");
            $(".c_5").removeClass("ccolor");
            $(".text-small").removeClass("ccolor");
            $(".text-big").removeClass("ccolor");
            loadTable(1);
            genMapAll();
            clearInterval(c);
            c = null;
        }
    }, 1000)
}  
