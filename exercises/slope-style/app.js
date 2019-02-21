// const collectAnimals = (...animals) => animals

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }
// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
                // ["carrit"])

// const fruits = ["apple", "pear"];
// const sweets = ["cake", "pie"];
// const vegetables = "carrot";

// const food = ([...fruits, ...sweets, ...vegetables]);
// console.log(food)

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

// const [ firstItem ] = items;

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// const worstActivites = ["other", "ok", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr, arr2){
//     const [ clown, hat, boot ] = arr;
//     const [ one, two, three ] = arr2;

//     return `My top three favorite activities are ${clown}, ${one}, ${three}.`;
// }

// console.log (returnFavorites(favoriteActivities, worstActivites))

// function combineAnimals() {  
 
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// // combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// const coolAnimals = (arr1, arr2, arr3) => ([...arr1, ...arr2, ...arr3])
// console.log(coolAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

//   const nums = [1, 2, 3, 4, 5];
//   const product = nums.reduce((acc, num) => acc * num)
//   console.log(product)

// function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
//   }

// const unshift = (array, a, b, c, d, e) => [...array, ...a, ...b, ...c, ...d, ...e]
// console.log(unshift(["catdog"], "x", "meow", "steph", "MP", "13"));

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


// const populatePeople = names => names.map(name => name.split(" "));
// const peopleObj = populatePeople => populatePeople.map(([firstName, lastName]) => ({firstName, lastName}));
// console.log(peopleObj(populatePeople(["Frank Perverson", "Suzy Degaul", "Liza Jones"])));


// class Person {
//     constructor(name, catchPhrase, hairColor) {
//         this.name = name;
//         this.hairColor = hairColor;
//         this.catchPhrase = catchPhrase;
//     }
//     speak() {
//         return this.catchPhrase
//     }
//     setHairColor(newColor) {
//         this.hairColor = newColor
//         return this.hairColor
//     }
// }


