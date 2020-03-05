function repeat(str) {
    let arr = str.split('');
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
      arr[i] += arr[i]
    }
    return arr.join('')
  }
module.exports = repeat;