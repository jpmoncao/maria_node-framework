import { authenticate } from "../middlewares/authenticate.js";
import RouterMain from "./Router.js";

export default class TuitesRouter extends RouterMain {
    constructor(controller: any) {
        super(controller);
    }

    protected setupRoutes(): void {
        this.router.use(authenticate);
        this.router.get('/', async (req, res) => await this.controller.index(req, res));
        this.router.post('/', async (req, res) => await this.controller.store(req, res));
        this.router.get('/:id', async (req, res) => await this.controller.show(req, res));
        this.router.delete('/:id', async (req, res) => await this.controller.destroy(req, res));
        this.router.post('/like/:id', async (req, res) => await this.controller.like(req, res));
        this.router.post('/comment/:id', async (req, res) => await this.controller.comment(req, res));
        this.router.post('/retuite/:id', async (req, res) => await this.controller.retuite(req, res));
    }
}
