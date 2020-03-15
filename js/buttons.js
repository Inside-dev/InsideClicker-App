import data from './main.js';

//Upgrade buttons logic after click
export function extraClickActionLogic() {
    data.num -= data.extraClickRequire;
    data.scoreNumber.textContent = data.num;
    data.extraClickRequire = data.extraClickRequire * 3;
    data.extraClickScore = data.extraClickScore * 2;
    data.upClickInfo.textContent = `x${data.extraClickScore * 2} Clicks`;
    data.upClickPrice.textContent = `${data.extraClickRequire} Clicks`;
}

export function extraAutoClickActionLogic() {
    data.num -= data.extraAutoClickRequire;
    data.scoreNumber.textContent = data.num;
    data.extraAutoClickRequire = data.extraAutoClickRequire * 3;
    data.extraAutoClickScore = data.extraAutoClickScore * 2;
    data.autoClickInfo.textContent = `Auto clicks ${data.extraAutoClickScore * 2}/sec`;
    data.autoClickPrice.textContent = `${data.extraAutoClickRequire} Clicks`;
    clearInterval(data.autoClicks);
    data.autoClicks = setInterval(() => {
        data.num += data.extraAutoClickScore;
        data.scoreNumber.textContent = data.num;
    }, 1000);
}

//Check requirements before upgrade buttons will be available
export function extraClickCheckLogic() {
    if(data.num === data.extraClickRequire || data.num > data.extraClickRequire) {
        data.upClickBtn.style.pointerEvents = "auto";
        data.upClickBtn.style.opacity = "1";
    } else {
        data.upClickBtn.style.pointerEvents = "none";
        data.upClickBtn.style.opacity = "0.6";
    }
}
export function extraAutoClickCheckLogic() {
    if(data.num === data.extraAutoClickRequire || data.num > data.extraAutoClickRequire) {
        data.autoClickBtn.style.pointerEvents = "auto";
        data.autoClickBtn.style.opacity = "1";
    } else {
        data.autoClickBtn.style.pointerEvents = "none";
        data.autoClickBtn.style.opacity = "0.6";
    }
}
