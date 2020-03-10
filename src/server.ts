import config from "../config"
import App from "./app"
import Logger from "./loaders/logger";
import gqlSchema from "./database/graphql"
import { ApolloServer, gql } from "apollo-server-koa";

const app = new App();

app.on("error", err => {
  Logger.error(err);
});

const gqlServer = new ApolloServer({
  schema: gqlSchema
});

gqlServer.applyMiddleware({ app, path: "/"});

const server = app.listen(config.port, () => {
  Logger.info(`
    Koa Server listening on port: ${config.port},
    in ${config.env} mode
   `);
},);

server.on("error", err => {
  Logger.error(err);
});
