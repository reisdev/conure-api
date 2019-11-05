import { Sequelize } from "sequelize";

export default (sequelize: Sequelize, types: any) => {
    return sequelize.define("Posts", {
        id: {
            type: types.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        createdAt: {
            type: types.DATE,
            allowNull: false
        },
        updatedAt: {
            type: types.DATE
        },
        title: {
            type: types.STRING,
            allowNull: false
        },
        description: {
            type: types.STRING
        }
    }, {
        tableName: "posts"
    });
};
