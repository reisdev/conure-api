import * as Sequelize from "sequelize";
export default (
  sequelize: Sequelize.Sequelize,
  types: typeof Sequelize.DataTypes
) => {
  return sequelize.define(
    "Posts",
    {
      id: {
        type: types.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: types.STRING,
        allowNull: false
      },
      description: {
        type: types.STRING
      },
      authorId: {
        type: types.INTEGER.UNSIGNED,
        references: {
          model: "users",
          key: "id"
        }
      },
      createdAt: {
        type: types.DATE,
        allowNull: false
      },
      updatedAt: {
        type: types.DATE
      }
    },
    {
      tableName: "posts"
    }
  );
};
