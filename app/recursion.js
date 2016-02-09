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
    if(n < 3) {
      return 1;
    }

    return this.fibonacci(n - 2) + this.fibonacci(n - 1);
  },

  validParentheses: function(n) {

  }
};
