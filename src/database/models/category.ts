import * as Sequelize from "sequelize";

export default (
  sequelize: Sequelize.Sequelize,
  types: typeof Sequelize.DataTypes
) => {
  return sequelize.define("Categories", {
    id: {
      type: types.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: types.STRING(50),
      unique: true
    },
    creatorId: {
      type: types.INTEGER.UNSIGNED,
      references: {
        model: "user",
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
  });
};
