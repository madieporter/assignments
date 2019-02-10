var ask = require("readline-sync");

//Welcome
var userName = ask.question("What is your name? ");
console.log("Hello " + userName + ", I'm Leslie Knope. Thank you for coming to the best city in the world, Pawnee, to help with Mission: Cheeto Bomb. President Trump plans to drop the Cheeto Bomb on Pawnee by tomorrow morning. If we allow that to happen everyone in town will turn orange! Lets make our way to City Hall to stop this catastrophe!");

var isAlive = true;
var beatTrump = false;
var totalSteps = 0;

//Create Enemies
function Enemy (name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.attack = Math.floor((Math.random()*20) +6);
}

var jamm = new Enemy("Councilman Jamm", 70, "dental pliers");
var joan = new Enemy("Joan Callamezzo", 30, "broken wine glass");
var tammy = new Enemy("Tammy Two", 50, "cleavage");
var mikeP = new Enemy("Mike Pence", 80, "discrimination");
var brettK = new Enemy("Brett Kavanaugh", 100, "kisses and hugs");


//Random Enemies Function
function getEnemy() {
    var enemies = ["jamm", "joan", "tammy", "mikeP", "brettK"];
    var randEnemy = enemies[Math.floor(Math.random()*enemies.length)]
    if (randEnemy === "jamm") {
        return jamm
    } else if (randEnemy === "joan") {
        return joan
    } else if (randEnemy === "tammy") {
        return tammy
    } else if (randEnemy === "mikeP") {
        return mikeP
    } else if (randEnemy === "brettK") {
        return brettK
    }
}

//Create User
function User(userName, hp) {
    this.name = userName;
    this.hp = hp;
    this.weapon = ["whipped cream spray can", "power binder", "best friend Anne", "husband Ben"];
    this.attack = Math.floor((Math.random()*35)+11);
}

var mainUser = new User(userName, 100);

//Create Items
function Item(name) {
    this.itemName = name;
}

var waffles = new Item("waffles");
var soda = new Item("Sweetums 64oz soda");
var april = new Item("April");
var andy = new Item("Andy");
var tom = new Item("Tom");
var donna = new Item("Donna");
var jerry = new Item("Jerry");

//Random Items Function
function findItems() {
    var items = ["waffles", "soda", "april", "andy", "tom", "donna", "jerry"]
    var randItem = items[Math.floor(Math.random()*items.length)]
    if (randItem === "waffles") {
        mainUser.hp = mainUser.hp + 20;
        console.log("You found " + randItem + "! Your HP is increased by 20!")
    } else if (randItem === "soda") {
        mainUser.hp = mainUser.hp + 10;
        console.log("You found " + randItem + "! Your HP is increased by 10!")
    } else if (randItem === "april") {
        mainUser.hp = mainUser.hp + 15;
        console.log("You found " + randItem + "! Your HP is increased by 15!")
    } else if (randItem === "andy") {
        mainUser.hp = mainUser.hp + 7;
        console.log("You found " + randItem + "! Your HP is increased by 7!")
    } else if (randItem === "tom") {
        mainUser.hp = mainUser.hp + 15;
        console.log("You found " + randItem + "! Your HP is increased by 15!")
    } else if (randItem === "donna") {
        mainUser.hp = mainUser.hp + 10;
        console.log("You found " + randItem + "! Your HP is increased by 10!")
    } else if (randItem === "jerry") {
        mainUser.hp = mainUser.hp + 3;
        console.log("You found " + randItem + "! Your HP is increased by 3!")
    }
    return mainUser.hp;
}  


while (isAlive && !beatTrump) {
    var playGame = ask.keyIn("Keep walking to City Hall [w], or quit the game [q].", {limit: "wiq"});
    if (playGame === "w") {
        walk()
    } else if (playGame === "i") {
        checkInventory()
    } else if (playGame === "q") {
        quitGame()
    }
    else {
        break;
    }
}

//Walking Function
function walk () {
    var walking = true;
    while (walking) {
        var steps = Math.floor(Math.random()*10);
        totalSteps = totalSteps + steps;
        console.log(totalSteps);
        if (totalSteps === 20) {
            console.log("You made it to City Hall and captured the Cheeto Bomb! You successfully defeated President Trump.");
            walking = false;
            beatTrump = true;
            return beatTrump
        }
        if (steps >= 5) {
            var fightOrRun = ask.question("Do you want to fight? [f] or run? [r]");
            if (fightOrRun === "f") {
                fight()
            } else {
                run()
            }
            walking = false;
        } else if (steps <= 4){
            findItems()
        } 
        return totalSteps
    }
}

// Fight Function
function fight(randEnemy) {
    var fightEnemy = getEnemy();
    var randWeapon = mainUser.weapon[Math.floor(Math.random()* mainUser.weapon.length)]
    mainUser.hp -= fightEnemy.attack
    fightEnemy.hp -= mainUser.attack
    console.log("Great job, " + userName + ". You used your " + randWeapon + " and your health is now " + mainUser.hp);
    console.log(fightEnemy.name + " even used their " + fightEnemy.weapon + " against you, and yet their health is " + fightEnemy.hp);
    walk ()
}

//Run Function 
function run() {
    
}


