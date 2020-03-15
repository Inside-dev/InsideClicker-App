"use strict";

import cpmCounter from './cpm.js';
import {
    extraAutoClickActionLogic,
    extraAutoClickCheckLogic,
    extraClickActionLogic,
    extraClickCheckLogic
} from './buttons.js';
import {background, upgrade} from './sounds.js';
import startLoad from "./load.js";
import data from './data.js';

//Load data from localStorage if it has, and check problem with CORS
startLoad();

//Nickname:
data.nicknameButton.addEventListener("click", () => {
    background.stop();
    if(data.nicknameValue.value.length === 0) {
        localStorage.setItem('nickname', 'Noname');
        data.yourName.textContent = 'Noname';
    } else {
        localStorage.setItem('nickname', data.nicknameValue.value);
        data.yourName.textContent = data.nicknameValue.value;
    }
    data.popPap.style.display = "none";
});

//Main click button:
data.clicker.addEventListener("click", () => {
    data.num += data.extraClickScore;
    localStorage.setItem('num', data.num);
    data.scoreNumber.textContent = data.num;
    //Click animate
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
    //Clicks per minute module
    cpmCounter();
});
data.upClickBtn.addEventListener('click', () => {
    upgrade.play();
    extraClickActionLogic();
    extraClickCheckLogic();
});

data.autoClickBtn.addEventListener('click', () => {
    upgrade.play();
    extraAutoClickActionLogic();
    extraAutoClickCheckLogic();
});

//Buttons check
setInterval(() => {
    extraClickCheckLogic();
    extraAutoClickCheckLogic();
}, 300);

//Check window size and if it lower when need, show alert pop-up.
window.onresize = () => {
    if(window.innerWidth < 900 || window.innerHeight < 700) {
        data.screenSizePopUp.style.display = "flex";
        data.main.style.display = "none";
    } else {
        data.screenSizePopUp.style.display = "none";
        data.main.style.display = "flex";
    }
};

(function windowLoadCheck() {
    if(window.innerWidth < 900 || window.innerHeight < 700) {
        data.screenSizePopUp.style.display = "flex";
        data.main.style.display = "none";
    } else {
        data.screenSizePopUp.style.display = "none";
        data.main.style.display = "flex";
    }
})();



