exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', onLoad);
      xhr.addEventListener('error', function(ev) { reject(); });
      xhr.open('GET', url);
      xhr.send();

      /////////////

      function onLoad(ev) {
        var responseObj = JSON.parse(this.responseText);
        resolve(_.pluck(responseObj.people, 'name').sort());
      }
    });
  }
};
