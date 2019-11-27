import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from "graphql";
import { resolver } from "graphql-sequelize";
import mutations from "./mutations";
import types from "./typeDef";
import models from "../";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "query",
    fields: {
      posts: {
        args: {
          id: {
            type: GraphQLInt
          }
        },
        type: types.Post,
        resolve: resolver(models.Posts)
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
        resolve: resolver(models.Users)
      },
      categories: {
        args: {
          id: {
            type: GraphQLInt
          }
        },
        type: types.Category,
        resolve: resolver(models.Categories)
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      ...mutations
    }
  })
});

export default schema;
