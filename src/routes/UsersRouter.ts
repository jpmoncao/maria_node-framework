import RouterMain from "./Router.js";

export default class UsersRouter extends RouterMain {
    constructor(controller: any) {
        super(controller);
    }
    protected setupRoutes(): void {
        this.router.get('/', (req, res) => this.controller.index(req, res));
        this.router.get('/:id', (req, res) => this.controller.show(req, res));
        this.router.post('/', (req, res) => this.controller.store(req, res));
    }
}
