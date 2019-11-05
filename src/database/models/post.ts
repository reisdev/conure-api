import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize, types: any) => {
  return sequelize.define("post", {
    id: {
      type: types.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    createdAt: {
      type: types.DATE,
      allowNull: false
    },
    title: {
      type: types.STRING,
      allowNull: false
    }
  });
};
