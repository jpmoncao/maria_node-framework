import { Request, Response } from 'express';
import { Example } from '../models/Examples.js';

export default class ExampleController {
    async index(req: Request, res: Response): Promise<void> {
        try {
            const examples = await Example.findAll();
            res.json(examples);
        } catch (error) {
            console.error('Erro ao buscar examples:', error);
        }
    }
}
