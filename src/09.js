function kata(x) {
    let b = String(x)
    let a = b.split('').reverse().join('');
    if (b !== a){
        return false
    } else {
        return true
    }
} 


module.exports = kata;

