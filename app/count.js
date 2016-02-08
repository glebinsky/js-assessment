exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var currentCount = start,
      intervalId = setInterval(function() {
      if(currentCount > end) {
        clearInterval(intervalId);
        return;
      }

      console.log(currentCount++);
    }, 100);

    return intervalId;
  }
};
