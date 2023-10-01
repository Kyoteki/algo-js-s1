musicZero = "Anissa - Wejdene"
musicOne = "Monster - Skillet"
musicTwo = "Don't Stop Me Now - Queen"
musicThree = "Watch The World Burn - Falling In Reverse"
musicFour = "Kick Back - Chainsaw Man"


let names = [musicZero ,musicOne, musicTwo, musicThree, musicFour]


class Character {
    constructor (name, mentalHealth) {
        this.name=name
        this.mentalHealth=mentalHealth
    }
    travel (totalTaxi = 1, totalRedLights = 0) {
        while (totalRedLights < 30 && this.mentalHealth > 0) {
            let randomElement = names[Math.floor(Math.random() * names.length)]
            totalRedLights++
            console.log(totalRedLights, "feux passés,", totalTaxi, "taxis pris,", this.mentalHealth, "points de santé mentale restante.")
            console.log(randomElement, "s'est lancée")
            if (randomElement == musicZero){
                totalTaxi++
                this.mentalHealth--
                console.log(this.name, "stresse trop et sort du taxi.")
            }
            if (totalRedLights == 30) {
                console.log(this.name, "est arrivé à destination sans devenir fou. La chance est avec lui !")
                break
            }
            if (this.mentalHealth == 0) {
                console.log("La santé mentale de", this.name, "est tombée à",this.mentalHealth)
                console.log(this.name, "fais une crise de panique, convulse et meurt. Il n'arrivera jamais à destination. Le chauffeur fini en zonzon.")        
                break
            }

        }
            
    }
}
let John = new Character ("John", 10)

John.travel()