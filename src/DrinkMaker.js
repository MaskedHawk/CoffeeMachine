class DrinkMaker {

    constructor(){
        this.orders = {};
        this.total = 0;
    };

    addOrder(order) {
        if (this.orders[order.drinks.label] === undefined) {
            this.orders[order.drinks.label] = 0;
        }

        this.orders[order.drinks.label] += 1;
        this.total += order.money;
    }

    getReport() {
        let ret = '';

        for (let order in this.orders){
            ret += `${order} amount: ${this.orders[order]}\n`;
        }

        ret += `Total amount of money ${this.total.toFixed(1)}`;

        return ret;
    }
}

module.exports = DrinkMaker;