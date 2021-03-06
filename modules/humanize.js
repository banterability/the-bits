module.exports = {
  commaize: function(num, options){
    // https://github.com/component/humanize-number
    options = options || {};
    var delimiter = options.delimiter || ',';
    var separator = options.separator || '.';
    num = num.toString().split('.');
    num[0] = num[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + delimiter);
    return num.join(separator);
  },

  isPlural: function(count){
    return count === 1 ? false : true;
  },

  padZeros: function(number){
    if (number < 10){
      return "0" + number;
    } else {
      return number.toString();
    }
  }
}
