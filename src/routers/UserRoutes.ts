import { Router, Request, Response } from 'express';
import IRouter from './RouteInterface';

class UserRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get("/", (req: Request, res: Response) => {
            res.send('USERS,,App Menggunakan TS.');
        });
        this.router.post("/", (req: Request, res: Response) => {
            res.send(req.body);
        });
    }
}


export default new UserRoutes().router;