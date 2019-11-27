import models from "../../";
import { attributeFields } from "graphql-sequelize";
import { GraphQLObjectType } from "graphql";

const CategoryType = new GraphQLObjectType({
  name: "Category",
  description: "Categories Model",
  fields: Object.assign(attributeFields(models.Categories))
});

export default CategoryType;
