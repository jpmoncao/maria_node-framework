import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Users } from './Users.js';
import { Tuites } from './Tuites.js';

class TuitesComments extends Model {
    id_comment!: number;
    id_tuite!: string;
    id_user!: string;
    content!: string;
}

TuitesComments.init(
    {
        id_comment: {
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
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'tuites_comments',
        modelName: 'TuitesComment',
        createdAt: false,
        updatedAt: false,
    }
);

TuitesComments.belongsTo(Users, { foreignKey: 'id_user' });
TuitesComments.belongsTo(Tuites, { foreignKey: 'id_tuite' });

export { TuitesComments };
