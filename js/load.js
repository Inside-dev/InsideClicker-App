import data from "./data.js";
import {background} from "./sounds.js";

let startLoad = function() {
    //Change text of the screenPopUp if CORS is ok
    data.screenSizePopUpText.innerHTML = 'Sorry, but this application does not support this screen size.<br>But you can look at this amazing chicken';
    data.main.style.display = "flex";
    //Action with localStorage
    if(localStorage.getItem('num')) {
        data.num = +localStorage.getItem('num');
        data.scoreNumber.textContent = data.num;
    }
    if(localStorage.getItem('extraClickScore')) {
        data.extraClickScore = +localStorage.getItem('extraClickScore');
        data.upClickInfo.textContent = `x${data.extraClickScore * 2} Clicks`;
    }
    if(localStorage.getItem('extraAutoClickScore')) {
        data.extraAutoClickScore = +localStorage.getItem('extraAutoClickScore');
        data.autoClickInfo.textContent = `Auto clicks ${data.extraAutoClickScore * 2}/sec`
    }
    if(localStorage.getItem('extraClickRequire')) {
        data.extraClickRequire = +localStorage.getItem('extraClickRequire');
        data.upClickPrice.textContent = `${data.extraClickRequire} Clicks`;
    }
    if(localStorage.getItem('extraAutoClickRequire')) {
        data.extraAutoClickRequire = +localStorage.getItem('extraAutoClickRequire');
        data.autoClickPrice.textContent = `${data.extraAutoClickRequire} Clicks`;
    }
    if(localStorage.getItem('nickname')) {
        data.yourName.textContent = localStorage.getItem('nickname');
        data.popPap.style.display = "none";
    } else {
        background.play();
    }
    if(localStorage.getItem('autoClicks') !== null) {
        data.autoClicks = setInterval(() => {
            data.num += data.extraAutoClickScore;
            localStorage.setItem('num', data.num);
            data.scoreNumber.textContent = data.num;
        }, 1000);
    }
};
export default startLoad;
