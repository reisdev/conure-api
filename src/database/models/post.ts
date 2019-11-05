import { Sequelize } from "sequelize";

export default (sequelize: Sequelize, types: any) => {
  return sequelize.define("post", {
    id: {
      type: types.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: types.STRING,
      allowNull: false
    }
  });
};
