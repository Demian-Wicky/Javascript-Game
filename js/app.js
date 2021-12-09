const player1 = new Fighter("Grave")
const player2 = new Paladin("Ulder")
console.log(player1);
player1.takeDamage(2)
console.log(player1);
console.log(player2);
player1.dealDamage(player2)
console.log(player2);