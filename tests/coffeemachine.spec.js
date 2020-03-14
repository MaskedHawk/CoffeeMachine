const {drinks, Order} = require('../src/Order.js');

describe('Turns customers orders into drink maker instructions', () => {
    it('Should return T:1:0 when order is 1 tea with 1 sugar', () => {
        const command = new Order(
            drinks.TEA,
            1
        ).toInstruction();

      expect(command).toEqual('T:1:0');
    });

    it('Should return H:: when order is 1 chocolate without sugar', () => {
        const command = new Order(
            drinks.CHOCOLATE
        ).toInstruction();

        expect(command).toEqual('H::');
    });

    it('Should return C:2: when order is 1 coffee with two sugar', () => {
        const command = new Order(
            drinks.COFFEE,
            2
        ).toInstruction();

        expect(command).toEqual('C:2:0');
    });
});

