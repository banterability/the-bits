module.exports = {
  contrastingColor: function(comparisonColor, darkContrastingOption, lightContrastingOption){
    var r = comparisonColor[0],
        g = comparisonColor[1],
        b = comparisonColor[2];

    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return (yiq >= 128) ? darkContrastingOption : lightContrastingOption;
  }
}
