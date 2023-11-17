import { authenticate } from "../middlewares/authenticate.js";
import RouterMain from "./Router.js";

export default class UsersRouter extends RouterMain {
    constructor(controller: any) {
        super(controller);
    }

    protected setupRoutes(): void {
        this.router.post('/', async (req, res) => await this.controller.store(req, res));
        this.router.post('/login', async (req, res) => await this.controller.login(req, res));
        this.router.use(authenticate);
        this.router.get('/', async (req, res) => await this.controller.index(req, res));
    }
}
