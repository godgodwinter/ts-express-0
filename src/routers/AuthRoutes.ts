import BaseRoutes from './BaseRouter';

// CONTROLLERS
import AuthController from '../controllers/AuthController';

class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("/register", AuthController.register);
        this.router.post("/login", AuthController.login);


        // this.router.get("/", (req: Request, res: Response) => {
        //     res.send('USERS,,App Menggunakan TS.');
        // });
        // this.router.post("/", (req: Request, res: Response) => {
        //     res.send(req.body);
        // });
    }
}


export default new AuthRoutes().router;