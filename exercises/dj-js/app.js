var djMadWuz = document.getElementById("box");

djMadWuz.addEventListener("mouseover", function() {djMadWuz.style.backgroundColor = "blue"});
djMadWuz.addEventListener("mousedown", function() {djMadWuz.style.backgroundColor = "red"});
djMadWuz.addEventListener("mouseup", function() {djMadWuz.style.backgroundColor = "yellow"});
djMadWuz.addEventListener("dblclick", function() {djMadWuz.style.backgroundColor = "green"});
document.addEventListener("scroll", function() {djMadWuz.style.backgroundColor = "orange"});


document.addEventListener("keydown", function (e) {
    if (e.key == "b") {
        djMadWuz.style.backgroundColor = "blue"
    }
    else if (e.key == "r") {
        djMadWuz.style.backgroundColor = "red"
    }
    else if (e.key == "y") {
        djMadWuz.style.backgroundColor = "yellow"
    }
    else if (e.key == "g") {
        djMadWuz.style.backgroundColor = "green"
    }
    else if (e.key == "o") {
        djMadWuz.style.backgroundColor = "orange"
    }
})