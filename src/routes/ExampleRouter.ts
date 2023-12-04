import RouterMain from "./Router.js";

export default class ExampleRouter extends RouterMain {
    constructor(controller: any) {
        super(controller);
    }
    protected setupRoutes(): void {
        this.router.get('/', this.controller.index);
    }
}
