import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class User extends Model {
    id_user!: string;
    nome!: string;
    data_nasc!: string;
    cpf!: string;
    email!: string;
    password!: string;
}

User.init(
    {
        id_user: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_nasc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'users',
        modelName: 'User',
        createdAt: true,
        updatedAt: true,
    }
);

export { User };
