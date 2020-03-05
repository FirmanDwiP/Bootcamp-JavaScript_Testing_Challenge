function romankenumb(kata) {
    let angka = katakenum(kata.charAt(0));
    let sebelumnya, sekarang;
    
    for(let i = 1; i < kata.length; i++){
    sekarang = katakenum(kata.charAt(i));
    sebelumnya = katakenum(kata.charAt(i-1));
    if(sekarang <= sebelumnya){
        angka += sekarang;
    } else {
        angka = angka - sebelumnya*2 + sekarang;
    }
    }
    
    return angka;
    }
    
    function katakenum(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
    }

    module.exports = romankenumb;