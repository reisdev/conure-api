const config = require("../config");
const App = require("./app").default;
const Logger = require("./loaders/logger").default;
const gqlSchema = require("./database/graphql").default;
const { ApolloServer, gql } = require("apollo-server-koa");

const app = new App();

app.on("error", err => {
  Logger.error(err);
});

const gqlServer = new ApolloServer({
  schema: gqlSchema,
});

gqlServer.applyMiddleware({ app, path: "/", graphiql: true });

const server = app.listen(config.port, () => {
  Logger.info(`
  
    Koa Server listening on port: ${config.port},
    in ${config.env} mode
  `);
});

server.on("error", err => {
  Logger.error(err);
});
