import { GraphQLString, GraphQLNonNull } from "graphql";

import types from "../typeDef";
import models from "../..";

export default {
  createPost: {
    args: {
      title: {
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    type: types.Post,
    resolve: (
      root: any,
      { title, description }: { title: String; description: String }
    ) => {
      return models.Posts.create({
        title,
        description,
        createdAt: new Date(),
        updatedAt: new Date()
      })
        .then((model: any) => {
          return model.dataValues;
        })
        .catch((err: Error) => Promise.reject(err));
    }
  }
};
