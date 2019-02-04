document.form.addEventListener("submit", displayInfo);


function displayInfo(e) {
    e.preventDefault()
    var loopDiet = [];
    var dietArray = document.form.diet
    for(var i = 0; i < dietArray.length; i++) {
    if (dietArray[i].checked == true)
    loopDiet.push(dietArray[i].value)
}
    var firstName = document.form.fName.value
    var lastName = document.form.lName.value
    var age = document.form.age.value
    
   alert ("name: " + firstName + " " + lastName +
    "\n age: " + age + 
    "\n gender: " + document.getElementById("gender").value + 
    "\n destination: " + document.getElementById("select").value +
    "\n dietary restrictions: " + loopDiet)
}
