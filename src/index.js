import fruits from './foods.js'
import  { choice, remove } from './helpers.js'

let randomFruit = choice(fruits);

console.log(`I'd like one ${randomFruit} please.`)
console.log(`Here you go: ${randomFruit}`)
console.log("Delicious! May I have another?")

const remainingFruits = remove(randomFruit, fruits)

console.log(`I'm sorry, we're all out. We have ${remainingFruits.length} left.`)