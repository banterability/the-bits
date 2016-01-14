var assert = require('assertive');
var extend = require('../../bits').extend;

describe('extend', function(){
  it('extends the destination object with the attributes of the source object', function(){
    var destination = {a: 1};
    var source = {b: 2}
    var expected = {a: 1, b: 2};
    assert.deepEqual(expected, extend(destination, source));
  });

  it('overwrites existing properties in the destination object', function(){
    var destination = {a: 1, b: 2};
    var source = {b: 5}
    var expected = {a: 1, b: 5};
    assert.deepEqual(expected, extend(destination, source));
  });
});
