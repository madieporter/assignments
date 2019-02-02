document.addForm.addEventListener("submit", addition);

function addition(e){
    e.preventDefault();
    var num1 = document.getElementById("fAddNum").value;
    var num2 = document.getElementById("lAddNum").value;
    var num3 = parseInt(num1) + parseInt(num2);
    document.getElementById("addSum").textContent += num3;
}

document.subtractForm.addEventListener("submit", subtract);

function subtract(e) {
    e.preventDefault();
    var num4 = document.getElementById("fSubNum").value;
    var num5 = document.getElementById("lSubNum").value;
    var num6 = parseInt(num4) - parseInt(num5);
    document.getElementById("subtractSum").textContent += num6;
}

document.multForm.addEventListener("submit", multiply);

function multiply(e) {
    e.preventDefault();
    var num7 = document.getElementById("fMultNum").value;
    var num8 = document.getElementById("lMultNum").value;
    var num9 = parseInt(num7) * parseInt(num8);
    document.getElementById("multSum").textContent += num9;
}