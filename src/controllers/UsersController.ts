import { Request, Response } from 'express';
import UsersService from '../services/UsersService.js';
import setResponse from '../utils/setResponse.js';

export default class UsersController {
    private service: UsersService;

    constructor() {
        this.service = new UsersService();
    }

    async index(req: Request, res: Response): Promise<Response> {
        try {
            const clientes = await this.service.findAll();

            if (!clientes.length)
                return setResponse(res, 404, null, 'Nenhum cliente encontrado!');

            return setResponse(res, 201, clientes, 'Requisição feita com sucesso!');
        } catch (err) {
            console.error(`Erro: ${err}`)
            return setResponse(res, 501, null, 'Erro na requisição!');
        }
    }
}
