import { GraphQLSchema, GraphQLObjectType, GraphQLList } from "graphql";
import { resolver } from "graphql-sequelize";
import types from "./typeDef";
import models from "../";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "query",
    fields: {
      posts: {
        type: new GraphQLList(types.Post),
        resolve: resolver(models.PostModel)
      },
      users: {
        type: new GraphQLList(types.User),
        resolve: resolver(models.UserModel)
      }
    }
  })
});

export default schema;
