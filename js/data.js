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
