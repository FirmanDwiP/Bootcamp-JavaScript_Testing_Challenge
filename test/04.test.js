const leap = require("../src/04")

test('Test sukses pada 04.js 2020 = true',() => {
    expect(leap(2020)).toBe(true)
})
test('Test sukses pada 04.js 2010 = false',() => {
    expect(leap(2010)).toBe(false)
})

