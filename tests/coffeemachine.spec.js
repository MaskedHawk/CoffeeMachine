const {drinks, Order} = require('../src/Order.js');

describe('Turns customers simple orders into drink maker instructions', () => {
    it('Should return T:1:0 when order is 1 tea with 1 sugar and enough money', () => {
        const command = new Order({
                drinks: drinks.TEA,
                sugar: 1,
                money: 0.4
        }).toInstruction();

      expect(command).toEqual('T:1:0');
    });

    it('Should return H:: when order is 1 chocolate without sugar and enough money', () => {
        const command = new Order({
            drinks: drinks.CHOCOLATE,
            money: 0.5
        }).toInstruction();

        expect(command).toEqual('H::');
    });

    it('Should return C:2: when order is 1 coffee with two sugar', () => {
        const command = new Order({
            drinks: drinks.COFFEE,
            sugar: 2,
            money: 0.6
        }).toInstruction();

        expect(command).toEqual('C:2:0');
    });

    it('Should return money missing when order is 1 coffee and not enough money', () => {
        const command = new Order({
            drinks: drinks.COFFEE,
            sugar: 2,
            money: 0.1
        }).toInstruction();

        expect(command).toEqual('M:0.5 missing');
    });

    it('Should return drinks even if there is exceed money', () => {
        const command = new Order({
            drinks: drinks.COFFEE,
            sugar: 2,
            money: 0.1
        }).toInstruction();

        expect(command).toEqual('M:0.5 missing');
    });
});

describe('Turns customers extra orders into drink maker instructions', () => {
    it('Should return Th:1:0 when order is 1 hot tea with 1 sugar and enough money', () => {
        const command = new Order({
            drinks: drinks.TEA,
            sugar: 1,
            money: 0.4,
            hot: true
        }).toInstruction();

        expect(command).toEqual('Th:1:0');
    });

    it('Should return Hh:1:0 when order is 1 hot chocolate with 1 sugar and enough money', () => {
        const command = new Order({
            drinks: drinks.CHOCOLATE,
            sugar: 1,
            money: 0.5,
            hot: true
        }).toInstruction();

        expect(command).toEqual('Hh:1:0');
    });

    it('Should return Ch:1:0 when order is 1 hot coffee with 1 sugar and enough money', () => {
        const command = new Order({
            drinks: drinks.COFFEE,
            sugar: 1,
            money: 0.6,
            hot: true
        }).toInstruction();

        expect(command).toEqual('Ch:1:0');
    });
});