document.cheepForm.addEventListener("input", addNums);
document.goombaForm.addEventListener("input", addNums);
document.bombForm.addEventListener("input", addNums);

function addNums(e) {
    e.preventDefault();
    var num1 = document.getElementById("goombaNum").value
    var num2 = document.getElementById("bombNum").value
    var num3 = document.getElementById("cheepNum").value
    var num4 = parseInt(num1 * 5) + parseInt(num2 * 7) + parseInt(num3 * 11);
    document.getElementById("price").textContent = "Your total is " + `${num4}` + " coins";
}

