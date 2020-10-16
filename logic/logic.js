let number = 0;

let generator = {
    amount: 0,
    cost: 10,
    value: 1,
    multiplyer: 1,
    buy: function(){

        this.amount ++;
        this.cost = Math.round(((this.amount + 1) ** 1.25) * 10)
    }
    
}

let numberCounter = document.getElementById("number-counter")

let generatorButton = document.getElementById("generator-button")

let generatorAmount = document.getElementById("generator-amount")


generatorButton.addEventListener("click", function(){
    if(number >= generator.cost){
        number -= generator.cost
        generator.buy()

        numberCounter.textContent = "number:" + number.toString()
        generatorAmount.textContent = "generators:" + generator.amount.toString()
        generatorButton.textContent = generator.cost.toString()
    }
})

setInterval(function(){
    number += 1 + (generator.amount * generator.value * generator.multiplyer)
    console.log(number)
    numberCounter.textContent = "number:" + number.toString()
}, 1000)