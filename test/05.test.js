const prima = require("../src/05")

test('Test sukses pada 05.js 3 = true',() => {
    expect(prima(3)).toBe(true)
})
test('Test sukses pada 05.js 4 = false',() => {
    expect(prima(4)).toBe(false)
})
