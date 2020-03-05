const ulang = require("../src/07")

test('Test sukses pada 07.js Hello World = HHeelllloo  WWoorrlldd!! masih dengan spasi double',() => {
    expect(ulang("Hello World!")).toEqual("HHeelllloo  WWoorrlldd!!")
})

