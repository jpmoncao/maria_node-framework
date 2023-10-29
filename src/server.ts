// Express
import express, { Express } from 'express';
//Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json' assert { type: 'json' };
//Dependências
import cors from 'cors';
import dotenv from 'dotenv';

class App {
    private PORT: Number;
    private ADDRESS: String;
    private app: Express;

    constructor() {
        // Variáveis de ambiente
        dotenv.config();
        this.PORT = Number(process.env.API_PORT) || 3000;
        this.ADDRESS = process.env.API_ADDRESS || '0.0.0.0';
        this.app = express();

        // Middlewares
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
        this.app.use(express.json());
        this.app.use(cors());

        // Rotas
        // const ExampleRouter = new ExampleRouter();
        // this.app.use('/examples', ExampleRouter.getRouter());
    }

    init() {
        // Exporta o app na porta selecionada
        this.app.listen(this.PORT, () => console.log(`Running: ${this.ADDRESS}:${this.PORT}`));
    }
}
const Application = new App();

export default Application;