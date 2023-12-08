var historie = [{ drawTime: "2302030343438 16:04", detail: [{ chanel: "A", num: 86 }, { chanel: "B", num: 59 }, { chanel: "C", num: 34 }, { chanel: "D", num: 12 }, { chanel: "E", num: 12 }] },
{ drawTime: "2302030343437 21:04", detail: [{ chanel: "A", num: 44 }, { chanel: "B", num: 12 }, { chanel: "C", num: 12 }, { chanel: "D", num: 12 }, { chanel: "E", num: 12 }] },
{ drawTime: "2302030343436 26:04", detail: [{ chanel: "A", num: 12 }, { chanel: "B", num: 45 }, { chanel: "C", num: 12 }, { chanel: "D", num: 76 }, { chanel: "E", num: 76 }] },
{ drawTime: "2302030343435 31:04", detail: [{ chanel: "A", num: 66 }, { chanel: "B", num: 55 }, { chanel: "C", num: 12 }, { chanel: "D", num: 78 }, { chanel: "E", num: 5 }] },
{ drawTime: "2302030343434 36:04", detail: [{ chanel: "A", num: 34 }, { chanel: "B", num: 12 }, { chanel: "C", num: 34 }, { chanel: "D", num: 12 }, { chanel: "E", num: 3 }] },
{ drawTime: "2302030343433 41:04", detail: [{ chanel: "A", num: 12 }, { chanel: "B", num: 45 }, { chanel: "C", num: 12 }, { chanel: "D", num: 98 }, { chanel: "E", num: 12 }] },
{ drawTime: "2302030343432 46:04", detail: [{ chanel: "A", num: 99 }, { chanel: "B", num: 12 }, { chanel: "C", num: 33 }, { chanel: "D", num: 8 }, { chanel: "E", num: 1 }] },
{ drawTime: "2302030343432 46:04", detail: [{ chanel: "A", num: 99 }, { chanel: "B", num: 12 }, { chanel: "C", num: 33 }, { chanel: "D", num: 8 }, { chanel: "E", num: 100 }] }]
$(".state-text").addClass("hide");
var data = [];
var post = ["A", "B", "C", "D", "E"]
var newData = []
function countdown() {
    var count = 10;
    setInterval(function () {
        count--;
        $(".state_time").text(count)
        if (count == 9) {
            $(".ball-result").addClass("d-none")
            $(".state_time").removeClass("d-none")
            $(".state-text").addClass("hide");
        }
        if (count == 0) {
            $(".time-show").addClass("d-none")
            $(".start-load").addClass("spinning-image");
            $(".head-big").text(post[0])
            $(".big-ball-result").removeClass("back-red")
            randomGame();
            $(".state_time").addClass("d-none")
            $(".state-text").removeClass("hide");
        } else if (count == -3) {
            $(".head-big").text(post[1])
            $(".big-ball-result").removeClass("back-red")
            randomGame();
        } else if (count == -6) {
            $(".head-big").text(post[2])
            $(".big-ball-result").removeClass("back-red")
            randomGame();
        } else if (count == -9) {
            $(".head-big").text(post[3])
            $(".big-ball-result").removeClass("back-red")
            randomGame();
        } else if (count == -12) {
            $(".head-big").text(post[4])
            $(".big-ball-result").removeClass("back-red")
            randomGame();
        } else if (count == -16) {
            $(".time-show").removeClass("d-none")
            PushData(data[0], data[1], data[2], data[3], data[4])
            Loadhistorie()
            $(".big-ball-result").text("")
            $(".start-load").removeClass("spinning-image");
            data = []
            $(".head-big").text(post[0])
            $(".ball-result").text("")
            $(".ball-result").removeClass("yell_back")
            $(".item1").removeClass("yell_back")
            count = 10;
        }
    }, 1000);
}
Loadhistorie()
function Loadhistorie() {
    var html = "";
    for (var i = 0; i < 7; i++) {
        html += getrowdata(historie[i])
    }
    $(".contain-history").nextAll().remove();
    $(".contain-history").after(html);
}
function getrowdata(historie) {
    var html = `<div class="block-history">
        <div class="his1-block">
            <div class="his-date"><span>${historie.drawTime}</span><span>16:20</span></div>
            <div class="his-result">
                <div class="his1">
                    <div class="text-brain">${historie.detail[0].chanel}</div>
                    <div class="text-resilt">${historie.detail[0].num}</div>
                </div>
                <div class="his1">
                    <div class="text-brain">${historie.detail[1].chanel}</div>
                    <div class="text-resilt">${historie.detail[1].num}</div>
                </div>
                <div class="his1">
                    <div class="text-brain">${historie.detail[2].chanel}</div>
                    <div class="text-resilt">${historie.detail[2].num}</div>
                </div>
                <div class="his1">
                    <div class="text-brain">${historie.detail[3].chanel}</div>
                    <div class="text-resilt">${historie.detail[3].num}</div>
                </div>
                <div class="his1">
                    <div class="text-brain">${historie.detail[4].chanel}</div>
                    <div class="text-resilt">${historie.detail[4].num}</div>
                </div>
            </div>
        </div>
    </div>`;
    return html;
}
function PushData(numA, numB, numC, numD, numE) {
    historie.unshift({ drawTime: "2302030343438", detail: [{ chanel: "A", num: numA }, { chanel: "B", num: numB }, { chanel: "C", num: numC }, { chanel: "D", num: numD }, { chanel: "E", num: numE }] })
}
countdown();
function randomGame() {
    // your code goes here
    var counttime = 0;
    var countnumber = 0;
    var timecount = setInterval(function () {
        countnumber++;
        if (countnumber == 2) {
            $(".big-ball-result").text(Math.floor(Math.random() * 99) + 1);
            $(".big-ball-result").addClass("back-red");
            data.push($(".big-ball-result").text());
            $(".ball-result").removeClass("d-none")
            for (var i = 0; i < data.length; i++) {
                $(".ball-result:eq(" + i + ")").text(data[i])
                $(".ball-result:eq(" + i + ")").addClass("yell_back")
            }
            $(".item1:eq(" + (parseInt($(".big-ball-result").text()) - 1) + ")").addClass("yell_back")
            clearInterval(timenumber);
            clearInterval(timecount)
        }
    }, 1000);
    var timenumber = setInterval(function () {
        counttime++;
        $(".big-ball-result").text(counttime)
        if (counttime == 99) {
            counttime = 1;
        }
    }, 10);
}
