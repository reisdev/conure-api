const config = require('../config');
const App = require('./app').default;
const Logger = require('./loaders/logger').default;

const app = new App();

app.on('error', (err: Error) => {
  Logger.error(err);
});

const server = app.listen(config.port, () => {
  Logger.info(`
    Koa Server listening on port: ${config.port},
    in ${config.env} mode
   `);
});

server.on('error', (err: Error) => {
  Logger.error(err);
});

module.exports = server;