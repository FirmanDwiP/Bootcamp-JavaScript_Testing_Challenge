const roman = require("../src/15")

test('Test sukses pada 15.js MXVIII = 2018',() => {
    expect(roman('MMXVIII')).toEqual(2018)
})
