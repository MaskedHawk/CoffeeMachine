const drinks = {
    TEA : {
        code: "T",
        price: 0.4
    },
    COFFEE : {
        code: "C",
        price: 0.6
    },
    CHOCOLATE : {
        code :"H",
        price: 0.5
    }
};

class Order {

    /**
     * Generate a new order from client selection
     *
     * @param drinks - desired client drinks
     * @param sugar - desired amoount of sugar
     * @param money - provided money
     */
    constructor({
        drinks = "",
        sugar = 0,
        money = 0
    }){
        this.drinks = drinks;
        this.sugar = sugar;
        this.money = money;
    };

    _isEnoughMoney(){
        return (this.money >= this.drinks.price);
    }

    toInstruction(){

        if (!this._isEnoughMoney()) {
            let missingMoney = this.drinks.price - this.money;

            return `M:${missingMoney} missing`
        }

        if (this.sugar == 0) {
            return `${this.drinks.code}::`;
        }

        return `${this.drinks.code}:${this.sugar}:0`;
    };
}

module.exports = {drinks, Order};
