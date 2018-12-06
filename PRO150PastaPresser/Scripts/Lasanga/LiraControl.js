let currentLira = document.getElementById('number');
let literalLira = currentLira.innerHTML;
let clickHtml = document.getElementById('clickCount');
var clickAmount = parseInt(clickHtml.innerHTML);

const modelGuy = new Object();
modelGuy.lira = literalLira;
modelGuy.LPS = document.getElementById('lpsNum').innerHTML;

//Load User Information
window.addEventListener('load', function () {

});

//Save User Information
window.addEventListener('load', function () {
    let save = document.getElementById('saveBtn');
    save.onclick = () => {
        const modelGuy = new Object();

        modelGuy.lira = literalLira;
        modelGuy.LPS = document.getElementById('lpsNum').innerHTML;
        modelGuy.CheeseCount = document.getElementById('cheeseCount').innerHTML;
        modelGuy.MeatCount = document.getElementById('meatCount').innerHTML;
        modelGuy.SauceCount = document.getElementById('sauceCount').innerHTML;
        modelGuy.PastaCount = document.getElementById('pastaCount').innerHTML;
        modelGuy.Lira = literalLira;
        modelGuy.LPS = document.getElementById('lpsNum').innerHTML;

        let modelGuyJSONString = JSON.stringify(modelGuy);
        $.ajax({
            type: "POST",
            url: document.getElementById('saveForm').action,
            data: modelGuyJSONString,
            contentType: 'application/json; charshet =utf-8',
            success: function (data) {
                Console.Log("Save Success!");
            },
            error: function (data) {
                Console.Log("Save Failed!")
            }
        })
    }
});

//lasagna click
window.addEventListener('load', function () {
    let trash = document.getElementById('trash');
    trash.onclick = () => {
        literalLira += clickAmount;
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
    let ccost = document.getElementById('UpgradeCheesePrice');
    let numberLiteral = parseInt(number.innerHTML);
    let ccountLiteral = parseInt(ccount.innerHTML);
    cupgrade.onclick = () => {
        let ccostLiteral = parseInt(ccost.innerHTML);
        if ((literalLira - ccostLiteral) >= 0) {
            numberLiteral += 2;
            ccountLiteral++;
            ccount.innerText = ccountLiteral;
            number.innerText = numberLiteral;
            currentLira.innerHTML = parseInt(literalLira - ccostLiteral);
            incrementCost(ccost);
        }
    }
    let supgrade = document.getElementById('upgradeSauce');
    let scount = document.getElementById('sauceCount');
    let scost = document.getElementById('UpgradeSaucePrice');
    let scountLiteral = parseInt(scount.innerHTML);
    supgrade.onclick = () => {
        let scostLiteral = parseInt(scost.innerHTML);
        if ((literalLira - scostLiteral) >= 0) {
            numberLiteral += 3;
            scountLiteral++;
            scount.innerText = scountLiteral;
            number.innerText = numberLiteral;
            currentLira.innerHTML = parseInt(literalLira - scostLiteral);
            incrementCost(scost);
        }
    }
    let pupgrade = document.getElementById('upgradePasta');
    let pcount = document.getElementById('pastaCount');
    let pcost = document.getElementById('UpgradePastaPrice');
    let pcountLiteral = parseInt(pcount.innerHTML);
    pupgrade.onclick = () => {
        let pcostLiteral = parseInt(pcost.innerHTML);
        if ((literalLira - pcostLiteral) >= 0) {
            numberLiteral += 5;
            pcountLiteral++;
            pcount.innerText = pcountLiteral;
            number.innerText = numberLiteral;
            currentLira.innerHTML = parseInt(literalLira - pcostLiteral);
            incrementCost(pcost);
        }
    }
    let mupgrade = document.getElementById('upgradeMeat');
    let mcount = document.getElementById('meatCount');
    let mcountLiteral = parseInt(mcount.innerHTML);
    let mcost = document.getElementById('UpgradeMeatPrice');
    mupgrade.onclick = () => {
        let mcostLiteral = parseInt(mcost.innerHTML);
        if ((literalLira - mcostLiteral) >= 0) {
            numberLiteral += 10;
            mcountLiteral++;
            mcount.innerHTML = mcountLiteral;
            number.innerHTML = numberLiteral;
            currentLira.innerHTML = parseInt(literalLira - mcostLiteral);
            incrementCost(mcost);
        }
    }

    //click
    let clupgrade = document.getElementById('upgradeClick');
    let clcount = document.getElementById('clickCount');
    let clcountLiteral = parseInt(clcount.innerHTML);
    let clcost = document.getElementById('UpgradeClickPrice');
    clupgrade.onclick = () => {
        let clcostLiteral = parseInt(clcost.innerHTML);
        if ((literalLira - clcostLiteral) >= 0) {
            //numberLiteral += 10;
            clcountLiteral++;
            clcount.innerHTML = clcountLiteral;
            clickAmount++;
            //number.innerHTML = numberLiteral;
            currentLira.innerHTML = parseInt(literalLira - clcostLiteral);
            incrementCost(clcost);
        }
    }
});


function purchaseUpgrade(cost) {
    if ((literalLira - cost) > 0) {
        currentLira.innerHTML = parseInt(literalLira - cost);
    }
}


function incrementCost(currentCost) {
    let currentCostLiteral = parseInt(currentCost.innerHTML);
    let rate = 1.2;
    currentCost.innerHTML = parseInt(currentCostLiteral *= rate);
}