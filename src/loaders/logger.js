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

Logger.stream = {
  write: function (message) {
    Logger.info(message.substring(0, message.lastIndexOf('\n')));
  }
};

export default Logger;