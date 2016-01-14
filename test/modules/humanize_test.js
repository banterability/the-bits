var assert = require('assertive');
var humanize = require('../../bits').humanize;

describe('humanize', function(){
  describe('#commaize', function(){
    it('returns a comma-delimited number', function(){
      assert.equal('105', humanize.commaize(105));
      assert.equal('1,050', humanize.commaize(1050));
      assert.equal('10,500', humanize.commaize(10500));
      assert.equal('105,000', humanize.commaize(105000));
      assert.equal('1,050,000', humanize.commaize(1050000));
    });

    it('retains decimal values', function(){
      assert.equal('105.99', humanize.commaize(105.99));
      assert.equal('1,050.50', humanize.commaize('1050.50'));
    });
  });

  describe('#isPlural', function(){
    it('returns `true` for 0', function(){
      assert.truthy(humanize.isPlural(0));
    });

    it('returns `false` for 1', function(){
      assert.falsey(humanize.isPlural(1));
    });

    it('returns `true` for 2 or more', function(){
      assert.truthy(humanize.isPlural(2));
      assert.truthy(humanize.isPlural(20));
    });
  });

  describe('#padZeros', function(){
    it('returns a zero-padded string for single digit numbers', function(){
      assert.equal('00', humanize.padZeros(0));
      assert.equal('09', humanize.padZeros(9));
    });
    it('returns an unpadded string for two-digit numbers', function(){
      assert.equal('10', humanize.padZeros(10));
      assert.equal('99', humanize.padZeros(99));
    });
  });
});
