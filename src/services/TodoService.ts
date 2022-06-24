import { Request } from 'express';
const db = require("../db/models")

class TodoService {
    credential: {
        id: number,
    };

    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const todos = await db.todo.findAll({
            where: { user_id: this.credential.id },
            attributes: ["id", "desc"]
        });

        return todos;
    }

    store = async () => {
        const { desc } = this.body;
        const todo = await db.todo.create({
            user_id: this.credential.id,
            desc
        });
    }

    getOne = async () => {
        const { id } = this.params;

        const todo = await db.todo.findOne({
            where: { id, user_id: this.credential.id }
        });
        return todo
    }


    update = async () => {
        const { id } = this.params;
        const { desc } = this.body;

        const todo = await db.todo.update({
            desc
        }, {
            where: {
                id, user_id: this.credential.id
            }
        });
        return todo
    }


    delete = async () => {
        const { id } = this.params;

        const todo = await db.todo.destroy({
            where: { id, user_id: this.credential.id }
        });
        return todo
    }
}

export default TodoService;