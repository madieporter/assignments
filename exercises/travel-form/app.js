document.form.addEventListener("submit", displayInfo);

function displayInfo(e) {
    e.preventDefault()
    var firstName = document.form.fName.value
    var lastName = document.form.lName.value
    var age = document.form.age.value
    
   alert ("name: " + firstName + " " + lastName +
    "\n age: " + age + 
    "\n gender: " + document.getElementById("gender").value + 
    "\n destination: " + document.getElementById("destination").value +
    "\n dietary restrictions: " + document.getElementById("diet").value)
}
