var assert = require('assertive');
var humanize = require('../../modules/humanize');

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

  describe('#pluralize', function(){
    it('returns `true` for 0', function(){
      assert.truthy(humanize.pluralize(0));
    });

    it('returns `false` for 1', function(){
      assert.falsey(humanize.pluralize(1));
    });

    it('returns `true` for 2 or more', function(){
      assert.truthy(humanize.pluralize(2));
      assert.truthy(humanize.pluralize(20));
    });
  });
});
