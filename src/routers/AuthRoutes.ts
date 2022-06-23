import BaseRoutes from './BaseRouter';

// CONTROLLERS
import AuthController from '../controllers/AuthController';
// VALIDASI
import validate from "../middleware/AuthValidator"

class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("/register", validate, AuthController.register);
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