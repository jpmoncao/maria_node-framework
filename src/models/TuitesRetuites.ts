import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Users } from './Users.js';
import { Tuites } from './Tuites.js';

class TuitesRetuites extends Model {
    id_retuite!: number;
    id_tuite!: string;
    id_user!: string;
}

TuitesRetuites.init(
    {
        id_retuite: {
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
        tableName: 'tuites_retuites',
        modelName: 'TuitesRetuite',
        createdAt: false,
        updatedAt: false,
    }
);

TuitesRetuites.belongsTo(Users, { foreignKey: 'id_user' });
TuitesRetuites.belongsTo(Tuites, { foreignKey: 'id_tuite' });

export { TuitesRetuites };
