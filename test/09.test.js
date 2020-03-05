const symmetrical = require("../src/09")

test('Test sukses pada 09.js malam = true',() => {
    expect(symmetrical("malam")).toEqual(true)
})
test('Test sukses pada 09.js taat = true',() => {
    expect(symmetrical("taat")).toEqual(true)
})
test('Test sukses pada 09.js tidur = false',() => {
    expect(symmetrical("tidur")).toEqual(false)
})
test('Test sukses pada 09.js 1234 = false',() => {
    expect(symmetrical(1234)).toEqual(false)
})
test('Test sukses pada 09.js 108801 = true',() => {
    expect(symmetrical(108801)).toEqual(true)
})
test('Test sukses pada 09.js 8001008 = true',() => {
    expect(symmetrical(8001008)).toEqual(true)
})
