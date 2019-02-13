var ask = require("readline-sync");

//Create User
function User(name, hp) {
    this.name = name;
    this.hp = hp;
    this.weapon = ["whipped cream spray can to the eyes", "power binder", "best friend Anne", "husband Ben"];
    this.attack = Math.floor(Math.random()*11);
}

//Create Enemy
function Enemy(name, hp, weapon) {
    this.name = name;
    this.hp = hp;
    this.weapon = weapon;
    this.attack = Math.floor(Math.random()*11);
}

var jamm = new Enemy("Councilman Jamm", 30, "dental pliers");
var joan = new Enemy("Joan Callamezzo", 20, "broken wine glass");
var tammy = new Enemy("Tammy Two", 25, "cleavage");
var mikeP = new Enemy("Mike Pence", 40, "discrimination");
var brettK = new Enemy("Brett Kavanaugh", 40, "kisses and hugs");



// //Random Enemies Function
function getEnemy() {
    var enemies = [jamm, joan, tammy, mikeP, brettK];
    console.log(Math.floor(Math.random() * enemies.length))
    var randEnemy = enemies[Math.floor(Math.random() * enemies.length)]
    return randEnemy;
}

function determineEnemy() {
    return Math.random() < .33
}
function getsAway(){
    return Math.random() < .5
}

var name = ask.question('What is your name?');
console.log("Hello " + name + ", I'm Leslie Knope. \n\n Thank you for coming to the best city in the world, \n\n PAWNEE(!!!), \n\n Our mission is to stop the Cheeto Bomb. \n\n President Trump plans to drop the Cheeto Bomb on Pawnee tomorrow morning. \n\n If we allow that to happen everyone in town will turn orange! \n\n Lets make our way to City Hall to stop this catastrophe!");

var mainUser = new User(name, 100);

while (true) {
    var choice = ask.keyInSelect(['break', 'walk', 'check inventory'], 'What would you like to do?   ');
    if (choice === 1) {
        console.log('You begin walking...');
        var isEnemy = determineEnemy();
        if (isEnemy) {
            var enemy = getEnemy();
            var chooseToFight = ask.keyInYN(enemy.name + '  has appeared! Do you choose to fight?');

            if (chooseToFight) {
                // while (enemy.hp > 0 && mainUser.hp > 0) {
                var randWeapon = mainUser.weapon[Math.floor(Math.random() * mainUser.weapon.length)]
                    enemy.hp -= mainUser.attack;
                    mainUser.hp -= enemy.attack;
                    if (enemy.hp <=0) {
                        mainUser.hp += Math.floor((Math.random() * 10) + 10);
                    } else if (mainUser.hp <= 0) {
                        console.log(enemy.name + " got you. Evil wins again. Don't worry, 2020 is just around the corner.")
                        isAlive = false;
                        return false;
                    } else {
                        console.log("Great job, " + name + ". \n\n You used your " + randWeapon + " \n\n and your health is now " + mainUser.hp);
                        console.log(enemy.name + " even used their " + enemy.weapon + " against you, \n\n and yet their health is at " + enemy.hp);
                }
            }
                break;
            } else {
                var gotAway = getsAway();
                console.log(gotAway)
                if(gotAway){
                    mainUser.hp += 10;
                    console.log(enemy.name + " got you. Evil wins again. Don't worry, 2020 is just around the corner.");
                } else {
                    mainUser.hp -= 10;
                    console.log(enemy.name + " popped out of nowhere \n\n and attacked you with their " + enemy.weapon + " \n]\n Your HP is now " + mainUser.hp + ".");
                }
            }
    
    } else if (choice === 2) {
        console.log(mainUser);
    } else if (choice === -1) {
        break;
    }
}

if (mainUser.hp > 0) {
    console.log('You won!')
} else
    console.log('You lost!')

