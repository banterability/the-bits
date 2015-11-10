var assert = require('assertive');
var datetime = require('../../modules/datetime');

describe('datetime', function(){
  describe('#padZeros', function(){
    it('returns a zero-padded string for single digit numbers', function(){
      assert.equal('00', datetime.padZeros(0));
      assert.equal('09', datetime.padZeros(9));
    });
    it('returns an unpadded string for two-digit numbers', function(){
      assert.equal('10', datetime.padZeros(10));
      assert.equal('99', datetime.padZeros(99));
    });
  });
});
