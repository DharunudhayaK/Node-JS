const funcCall = require("./add");
const superHero = require("./super-hero");

console.log(funcCall.add(5,5))
console.log(funcCall.sub(10, 1))

// calling the super-hero componenet

console.log(superHero.getName())
superHero.setName("Udhaya")
console.log(superHero.getName())
