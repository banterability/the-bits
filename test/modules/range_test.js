var assert = require('assertive');
var range = require('../../modules/range');

describe('range', function(){
  it('returns an array of integers between two values (inclusive)', function(){
    assert.deepEqual([-3, -2, -1, 0, 1, 2, 3], range(-3, 3))
  });
});
