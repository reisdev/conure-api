import { Sequelize } from "sequelize"

export default (sequelize: Sequelize, types: SequelizeStatic) => {
    return sequelize.define("user", {
        id: {
            type: types.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: types.STRING,
            allowNull: false
        }
    })
}