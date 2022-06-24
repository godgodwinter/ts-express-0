import { Request, Response } from 'express';
import IController from './ControllerInterface';


class TodoController implements IController {
    index(req: Request, res: Response): Response {
        return res.send("index")
    }
    create(req: Request, res: Response): Response {
        return res.send("Create Success");
    }
    show(req: Request, res: Response): Response {
        return res.send("show");
    }
    update(req: Request, res: Response): Response {
        return res.send("Update Success")


    }
    delete(req: Request, res: Response): Response {
        return res.send("delete");
    }

}

export default new TodoController();