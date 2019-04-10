let nicknameButton = document.getElementsByClassName("nickname-button"),
    popPap = document.getElementsByClassName("pop-pap"),
    nicknameValue = document.getElementsByClassName("nickname-input"),
    yourName = document.getElementsByClassName("yourname"),
    scoreNumber = document.getElementsByClassName("score-number"),
    clicker = document.getElementsByClassName("clicker"),
    doubleUp = document.getElementsByClassName("double-up"),
    tripleUp = document.getElementsByClassName("triple-up"),
    autoClicksBtn = document.querySelector(".auto-clicks"),
    cpm = document.querySelector(".CPM");


//Ник нейм:
nicknameButton[0].addEventListener("click", function () {
    yourName[0].textContent = nicknameValue[0].value;
});

nicknameButton[0].addEventListener("click", function () {
    popPap[0].style.display = "none";
});

//Очки и апгрейды:
let num = 0,
    firstUpCheck = false,
    secondUpCheck = false;
    firstAutoCheck = false;
    secondAutoCheck = false;

    //Переменные для "Кликов в минуту":
let clickCounter = 0,
    totalCpm = 0,
    lastCpm = 0,
    lastClicked = (new Date()).getTime();
    cpmCounterCheck = false,
    globalCounter = 0,
    clickMinus = 0;

//Клик по кнопке:
clicker[0].addEventListener("click", function () {
    //Подсчет и проверка умноженных кликов:
    if (firstUpCheck == false && secondUpCheck == false) {
        ++num;
        scoreNumber[0].textContent = num;

        if (num > 50 || num == 50) {
            doubleUp[0].style.pointerEvents = "auto";
            doubleUp[0].style.opacity = "1";
        }
    } else if (firstUpCheck == true) {
        num = num + 2;
        scoreNumber[0].textContent = num;

        if (num > 300 || num == 300) {
            tripleUp[0].style.pointerEvents = "auto";
            tripleUp[0].style.opacity = "1";
        }
    } else {
        num = num + 3;
        scoreNumber[0].textContent = num;
    }
    //Подсчет и проверка авто кликов:
    if (num > 200 || num == 200) {
        $(".auto-clicks-first").css({
            "pointer-events": "auto",
            "opacity": "1"
        });         
    } 
    if (num > 1000 || num == 1000) {
        $(".auto-clicks-second").css({
            "pointer-events": "auto",
            "opacity": "1"
        });  
    }
    //Анимация клика
    ($('<div>', {
        class: "click-wave",
    }).appendTo(".middle-side")).animate({
        height: "400px",
        width: "400px",
        opacity: 0
    }, {
        duration: 1000,
        complete: (function () {
            $(".click-wave:eq(0)").remove();
        })
    });
    //Обработка скорости кликов и вывод сообщений
    cpmCounter();
});

//Умноженные клики:
doubleUp[0].addEventListener("click", function () {
    if (num > 50 || num == 50) {
        num = num - 50;
        firstUpCheck = true;
        scoreNumber[0].textContent = num;
        doubleUp[0].style.display = "none";
        tripleUp[0].style.display = "flex";
        tripleUp[0].style.pointerEvents = "none";
        tripleUp[0].style.opacity = "0.6";
    }
});

tripleUp[0].addEventListener("click", function () {
    if (num > 300 || num == 300) {
        num = num - 300;
        firstUpCheck = false;
        secondUpCheck = true;
        scoreNumber[0].textContent = num;
        tripleUp[0].style.display = "none";
    }
});

//Авто клики:
$(".auto-clicks-first").on("click", function () {
    if (num > 200 || num == 200) {
        num = (num - 200);
        firstAutoCheck = true;
        scoreNumber[0].textContent = num;
        $(".auto-clicks-first").css("display", "none");
        $(".auto-clicks-second").css({
            "display": "flex",
            "pointer-events": "none",
            "opacity": "0.6"
        });
        if (num > 1000 || num == 1000) {
            $(".auto-clicks-second").css({
                "pointer-events": "auto",
                "opacity": "1"
            }); 
        }
        setTimeout(function firstAutoClick(event) {
            if (firstAutoCheck == false) {
                event.clearTimeout(timerId);
            }
            num = num + 1;
            scoreNumber[0].textContent = num;
            setTimeout(firstAutoClick, 1000);
            if (num > 1000 || num == 1000) {
                $(".auto-clicks-second").css({
                    "pointer-events": "auto",
                    "opacity": "1"
                }); 
            }
        }, 1000);
    } 
});

$(".auto-clicks-second").on("click", function () {
    if (num > 1000 || num == 1000) {
        num = (num - 1000);
        firstAutoCheck = false;
        secondAutoCheck = true;
        scoreNumber[0].textContent = num;
        $(".auto-clicks-first").css("display", "none");
        $(".auto-clicks-second").css({
            "display": "flex",
            "pointer-events": "none",
            "opacity": "0.6"
        });
        if (num > 5000 || num == 5000) {
            $(".auto-clicks-second").css({
                "pointer-events": "auto",
                "opacity": "1"
            }); 
        }
        setTimeout(function secondAutoClick(event) {
            if (secondAutoCheck == false) {
                event.clearTimeout(timerId);
            }
            num = num + 2;
            scoreNumber[0].textContent = num;
            setTimeout(secondAutoClick, 1000);
            if (num > 5000 || num == 5000) {
                $(".auto-clicks-second").css({
                    "pointer-events": "auto",
                    "opacity": "1"
                }); 
            }
        }, 1000);
    } 
});

//Функция обработки скорости кликов и вывод сообщений
function cpmCounter() {
    clickCounter++;

    let timeNow = (new Date()).getTime();
    let cpm = Math.round(60 /(timeNow - lastClicked) * 1000);

    totalCpm += cpm;
    lastClicked = timeNow;

    if(difference(lastCpm, cpm) > 30) {
        clickCounter = 1;
        totalCpm = cpm;
    }

    lastCpm = cpm;
    globalCounter = Math.round(totalCpm/clickCounter);
    document.querySelector('.CPM').textContent = globalCounter;

    if(globalCounter > 300) {
            document.body.className = "crazy";

    } else {
            document.body.className = "";
    }
}

function difference(a, b) { return Math.abs(a - b); }