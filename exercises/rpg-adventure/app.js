var ask = require("readline-sync");


//Welcome
var userName = ask.question("What is your name? ");
console.log("Hello " + userName + ", I'm Leslie Knope. \n\n Thank you for coming to the best city in the world, \n\n PAWNEE(!!!), \n\n Our mission is to stop the Cheeto Bomb. \n\n President Trump plans to drop the Cheeto Bomb on Pawnee tomorrow morning. \n\n If we allow that to happen everyone in town will turn orange! \n\n Lets make our way to City Hall to stop this catastrophe!");


//Globals
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

var jamm = new Enemy("Councilman Jamm", 30, "dental pliers");
var joan = new Enemy("Joan Callamezzo", 20, "broken wine glass");
var tammy = new Enemy("Tammy Two", 25, "cleavage");
var mikeP = new Enemy("Mike Pence", 40, "discrimination");
var brettK = new Enemy("Brett Kavanaugh", 40, "kisses and hugs");



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
    this.weapon = ["whipped cream spray can to the eyes", "power binder", "best friend Anne", "husband Ben"];
    this.attack = Math.floor((Math.random()*35)+11);
}

var mainUser = new User(userName, 10);



//Random Items Function
function findItems() {
    var items = ["waffles", "Sweetums 64oz. Soda", "april", "andy", "tom", "donna", "jerry"]
    var randItem = items[Math.floor(Math.random()*items.length)]
    if (randItem === "waffles") {
        mainUser.hp = mainUser.hp + 20;
        console.log("You found " + randItem + "! Your HP is increased by 20!")
    } else if (randItem === "soda") {
        mainUser.hp = mainUser.hp + 10;
        console.log("You found " + randItem + "! Your HP is increased by 10!")
    } else if (randItem === "April") {
        mainUser.hp = mainUser.hp + 15;
        console.log("You found " + randItem + "! Your HP is increased by 15!")
    } else if (randItem === "Andy") {
        mainUser.hp = mainUser.hp + 7;
        console.log("You found " + randItem + "! Your HP is increased by 7!")
    } else if (randItem === "Tom") {
        mainUser.hp = mainUser.hp + 15;
        console.log("You found " + randItem + "! Your HP is increased by 15!")
    } else if (randItem === "Donna") {
        mainUser.hp = mainUser.hp + 10;
        console.log("You found " + randItem + "! Your HP is increased by 10!")
    } else if (randItem === "Jerry") {
        mainUser.hp = mainUser.hp + 3;
        console.log("You found " + randItem + "! Your HP is increased by 3!")
    }
    return mainUser.hp;
}  



// Play Game
while (isAlive && !beatTrump) {
function startGame() {
    var playGame = ask.question("Check your inventory[i] \nOR \n walk[w] to City Hall. \n Any other key to quit.", {limit: ["w", "i", "q"]});
    if (playGame === "i"){
        console.log("Inventory: \n Name: " + userName + "\n Weapons: " + mainUser.weapon + "\n HP: " + mainUser.hp)
    } else if (playGame === "w") {
        walk()
    } else {
        return isAlive = false;
    }
}



//Walking Function
function walk () {
    var walking = choseWalking();

    while (walking) {
        var steps = Math.floor(Math.random()*10);
        totalSteps = totalSteps + steps;
        console.log(totalSteps)
        if (totalSteps === 30) {
            console.log("You made it to City Hall and captured the Cheeto Bomb! \n\n You successfully defeated President Trump.");
            walking = false;
            beatTrump = true;
            return beatTrump
        }
        if (steps >= 5) {
            var fightOrRun = ask.question("OH, GREAT! \n\n Looks like we got some trouble on our hands. \n\n Someone always has to be in a woman's way! \n\n Do you want to fight this punk? [f] or run? [r]");
            if (fightOrRun === "f") {
                fight()
            } else {
                run()
            }
        } else if (steps <= 4){
            findItems()
            choseWalking()
        } 
    }
}



//Keep Walking
function choseWalking () {
    var askWalk = ask.keyIn("Keep walking to City Hall [w], check inventory [i], or quit the game [q].", {limit: ["w", "i", "q"]});
    if (askWalk === "w") {
        return true
    } else if (askWalk === "i") {
        console.log("Inventory: \n Name: " + userName + "\n Weapons: " + mainUser.weapon + "\n HP: " + mainUser.hp)
        return true
    } else if (askWalk === "q") {
        return isAlive = false
    }
}



// Fight Function
function fight() {
    var fightEnemy = getEnemy();
    var randWeapon = mainUser.weapon[Math.floor(Math.random()* mainUser.weapon.length)]
    mainUser.hp -= fightEnemy.attack
    fightEnemy.hp -= mainUser.attack
    if (fightEnemy.hp <= 0) {     
        mainUser.hp += Math.floor((Math.random()*10)+10);
        console.log("You sent " + fightEnemy.name + " back to the scum in which they belong, \n\n using your " + randWeapon + ". \n\n Plus, you gained some HP! \n\n You're new HP is " + mainUser.hp + ".")
    }else if (mainUser.hp <= 0) {
        console.log(fightEnemy + " got you. Evil wins again. Don't worry, 2020 is just around the corner.")
        isAlive = false;
    } else {
    console.log("Great job, " + userName + ". \n\n You used your " + randWeapon + " \n\n and your health is now " + mainUser.hp);
    console.log(fightEnemy.name + " even used their " + fightEnemy.weapon + " against you, \n\n and yet their health is at " + fightEnemy.hp);
    }
    choseWalking()
}



//Run Function 
function run() {
    var running = Math.floor(Math.random()*10);
    if (running >= 5) {
        enemyAttack()
    } else if (running <= 4) {
        walk()
        console.log("You have escaped from" + getEnemy + "! Keep walking to city hall.")
    }
}



//Attack Function
function enemyAttack () {
    var enemyAttacker = getEnemy();
    mainUser.hp -= enemyAttacker.attack
    console.log (enemyAttacker.name + " popped out of nowhere \n\n and attacked you with their " + enemyAttacker.weapon + ". \n]\n Your HP is now " + mainUser.hp + ".");
    if (mainUser.hp <= 0) {
        console.log(enemyAttacker + " got you. Evil wins again. Don't worry, 2020 is just around the corner.")
        isAlive = false;
    }
}


startGame()
}