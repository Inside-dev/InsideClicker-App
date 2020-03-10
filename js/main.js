 "use strict";

import cpmCounter from './cpm.js';
import windowResizeCheck from './windowSizeCheck.js';
import windowLoadCheck from "./windowSizeCheck.js";

//DOM элементы
let nicknameButton = document.querySelector(".nickname-button"),
    popPap = document.querySelector(".pop-pap"),
    nicknameValue = document.querySelector(".nickname-input"),
    yourName = document.querySelector(".yourname"),
    scoreNumber = document.querySelector(".score-number"),
    clicker = document.querySelector(".clicker"),
    upClicksBtn = document.querySelector(".up"),
    autoClicksBtn = document.querySelector(".auto-clicks");
//Очки и апгрейды:
let num = 0,
    extraClickScore = 1,
    extraAutoClickScore = 1,
    firstUpCheck = false,
    firstAutoCheck = false;

//Ник нейм:
nicknameButton.addEventListener("click", () => {
    yourName.textContent = nicknameValue.value;
    popPap.style.display = "none";
});

//Клик по кнопке:
clicker.addEventListener("click", () => {
    num = num + extraClickScore;
    scoreNumber.textContent = num;
    //Анимация клика
    ($('<div>', {
        class: "click-wave",
    }).appendTo(".middle-side")).animate({
        height: "500px",
        width: "500px",
        opacity: 0
    }, {
        duration: 700,
        complete: (function () {
            $(".click-wave:eq(0)").remove();
        })
    });
    //Обработка скорости кликов и вывод сообщений
    cpmCounter();
});

//Умноженные клики:
 upClicksBtn.addEventListener("click", () => {
    if (num > 50 || num === 50) {
        num = num - 50;
        firstUpCheck = true;
        scoreNumber.textContent = num;
        upClicksBtn.style.display = "none";
        // tripleUp.style.display = "flex";
        // tripleUp.style.pointerEvents = "none";
        // tripleUp.style.opacity = "0.6";
    }
});

//Авто клики:
 autoClicksBtn.addEventListener("click", () => {
    if (num > 200 || num === 200) {
        num = (num - 200);
        firstAutoCheck = true;
        scoreNumber.textContent = num;
        $(".auto-clicks-second").css({
            "display": "flex",
            "pointer-events": "none",
            "opacity": "0.6"
        });
        if (num > 1000 || num === 1000) {
            $(".auto-clicks-second").css({
                "pointer-events": "auto",
                "opacity": "1"
            });
        }
        setInterval(function AutoClick() {
            num = num + 1;
            scoreNumber[0].textContent = num;
        }, 1000);
    }
});

//Функция глобальной проверки
function globalCheck() {
    //Подсчет и проверка умноженных кликов:
    if (num > 50 || num === 50) {
        upClicksBtn.style.pointerEvents = "auto";
        upClicksBtn.style.opacity = "1";
    }

    //Подсчет и проверка авто кликов:
    if (num > 10 || num === 10) {
        autoClicksBtn.style.pointerEvents = "auto";
        autoClicksBtn.style.opacity = "1";
    }
}
//Запуск проверки
setInterval(globalCheck, 300);

//Check window size
 window.onresize(windowResizeCheck);
 windowLoadCheck();

