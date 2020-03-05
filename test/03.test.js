const mb = require("../src/03")

test('Test sukses pada 03.js convert 3mb',() => {
    expect(mb(3)).toBe(3 * 1024)
})