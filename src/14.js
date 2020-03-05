let Isogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);
  
  module.exports = Isogram;