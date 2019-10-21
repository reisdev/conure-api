import config from '../config';
import App from './app';
import Logger from './loaders/logger';

const app = new App();

app.on('error', err => {
  Logger.error(err);
});

const server = app.listen(config.port, () => {
  Logger.info(`
    Koa Server listening on port: ${config.port},
    in ${config.env} mode
   `);
});

server.on('error', err => {
  Logger.error(err);
});

module.exports = server;