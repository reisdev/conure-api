import models from "../../";
import { attributeFields } from "graphql-sequelize";
import { GraphQLObjectType } from "graphql";

console.log(models)

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Posts Model",
  fields: Object.assign(attributeFields(models.Posts), {})
});

export default PostType;
