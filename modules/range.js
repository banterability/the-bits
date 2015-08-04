// range
//
// Returns an array of integers between two values (inclusive)
//

module.exports = function(from, to){
  var range = [];
  for (var current = from; current <= to; current++) {
    range.push(current);
  }
  return range;
}
