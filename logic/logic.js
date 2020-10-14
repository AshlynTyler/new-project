let number = 0;

let generator = {
    amount: 0,
    cost: 10,
    value: 1,
    multiplyer: 1,
    buy: function(){

        this.amount ++;
        this.cost = (this.amount ** 1.25) * 10
    }
    
}

