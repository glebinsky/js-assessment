exports = (typeof window === 'undefined') ? global : window;

(function() {

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(undefined, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(i) {
      return fn.bind(undefined, i);
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    var sum = 0;

    if(arguments.length === 0) {
      return;
    }

    for(var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = argumentsToArray(arguments);
    args.shift();
    return fn.apply(undefined, args);
  },

  partialUsingArguments : function(fn) {
    var args1 = argumentsToArray(arguments);
    args1.shift();
    return function() {
      var args2 = argumentsToArray(arguments);
      return fn.apply(undefined, args1.concat(args2));
    }
  },

  curryIt : function(fn) {
    return function(x) {
      return function(y) {
        return function(z) {
          return fn(x, y, z);
        };
      };
    };
  }
};

function argumentsToArray(args) {
  return (args.length === 1 ? [args[0]] : Array.apply(null, args));
}

})();
