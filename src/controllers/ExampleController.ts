import { Request, Response } from 'express';
import { User } from '../models/User.js';

export default class ExampleController {
    async index(req: Request, res: Response): Promise<void> {
        try {
            const examples = await User.findAll();
            res.json(examples);
        } catch (error) {
            console.error('Erro ao buscar examples:', error);
        }
    }
}
