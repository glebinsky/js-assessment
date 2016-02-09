exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var arr = [];
    (data.files || []).forEach(function(i) {
      if(typeof i === 'string') {
        if(!dirName || dirName === data.dir) {
          arr.push(i);
        }
      } else {
        arr = arr.concat(this.listFiles(i, dirName === data.dir ? i.dir : dirName));
      }
    }, this);
    return arr;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    var x;

    for(var i = 0, j = 1, k = 1; k < n; i = j, j = x, k++) {
      x = i + j;
      console.log(x);
    }
    return x;
  },

  validParentheses: function(n) {

  }
};
