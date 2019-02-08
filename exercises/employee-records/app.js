var employees = []

function employeeSearch(name, jobTitle, salary, status="fullTime") {
    this.name = name
    this.title = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function() {
        console.log(this.name + " is a " + this.title + ". He/She earns " + this.salary + " and is " + this.status)
    }
}

var eric = new employeeSearch("Eric Jones", "Instructor", "$2/hour", "contracted")
var marcus = new employeeSearch("Marcus Peterson", "TA", "$.50/hour", "part time" )
var mary = new employeeSearch("Mary Buehler", "Director of Student outcomes", "5 mil/hour", "contracted")

eric.printEmployeeForm();
marcus.printEmployeeForm();
mary.printEmployeeForm();

