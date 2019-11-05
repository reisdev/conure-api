import models from "../../";
import { attributeFields } from "graphql-sequelize";
import { GraphQLObjectType } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  description: "Users Model",
  fields: Object.assign(attributeFields(models.UserModel), {})
});

export default UserType;
