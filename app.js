// 🏪💾 DATA (State) ----------------------------------------

    let iceCream = [
  { name: "Strawberry", price: 5, quantity: 0, type: "scoop" },
  { name: "Vanilla", price: 4, quantity: 0, type: "scoop" },
  { name: "Sprinkles", price: 2.33, quantity: 0, type: "topping" },
  { name: "Chocolate Chips", price: 3.55, quantity: 0, type: "topping" },
];




// 🧠⚡ BUSINESS LOGIC (functions that modify the state)------
// function orderVanilla() {
//     let vanilla = iceCream[1]
//     vanilla.quantity += 1
//     console.log("ordering Vanilla")
//     console.log('🍦', iceCream[1])
// }
// function orderStrawberry() {
//     let strawberry = iceCream[0]
//     strawberry.quantity += 1
//     console.log("ordering Strawberry")
//     console.log('🍓', iceCream[0])
// }
// function orderSprinkles() {
//     let sprinkles = iceCream[2]
//     sprinkles.quantity += 1
//     console.log("ordering Sprinkles")
//     console.log('🧂', iceCream[2])
// }
// function orderChocolateChips() {
//     let chocoChips = iceCream[3]
//     chocoChips.quantity += 1
//     console.log("ordering Chocolate Chips")
//     console.log('🍫', iceCream[3])
// }

function buyFlavorUsingName(flavorName) {
    console.log('🛒🍨', flavorName)
    //    START     CONTINUE WHILE       INCREMENT BY
    for (let i = 0; i < iceCream.length; i += 1){

        let currentFlavor = iceCream[i]
        console.log('👁️', i, currentFlavor)

        if (currentFlavor.name == flavorName) {
            currentFlavor.quantity += 1;
            console.log('🏴 found it!', flavorName);
            
        }
        totalPrice()

        // flavorQuantityElement.innerHTML = `<h5>x${currentFlavor.quanity}</h5>`
    }
}



function totalPrice(){
    let totalSum = 0
    let total = 0
    for(let i = 0; i < iceCream.length; i += 1){
        let currentFlavor = iceCream[i]
        totalSum += currentFlavor.price * currentFlavor.quantity
        console.log('💵', 'item price', currentFlavor.price * currentFlavor.quantity, 'total cost', totalSum )
    }
    console.log(totalSum)
    flavorTotalElement.innerHTML = `<h4>TOTAL: $${(totalSum).toFixed(2)}</h4>` 


}



function sellFlavorUsingName(flavorName) {
    console.log('button works', flavorName)

    for(let i = 0; i < iceCream.length; i -= 1 ) {
        let removeFlavor = iceCream[i];
        removeFlavor.quantity -= 1;
        console.log(removeFlavor.quantity);
    }
}


// 🎨🖌️ VISUALIZERS (functions that draw data from the state to the page)

let flavorQuantityElement = document.getElementById('cart-quantity')
let flavorTotalElement = document.getElementById('cart-total')