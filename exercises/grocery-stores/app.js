var shopper = {
    storeName: "Trader Joes",
    spendingMoney: 100,
    items: ["spaghetti", "meatballs", "tomato sauce", "parmesan"],
    checkedAllItems: true,
    speak: function () {
        console.log("You have " + this.items[0] + ", " + this.items[1] + ", " + this.items[2] + ", " + this.items[3])
    }
}

console.log(shopper.storeName)
console.log(shopper.items[3])
shopper.speak()
