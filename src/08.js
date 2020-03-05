function mirror(x) {
    let a = [...x]
    let b = x.reverse()
    return a.concat(b)
} 

module.exports = mirror;
// const a = [1, 2, 3]
// const b = [...a]
// const c = b.reverse()
// console.log(a + ',' + c)