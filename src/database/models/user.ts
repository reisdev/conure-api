import { Sequelize } from "sequelize";

export default (sequelize: Sequelize, types: any) => {
  return sequelize.define("user", {
    id: {
      type: types.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    username: types.STRING,
    name: types.STRING,
    createdAt: {
      type: types.DATE,
      allowNull: false
    },
    password: {
      type: types.STRING,
      allowNull: false
    }
  });
};
