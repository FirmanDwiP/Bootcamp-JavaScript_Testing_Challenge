
const prima = function primeNumber(x) {
    if (x < 2) return false

    for (let y = 2; y < x; y++) {
        if (x % y === 0) return false
    }

    return true
}

module.exports = prima;