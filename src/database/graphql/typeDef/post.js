import models from "../../";
import { attributeFields } from "graphql-sequelize";
import { GraphQLObjectType } from "graphql";

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Posts Model",
  fields: Object.assign(attributeFields(models.PostModel), {})
});

export default PostType;
