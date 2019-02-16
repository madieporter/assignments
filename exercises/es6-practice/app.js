const ownerName = "John"
const age = 101
const pets = ["cat", "dog"]
let petObjects = []

function runForLoop() {
    let name;
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pets.name = name
        petObjects.push(pet)
    }
    return name
}

runForLoop()
console.log(pets.name)

const numbers = [1, 2, 3]

numbers.map(function(number) {
    return 2 * number;
});

const numbers = [1, 2, 3];
const math = numbers.map(number => 2 * number);
console.log(math)

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}

let carrotObj;
const typeOf = carrots.map(carrot => carrotObj = {name: carrot, type: "carrot"});
console.log(typeOf)

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]


const friendlyPeople = people.filter(person => !!person.friendly);
console.log(friendlyPeople) 

function doMathSum(a, b) {
    return a + b
}
const add = (a, b) => a + b;
console.log(add(2, 4))


var produceProduct = function(a, b) {
    return a * b
}
const multiply = (a, b) => a * b;
console.log(multiply(4, 2))

let person = {
    firstName: Jane,
    lastName: Doe,
    age: 100
};




