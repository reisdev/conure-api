import { GraphQLString, GraphQLNonNull } from "graphql";

import types from "../typeDef";
import models from "../..";

export default {
  createUser: {
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      username: {
        type: new GraphQLNonNull(GraphQLString)
      },
      password: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    type: types.User,
    resolve: async (
      root: any,
      {
        username,
        name,
        password
      }: { username: String; name: String; password: String }
    ) => {
      return await models.Users.create({
        name,
        username,
        password
      })
        .then((model: any) => {
          return models.dataValues;
        })
        .catch((err: Error) => {
          return Promise.reject(err);
        });
    }
  }
};
