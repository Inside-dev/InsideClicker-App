//Переменные для "Кликов в минуту":
let clickCounter = 0,
    totalCpm = 0,
    lastCpm = 0,
    lastClicked = (new Date()).getTime(),
    cpmCounterCheck = false,
    globalCounter = 0,
    clickMinus = 0;

//Функция обработки скорости кликов и вывод сообщений
export default function cpmCounter() {
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
