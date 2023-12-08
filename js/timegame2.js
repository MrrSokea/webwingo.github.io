var curIssue = null;
var issueTimer = null;
var lastPeriod = null;
var audioStart = new Audio("./sounds/start.mp3");
var audioWin = new Audio("./sounds/win.mp3");

var img = document.getElementById("myImg");

var bAudio = true;
lotteryCategoryId = 6;
var historyNum = [];
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
    $("#sound").click(function () {
        bAudio = !bAudio;
        setAudioImg(img);
    });

});
function loadHistory() {
    loadDrawPage(lotteryCategoryId, 1, 40, (res) => {
        var data = res.data;

        for (let i = 0; i < data.length; i++) {
            historyNum.push(data[i].details[0].num[0]);

        }
        if (data.length > 0) {
            lastPeriod = data[0].issue;
        }
        genMap();
        showDot(res.data[0].details[0].num[0]);
    });
}
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
            setEndTime();
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
    $("#spIssue").text("Issue: " + curIssue.period);
    $("#pIssue").text(curIssue.period);
    $("#spDate").text(
        "Date: " + new Date(curIssue.drawTime).format("yyyy/MM/dd")
    );
}

function setEndTime() {
    var ctime = getCountDownTime(curIssue == null ? null : curIssue.endTime);
    $("#h1").text(ctime[0]);
    $("#h2").text(ctime[1]);
    $("#m1").text(ctime[3]);
    $("#pSound2").text(ctime[4]);
}

function addHistory(num) {
    historyNum.unshift(num);
    if (historyNum.length > 40) {
        historyNum.pop();
    }
}

function playStartgame2() {
    if (bAudio) {
        audioStart.play();
    }
}
function win() {
    if (bAudio) {
        audioWin.play()
    }
}

var check = null;
function printDurations(drawDetails) {
    if (!check) {
        clearInterval(check);
        check = null;
    }

    var cnt = 13;
    check = setInterval(() => {
        --cnt;
        if (cnt == 12) {
            playStartgame2();
            addDotAnimation();
        } else if (cnt == 10) {
            showDot(drawDetails[0].num[0]);
        } else if (cnt == 0) {
            win();
            removeDotAnimation();
            showResult(drawDetails[0].num[0]);
        } else if (cnt == -2) {
            resetResult();
            clearInterval(check);
            addHistory(drawDetails[0].num[0]);
            genMap();

        } else if (cnt == -10) {
            check = null;
        }
    }, 1000);
}

function addDotAnimation() {
    var dot = document.querySelector('#sun');
    dot.style.animationDuration = "12s";
    dot.style.animationName = "around";
    dot.style.animationPlayState = "running";
    dot.style.animationIterationCount = "infinite";
    var keyFramesw = document.createElement("style");
    keyFramesw.innerHTML = `
               @keyframes around {
                from {
                    transform: rotate(0deg);
                    -webkit-transform: rotate(0deg);
                }
                to {
                    transform: rotate(5400deg);
                    -webkit-transform: rotate(5400deg);
                }
            }
            `;
    dot.appendChild(keyFramesw);
}

function removeDotAnimation() {
    var el = document.getElementById("sun");
    el.style.animation = "none";
    removeStyleNode(el);
}

function showDot(num) {
    setDotPos(num);
}

function setDotPos(num) {
    var topArr = [15, 272, 56, 41, 28, 270, 15, 113, 250, 220, 156, 218, 75, 177,
        250, 22, 135, 93, 180, 276, 262, 42, 200, 15, 276, 72, 30, 157, 93,
        135, 235, 235, 263, 276, 113, 57, 200, 19
    ];
    var leftArr = [145, 102, 240, 63, 208, 187, 123, 17, 225, 33, 15, 255,
        35, 272, 65, 103, 275, 265, 15, 145, 82, 225, 25, 167, 166, 257, 83, 276, 25,
        14, 240, 48, 208, 123, 272, 49, 263, 187
    ];

    var topSmallArr = [70, 224, 95, 87, 80, 224, 71, 130, 212, 192, 155, 192, 105, 169, 212, 75, 143, 117, 168, 228, 219, 86, 180, 71, 227, 105, 82, 155, 118, 143, 203, 203, 220, 228, 130, 97, 182, 74];

    var leftSmallArr = [150, 124, 209, 100, 188, 176, 137, 73, 201, 83, 70, 217, 84, 229, 100, 125, 229, 225, 75, 150, 112, 200, 77, 164, 164, 218, 113, 230, 77, 70, 210, 90, 189, 137, 228, 92, 224, 176];

    var bSmall = innerWidth <= 1200;
    var el = document.getElementById("dot");
    var top = bSmall ? topSmallArr[parseInt(num)] : topArr[parseInt(num)];
    var left = bSmall ? leftSmallArr[parseInt(num)] : leftArr[parseInt(num)];
    el.style.top = `${top}px`;
    el.style.left = `${left}px`;
}

function addResultAnimal(name) {
    document.getElementById(name).style.animation = "";
    var el = document.querySelector('#' + name);
    var keyFramesw = document.createElement("style");
    keyFramesw.innerHTML = `
           @keyframes ${name} {
            from {
                transform: scale(0.8,0.8);
            }
            to {
                transform: scale(1,1);
            }
           }
        #${name} {
            animation: ${name} 0.5s infinite;
        }
        `;
    el.appendChild(keyFramesw);
}
var colorName = ["red", "black"];
var oeName = ["event", "odd"];
var posName = ["k", "t", "l", "j"];

var posDesc = ["ក", "ត", "ល", "ជ"];
var allNums = [23, 37, 4, 21, 2, 25, 17, 34, 16, 27, 13, 36, 11, 30, 8, 32, 5, 24, 33, 1, 20, 14, 31, 9, 22, 18, 10, 29, 7,
    28, 12, 35, 3, 26, 15, 6];

function showResult(num) {
    document.getElementById("result").innerHTML = num.toString().PadLeft(2, '0');
    var n = parseInt(num);
    addResultAnimal("result");
    if (n == 0) {
        addResultAnimal("gold");
    } else if (n == 19) {
        addResultAnimal("n19");
    } else {
        var index = allNums.indexOf(n);
        if ((index < 18 && index % 2 == 0) || (index >= 18 && index % 2 == 1)) {
            addResultAnimal(colorName[0]);
        } else {
            addResultAnimal(colorName[1]);
        }

        addResultAnimal(oeName[n % 2])

        var p = Math.floor(index / 9);
        addResultAnimal(posName[p]);
    }
}

function resetResult() {
    resetAnimation("result");
    resetAnimation("gold");
    resetAnimation("n19");

    for (var i = 0; i < colorName.length; i++) {
        resetAnimation(colorName[i]);
    }

    for (var i = 0; i < oeName.length; i++) {
        resetAnimation(oeName[i]);
    }

    for (var i = 0; i < posName.length; i++) {
        resetAnimation(posName[i]);
    }
}

function resetAnimation(name) {
    var el = document.getElementById(name);
    el.style.animation = "none";
    if (name == "result") {
        el.innerHTML = "";
    }

    removeStyleNode(el);
}

function genMap() {
    genPosMap();
    genColorMap();
    genOeMap();
}

function genColorMap() {
    var rowHtml = initTableHtml(innerWidth < 1200 ? 7 : 10);
    var lastIndex = -1;
    var row = 0;
    var col = -1;
    var colorClass = ["", "black", "spacail", "spacail"];

    for (var i = 0; i < 32; i++) {
        if (historyNum.length < i) {
            break;
        }
        var item = historyNum[i];
        var n = parseInt(item);
        var index = allNums.indexOf(n);
        var currIndex = 0;
        if (n == 19) {
            currIndex = 3;
        } else if (n == 0) {
            currIndex == 2;
        } else if ((index < 18 && index % 2 == 0) || (index >= 18 && index % 2 == 1)) {
            currIndex = 0;
        } else {
            currIndex = 1;
        }

        if (lastIndex != currIndex) {
            lastIndex = currIndex;
            row = 0;
            ++col;
        } else {
            ++row;
            if (row >= 5) {
                row = 0;
                ++col;
            }
        }

        if (col >= (innerWidth < 1200 ? 7 : 10)) {
            break;
        }

        var cls = ` class="${colorClass[currIndex]}"`;
        var num = n == 0 ? "i" : n.toString().PadLeft(2, '0');
        var td = `<td><div${cls} style="height: 32px;"><span>${num}</span></div></td>`;
        rowHtml[row][col] = td;
    }

    resetTable("trColor", rowHtml);
}

function genOeMap() {
    var rowHtml = initTableHtml(innerWidth < 1200 ? 7 : 10);
    var lastIndex = -1;
    var row = 0;
    var col = -1;
    var oeImg = ["p2", "p1"];

    for (var i = 0; i < 28; i++) {
        if (historyNum.length < i) {
            break;
        }
        var item = historyNum[i];
        var n = parseInt(item);
        if (n == 19 || n == 0) {
            continue;
        }

        var currIndex = n % 2;
        if (lastIndex != currIndex) {
            lastIndex = currIndex;
            row = 0;
            ++col;
        } else {
            ++row;
            if (row >= 5) {
                row = 0;
                ++col;
            }
        }

        if (col >= (innerWidth < 1200 ? 7 : 10)) {
            break;
        }

        var td = `<td><div style="height: 25px;display: flex;justify-content: center;align-items:center;height: 32px;"><img src="./ImageGame/${oeImg[currIndex]}.png" style="width: 25px;height: 25px;"></div></td>`;
        rowHtml[row][col] = td;
    }

    resetTable("trOe", rowHtml);
}

function genPosMap() {
    var rowHtml = initTableHtml(innerWidth < 1200 ? 7 : 10);
    var lastIndex = -1;
    var row = 0;
    var col = -1;

    for (var i = 0; i < 40; i++) {
        if (historyNum.length < i) {
            break;
        }
        var item = historyNum[i];
        var n = parseInt(item);
        if (n == 19 || n == 0) {
            continue;
        }
        var pos = allNums.indexOf(n);
        var p = Math.floor(pos / 9);
        if (lastIndex != p) {
            lastIndex = p;
            row = 0;
            ++col;
        } else {
            ++row;
            if (row >= 5) {
                row = 0;
                ++col;
            }
        }
        if (col >= (innerWidth < 1200 ? 7 : 10)) {
            break;
        }
        var td = `<td><div style="display: flex;justify-content: center;align-items: center;height: 32px;"><div style="display: flex;justify-content: center;align-items: center;color: white;font-family: kh2;font-weight: 600;"><span>${posDesc[p]}</span></div></div></td>`;
        rowHtml[row][col] = td;
    }

    resetTable("trTitle", rowHtml);
}

function getEmptyTd() {
    return `<td><div style="visibility: hidden;height: 32px;width: 30px;"></div></td>`;
}

function initTableHtml(col) {
    var rowHtml = [[], [], [], [], []];
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < col; j++) {
            rowHtml[i].push(getEmptyTd());
        }
    }
    return rowHtml;
}

function genTableHtml(rowHtml) {
    var html = '';
    for (var i = 0; i < rowHtml.length; i++) {
        html += '<tr>'
        for (var j = 0; j < rowHtml[i].length; j++) {
            html += rowHtml[i][j];
        }
        html += '</tr>';
    }
    return html;
}

function resetTable(id, rowHtml) {
    var el = $("#" + id);
    el.nextAll().remove();
    el.after(genTableHtml(rowHtml));
}