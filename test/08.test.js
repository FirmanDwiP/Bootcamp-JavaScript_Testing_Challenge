
const miror = require("../src/08")

test('Test sukses pada 08.js [1, 2, 3] = [1, 2, 3, 3, 2, 1]',() => {
    expect(miror([1, 2, 3])).toStrictEqual([1, 2, 3, 3, 2, 1])
})
