nameZero = "Anna"
nameOne = "Chad"
nameTwo = "Jenny"
nameThree = "Carl"
nameFour = "Helene"
nameFive = "Tyler"
nameSix = "Mary"
nameSeven = "Andrew"
nameEight = "Mary"
nameNine = "Michael"
nameTen = "Linda"
nameEleven = "William"
nametTwelve = "Karen"
nameThirteen = "Charles"

let names = [nameZero, nameOne, nameTwo, nameThree, nameFour, nameFive, nameSix, nameSeven, nameEight, nameNine, nameTen, nameEleven, nametTwelve, nameThirteen]
class SerialKiller {
    constructor (name, hp) {
        this.name=name
        this.hp=hp
    }
}

class Archetypes {
    constructor (name, chanceOfDying, chanceToHurt, chanceToHurtByDying) {
        this.name=name
        this.chanceOfDying=chanceOfDying
        this.chanceToHurtByDying=chanceToHurtByDying
        this.chanceToHurt=chanceToHurt
    }
}

let Jason = new SerialKiller ("Jason", 100)

console.log(Jason)

let Nerd = new Archetypes ("Le/La Nerd", 0.4, 0.4, 0.2)
let Athlete = new Archetypes ("L'Athlète", 0.2, 0.2, 0.6)
let Coward = new Archetypes ("Le/La Trouillard(e)", 0.5, 0.2, 0.3)
let Brave = new Archetypes ("Le/La courageux(se)", 0.1, 0.3, 0.6)
let Sceptic = new Archetypes ("Le/La Sceptique", 0.3, 0.3, 0.4)
let Drunk = new Archetypes ("Le/La Bourré(e)", 0.8, 0.1, 0.1)
let Fat = new Archetypes ("Le/La Gros(se)", 0.6, 0.2, 0.2)
let Lover = new Archetypes ("L'Amoureux/se", 0.4, 0.3, 0.3)

let archetypesArray = [Nerd, Athlete, Coward, Brave, Sceptic, Drunk, Fat, Lover]

class Survivors {
    constructor (name, archetype){
        this.name=name
        this.archetype=archetype
    }
}

let survivor1 = new Survivors (names[Math.floor(Math.random() * names.length)], archetypesArray[Math.floor(Math.random() * archetypesArray.length)])
let survivor2 = new Survivors (names[Math.floor(Math.random() * names.length)], archetypesArray[Math.floor(Math.random() * archetypesArray.length)])
let survivor3 = new Survivors (names[Math.floor(Math.random() * names.length)], archetypesArray[Math.floor(Math.random() * archetypesArray.length)])
let survivor4 = new Survivors (names[Math.floor(Math.random() * names.length)], archetypesArray[Math.floor(Math.random() * archetypesArray.length)])
let survivor5 = new Survivors (names[Math.floor(Math.random() * names.length)], archetypesArray[Math.floor(Math.random() * archetypesArray.length)])

console.log(survivor1.name, survivor1.archetype.name)
console.log(survivor2.name, survivor2.archetype.name)
console.log(survivor3.name, survivor3.archetype.name)
console.log(survivor4.name, survivor4.archetype.name)
console.log(survivor5.name, survivor5.archetype.name)

console.log("Kill... Kill... Kill... Kill... Ma... Ma... Ma... Ma...")

let living = [survivor1, survivor2, survivor3, survivor4, survivor5]
function attack (Jason, living) {
    let death = []
    while (Jason.hp > 0 && living.length > 0) {
        let victim = Math.floor(Math.random() * living.length)
        console.log(living[victim].name, living[victim].archetype.name, "se fait attaquer par", Jason.name)
        let randomNumber = Math.random()
        if (randomNumber <= living[victim].archetype.chanceOfDying) {
            death.push(victim)
            console.log(living[victim].name, living[victim].archetype.name, "s'est fait(e) tuer par", Jason.name)
            living.splice(victim, 1)
        }
        else {
            if (randomNumber <= living[victim].archetype.chanceToHurtByDying+living[victim].chanceOfDying){
                console.log(living[victim].name, living[victim].archetype.name, "s'est fait(e) tuer par", Jason.name, "mais a réussi à le blesser")
                console.log("Il reste", Jason.hp, "HP à", Jason.name)
                Jason.hp -= 15
                death.push(victim)
                living.splice(victim,1) 
            }
            else {
                Jason.hp -= 10
                console.log(living[victim].name, living[victim].archetype.name, "a réussi à blesser", Jason.name, "et à lui échapper")
                console.log("Il reste", Jason.hp, "HP à", Jason.name)
            }
        }
        if (Jason.hp <= 0) {
            console.log(Jason.name, "est mort ! Les survivants s'en sont sortis !", death.length, "sont morts")
            console.log("RIP à", death)
            break
        }
        if (living.length == 0) {
            console.log("Il reste", Jason.hp, "HP à", Jason.name, ". Tous les survivants sont morts...")
            break
        }
    }
}

attack(Jason, living)