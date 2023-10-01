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

let Pikachu = new Pokemon("Pikachu", 35, 55, 40, 0.5)
let Evoli = new Pokemon("Evoli", 55, 55, 50, 0.5)

console.log(Pikachu.name, Pikachu.hp, "HP")
console.log(Evoli.name, Evoli.hp, "HP")

while (Pikachu.hp >= 1 || Evoli.hp >=1) {
    if (Pikachu.hp >0) {
        console.log(Evoli.name, "attack")
        Evoli.AttackPokemon(Pikachu)
        console.log(Pikachu.name, Pikachu.hp, "hp")
    }
    else {
        console.log(Pikachu.name, "is KO.", Evoli.name, "win")
        break
    }
    if (Evoli.hp >0){
        console.log(Pikachu.name, "attack")
        Pikachu.AttackPokemon(Evoli)
        console.log(Evoli.name, Evoli.hp, "hp")
    }
    else {
        console.log(Evoli.name, "is KO.", Pikachu.name, "win")
        break
    }
}