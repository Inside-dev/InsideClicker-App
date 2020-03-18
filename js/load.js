import data from "./data.js";
import {background} from "./sounds.js";
const dataToSave = ['num', 'extraClickScore', 'extraAutoClickScore', 'extraClickRequire', 'extraAutoClickRequire'];
const elemToSave = [data.scoreNumber, data.upClickInfo, data.autoClickInfo, data.upClickPrice, data.autoClickPrice];

const startLoad = function() {
    //Change text of the screenPopUp if CORS is ok
    data.screenSizePopUpText.innerHTML = 'Sorry, but this application does not support this screen size.<br>But you can look at this amazing chicken';
    data.main.style.display = "flex";
    //Action with localStorage
    for(let i = 0; i < dataToSave.length; i++) {
        if(localStorage.getItem(dataToSave[i])) {
            data[dataToSave[i]] = +localStorage.getItem(dataToSave[i]);
            elemToSave[i].textContent = `${data[dataToSave[i]]} Clicks`;
            elemToSave[i] === data.scoreNumber ? elemToSave[i].textContent = `${data[dataToSave[i]]}` : false;
            elemToSave[i] === data.upClickInfo ? elemToSave[i].textContent = `x${data[dataToSave[i]]} Clicks`: false;
            if(elemToSave[i] === data.autoClickInfo) {
                elemToSave[i].textContent = `Auto clicks ${data[dataToSave[i]] * 2}/sec`;
            }
        }
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
