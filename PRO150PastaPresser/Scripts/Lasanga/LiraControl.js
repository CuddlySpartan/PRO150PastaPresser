//lasagna click
window.addEventListener('load', function () {
    let trash = document.getElementById('trash');
    let number = document.getElementById('number');
    let numberLiteral = parseInt(number.innerHTML);
    trash.onclick = () => {
        numberLiteral++;
        number.innerText = numberLiteral;
    }
});
//lps/upgrade managment
window.addEventListener('load', function () {
    let cupgrade = document.getElementById('upgradeCheese');
    let number = document.getElementById('lpsNum');
    let ccount = document.getElementById('cheeseCount');
    let numberLiteral = parseInt(number.innerHTML);
    let ccountLiteral = parseInt(ccount.innerHTML);
    cupgrade.children.namedItem('UpgradeLabel').innerText = calculateAmountOfLira(ccountLiteral, 1.05);
    cupgrade.onclick = () => {
        numberLiteral += 2;
        ccountLiteral++;
        ccount.innerText = ccountLiteral;
        number.innerText = numberLiteral;
        cupgrade.innerText = raiseLiraLevel(cupgrade);
    }
    let supgrade = document.getElementById('upgradeSauce');
    let scount = document.getElementById('sauceCount');
    let scountLiteral = parseInt(scount.innerHTML);
    supgrade.children.namedItem('UpgradeLabel').innerText = calculateAmountOfLira(scountLiteral, 1.05);
    supgrade.onclick = () => {
        numberLiteral += 3;
        scountLiteral++;
        scount.innerText = scountLiteral;
        number.innerText = numberLiteral;
    }
    let pupgrade = document.getElementById('upgradePasta');
    let pcount = document.getElementById('pastaCount');
    let pcountLiteral = parseInt(pcount.innerHTML);
    pupgrade.children.namedItem('UpgradeLabel').innerText = calculateAmountOfLira(pcountLiteral, 1.05);
    pupgrade.onclick = () => {
        numberLiteral += 5;
        pcountLiteral++;
        pcount.innerText = pcountLiteral;
        number.innerText = numberLiteral;
    }
    let mupgrade = document.getElementById('upgradeMeat');
    let mcount = document.getElementById('meatCount');
    let mcountLiteral = parseInt(mcount.innerHTML);
    pupgrade.children.namedItem('UpgradeLabel').innerText = calculateAmountOfLira(pcountLiteral, 1.05);
    mupgrade.onclick = () => {
        numberLiteral += 10;
        mcountLiteral++;
        mcount.innerText = mcountLiteral;
        number.innerText = numberLiteral;
    }
});

function calculateAmountOfLira(amountOfLevels, levelRateOfInterest) {
    let num, rate; 
    num = ParseInt(amountOfLevels.innerHTML);
    rate = ParseInt(levelRateOfInterest.innerHTML);
    rate++;
    for (var i = 0; i < num; i++) {
        num *= rate;
    }
    return num;
}

function raiseLiraLevel() {

}