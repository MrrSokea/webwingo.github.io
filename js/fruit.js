var arrayroate = [2160, 1961, 2112, 1838, 2131, 1998, 1810, 1876, 2017, 1923, 1895, 2037, 1857, 2055, 1941, 1819, 2075, 2093, 1905, 1980, 1951, 2121, 1912, 2150, 1990, 2102, 1829, 2065, 1866, 1885, 2027, 1932, 2008, 1970, 2084, 1847, 2046, 2140]
var arrayrotate2 = [0000,{rotate:-2160,fruit:"ធុរេន"},{rotate:-1835,fruit:"ស្វាយ"}, {rotate:-1870,fruit:"ស្រកានាគ"}, {rotate:-1910,fruit:"ក្រូច"}, {rotate:-1945,fruit:"មង្ឃុត"}, {rotate:-1980,fruit:"ឪឡឹក"}, {rotate:-2015,fruit:"ចេក"}, {rotate:-2050,fruit:"ល្ហុង"}, {rotate:-2090,fruit:"ម្នាស់"}, {rotate:-2127,fruit:"ប៉ោម"}]
const contain_image = document.querySelector('.contain-image');
const keyFrames = document.createElement("style");
const contain_image_in = document.querySelector('.contain-image-in');
const keyFrames1 = document.createElement("style");
var Audiofruit = new Audio("./sounds/strartspinfruit.mp3");
var audiosimple=new Audio("./sounds/sottofondo.mp3")
var sec5_count=new Audio("./sounds/sec5_countdown.mp3")
var img = document.getElementById("myImg");
var bAudio = true;
var curIssue = null;
var issueTimer = null;
var lastPeriod = null;
var historyNum = []
var Arrayresult_fruit = []
var Arrayresult = [];
var totalRow = 7;
var totalCol = 8;
var colorArr = ["br", "bb", "by"];
var arrayfruit = ["du", "mang", "dra", "orang", "mangte", "water", "bana", "Papa", "Pinea", "App"]
var lotteryCategoryId = 9;
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
function play() {
    if (bAudio) {
        Audiofruit.play();
    }
}
function playsec5(){
    if (bAudio) {
        sec5_count.play();
    }
}
function puaseplay() {
    Audiofruit.pause();
    audiosimple.pause();
    sec5_count.pause();
}
function loadHistory() {
    loadDrawPage(lotteryCategoryId, 1, 40, (res) => {
        var data = res.data;
        for (let i = 0; i < data.length; i++) {
            historyNum.push([data[i].details[0].num[0], data[i].details[0].num[1], data[i].details[0].num[2]]);
            Arrayresult_fruit.push(parseInt(data[i].details[0].num[0]));
            Arrayresult.push(parseInt(data[i].details[0].num[1]))
        }
        if (data.length > 0) {
            lastPeriod = data[0].issue;
        }
        genMapAll()
        showRotate(arrayroate[data[0].details[0].num[2]],arrayrotate2[data[0].details[0].num[0]].rotate)
    });
}
function addHistory(num) {
    historyNum.unshift(num);
    if (historyNum.length > 40) {
        historyNum.pop();
    }
}
function initLoadIssue() {
    loadIssue(lotteryCategoryId, (issue) => {
        curIssue = issue;
        showIssue();
    });
}
function initIssue() {
    if (issueTimer == null) {
        issueTimer = setInterval(() => {
            var ctime = getCountDownTime(curIssue == null ? null : curIssue.drawTime);
            $("#spTime").text(ctime);
            setEndTime();
            showIssue();
            if(ctime=="00:06"){
                definerandom1();
                playsec5();
            }
        }, 1000);
    }
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
function showIssue() {
    if (curIssue == null) {
        return;
    }
    $("#spIssue").text("Issue:" + curIssue.period);
    $("#pIssue").text(curIssue.period);
    $("#spDate").text("Date:" + new Date(curIssue.drawTime).format("yyyy/MM/dd"));
}
function setEndTime() {
    var ctime = getCountDownTime(curIssue == null ? null : curIssue.endTime);
    $("#h1").text(ctime[0]);
    $("#h2").text(ctime[1]);
    $("#m1").text(ctime[3]);
    $("#m2").text(ctime[4]);
}
function startGame(num1,num2){
    keyFrames.innerHTML = ` 
    @keyframes example{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(${arrayroate[parseInt(num2)]}deg);
        }
    }
    .contain-image {
            animation: example 10s ease;
        }
        `;
    contain_image.appendChild(keyFrames);
    keyFrames1.innerHTML = `
    @keyframes example1{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(${arrayrotate2[num1].rotate}deg);
        }
    }
    .contain-image-in {
            animation: example1 10s ease;
        } `;
    contain_image_in.appendChild(keyFrames1);
}
function showRotate(rot1,rot2){
    contain_image.style.webkitTransform = 'rotate(' + rot1 + 'deg)';
    contain_image_in.style.webkitTransform = 'rotate(' + rot2 + 'deg)';
}
function stopGame(num1,num2,num3){
            showRotate(arrayroate[num3],arrayrotate2[num1].rotate)
            $(".text-result").html("<img src='./ImageGame/"+num1+".png'>");
            $(".img-fruit:eq(" +(parseInt(num1)-parseInt(1))+ ")").addClass("animations");
            $(".c-color:eq(" + (parseInt(num2)-parseInt(1)) + ")").addClass("animations");
            contain_image.removeChild(keyFrames);
            contain_image_in.removeChild(keyFrames1);
            Arrayresult.unshift(num2);
            Arrayresult_fruit.unshift(num1);
}
var check = null;
function printDurations(drawDetails) {
    if (!check) {
        clearInterval(check);
        check = null;
    }
    var sec = 11;
    check = setInterval(() => {
        --sec;
        if (sec == 10) {
            startGame(drawDetails[0].num[0],drawDetails[0].num[2])
            play();
        }
        if (sec == 0) {
            stopGame(drawDetails[0].num[0],drawDetails[0].num[1],drawDetails[0].num[2])
            genMapAll()
        }
        if (sec == -3) {
            $(".img-fruit:eq(" +(parseInt(drawDetails[0].num[0])-parseInt(1))+ ")").removeClass("animations");
            $(".c-color:eq(" +(parseInt(drawDetails[0].num[1])-parseInt(1))+ ")").removeClass("animations");
            $(".text-result").empty()
            clearInterval(check);
            check = null;
        }
    }, 1000)
}
function genMapAll() {
    genMap();
    genMapFruit();
}
function genMapFruit() {
    var rowHtml = initTableHtml();
    var lastIndex = -1;
    var row = 0;
    var col = -1;

    for (var i = 0; i < totalRow * totalCol; i++) {

        if (Arrayresult_fruit.length <= i) {
            break;
        }
        var item = Arrayresult_fruit[i];
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
            .replace(bs, `${bs} ${arrayfruit[n - 1]}`)
            .replace("&nbsp;", (parseInt(n)));
        rowHtml[row][col] = html;
    }
    resetTable("trMapfruit", rowHtml);
}
function genMap() {
    var rowHtml = initTableHtml();
    var lastIndex = -1;
    var row = 0;
    var col = -1;
    for (var i = 0; i < totalRow * totalCol; i++) {
        if (Arrayresult.length <= i) {
            break;
        }
        var item = Arrayresult[i];
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
function getEmptyTd(row, col) {
    var sty = "";
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

    return `<td ${sty}><div class="divmap" style="padding: 0px 0px;"><span class="ball ${getBallStyle()}">&nbsp;</span></div></td>`;
}
function getBallStyle() {
    return "lball";
}
function resetTable(id, rowHtml) {
    var el = $("#" + id);
    el.nextAll().remove();
    el.after(genTableHtml(rowHtml));
}




