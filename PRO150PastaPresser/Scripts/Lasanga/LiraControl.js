window.addEventListener('load', function() {
    let trash = document.getElementById('trash');
    let number = document.getElementById('number');
    let numberLiteral = parseInt(number.innerHTML);
    trash.onclick = () => {
        numberLiteral++;
        number.innerText = numberLiteral;
    }
});