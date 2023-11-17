import { Request, Response } from 'express';

import { Users } from '../models/Users.js';
import { Op } from 'sequelize';

import dotenv from 'dotenv';
import { randomUUID } from 'crypto';
import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class UsersController {
    async index(req: Request, res: Response): Promise<void> {
        try {
            const users = await Users.findAll();
            res.json(users);
        } catch (error) {
            console.error('Erro ao buscar users:', error);
        }
    }

    async store(req: Request, res: Response): Promise<void> {
        try {
            let { password, firstname, lastname, username, birthDate, email, cellnumber, bannerimg, profileimg } = req.body;

            const id_user = randomUUID();
            password = await hash(password, 8);

            const newUser = await Users.create({
                id_user,
                password,
                firstname,
                lastname,
                username,
                birthDate,
                email,
                cellnumber,
                bannerimg,
                profileimg,
            });

            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error: Unable to create a new user' });
        }
    }

    async login(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
        try {
            const { login, password: pwd } = req.body;

            const user = await Users.findOne({
                attributes: ['id_user', 'password'],
                where: {
                    [Op.or]: [
                        { email: login },
                        { cellnumber: login },
                        { username: login },
                    ],
                },
            });

            if (!user)
                return res.status(404).json({ message: 'User not found!' });

            const { id_user, password } = user.get({ plain: true });

            const passwordIsEqual = await compare(pwd, password);
            if (!passwordIsEqual)
                return res.status(400).json({ message: 'Password is not valid!' });

            dotenv.config();
            const tokenHash = process.env.TOKEN_HASH || '';
            const expiresIn = process.env.TOKEN_EXPIRES_TIME || '1h'

            const token = jwt.sign({ id_user }, tokenHash, { expiresIn });

            res.status(201).json({ message: 'Welcome, login was done...', token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error: Unable do login' })
        }
    }
}
