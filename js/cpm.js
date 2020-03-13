//Data for cpm:
let clickCounter = 0,
    totalCpm = 0,
    lastCpm = 0,
    lastClicked = (new Date()).getTime(),
    globalCounter = 0,
    cpmBudge = document.querySelector(".cpm-budge");


//Main cpm function with all calc
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
        cpmBudge.style.opacity = "1";
    } else {
        document.body.className = "";
        cpmBudge.style.opacity = "0";
    }
}

function difference(a, b) { return Math.abs(a - b); }
