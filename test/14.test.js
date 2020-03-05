const isogram = require("../src/14")

test('Test sukses pada 14.js gelas = true',() => {
    expect(isogram("gelas")).toEqual(true)
})
test('Test sukses pada 14.js makan = false',() => {
    expect(isogram("makan")).toEqual(false)
})
