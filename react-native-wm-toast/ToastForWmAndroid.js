'use strict';

var RCTToastAndroid = require('NativeModules').ToastForAndroid;


var ToastForAndroid = {

  SHORT: RCTToastAndroid.SHORT,
  LONG: RCTToastAndroid.LONG,

  show: function (
    message: string,
    duration: number
  ): void {
    RCTToastAndroid.show(message, duration);
  },

};

module.exports = ToastForAndroid;
