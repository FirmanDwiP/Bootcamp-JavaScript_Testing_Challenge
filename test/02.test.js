const kali = require("../src/02")

test('Test sukses pada 02.js 3,10 = 30',() => {
    expect(kali(3, 10)).toBe(30)
})