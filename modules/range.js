module.exports = function(from, to){
  var range = [];

  if (from < to){
    for (var current = from; current <= to; current++) {
      range.push(current);
    }
  } else {
    for (var current = from; current >= to; current--) {
      range.push(current);
    }
  }

  return range;
}
