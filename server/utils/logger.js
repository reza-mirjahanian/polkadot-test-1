'use strict';
//@todo use better Logger
module.exports = {
  /**
   * Info message
   * @param  {string} message Printed message
   * @param  {Object} extra - Additional params
   */
  log: (message = '', extra) => {
    console.log("#Log: " + message);
    if (extra) {
      console.log(extra)
    }
  },
  /**
   * Error message
   * @param  {string} message - Printed message
   * @param  {Object} extra - Additional params
   */
  error: (message = "Error!", extra) => {
    console.error("#Error: " + message);
    if (extra) {
      console.error(extra)
    }
  }
}
