class Pokemon {
    constructor (name, hp, attack, defense, luck) {
        this.name
        this.hp
        this.attack
        this.defense
        this.luck
 }
}

let Shedinja = new Pokemon("Shedinja", 1, 90, 45, 90)
let Greninja = new Pokemon("Greninja", 72, 95, 67, 50)

console.log(Pokemon.Shedinja)
console.log(Pokemon.Greninja)

let Player = Shedinja
let Opponent = Greninja

let ShedinjaHit = Opponent.attack - Player.defense
let GreninjaHit = Player.attack - Opponent.defense

