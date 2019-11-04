'use strict';

import winston from 'winston';

var Logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ],
  exitOnError: false,
});

const stream = {
  write: function (message: String) {
    Logger.info(message.substring(0, message.lastIndexOf('\n')));
  }
};

export default Logger;
export { stream }