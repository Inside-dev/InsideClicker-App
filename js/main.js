"use strict";

import cpmCounter from './cpm.js';
import {extraClickActionLogic} from './buttons.js';
import {extraAutoClickActionLogic} from './buttons.js';
import {extraClickCheckLogic} from './buttons.js';
import {extraAutoClickCheckLogic} from './buttons.js';
import {upgrade} from './sounds.js';
import {background} from './sounds.js';

const data  = {
    //DOM elements
    nicknameButton: document.querySelector(".nickname-button"),
    popPap: document.querySelector(".pop-pap"),
    main: document.querySelector(".main"),
    nicknameValue: document.querySelector(".nickname-input"),
    yourName: document.querySelector(".yourname"),
    clicker: document.querySelector(".clicker"),
    scoreNumber: document.querySelector(".score-number"),
    screenSizePopUp: document.querySelector(".size-alert"),
    screenSizePopUpText: document.querySelector(".size-alert-text"),
    upClickBtn: document.querySelector(".up"),
    upClickInfo: document.querySelector(".up-info"),
    upClickPrice: document.querySelector(".up-price"),
    autoClickBtn: document.querySelector(".auto-clicks"),
    autoClickInfo: document.querySelector(".auto-clicks-info"),
    autoClickPrice: document.querySelector(".auto-clicks-price"),
    //Score and upgrades
    num: 0,
    extraClickScore: 1,
    extraAutoClickScore: 1,
    extraClickRequire: 30,
    extraAutoClickRequire: 40,
    autoClicks: null,
};
export default data;

data.screenSizePopUpText.innerHTML = 'Sorry, but this application does not support this screen size.<br>But you can look at this amazing chicken';
data.main.style.display = "flex";

//Nickname:
data.nicknameButton.addEventListener("click", () => {
    background.stop();
    data.yourName.textContent = data.nicknameValue.value;
    data.popPap.style.display = "none";
});

//Main click button:
data.clicker.addEventListener("click", () => {
    data.num += data.extraClickScore;
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

//Function of global check
function globalCheck() {
    extraClickCheckLogic();
    extraAutoClickCheckLogic();
}
//Start checking
setInterval(globalCheck, 300);

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

//Start background music
background.play();


