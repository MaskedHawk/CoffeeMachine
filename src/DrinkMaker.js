const Many = require('extends-classes')
const EmailNotifier = require('../src/EmailNotifier.js');
const BeverageQuantityChecker = require('../src/BeverageQuantityChecker.js');

class DrinkMaker extends Many(EmailNotifier, BeverageQuantityChecker) {

    constructor() {
        super();

        this.orders = {};
        this.total = 0;
    }

    addOrder(order) {
        if (this._isEmpty(order.label)) {

            this._notifyMissingDrink(order.drinks.label);
            console.log(`M:${order.drinks.label} shortage detect, email sent.`);

            return;
        }

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

    _isEmpty(drink) {
        return false;
    }

    _notifyMissingDrink(drink) {
        // all email stuff here
        return;
    }
}

module.exports = DrinkMaker;