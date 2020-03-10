import { Sequelize, DataTypes } from "sequelize";
import { Post, User, Category } from "./models";
import config from "../../config";

const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect
  }
);

const forceSync: boolean = false;

const UserModel = User(sequelize, DataTypes);
const PostModel = Post(sequelize, DataTypes);
const CategoryModel = Category(sequelize, DataTypes);

if (forceSync) {
  sequelize.sync({ force: true })
}

export default sequelize.models;
