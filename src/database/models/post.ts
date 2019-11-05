import * as Sequelize from "sequelize";

interface PostInterface extends Sequelize.Model {
    id: Number,
    title: String,
    description: String,
    authorId: Number,
    createdAt: Date,
    updatedAt: Date
}

type PostStatic = typeof Sequelize.Model & {
    new(values?: object, options?: Sequelize.BuildOptions): PostInterface;
}

export default (sequelize: Sequelize.Sequelize, types: typeof Sequelize.DataTypes) => {
    const model = <PostStatic>sequelize.define("Posts", {
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
    }, {
        tableName: "posts"
    });
};
