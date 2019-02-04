// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for (i = 0; i < officeItems.length; i++);
// console.log(i)

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 


// for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//       if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
//           console.log("too young")
//       } else {
//           console.log("old enough")
//       }
//     } 


// for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see movie")
//     } else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see movie")
//     }
//   } 

// for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enought to see movie, don't let her in")
//     } else { console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enought to see movie, don't let him in")

//     }
// }

//Bonus Challenge

// function toggleSwitch(switches) {
//     var on = true;

//     for (var i = 0; i < switches.length; i++)
//         console.log(switches[i])

//     if(on){
//         return "the light is on"
//     } else {
//         return "the light is off"
//     }
// }

// console.log(toggleSwitch([2, 5, 435, 4, 3])) //"the light is on"
// console.log(toggleSwitch([1, 1, 1, 1, 3])) // "the light is off"
// console.log(toggleSwitch([9, 3, 4, 2])) //"the light is on"


function toggleSwitch(switches) {
    var on = false;

    for (var i = 0; i < switches.length; i++){
        for (var j = 0; j < switches[i]; j++){
             on = !on;
        }
    }
    if(on){
        return "the light is on"
    } else {
        return "the light is off"
    }
}

console.log(toggleSwitch([2, 5, 435, 4, 3])) //"the light is on"

