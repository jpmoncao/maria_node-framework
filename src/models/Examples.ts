import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class Examples extends Model {
    public id_example!: number;
    public descricao!: string;
}

Examples.init(
    {
        id_example: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        descricao: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: 'examples',
        modelName: 'Example',
        createdAt: true,
        updatedAt: true
    }
);

export { Examples };
