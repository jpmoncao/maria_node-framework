import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { Users } from './Users.js';

class Tuites extends Model {
    id_tuite!: string;
    content!: Buffer;
}

Tuites.init(
    {
        id_tuite: {
            type: DataTypes.CHAR(36),
            primaryKey: true,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        likes_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        retuites_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        comments_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
    },
    {
        sequelize,
        tableName: 'tuites',
        modelName: 'Tuite',
        createdAt: true,
        updatedAt: false,
    }
);

Tuites.belongsTo(Users, { foreignKey: 'id_user' });

export { Tuites };
