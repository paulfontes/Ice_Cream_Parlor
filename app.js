// 🏪💾 DATA (State) ----------------------------------------

    const iceCream = [
  { name: "Strawberry", price: 5, quantity: 0, type: "scoop" },
  { name: "Vanilla", price: 4, quantity: 0, type: "scoop" },
  { name: "Sprinkles", price: 2, quantity: 0, type: "topping" },
  { name: "Chocolate Chips", price: 3, quantity: 0, type: "topping" },
];



// 🧠⚡ BUSINESS LOGIC (functions that modify the state)------
function orderVanilla() {
    let vanilla = iceCream[1]
    vanilla.quantity += 1
    console.log("ordering Vanilla")
    console.log('🍦', iceCream[1])
}
function orderStrawberry() {
    let strawberry = iceCream[0]
    strawberry.quantity += 1
    console.log("ordering Strawberry")
    console.log('🍓', iceCream[0])
}
function orderSprinkles() {
    let sprinkles = iceCream[2]
    sprinkles.quantity += 1
    console.log("ordering Sprinkles")
    console.log('🧂', iceCream[2])
}
function orderChocolateChips() {
    let chocoChips = iceCream[3]
    chocoChips.quantity += 1
    console.log("ordering Chocolate Chips")
    console.log('🍫', iceCream[3])
}










// 🎨🖌️ VISUALIZERS (functions that draw data from the state to the page)