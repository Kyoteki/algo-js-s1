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
        this.chanceToHurt=chanceToHurt
        this.chanceToHurtByDying=chanceToHurtByDying
    }
}

let Jason = new SerialKiller ("Jason", 100)

console.log(Jason)

let Nerd = new Archetypes ("Le/La Nerd", 0.7, 0.5, 0.6)
let Athlete = new Archetypes ("L'Athlète", 0.3, 0.8, 0.7)
let Coward = new Archetypes ("Le/La Trouillard(e)", 0.8, 0.1, 0.2)
let Brave = new Archetypes ("Le/La courageux(se)", 0.4, 0.9, 0.7)
let Sceptic = new Archetypes ("Le/La Sceptique", 0.1, 0.5, 0.3)
let Drunk = new Archetypes ("Le/La Bourré(e)", 0.9, 0.1, 0.1)
let Fat = new Archetypes ("Le/La Gros(se)", 0.5, 0.4, 0.2)
let Lover = new Archetypes ("L'Amoureux/se", 0.5, 0.5, 0.1)

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

let living = [survivor1, survivor2, survivor3, survivor4, survivor5]


console.log(survivor1.name, survivor1.archetype.name)
console.log(survivor2.name, survivor2.archetype.name)
console.log(survivor3.name, survivor3.archetype.name)
console.log(survivor4.name, survivor4.archetype.name)
console.log(survivor5.name, survivor5.archetype.name)



function attack (Jason, living) {
    let death = []
    while (Jason.hp > 0 && living.length > 0) {
        let victim = Math.floor(Math.random() * living.length)
        let randomNumber1 = Math.random()
        if (randomNumber1 <= victim.chanceOfDying) {
            death.push(living[victim])
            living.splice(victim, 1)
            console.log(victim.name, "s'est fait(e) tuer par", Jason.name)
            
        }
        else {
            let randomNumber2 = Math.random()
            if (randomNumber2 <= victim.chanceToHurt){
                Jason.healthPoints -= 10
                console.log(victim.name, "a réussi à blesser", Jason.name)
                console.log("Il reste", Jason.healthPoints, "à", Jason.name)
                
            }
            else {
                let randomNumber3 = Math.random()
                if (randomNumber3 <= victim.chanceToHurtByDying) {
                    Jason.healthPoints -= 15
                    death.push(living[victim])
                    living.splice(victim, 1)
                    
                }
            }
            
        }
        
    }
}

attack(Jason, living)