var curIssue = null;
var issueTimer = null;
var audioBalls = new Audio("./sounds/balls.ogg");
var audioPin = new Audio("./sounds/startspin.mp3");
var audioBound = new Audio("./sounds/startbound.mp3");
var audioResult = new Audio("./sounds/result.mp3");
var img = document.getElementById("myImg");

var bAudio = true;
var cpage = 1;
lotteryCategoryId = 8;
var totalCol = 15;
var totalRow = 5;
var historyNum = [];
$(async function () {
    conn.on("Draw", function (drawResult) {
        printDuration(drawResult.details);
    });

    conn.on("Issue", function (issue) {
        curIssue = issue;
        showIssue();
    });

    await startConn();

    initIssue();
    loadTable(cpage);
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
            $("#spTime").text(ctime);
            $("#pTime").text(ctime);
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
    $("#spIssue").text("Issue: " + curIssue.period);
    $("#spDate").text(
        "Date: " + new Date(curIssue.drawTime).format("yyyy/MM/dd")
    );
}
function playSimplepause() {
    audioBalls.pause();
}
function playStart1() {
    audioPin.play();
}
function playbound() {
    audioBound.play();
}

function pausebound() {
    audioBound.pause();
}

function resultsound() {
    audioResult.play();
}

function resultsoundpause() {
    audioResult.pause();
}

function showResult(drawDetails) {
    var index = numResult.length;
    var num = drawDetails[0].num[index];
    $("#lucky-num").html(num);
    var n = parseInt(num);
    total += n;
    numResult.push(n);
    setBallVisibility(n, false);
}

function resetBallVisibility() {
    for (var i = 1; i <= 37; i++) {
        setBallVisibility(i, true);
    }
}

function setBallVisibility(index, show) {
    document.getElementById("n" + index).style.visibility = show ? "" : "hidden";
}

function showResultNum() {
    var index = numResult.length;
    $("#lucky-num" + index).html(numResult[index - 1]);
    $("#sum-nums").html(total);

    if (index == 6) {
        var sindex = getIndexOfSum(total);
        historyNum.unshift(sindex);
        if (historyNum.length > totalRow * totalCol) {
            historyNum.pop();
        }
        setLargTextBgColor(sindex, "goldenrod");
    }
}

function resetData() {
    total = 0;
    numResult = [];
    resetLuck();
    resetLargText();
    resetBallVisibility();
}

function resetLuck() {
    $("#sum-nums").html("?");
    for (var i = 1; i <= 6; i++) {
        $("#lucky-num" + i).html("?");
    }
}

function resetLargText() {
    for (var i = 1; i <= 5; i++) {
        setLargTextBgColor(i, "white");
    }
}

function setLargTextBgColor(index, color) {
    var name = index == 1 ? "" : index;
    document.getElementById("largtext" + name).style.backgroundColor = color;
}

function getIndexOfSum(t) {
    if (t >= 21 && t <= 81) {
        return 1;
    } else if (t >= 82 && t <= 101) {
        return 2;
    } else if (t >= 102 && t <= 126) {
        return 3;
    } else if (t >= 127 && t <= 146) {
        return 4;
    } else {
        return 5;
    }
}

function setResultBallAnimal() {
    var luckyball = document.querySelector("#ballg8");
    removeStyleNode(luckyball);
    luckyball.style.animation = "";
    luckyball.style.display = "";
    var keyFramesw = document.createElement("style");
    if (innerWidth <= 1200) {
        luckyball.style.width = "100px";
        luckyball.style.height = "100px";
        luckyball.style.marginLeft = "100px";
        keyFramesw.innerHTML = `
       @keyframes anilucky {
        from {
            background-color: azure;
            background-image: url("./ImageGame/Mask Group 3@2x-blue.png");
            bottom: 100px;
            z-index: 1;
            height: 50px;
            width: 50px;
            margin-left: 120px;
        }
        to { 
            background-color: azure;
            background-image: url("./ImageGame/Mask Group 3@2x-blue.png");
            bottom:0px;
            z-index: 1;
            height: 50px;
            width: 50px;
            margin-left: 120px;
        }
       }
    #ballg8 {
        animation-name: anilucky;
        animation-duration: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: 2;
        animation-direction: alternate;
    }
    `;
        luckyball.appendChild(keyFramesw);
    } else {
        keyFramesw.innerHTML = `
           @keyframes anilucky {
            from {
                background-color: azure;
                background-image: url("./ImageGame/Mask Group 3@2x-blue.png");
                bottom: 200px;
                z-index: 1;
                height: 100px;
                width: 100px;
                margin-left: 230px;
            }
            to { 
                background-color: azure;
                background-image: url("./ImageGame/Mask Group 3@2x-blue.png");
                bottom:0px;
                z-index: 1;
                height: 100px;
                width: 100px;
                margin-left: 230px;
            }
           }
        #ballg8 {
            animation-name: anilucky;
            animation-duration: 0.5s;
            animation-timing-function: linear;
            animation-iteration-count: 2;
            animation-direction: alternate;
        }
        `;
        luckyball.appendChild(keyFramesw);
    }
}

function loadTable(page) {
    cpage = page;
    loadDrawPage(lotteryCategoryId, page, 7, (res) => {
        // initPager(res.pageCount, page);
        var html = "";
        // initHistory(res.data);
        for (var i = 0; i < res.data.length; i++) {
            html += getRowHtml(res.data[i]);
        }
        if (innerWidth < 1200) {
            $("#trTitle2").nextAll().remove();
            $("#trTitle2").after(html);
        } else {
            $("#trTitle").nextAll().remove();
            $("#trTitle").after(html);
        }
    });
    loadDrawPage(lotteryCategoryId, page, 20, (res) => {
        initHistory(res.data);
    });
}

function initHistory(data) {
    if (historyNum.length == 0) {
        for (var i = 0; i < data.length; i++) {
            var sum = 0;
            for (var j = 0; j < data[i].details[0].num.length; j++) {
                sum += parseInt(data[i].details[0].num[j]);
            }
            var rindex = getIndexOfSum(sum);
            historyNum.push(rindex);
        }
    }

    genMap();
}

// function initPager(total, page) {
//     $("#pagination").pagination({
//         pages: total, //总页数
//         edges: 2,
//         currentPage: page,
//         prevText: '<i class="icofont-arrow-left"></i>',
//         nextText: '<i class="icofont-arrow-right"></i>',
//         ellipseText: "...",
//         cssStyle: "pagination-sm",
//         displayedPages: 2, //显示几个
//         onPageClick: function (pageNumber, event) {
//             loadTable(pageNumber);
//         },
//     });
// }
function getRowHtml(data) {
    if (innerWidth < 1200) {
        var html = `<tr>
        <td>
        <div style="display: flex;justify-content: space-around;align-item: center;flex-direction: column;">
          <span class="text-user" style="font-size: 10px;">${data.issue}</span>
          <span class="text-user" style="font-size: 10px;">${data.drawTime
                .slice(5, 16)
                .replace("-", "")
                .replace(" ", "-")}</span>
        </div>
        </td>`;
        html += `<td><div class="balls-result2-contain" style="margin-top:8px;">`;
        for (var i = 0; i < 6; i++) {
            var cls = i < 5 ? "ball" : "ball-spacail";
            html += `<div class="${cls}">${data.details[0].num[i].PadLeft(
                2,
                "0"
            )}</div>`;
        }
        html += "</div></td>";
        html += `<td>`;
        var sum_num =
            parseInt(data.details[0].num[0]) +
            parseInt(data.details[0].num[1]) +
            parseInt(data.details[0].num[2]) +
            parseInt(data.details[0].num[3]) +
            parseInt(data.details[0].num[4]) +
            parseInt(data.details[0].num[5]);
        html += `<div style="display: flex;margin-top: 8px;"><div style="font-size: 15px;width: 40px;height:20px;border-radius: 10%;font-weight: 700;color: white;">${sum_num}</div><div style="margin-top: -5px;color: white;">-</div><div style="font-size: 15px;width: 20px;height:20px;border-radius: 50%;color: black;font-weight: 700;color: white;">${sum_num <= 81 && sum_num >= 21
            ? 1
            : sum_num <= 101 && sum_num >= 82
                ? 2
                : sum_num <= 126 && sum_num >= 102
                    ? 3
                    : sum_num <= 146 && sum_num >= 127
                        ? 4
                        : 5
            }</div></div>`;
        html += "</div>";
        html += `</td>`;
        return html;
    } else {
        var html = `<tr>
    <td><span class="text-user">${data.drawTime
                .slice(5, 16)
                .replace("-", "")
                .replace(" ", "-")}</span></td>
    <td><span class="text-user">${data.issue
            }</span></td><td><div class="balls-result2-contain">`;
        for (var i = 0; i < 6; i++) {
            var cls = i < 5 ? "ball" : "ball-spacail";
            html += `<div class="${cls}">${data.details[0].num[i].PadLeft(
                2,
                "0"
            )}</div>`;
        }
        html += `</td>`;
        html += `<td>`;
        var sum_num =
            parseInt(data.details[0].num[0]) +
            parseInt(data.details[0].num[1]) +
            parseInt(data.details[0].num[2]) +
            parseInt(data.details[0].num[3]) +
            parseInt(data.details[0].num[4]) +
            parseInt(data.details[0].num[5]);
        html += `<div style="display: flex;padding: 2px 4px;"><div style="font-size: 20px;width: 40px;height:25px;border-radius: 10%;font-weight: 700;color: white;">${sum_num}</div><div style="margin-top: -5px;color: white;">-</div><div style="font-size: 20px;width: 25px;height:25px;border-radius: 50%;color: black;font-weight: 700;color: white;">${sum_num <= 81 && sum_num >= 21
            ? 1
            : sum_num <= 101 && sum_num >= 82
                ? 2
                : sum_num <= 126 && sum_num >= 102
                    ? 3
                    : sum_num <= 146 && sum_num >= 127
                        ? 4
                        : 5
            }</div></div>`;
        html += "</div>";
        html += `</td>`;
        return html;
    }
}

var check = null;
var timerAudio = null;
var total = 0;
var numResult = [];
var colorArr = ["by", "bb", "bg", "bp", "br"];

function printDuration(drawDetails) {
    if (!check) {
        clearInterval(check);
        resetData();
        check = null;
    }
    if (bAudio) {
        playStart1();
    }
    var cnt = 29;
    total = 0;
    numResult = [];
    check = setInterval(function () {
        --cnt;
        if (cnt == 35) {
            resetData();
        }
        if (cnt == 28) {
            $("#boundBack2").show();
            $("#boundBack1").hide();
            bAudio ? playbound() : pausebound();
        } else if (cnt == 27) {
            setResultBallAnimal();
            bAudio ? playbound() : pausebound();
        } else if (
            cnt == 26 ||
            cnt == 21 ||
            cnt == 16 ||
            cnt == 11 ||
            cnt == 6 ||
            cnt == 1
        ) {
            showResult(drawDetails);
            showResultNum();
            if (bAudio) {
                playbound();
                resultsound();
            } else {
                pausebound();
                resultsoundpause();
            }
        } else if (cnt == 25 || cnt == 19 || cnt == 14 || cnt == 9 || cnt == 4) {
            $("#ballg8").hide();
            bAudio ? playbound() : pausebound();
        } else if (cnt == 22 || cnt == 17 || cnt == 12 || cnt == 7 || cnt == 2) {
            $("#ballg8").show();
            bAudio ? playbound() : pausebound();
        } else if (cnt == -3) {
            genMap();
            loadTable(1);
            $("#ballg8").hide();
            bAudio ? playbound() : pausebound();
        } else if (cnt == -4) {
            $("#boundBack2").hide();
            $("#boundBack1").show();
            pausebound();
        } else if (cnt == -10) {
            // location.reload();
            resetData();
            clearInterval(check);
            check = null;
        }
    }, 1000);
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
    resetTable(rowHtml);
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

function initTableHtml() {
    var rowHtml = [
        [],
        [],
        [],
        [],
        [],
        // [],
        // []
    ];
    for (var i = 0; i < rowHtml.length; i++) {
        for (var j = 0; j < totalCol; j++) {
            rowHtml[i].push(getEmptyTd(i, j));
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
        sty += "border-bottom-style: none;";
        if (col == totalCol - 1) {
            sty += "border-radius: 0px 0px 0px 15px;";
        } else if (col == 0) {
            sty += "border-radius: 0px 0px 15px 0px;";
        }
    }

    if (sty.length > 0) {
        sty = `style="${sty}"`;
    }

    return `<td ${sty}><div class="divmap"><span class="ball ${getBallStyle()}">&nbsp;</span></div></td>`;
}

function getBallStyle() {
    return innerWidth <= 1200 ? "sball" : "lball";
}

function resetTable(rowHtml) {
    var el = $("#trMap");
    el.nextAll().remove();
    el.after(genTableHtml(rowHtml));
}
