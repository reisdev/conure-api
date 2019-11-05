import { Sequelize, DataTypes } from "sequelize";
import { Post, User } from "./models";
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

const PostModel = Post(sequelize, DataTypes);
const UserModel = User(sequelize, DataTypes);

sequelize.sync({ force: true });

export default { PostModel, UserModel };
