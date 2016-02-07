exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return safeFnCall(arr, function() {
      return arr.indexOf(item);
    });
  },

  sum : function(arr) {
    return safeFnCall(arr, function() {
      return arr.reduce(function(prev, cur) {
        return prev + cur;
      }, 0);
    });
  },

  remove : function(arr, item) {
    return safeFnCall(arr, function() {
      return arr.filter(function(val) {
        return val !== item;
      });
    });
  },

  removeWithoutCopy : function(arr, item) {
    return safeFnCall(arr, function() {
      var index;

      while((index = findIndex()) > -1) {
        arr.splice(index, 1);
      }

      return arr;

      //////////////////

      function findIndex() {
        return arr.findIndex(function(element) {
          return element === item
        });
      }
    });
  },

  append : function(arr, item) {
    return safeFnCall(arr, function() {
      arr.push(item);
      return arr;
    });
  },

  truncate : function(arr) {
    return safeFnCall(arr, function() {
      arr.pop();
      return arr;
    });
  },

  prepend : function(arr, item) {
    return safeFnCall(arr, function() {
      arr.unshift(item);
      return arr;
    });
  },

  curtail : function(arr) {
    return safeFnCall(arr, function() {
      arr.shift();
      return arr;
    });
  },

  concat : function(arr1, arr2) {
    return safeFnCall(arr1, function() {
      return arr1.concat(arr2);
    });
  },

  insert : function(arr, item, index) {
    return safeFnCall(arr, function() {
      arr.splice(index, 0, item);
      return arr;
    });
  },

  count : function(arr, item) {
    return safeFnCall(arr, function() {
      return arr.filter(function(val) {
        return val === item;
      });
    }).length;

  },

  duplicates : function(arr) {
    return safeFnCall(arr, function() {
      var dups = [];
      arr.forEach(function(i) {
        if(!dups.includes(i) && arr.filter(function(val) { return i === val; }).length > 1) {
          dups.push(i);
        }
      });
      return dups;
    });
  },

  square : function(arr) {
    return safeFnCall(arr, function() {
      return arr.map(function(val) {
        return val * val;
      });
    });
  },

  findAllOccurrences : function(arr, target) {
    return safeFnCall(arr, function() {
      var indexes = [];
      arr.forEach(function(val, i) {
        if(val === target) {
          indexes.push(i);
        }
      });
      return indexes;
    });
  }
};

function safeFnCall(arr, fn) {
  return !Array.isArray(arr) || typeof fn !== 'function' ? null : fn();
}
