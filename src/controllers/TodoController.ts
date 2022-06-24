import { Request, Response } from 'express';
import IController from './ControllerInterface';
const db = require("../db/models")


class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential;
        const todos = await db.todo.findAll({
            where: { user_id: id },
            attributes: ['id', 'desc']
        });

        return res.send({
            data: todos,
            message: "Success"
        });
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential;
        const { desc } = req.body;
        const todo = await db.todo.create({
            user_id: id,
            desc
        });
        return res.send({
            data: todo,
            message: "Create Success"
        });
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        const { id: user_id } = req.app.locals.credential; //varibale id dari app local(user login ) direname jadi user_id
        const { id } = req.params; // id yang ini dari id params

        const todo = await db.todo.findOne({
            where: { id, user_id }
        })
        return res.send({
            data: todo,
            message: "Get Data Success"
        });
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const { id: user_id } = req.app.locals.credential; //varibale id dari app local(user login ) direname jadi user_id
        const { id } = req.params; // id yang ini dari id params
        const { desc } = req.body; // id yang ini dari id params

        await db.todo.update({
            desc
        }, {
            where: {
                id, user_id
            }
        })

        return res.send({
            data: "",
            message: "Update Success"
        });
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        const { id: user_id } = req.app.locals.credential; //varibale id dari app local(user login ) direname jadi user_id
        const { id } = req.params; // id yang ini dari id params


        return res.send({
            data: "",
            message: "Success"
        });
    }

}

export default new TodoController();