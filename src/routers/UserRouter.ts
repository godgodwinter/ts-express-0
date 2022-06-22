import BaseRoutes from './BaseRouter';
import { auth } from '../middleware/AuthMiddleware';

// CONTROLLERS
import UserController from '../controllers/UserController';

class UserRoutes extends BaseRoutes {

    public routes(): void {
        this.router.get("/", auth, UserController.index);
        this.router.post("/", UserController.create);
        this.router.get("/:id", UserController.show);
        this.router.put("/:id", UserController.update);
        this.router.delete("/:id", UserController.delete);


        // this.router.get("/", (req: Request, res: Response) => {
        //     res.send('USERS,,App Menggunakan TS.');
        // });
        // this.router.post("/", (req: Request, res: Response) => {
        //     res.send(req.body);
        // });
    }
}


export default new UserRoutes().router;