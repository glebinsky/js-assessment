exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, cur) {
      return prev + cur;
    }, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function(val) {
      return val !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
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
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(val) {
      return val === item;
    }).length;

  },

  duplicates : function(arr) {
    var dups = [];
    arr.forEach(function(i) {
      if(!dups.includes(i) && arr.filter(function(val) { return i === val; }).length > 1) {
        dups.push(i);
      }
    });
    return dups;
  },

  square : function(arr) {
    return arr.map(function(val) {
      return val * val;
    });
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [];
    arr.forEach(function(val, i) {
      if(val === target) {
        indexes.push(i);
      }
    });
    return indexes;
  }
};
