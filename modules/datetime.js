module.exports = {
  padZeros: function(number){
    if (number < 10){
      return "0" + number;
    } else {
      return number.toString();
    }
  }
}
