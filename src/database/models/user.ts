import * as Sequelize from "sequelize";

export default (
  sequelize: Sequelize.Sequelize,
  types: typeof Sequelize.DataTypes
) => {
  return sequelize.define(
    "Users",
    {
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
      updatedAt: {
        type: types.DATE
      },
      password: {
        type: types.STRING,
        allowNull: false
      }
    },
    { tableName: "users" }
  );
};
