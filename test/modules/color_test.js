var assert = require('assertive');
var color = require('../../bits').color;

describe('color', function(){
  describe('#contrastingColor', function(){
    var lightOption, darkOption;

    before(function(){
      lightOption = 'white';
      darkOption = 'black';
    });

    it('returns a dark option when passed a light color', function(){
      var actual = color.contrastingColor([249, 227, 0], darkOption, lightOption);
      assert.equal('black', actual);
    });

    it('returns a light option when passed a dark color', function(){
      var actual = color.contrastingColor([0, 161, 222], darkOption, lightOption);
      assert.equal('white', actual);
    });
  });
});
