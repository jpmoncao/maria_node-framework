import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

class Users extends Model {
    id_user!: string;
    username!: string;
    firstname!: string;
    lastname!: string;
    birthDate!: Date;
    email!: string | null;
    cellnumber!: string | null;
    password!: string;
    bannerimg!: Buffer | null;
    profileimg!: Buffer | null;
}

Users.init(
    {
        id_user: {
            type: DataTypes.CHAR(36),
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(36),
            allowNull: false,
            unique: true,
        },
        firstname: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
        },
        cellnumber: {
            type: DataTypes.STRING(20),
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        bannerimg: {
            type: DataTypes.BLOB,
        },
        profileimg: {
            type: DataTypes.BLOB,
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

export { Users };
