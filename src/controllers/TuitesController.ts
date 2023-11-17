import { Request, Response } from 'express';

import { sequelize } from '../config/database.js';
import { Tuites } from '../models/Tuites.js';
import { TuitesLikes } from '../models/TuitesLikes.js';
import { TuitesRetuites } from '../models/TuitesRetuites.js';
import { TuitesComments } from '../models/TuitesComments.js';

import { randomUUID } from 'crypto';

export default class TuitesController {
    async index(req: Request, res: Response): Promise<void> {
        try {
            const tuites = await Tuites.findAll();
            res.json(tuites);
        } catch (error) {
            console.error('Erro ao buscar tuites:', error);
        }
    }

    async store(req: Request, res: Response): Promise<void> {
        try {
            const id_tuite = randomUUID();
            const { id_user } = req;
            const { content } = req.body;

            const newTuite = await Tuites.create({ id_tuite, content, id_user });

            res.status(201).json(newTuite);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error: Unable to create a new user' });
        }
    }

    async show(req: Request, res: Response): Promise<void> {
        try {
            const id_tuite = req.params.id;
            const tuite = await Tuites.findByPk(id_tuite);

            res.status(201).json(tuite);
        } catch (error) {
            console.error(error);
            res.status(501).json({ message: 'Unable open this tuite' });
        }
    };

    async destroy(req: Request, res: Response): Promise<void> {
        const id_tuite = req.params.id;

        try {
            await sequelize.transaction(async (t) => {
                await TuitesLikes.destroy({ where: { id_tuite }, transaction: t });
                await TuitesComments.destroy({ where: { id_tuite }, transaction: t });
                await TuitesRetuites.destroy({ where: { id_tuite }, transaction: t });

                const deletedRows = await Tuites.destroy({ where: { id_tuite }, transaction: t });

                if (deletedRows > 0) {
                    res.status(201).json({ message: 'Tuite and related records deleted successfully.' });
                } else {
                    res.status(404).json({ message: 'Tuite not found.' });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Unable to delete tuite and related records.' });
        }
    }

    async like(req: Request, res: Response): Promise<void> {
        try {
            const id_tuite = req.params.id;
            const id_user = req.body.id_user;

            sequelize
                .query('CALL like_tuite (:id_user, :id_tuite)',
                    { replacements: { id_user, id_tuite } })
                .then(v => console.log(v));

            res.status(201).json({ id_tuite, id_user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error: Unabled like this tuite' });
        }

    };

    async comment(req: Request, res: Response): Promise<void> {
        //
    };

    async retuite(req: Request, res: Response): Promise<void> {
        //
    };
}
