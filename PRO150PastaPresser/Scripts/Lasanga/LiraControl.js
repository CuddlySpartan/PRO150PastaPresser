let currentLira = document.getElementById('number');
let literalLira = currentLira.innerHTML;


//lasagna click
window.addEventListener('load', function () {
    let trash = document.getElementById('trash');
    trash.onclick = () => {
        literalLira++;
        currentLira.innerHTML = literalLira;
    }
});


//Lira Per Second
window.addEventListener('load', addLiraPerSecond());
setInterval(function () { addLiraPerSecond(); }, 1000);

function addLiraPerSecond() {
    let LPS = document.getElementById('lpsNum');
    literalLira = parseInt(currentLira.innerHTML) + parseInt(LPS.innerHTML);
    currentLira.innerHTML = literalLira;
}


//lps/upgrade managment
window.addEventListener('load', function () {
    let cupgrade = document.getElementById('upgradeCheese');
    let number = document.getElementById('lpsNum');
    let ccount = document.getElementById('cheeseCount');
    let numberLiteral = parseInt(number.innerHTML);
    let ccountLiteral = parseInt(ccount.innerHTML);
    cupgrade.onclick = () => {
        numberLiteral += 2;
        ccountLiteral++;
        ccount.innerText = ccountLiteral;
        number.innerText = numberLiteral;
    }
    let supgrade = document.getElementById('upgradeSauce');

    let scount = document.getElementById('sauceCount');
    let scountLiteral = parseInt(scount.innerHTML);
    supgrade.onclick = () => {
        numberLiteral += 3;
        scountLiteral++;
        scount.innerText = scountLiteral;
        number.innerText = numberLiteral;
    }
    let pupgrade = document.getElementById('upgradePasta');
    let pcount = document.getElementById('pastaCount');
    let pcountLiteral = parseInt(pcount.innerHTML);
    pupgrade.onclick = () => {
        numberLiteral += 5;
        pcountLiteral++;
        pcount.innerText = pcountLiteral;
        number.innerText = numberLiteral;
    }
    let mupgrade = document.getElementById('upgradeMeat');
    let mcount = document.getElementById('meatCount');
    let mcountLiteral = parseInt(mcount.innerHTML);
    mupgrade.onclick = () => {
        numberLiteral += 10;
        mcountLiteral++;
        mcount.innerText = mcountLiteral;
        number.innerText = numberLiteral;
    }
});


