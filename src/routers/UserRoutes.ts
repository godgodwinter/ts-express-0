import { Router, Request, Response } from 'express';
import IRouter from './RouteInterface';

// CONTROLLERS
import UserController from '../controllers/UserController';

class UserRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get("/", UserController.index);
        this.router.post("/", UserController.create);
        // this.router.get("/", (req: Request, res: Response) => {
        //     res.send('USERS,,App Menggunakan TS.');
        // });
        // this.router.post("/", (req: Request, res: Response) => {
        //     res.send(req.body);
        // });
    }
}


export default new UserRoutes().router;