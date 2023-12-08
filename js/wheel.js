var Random_Result = [{ color: "red", number: "01", rotate: 5430, animal: "Rat" }, { color: "red", number: "02", rotate: 5460, animal: "Cow" }, { color: "red", number: "03", rotate: 5490, animal: "Tiger" }
    , { color: "red", number: "04", rotate: 5520, animal: "Rabit" }, { color: "black", number: "05", rotate: 5550, animal: "Dragon" }, { color: "black", number: "06", rotate: 5580, animal: "Snake" }
    , { color: "black", number: "07", rotate: 5610, animal: "Horse" }, { color: "black", number: "08", rotate: 5640, animal: "Goat" }, { color: "yellow", number: "09", rotate: 5670, animal: "Mongkey" }
    , { color: "yellow", number: "10", rotate: 5700, animal: "Rooster" }, { color: "yellow", number: "11", rotate: 5730, animal: "Dog" }, { color: "yellow", number: "12", rotate: 5760, animal: "Pig" }]
var historie = [{ color: "red", number: "01", rotate: 5430, animal: "Rat" }]
var zodiace =new Audio("./sounds/zodiac20s.mp3")
const contain_image = document.querySelector('.pion-arrow');
const keyFrames = document.createElement("style");
const contain_image1 = document.querySelector('.pion-arrow');
const keyFrames1 = document.createElement("style");
function countdown() {
    var count = 10;
    setInterval(function () {
        count--;
        $(".runtime").text(count)
        if (count == 9) {
            $(".runtime").removeClass("hide")
        }
        if (count == 0) {
            zodiace.play()
            $(".num-result").addClass("hide")
            $(".result-img").addClass("hide")
            $(".box-result-color").addClass("hide")
            $(".runtime").addClass("hide")
            stateGame()
            light()
        } else if (count == -13) {
            showResult()
            $(".num-result").removeClass("hide")
            $(".result-img").removeClass("hide")
            $(".box-result-color").removeClass("hide")
            $(".num-animal").addClass("scal-result")
            $(".img-animal").addClass("scal-result")
            $(".box-result-color").addClass("scal-result")
        } else if (count == -20) {
            $(".num-animal").removeClass("scal-result")
            $(".img-animal").removeClass("scal-result")
            $(".box-result-color").removeClass("scal-result")
            stopGame();
            count = 10;
        }
    }, 1000);
}
countdown()
function light() {
    var test = setInterval(function () {
        $(".light1").toggle();
    }, 200);
    setTimeout(() => {
        clearInterval(test);
    }, 23000);
}
function showResult() {
    $(".num-result").html("<div class='num-animal'>" + historie[0].number + "</div>")
    $(".result-img").html("<img class='img-animal' src='../img/fortune/" + historie[0].animal + ".svg'>");
    $(".box-result-color").html("<div class='box-result-"+historie[0].color+"'></div>")
    contain_image.style.webkitTransform = 'rotate(' + historie[0].rotate + 'deg)';
}
showResult()


function stateGame() {
    var result = Random_Result[Math.floor(Math.random() * Random_Result.length)];
    keyFrames.innerHTML = ` 
    @keyframes example{
        from{
            transform: rotate(`+ (historie[0].rotate - 5400) + `deg);
        }
        to{
            transform: rotate(`+ result.rotate + `deg);
        }
    }
    .pion-arrow {
            animation: example 13s ease;
        }
        `;
    contain_image.appendChild(keyFrames);
    historie.unshift(result);
    contain_image.style.webkitTransform = 'rotate(' + historie[0].rotate + 'deg)';
}

function stopGame() {
    contain_image.removeChild(keyFrames);
}
