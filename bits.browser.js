(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.Bits = {
  dom: require('./modules/dom'),
  humanize: require('./modules/humanize'),
  range: require('./modules/range')
}

},{"./modules/dom":2,"./modules/humanize":3,"./modules/range":4}],2:[function(require,module,exports){
module.exports = {
  find: function(selector, root){
    root = root || document;
    return root.querySelector(selector);
  },
  findAll: function(selector, root){
    root = root || document;
    var nodeList = root.querySelectorAll(selector);
    return Array.prototype.slice.call(nodeList);
  }
}

},{}],3:[function(require,module,exports){
module.exports = {
  humanizeNumber: function(num, options){
    // https://github.com/component/humanize-number
    options = options || {};
    var delimiter = options.delimiter || ',';
    var separator = options.separator || '.';
    num = num.toString().split('.');
    num[0] = num[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + delimiter);
    return num.join(separator);
  },
  pluralize: function(count){
    return count === 1 ? false : true;
  }
}

},{}],4:[function(require,module,exports){
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

},{}]},{},[1]);
