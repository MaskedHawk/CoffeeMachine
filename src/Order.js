const drinks = {
    TEA : {
        code: 'T',
        price: 0.4
    },
    COFFEE : {
        code: 'C',
        price: 0.6
    },
    CHOCOLATE : {
        code : 'H',
        price: 0.5
    },
    ORANGE : {
        code: 'O',
        price: 0.6
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
        money = 0,
        hot = false
    }){
        this.drinks = drinks;
        this.sugar = sugar;
        this.money = money;
        this.hot = hot;
    };

    _isEnoughMoney(){
        return (this.money >= this.drinks.price);
    }

    toInstruction(){

        if (!this._isEnoughMoney()) {
            let missingMoney = this.drinks.price - this.money;

            return `M:${missingMoney} missing`
        }

        if (this.drinks === drinks.ORANGE) return 'O::'

        let temperature = this.hot ? 'h' : '';
        let finalDrinks = this.drinks.code + temperature;

        if (this.sugar == 0) {
            return `${finalDrinks}::`;
        }

        return `${finalDrinks}:${this.sugar}:0`;
    };
}

module.exports = {drinks, Order};
