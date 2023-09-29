class Pokemon {
    constructor (name, hp, attack, defense, luck) {
        this.name=name
        this.hp=hp
        this.attack=attack
        this.defense=defense
        this.luck=luck
    }
    AttackPokemon (Opponent, damages = this.attack - Opponent.defense) {
        if (damages <= 0){
            damages=1
            Opponent.hp = Opponent.hp - damages
        }
    }
}
let Garchomp = new Pokemon("Garchomp", 108, 130, 95, 50)
let Greninja = new Pokemon("Greninja", 72, 95, 67, 70)

console.log(Garchomp.name, Garchomp.hp, "HP")
console.log(Greninja.name, Greninja.hp, "HP")

while (Garchomp.hp >= 1 || Greninja.hp >=1) {
    if (Garchomp.hp >0) {
        console.log(Greninja.name, "attack")
        Greninja.AttackPokemon(Garchomp)
        console.log(Garchomp.name, Garchomp.hp, "hp")
    }
    else {
        console.log(Garchomp.name, "is KO.", Greninja.name, "win")
        break
    }
    if (Greninja.hp >0){
        console.log(Garchomp.name, "attack")
        Garchomp.AttackPokemon(Greninja)
        console.log(Greninja.name, Greninja.hp, "hp")
    }
    else {
        console.log(Greninja.name, "is KO.", Garchomp.name, "win")
        break
    }
}