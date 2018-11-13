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
//cheese button
window.addEventListener('load', function () {
    let upgrade = document.getElementById('upgradeCheese');
    let number = document.getElementById('lpsNum');
    let numberLiteral = parseInt(number.innerHTML);
    upgrade.onclick = () => {
        numberLiteral+=2;
        number.innerText = numberLiteral;
    }
});
//sauce button
window.addEventListener('load', function () {
    let upgrade = document.getElementById('upgradeSauce');
    let number = document.getElementById('lpsNum');
    let numberLiteral = parseInt(number.innerHTML);
    upgrade.onclick = () => {
        numberLiteral += 3;
        number.innerText = numberLiteral;
    }
});
//pasta button
window.addEventListener('load', function () {
    let upgrade = document.getElementById('upgradePasta');
    let number = document.getElementById('lpsNum');
    let numberLiteral = parseInt(number.innerHTML);
    upgrade.onclick = () => {
        numberLiteral += 5;
        number.innerText = numberLiteral;
    }
});
//meat button
window.addEventListener('load', function () {
    let upgrade = document.getElementById('upgradeMeat');
    let number = document.getElementById('lpsNum');
    let numberLiteral = parseInt(number.innerHTML);
    upgrade.onclick = () => {
        numberLiteral += 10;
        number.innerText = numberLiteral;
    }
});