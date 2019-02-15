var button = document.getElementById("button")
var count = localStorage.count || 0
    button.textContent = count;

// if (localStoare.count) {
//     count = localStoare.count
// } else {
//     count = 0
// }

document.getElementById("button").addEventListener("click", function() {
    count++ 
    localStorage.count = count;
    button.textContent = count;
});
console.log(count)

