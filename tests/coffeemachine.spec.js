const {drinks, Order} = require('../src/Order.js');
const DrinkMaker = require('../src/DrinkMaker');

describe('Turns customers simple orders into drink maker instructions', () => {

    it ('Should return T:1:0 when order is 1 tea with 1 sugar and enough money', () => {
        const command = new Order({
                drinks: drinks.TEA,
                sugar: 1,
                money: 0.4
        }).toInstruction();

      expect(command).toEqual('T:1:0');
    });

    it ('Should return H:: when order is 1 chocolate without sugar and enough money', () => {
        const command = new Order({
            drinks: drinks.CHOCOLATE,
            money: 0.5
        }).toInstruction();

        expect(command).toEqual('H::');
    });

    it ('Should return C:2: when order is 1 coffee with two sugar', () => {
        const command = new Order({
            drinks: drinks.COFFEE,
            sugar: 2,
            money: 0.6
        }).toInstruction();

        expect(command).toEqual('C:2:0');
    });

    it ('Should return money missing when order is 1 coffee and not enough money', () => {
        const command = new Order({
            drinks: drinks.COFFEE,
            sugar: 2,
            money: 0.1
        }).toInstruction();

        expect(command).toEqual('M:0.5 missing');
    });

    it ('Should return drinks even if there is exceed money', () => {
        const command = new Order({
            drinks: drinks.COFFEE,
            sugar: 2,
            money: 0.1
        }).toInstruction();

        expect(command).toEqual('M:0.5 missing');
    });
});

describe('Turns customers extra orders into drink maker instructions', () => {

    it ('Should return Th:1:0 when order is 1 hot tea with 1 sugar and enough money', () => {
        const command = new Order({
            drinks: drinks.TEA,
            sugar: 1,
            money: 0.4,
            hot: true
        }).toInstruction();

        expect(command).toEqual('Th:1:0');
    });

    it ('Should return Hh:1:0 when order is 1 hot chocolate with 1 sugar and enough money', () => {
        const command = new Order({
            drinks: drinks.CHOCOLATE,
            sugar: 1,
            money: 0.5,
            hot: true
        }).toInstruction();

        expect(command).toEqual('Hh:1:0');
    });

    it ('Should return Ch:1:0 when order is 1 hot coffee with 1 sugar and enough money', () => {
        const command = new Order({
            drinks: drinks.COFFEE,
            sugar: 1,
            money: 0.6,
            hot: true
        }).toInstruction();

        expect(command).toEqual('Ch:1:0');
    });
});

describe('Handle reports of coffee machine orders', () => {

    it ('Should display a list of all orders', () => {
        let dm = new DrinkMaker();

        dm.addOrder(new Order({
            drinks: drinks.TEA,
            money: 0.4
        }));


        dm.addOrder(new Order({
            drinks: drinks.TEA,
            money: 0.4
        }));

        dm.addOrder(new Order({
            drinks: drinks.COFFEE,
            money: 0.4
        }));

        const report = dm.getReport();

        expect(report).toContain('Tea amount: 2');
        expect(report).toContain('Total amount of money 1.2');
    });

    it ('Shall display an empty report if no command is given', () => {
        let dm = new DrinkMaker();

        const report = dm.getReport();

        expect(report).toContain('Total amount of money 0.0');
    });
});

describe('Handle quantity and email notifier of coffee machine', () => {
    it ('Should notify when a drink is missing', () => {
        let dm = new DrinkMaker();

        const mockIsempty = jest.fn().mockReturnValue(true);
        const mockNotifyMissingDrink = jest.fn();
        console.log = jest.fn();

        dm._isEmpty = mockIsempty;
        dm._notifyMissingDrink = mockNotifyMissingDrink;

        dm.addOrder(new Order({
            drinks: drinks.TEA,
            money: 0.4
        }));

        dm.addOrder(new Order({
            drinks: drinks.COFFEE,
            money: 0.4
        }));

        expect(mockNotifyMissingDrink).toHaveBeenCalledTimes(2);
    });

    test ('No email should be sent if there is stock', () => {
        let dm = new DrinkMaker();

        const mockIsempty = jest.fn().mockReturnValue(false);
        const mockNotifyMissingDrink = jest.fn();
        console.log = jest.fn();

        dm._isEmpty = mockIsempty;

        dm.addOrder(new Order({
            drinks: drinks.COFFEE,
            money: 0.4
        }));

        expect(mockNotifyMissingDrink).not.toHaveBeenCalled()
    });

    it ('Should indicate to console that an email has been sent', () => {
        let dm = new DrinkMaker();

        const mockIsempty = jest.fn().mockReturnValue(true);
        console.log = jest.fn();

        dm._isEmpty = mockIsempty;

        dm.addOrder(new Order({
            drinks: drinks.COFFEE,
            money: 0.4
        }));

        expect(console.log).toHaveBeenCalledWith("M:Coffee shortage detect, email sent.");
    });
});