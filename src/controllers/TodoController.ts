import { Request, Response } from 'express';
import IController from './ControllerInterface';
import TodoService from '../services/TodoService';

class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todos = await service.getAll();

        return res.send({
            data: todos,
            message: "Success"
        });
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.store();
        return res.send({
            data: todo,
            message: "Create Success"
        });
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.getOne();
        return res.send({
            data: todo,
            message: "Get Data Success"
        });
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.update();

        return res.send({
            data: todo,
            message: "Update Success"
        });
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.delete();

        return res.send({
            data: todo,
            message: "Delete Success"
        });
    }

}

export default new TodoController();