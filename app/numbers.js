exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return parseInt(this.convertToBinary(num).charAt(8 - bit));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var val = parseInt(num, 10).toString(2);
    return '0'.repeat(8 - val.length) + val;
  },

  multiply: function(a, b) {
    var aP = getPrecision(a),
      bP = getPrecision(b),
      p = aP > bP ? aP : bP;

    return parseFloat((a * b).toFixed(p));

    ///////////

    function getPrecision(x) {
      var s = '' + x,
        a = s.split('.');

      return a.length === 1 ? 0 : a[1].length;
    }
  }
};
