var assert = require('assertive');
var bond = require('bondjs');
var dom = require('../../modules/dom');

describe('dom', function(){
  beforeEach(function(){
    global.document = bond();
    document.querySelector = bond().return(null);
    document.querySelectorAll = bond().return([]);
  });

  afterEach(function(){
    delete global.document;
  });

  describe('#find', function(){
    it('does querySelector lookup on element', function(){
      var el = bond();
      el.querySelector = bond().return(null);
      var results = dom.find('.foo', el);
      assert.equal(1, el.querySelector.called);
    });

    it('calls through to querySelector on `document` if no element specified', function(){
      var results = dom.find('.foo');
      assert.equal(1, document.querySelector.called);
    });
  });

  describe('#findAll', function(){
    it('does querySelectorAll lookup on element', function(){
      var el = bond();
      el.querySelectorAll = bond().return([]);
      var results = dom.findAll('.foo', el);
      assert.equal(1, el.querySelectorAll.called);
    });

    it('calls through to querySelectorAll on `document` if no element specified', function(){
      var results = dom.findAll('.foo');
      assert.equal(1, document.querySelectorAll.called);
    });

    it('returns array', function(){
      var results = dom.findAll('.foo');
      assert.hasType(Array, results);
    });
  });
});
