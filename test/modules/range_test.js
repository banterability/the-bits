var assert = require('assertive');
var range = require('../../modules/range');

describe('range', function(){
  it('returns an array of integers between two values (inclusive)', function(){
    assert.deepEqual([1, 2, 3, 4], range(1, 4));
  });

  it('handles transitions between positive & negative values', function(){
    assert.deepEqual([-3, -2, -1, 0, 1, 2, 3], range(-3, 3));
  });

  it('works in both directions', function(){
    assert.deepEqual([4, 3, 2, 1], range(4, 1));
  });
});
