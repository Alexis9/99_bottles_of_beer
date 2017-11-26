const main = require("../main/index");

const printInfo = require("../result");

describe("print boole", () => {
    it('when there are ninety-nine bottles', () => {
        var number = 99;

        expect(main(number)).toEqual(printInfo());
    });

});