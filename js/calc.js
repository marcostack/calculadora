function calc() {
    let x = document.getElementById("displayInputNumber").value;
}

function btnCal(value) {
    let salvo = document.getElementById('displayInputNumber').value;
    document.getElementById('displayInputNumber').value = salvo + value;
    calc();
}

function btnClear() {
    document.getElementById("displayInputNumber").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function btnResult() {
    let x = document.getElementById("displayInputNumber").value;
    document.getElementById("displayInputNumber").value = eval(x);
}