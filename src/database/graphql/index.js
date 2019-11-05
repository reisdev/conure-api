import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from "graphql";
import { resolver } from "graphql-sequelize";
import types from "./typeDef";
import models from "../";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "query",
    fields: {
      posts: {
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        type: types.Post,
        resolve: resolver(models.PostModel)
      },
      users: {
        args: {
          id: {
            type: GraphQLInt
          },
          name: {
            type: GraphQLString
          }
        },
        type: types.User,
        resolve: resolver(models.UserModel)
      }
    }
  })
});

export default schema;
