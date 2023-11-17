import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Users } from './Users.js';
import { Tuites } from './Tuites.js';

class TuitesLikes extends Model {
    id_like!: number;
    id_tuite!: string;
    id_user!: string;
}

TuitesLikes.init(
    {
        id_like: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_tuite: {
            type: DataTypes.CHAR(36),
            allowNull: false,
            references: {
                model: 'Tuites',
                key: 'id_tuite',
            },
        },
        id_user: {
            type: DataTypes.CHAR(36),
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id_user',
            },
        },
    },
    {
        sequelize,
        tableName: 'tuites_likes',
        modelName: 'TuitesLike',
        createdAt: false,
        updatedAt: false,
    }
);

TuitesLikes.belongsTo(Users, { foreignKey: 'id_user' });
TuitesLikes.belongsTo(Tuites, { foreignKey: 'id_tuite' });

export { TuitesLikes };
