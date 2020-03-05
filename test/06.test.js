const ulang = require("../src/06")

test('Test sukses pada 06.js Makan! = Makan! Makan! Makan! ',() => {
    expect(ulang("Makan! ")).toEqual("Makan! Makan! Makan! ")
})

