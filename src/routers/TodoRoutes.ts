import BaseRoutes from './BaseRouter';
import { auth } from '../middleware/AuthMiddleware';
import validate from '../middleware/TodoValidator';

// CONTROLLERS
import TodoController from '../controllers/TodoController';

class TodoRoutes extends BaseRoutes {

    public routes(): void {
        this.router.get("/", auth, TodoController.index);
        this.router.post("/", auth, validate, TodoController.create);
        this.router.get("/:id", auth, TodoController.show);
        this.router.put("/:id", auth, validate, TodoController.update);
        this.router.delete("/:id", auth, TodoController.delete);


        // this.router.get("/", (req: Request, res: Response) => {
        //     res.send('USERS,,App Menggunakan TS.');
        // });
        // this.router.post("/", (req: Request, res: Response) => {
        //     res.send(req.body);
        // });
    }
}


export default new TodoRoutes().router;