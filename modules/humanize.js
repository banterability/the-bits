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
  pluralize: function(count){
    return count === 1 ? false : true;
  }
}
