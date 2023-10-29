import { Router } from 'express';

export default class RouterMain {
    protected controller: any;
    public router: Router;

    constructor(controller: any) {
        this.controller = controller;
        this.router = Router();
    }

    protected setupRoutes() {
    }

    public getRouter() {
        this.setupRoutes();
        return this.router;
    }
}
