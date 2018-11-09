function JSModel() {
    return @Html.Raw(Json.Encode(Model));
}

function LiraCounterFunction(liraCount) {
    var counter = document.getElementById('LiraCounter');
    counter.innerHTML = liraCount;
}

function AddLira() {
    let lira = JsModel().Lira;
    lira++;
    LiraCounterFunction(lira);
}