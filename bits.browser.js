(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Bits = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  color: require('./modules/color'),
  dom: require('./modules/dom'),
  extend: require('./modules/extend'),
  humanize: require('./modules/humanize'),
  range: require('./modules/range')
};

},{"./modules/color":2,"./modules/dom":3,"./modules/extend":4,"./modules/humanize":5,"./modules/range":6}],2:[function(require,module,exports){
module.exports = {
  contrastingColor: function(comparisonColor, darkContrastingOption, lightContrastingOption){
    var r = comparisonColor[0],
        g = comparisonColor[1],
        b = comparisonColor[2];

    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return (yiq >= 128) ? darkContrastingOption : lightContrastingOption;
  }
}

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
module.exports = function(destination, source){
  for(var property in source){
    destination[property] = source[property];
  }
  return destination;
}

},{}],5:[function(require,module,exports){
module.exports = {
  commaize: function(num, options){
    // https://github.com/component/humanize-number
    options = options || {};
    var delimiter = options.delimiter || ',';
    var separator = options.separator || '.';
    num = num.toString().split('.');
    num[0] = num[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + delimiter);
    return num.join(separator);
  },

  isPlural: function(count){
    return count === 1 ? false : true;
  },

  padZeros: function(number){
    if (number < 10){
      return "0" + number;
    } else {
      return number.toString();
    }
  }
}

},{}],6:[function(require,module,exports){
module.exports = function(from, to){
  var range = [];

  if (from < to){
    for (var current = from; current <= to; current++) {
      range.push(current);
    }
  } else {
    for (var current = from; current >= to; current--) {
      range.push(current);
    }
  }

  return range;
}

},{}]},{},[1])(1)
});