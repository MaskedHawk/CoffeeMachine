const drinks = {
    TEA : "T",
    COFFEE : "C",
    CHOCOLATE : "H"
};

class Order {

    constructor(
        drinks = "",
        sugar = 0
    ) {
        this.drinks = drinks;
        this.sugar = sugar;
    }

    toInstruction() {
        if(this.sugar == 0) {
            return `${this.drinks}::`;
        }

        return `${this.drinks}:${this.sugar}:0`;
    }
}

module.exports = {drinks, Order};
